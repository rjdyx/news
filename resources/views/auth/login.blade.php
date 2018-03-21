@extends('layouts.app')

@section('css')
    @parent
    <link href="{{ asset('css/validate.min.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-4 col-xs-offset-4 form-box">
                <div class="form-top">
                    <span class="glyphicon glyphicon-user"></span>
                    <span class="form-title">管理入口</span>
                </div>
                <div class="form-bottom">
                    <form role="form" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="username">用户名：</label>
                            <input id="username" type="text" class="form-control" placeholder="Username" name="username" value="{{ old('username') }}" required autofocus>
                        </div>
                        <div class="form-group">
                            <label for="password">密码：</label>
                            <input id="passwd" type="password" class="form-control" placeholder="Password" name="password" required>
                        </div>
                        <div class="checkbox">
                            <div class="checkcode">
                                <input id="c_validate" type="text" id="J_codetext" placeholder="验证码" maxlength="4" onkeydown='if(event.keyCode==13){login()}'>
                                <canvas class="J_codeimg" id="myCanvas" onclick="getCode()">
                                你的浏览器不支持canvas元素
                                </canvas>
                                <span id="tip_code">区分大小写</span>
                            </div>
                        </div>
                        <button type="submit" class="btn">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
