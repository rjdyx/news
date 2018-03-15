<?php

namespace App\Http\Controllers\Admin;

use App\LabLink;
use Illuminate\Http\Request;
use Facades\App\Facades\IUtils;
use App\Http\Controllers\Controller;

class LinkController extends Controller
{
    /**
     * 后台获取主链接和子链接
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $links = LabLink::where('pid', 0)
                    ->where('link', '分类')
                    ->orderBy('priority')
                    ->get();
        $linksList = array();
        foreach ($links as $link) {
            $item = array();
            array_push($item, $link);
            $sublinks = Lablink::where('pid', $link->id)
                            ->orderBy('priority')
                            ->get();
            array_push($item, $sublinks);
            array_push($linksList, $item);
        }

        return response()->json($linksList);
    }

    public function indexMain()
    {
        $links = LabLink::where('pid', 0)
                    ->where('link', '分类')
                    ->orderBy('priority')
                    ->get();
        return response()->json($links);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pid = $request->input('pid');

        if ($pid) {// 新增子链接
            $this->validate($request, [
                'name' => 'required|string|max:255',
                'link' => 'required|url|max:255',
                'pid' => 'required|numeric'
            ]);
            $attributes = ['name', 'link', 'pid'];
            $link = new Lablink();
            IUtils::valueFn($request, $link, $attributes);
            $lastLink = Lablink::where('pid', $pid)
                            ->orderBy('priority', 'desc')
                            ->first();
            $link->priority = $lastLink ? $lastLink->priority + 1 : 1;
            $link->save();

        } else {// 新增父分类
            $this->validate($request, [
                'name' => 'required|string|max:255'
            ]);
            $link = new Lablink();
            $link->name = $request->input('name');
            $link->link = '分类';
            $lastLink = Lablink::where('pid', 0)
                            ->orderBy('priority', 'desc')
                            ->first();
            $link->priority = $lastLink->priority + 1;
            $link->pid = 0;
            $link->save();
        }

        return response()->json($link->id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pid = $request->input('pid');

        if ($pid) {// 新增子链接
            $this->validate($request, [
                'name' => 'required|string|max:255',
                'link' => 'required|url|max:255',
                'pid' => 'required|numeric'
            ]);
            $attributes = ['name', 'link', 'pid'];
            $link = Lablink::find($id);
            IUtils::valueFn($request, $link, $attributes);
            $link->save();

        } else {// 新增父分类
            $this->validate($request, [
                'name' => 'required|string|max:255'
            ]);
            $link = Lablink::find($id);
            $link->name = $request->input('name');
            $link->pid = 0;
            $link->save();
        }

        return response()->json($link->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = Lablink::where('id', $id)
            ->orWhere('pid', $id)
            ->delete();

        return response()->json($result);
    }
}
