<?php

namespace App\Http\Controllers\Admin;

use App\LabFloatPic;
use Illuminate\Http\Request;
use Facades\App\Facades\IUtils;
use App\Http\Controllers\Controller;

class FloatPicController extends Controller
{
    /**
     * 后台获取浮动图片管理信息
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $floatPic = LabFloatPic::all();
        return response()->json($floatPic[0]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'pic' => 'required|string|max:255',
            'flag' => 'required|digits_between:0,1',
            'news_id' => 'required|numeric',
            'title' => 'required|string|max:255',
        ]);
        $floatPic = LabFloatPic::all()[0];
        $attributes = ['pic', 'flag', 'news_id', 'title'];
        IUtils::valueFn($request, $floatPic, $attributes);
        $floatPic->save();

        return response()->json(true);
    }
}
