@extends('layouts.app')

@section('title', '下载中心 - ')

@section('content')
    <div id="container">
       <div id="page" class="container-fluid more">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="list-group">
                        <div class="list-group-item active list-header">
                        <span class="banner">
                            @if ($pid == -2)
                                最新消息
                            @elseif ($pid == -3)
                                通知公告
                            @else
                                常用管理系统
                            @endif
                        </span>
                        </div>
                        @foreach ($newsList as $news)
                            <li class="list-group-item clearfix">
                                @if ($pid == -5)
                                    <a href="{{ $news->content }}" target="_blank">
                                @else
                                    <a href="{{ url('/news/'.$news->id) }}" target="_blank">
                                @endif
                                    <div class="news-title">{{ $news->title }}</div>
                                </a>
                                <span class="date">{{ explode(" ", $news->created_at)[0] }}</span></li>
                        @endforeach
                    </div>
                    <div class="footer-page">
                        <div style="text-align: center;">
                            {!! $newsList->links() !!}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> 
    </div>
    
@endsection
