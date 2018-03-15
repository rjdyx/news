<?php
namespace App\Facades;

class IUtils
{
    /**
     * 将request中传递的值赋予model
     * @param  [Object] $request
     * @param  [Object] $model
     * @param  [Array] $attributes
     * @return [Object]
     */
    public function valueFn($request, $model, $attributes)
    {
        foreach ($attributes as $key => $attribute) {
            $model[$attribute] = $request->input($attribute);
        }
        return $model;
    }

    /**
     * 文件上传
     * @param  [Object] $request
     * @return [Object]
     */
    public function upload($request, $name, $defaultPath = null)
    {
        $file = null;
        $result = [
            'OriginalName' => '',
            'name' => '',
            'filePath' => '/'
        ];
        if ($request->hasFile($name)) {
            $file = $request->file($name);   
        } else {
            return $result;
        }
        if ($file->isValid()) {
            if (!$defaultPath) {
                $path = config('app.file_path').'/';
            } else {
                $path = $defaultPath;
            }
            $Extension = $file->getClientOriginalExtension();
            $result['OriginalName'] = $file->getClientOriginalName();
            $result['name'] = $filename = 'file_'.md5(time().rand(0,10000)).'.'. $Extension;
            $file->move($path, $filename);
            $result['filePath'] = $path.$filename; //文件路径加名称
        }
        return $result;
    }

    public function deleteFile($fileName)
    {
        if (!empty($fileName)) {
            $file = str_replace("\\","/",public_path().'/'.($fileName));
            if (is_file($file)) unlink($file);
            return true;
        }
        return false;
    }
}
