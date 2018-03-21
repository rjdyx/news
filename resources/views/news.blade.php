@extends('layouts.app')

@section('title', '《'.$news->title.'》'.' - ')

@section('css')
    @parent
    <link href="{{ asset('css/passage.min.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="container">
        <div id="passage" class="passage">
            <div class="col-md-offset-1 col-md-10 col-xs-offset-1 col-xs-10" style="padding-bottom: 20px">
                {!! $news->content !!}
            </div>
            <div style="clear: both"></div>
        </div>
    </div>
@endsection

@section('javascript')
    @parent
    <!-- <script src="{{ asset('js/moreNews.js') }}"></script> -->
@endsection