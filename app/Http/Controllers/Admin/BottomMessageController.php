<?php

namespace App\Http\Controllers\Admin;

use App\LabBottomMessage;
use Illuminate\Http\Request;
use Facades\App\Facades\IUtils;
use App\Http\Controllers\Controller;

class BottomMessageController extends Controller
{
    /**
     * 后台后去底部信息
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $message = LabBottomMessage::all();
        return response()->json($message[0]);
    }

    /**
     * 修改
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'address' => 'required|string|max:255',
            'postcode' => 'required|string|max:15',
            'phone' => 'required|phone',
            'fax' => 'required|phone',
            'email' => 'required|email',
            'copyright' => 'required|string|max:255',
        ]);
        $message = LabBottomMessage::all()[0];
        $attributes = ['address', 'postcode', 'phone', 'fax', 'email', 'copyright'];
        IUtils::valueFn($request, $message, $attributes);
        $message->save();

        return response()->json(true);
    }

}
