@extends('layouts.app')

@section('title', $subNav->name.' - ')

@section('css')
    @parent
    <link href="{{ asset('css/passage.min.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="container">
        @if ($news != null && sizeof($navList[1]) == 0)
            <div id="passage" class="passage">
                <div class="col-md-offset-1 col-md-10 col-xs-offset-1 col-xs-10" style="padding-bottom: 20px">
                    {!! $news->content !!}
                </div>
                <div style="clear: both"></div>
            </div>
        @elseif ($news != null && sizeof($navList[1]) != 0)
            <div id="" class="container-fluid clearfix" style="padding-bottom:122px">
                <div class="row">
                    <div class="col-md-3">
                        <div class="list-group">
                            <div class="list-group-item active list-header">
                                {{ $navList[0]->name }}
                            </div>
                            @foreach ($navList[1] as $subNav)
                                <li class="list-group-item"><a href="{{ url('/news-page/'.$subNav->id.'-'.$subNav->model) }}">{{ $subNav->name }}</a></li>
                            @endforeach
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="article">
                            <div class="article-header">
                                {{ $news->title }}
                            </div>
                            <div class="article-main">
                                {!! $news->content !!}
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        @else
            <div id="page" class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="list-group">
                            <div class="list-group-item active list-header">
                                {{ $navList[0]->name }}
                            </div>
                            @foreach ($navList[1] as $subNav)
                                <li class="list-group-item"><a href="{{ url('/news-page/'.$subNav->id.'-'.$subNav->model) }}">{{ $subNav->name }}</a></li>
                            @endforeach
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="list-group">
                            <div class="list-group-item active list-header">
                                {{ $subNav->name }}
                            </div>
                            @foreach ($newsList as $news)
                                    <li class="list-group-item clearfix"><a href="{{ url('/news/'.$news->id) }}" target="_blank"><div class="news-title">{{ $news->title }}</div></a><span class="date">{{ explode(" ", $news->created_at)[0] }}</span></li>
                            @endforeach
                        </div>
                    </div>
                    {!! $newsList->links() !!}
                </div>
            </div>
        @endif
    </div>
@endsection

@section('javascript')
    @parent
    <!-- <script src="{{ asset('js/moreNews.js') }}"></script> -->
@endsection