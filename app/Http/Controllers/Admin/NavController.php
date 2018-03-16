<?php

namespace App\Http\Controllers\Admin;

use App\LabNav;
use Illuminate\Http\Request;
use Facades\App\Facades\IUtils;
use App\Http\Controllers\Controller;

class NavController extends Controller
{
    /**
     * 后台获取主导航栏和子导航栏
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $navs = LabNav::where('pid', 0)
                    ->where('name', '<>', '主页')
                    ->where('name', '<>', '下载中心')
                    ->orderBy('sequence')
                    ->get();
        $navsList = array();
        foreach ($navs as $nav) {
            $item = array();
            array_push($item, $nav);
            $subNavs = LabNav::where('pid', $nav->id)
                            ->orderBy('created_at')
                            ->get();
            array_push($item, $subNavs);
            array_push($navsList, $item);
        }

        return response()->json($navsList);
    }

    /**
     * 后台获取主导航栏
     *
     * @return \Illuminate\Http\Response
     */
    public function indexNav()
    {
        $navs = LabNav::where('pid', 0)
                    ->where('name', '<>', '主页')
                    ->where('name', '<>', '下载中心')
                    ->orderBy('sequence')
                    ->get();

        return response()->json($navs);
    }

    /**
     * 后台根据父id获取子导航栏
     *
     * @return \Illuminate\Http\Response
     */
    public function indexSubNav($id)
    {
        $subNavs = LabNav::where('pid', $id)
                    ->orderBy('created_at')
                    ->get();

        return response()->json($subNavs);
    }


    /**
     * 新增主栏目+子栏目
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:20',
            'model' => 'required|digits_between:0,1'
        ]);

        $name = $request->input('name');
        $model = $request->input('model');
        $subNavs = $request->input('subNavs');

        $maxSequence = LabNav::orderBy('sequence', 'desc')->first();

        $nav = new LabNav();
        $nav->name = $name;
        $nav->pid = 0;
        $nav->model = $model;
        $nav->sequence = $maxSequence->sequence + 1;
        $nav->save();

        foreach ($subNavs as $subNavItem) {
            $subNav = new LabNav();
            $subNav->name = $subNavItem['name'];
            $subNav->pid = $nav->id;
            if ($subNavItem['model'] == 0 || $subNavItem['model'] == 1) {
                $subNav->model = $subNavItem['model'];
            } else {
                $subNav->model = 0;
            }
            $subNav->sequence = 0;
            $subNav->save();
        }

        return response()->json($nav->id);
    }

    /**
     * 新增子栏目
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeSubNav(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|string|max:20'
        ]);

        $name = $request->input('name');

        if (!LabNav::find($id)) {
            return response()->json('主栏目不存在');
        }
        $nav = new LabNav();
        $nav->name = $name;
        $nav->pid = $id;
        $nav->model = 0;
        $nav->sequence = 0;
        $nav->save();
        
        return response()->json($nav->id);
    }


    /**
     * 编辑主导航栏/子导航栏
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|string|max:20',
        ]);

        $attributes = ['name'];
        $nav = LabNav::find($id);
        IUtils::valueFn($request, $nav, $attributes);
        $nav->save();

        return response()->json($nav->id);
    }

    /**
     * 修改model
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function triggle($id)
    {
        $nav = LabNav::find($id);
        $nav->model = !$nav->model;
        $nav->save();
        return response()->json(true);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = LabNav::where('id', $id)
            ->orWhere('pid', $id)
            ->delete();

        // 子栏目下面的新闻归类到默认消息里面
        

        return response()->json($result);
    }

    /**
     * 改变主导航栏的顺序
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function changeSequence(Request $request)
    {
        $sequence = $request->input('sequence');
        for ($i = 0; $i < sizeof($sequence); $i++) {
            $nav = LabNav::find($sequence[$i]);
            $nav->sequence = $i + 1;
            $nav->save();
        }
        return response()->json(true);
    }
}
