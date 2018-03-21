@extends('layouts.app')

@section('title', '下载中心 - ')

@section('content')
    <div id="container">
       <div id="page" class="container-fluid more">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="list-group">
                        <div class="list-group-item active list-header">
                        <span class="banner">下载中心</span>
                        </div>
                        @foreach ($enclosure as $enclosureItem)
                            <li class="list-group-item clearfix"><a style="font-size:12px; color:#0066cc;" href="{{ $enclosureItem->location }}" title=""><div class="news-title">{{ $enclosureItem->name }}</div></a><span class="date">{{ explode(" ", $enclosureItem->created_at)[0] }}</span></li>
                        @endforeach
                    </div>
                    <div class="footer-page">
                        <div style="text-align: center;">
                            {!! $enclosure->links() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
@endsection
