<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')重点实验室建设办公室后台管理系统</title>

    @section('css')
        <!-- Styles -->
        <!-- <link rel="stylesheet" type="text/css" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css"> -->
        <link href="{{ asset('fonts/linecons/css/linecons.min.css') }}" rel="stylesheet">
        <link href="{{ asset('fonts/fontawesome/css/font-awesome.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/bootstrap-3.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/xenon-core.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/custom.min.css') }}" rel="stylesheet">
    @show

    @yield('head')

</head>
<body class="page-body">
    <div class="page-container">
        @include('layouts.admin.menu')

        <div class="main-content">
            @include('layouts.admin.header')
            @yield('content')
            @include('layouts.admin.footer')
        </div>
    </div>

    @section('script')
        <script src="{{ asset('js/jquery-1.11.1.min.js') }}"></script>
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>

        <script src="{{ asset('js/toastr.min.js') }}"></script>
        <script src="{{ asset('js/TweenMax.min.js') }}"></script>
        <script src="{{ asset('js/resizeable.min.js') }}"></script>
        <script src="{{ asset('js/xenon-toggles.min.js') }}"></script>
        <script src="{{ asset('js/xenon-custom.min.js') }}"></script>
    @show
</body>
</html>
