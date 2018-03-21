@extends('layouts.app')

@section('title', '')

@section('content')
    <div class="container-fluid">
        <div class="row" id="contains">
            <!--begin 滚动大图 -->
            <div class="col-md-5" id="ifocus">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active">1</li>
                        <li data-target="#carousel-example-generic" data-slide-to="1">2</li>
                        <li data-target="#carousel-example-generic" data-slide-to="2">3</li>
                        <li data-target="#carousel-example-generic" data-slide-to="3">4</li>
                        <li data-target="#carousel-example-generic" data-slide-to="4">5</li>
                        <li data-target="#carousel-example-generic" data-slide-to="5">6</li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        @for ($i = 0; $i < sizeof($carouselPicList); $i++)
                            @if ($i == 0)
                                <div class="item active">
                            @else
                                <div class="item">
                            @endif
                                <a href="{{ url('/news?id='.$carouselPicList[$i]->newsId) }}" target="_blank">
                                    @if (stripos($carouselPicList[$i]->pic,'http') !== false)
                                        <img style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-top-width: 0px" alt="" src="{{ $carouselPicList[$i]->pic }}"/>
                                    @else
                                        <img style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-top-width: 0px" alt="" src="{{ asset('/images/'.$carouselPicList[$i]->pic) }}"/>
                                    @endif
                                </a>
                                    <div class="carousel-caption">
                                        <a href="{{ url('/news?id='.$carouselPicList[$i]->newsId) }}" target="_blank">{{ $carouselPicList[$i]->title }}</a>
                                    </div>
                            </div>
                        @endfor
                    </div>
                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">下一页</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">上一页</span>
                    </a>
                </div>
            </div>
            <!--begin 滚动大图 -->

            <!--begin 最新消息 -->
            <div class="col-md-7 news">
                <div class="list-group" id="latestNews">
                    <div class="list-group-item active list-header">
                        最新消息
                        <a class="more" href="/more-news/-2" target="_blank">更多</a>
                    </div>
                    @foreach ($newsList as $news)
                        @if ($news->pid == -2)
                            <li class="list-group-item"><a href="{{ url('/news/'.$news->id) }}" target="_blank"><div class="news-title">{{ $news->title }}</div></a><span class="date">{{ explode(" ", $news->created_at)[0] }}</span></li>
                        @endif
                    @endforeach
                </div>
            </div>
            <!--end 最新消息 -->

            <!--begin 办事指南 -->
            <div class="col-md-5 guide">
                <div class="list-group" id="guidNews">
                    <div class="list-group-item active list-header">
                        常用管理系统
                        <a class="more" href="/more-news/-5" target="_blank">更多</a>
                    </div>
                    @foreach ($newsList as $news)
                        @if ($news->pid == -5)
                            <li class="list-group-item"><a href="{{ $news->content }}" target="_blank"><div class="news-title">{{ $news->title }}</div></a></li>
                        @endif
                    @endforeach
                </div>
            </div>
            <!--end 办事指南 -->

            <!--begin 通知公告 -->
            <div class="col-md-7 inform">
                <div class="list-group" id="informNews">
                    <div class="list-group-item active list-header">
                        通知公告
                        <a class="more" href="/more-news/-3" target="_blank">更多</a>
                    </div>
                    @foreach ($newsList as $news)
                        @if ($news->pid == -3)
                            <li class="list-group-item"><a href="{{ url('/news/'.$news->id) }}" target="_blank"><div class="news-title">{{ $news->title }}</div></a><span class="date">{{ explode(" ", $news->created_at)[0] }}</span></li>
                        @endif
                    @endforeach
                </div>
            </div>
            <!--end 通知公告 -->

            <!--begin 友情链接 -->
            <div class="col-md-12" id="link">
                @foreach ($linkList as $linkItem)
                    <div class="links">
                        <select class="form-control input-sm" onchange="window.open(this.value)">
                            <option>{{ $linkItem[0]->name }}</option>
                            @for ($i = 0; $i < sizeof($linkItem[1]); $i++)
                                <option value="{{ $linkItem[1][$i]->link }}">{{ $linkItem[1][$i]->name }}</option>
                            @endfor
                        </select>
                    </div>
                @endforeach
            </div>
            <!--end 友情链接 -->
        </div>
    </div>
@endsection

@section('javascript')
    @parent
    <!-- <script src="{{ asset('js/index.js') }}"></script> -->
    <script>
        $('.links').width('calc(100%/' + 4 + ')');
             function addEvent(obj, evtType, func) {
                 if (obj.addEventListener) {
                     obj.addEventListener(evtType, func);
                 } else if (obj.attachEvent) {
                     obj.attachEvent("on" + evtType, func);
                 }
             }

             function getPageScroll() {
                 var xScroll, yScroll;  //页面向右向上滚动的距离
                 if (self.pageXOffset) {
                     xScroll = self.pageXOffset;
                 } else if (document.documentElement && document.documentElement.scrollLeft) {
                     xScroll = document.documentElement.scrollLeft;
                 } else if (document.body) {
                     xScroll = document.body.scrollLeft;
                 }
                 if (self.pageYOffset) {
                     yScroll = self.pageYOffset;
                     console.log('here');
                 } else if (document.documentElement && document.documentElement.scrollTop) {
                     yScroll = document.documentElement.scrollTop;

                 } else if (document.body) {
                     yScroll = document.body.scrollTop;

                 }
                 arrayPageScroll = new Array(xScroll, yScroll);
                 return arrayPageScroll;
             }

             function GetPageSize() {
                 var xScroll, yScroll;
                 if (window.innerHeight && window.scrollMaxY) {
                     //窗口高度（不包括浏览器的任何部分（包括滚动栏））&undefined
                     xScroll = document.body.scrollWidth;
                     yScroll = window.innerHeight + window.scrollMaxY;
                 } else if (document.body.scrollHeight > document.body.offsetHeight) {
                     //chrome下两者相等,无论放大缩小，都是2181
                     xScroll = document.body.scrollWidth; //缩放会变化，就是layout980px
                     yScroll = document.body.scrollHeight; //缩放不会变化
                 } else {
                     xScroll = document.body.offsetWidth; //!!缩放会变化,最小为网页的min-height
                     yScroll = document.body.offsetHeight; //!!缩放不会变化
                 }
                 var windowWidth, windowHeight;
                 if (self.innerHeight) {
                     //!!窗口大小，包含滚动条
                     windowWidth = self.innerWidth;
                     windowHeight = self.innerHeight;
                 } else if (document.documentElement && document.documentElement.clientHeight) {
                     //窗口大小，不包括滚动条，与document.body.clientWidth/Height相同
                     windowWidth = document.documentElement.clientWidth;
                     windowHeight = document.documentElement.clientHeight;
                 } else if (document.body) {
                     windowWidth = document.body.clientWidth;
                     //窗口大小，不包括滚动条，与document.body.clientWidth/Height相同
                     windowHeight = document.body.clientHeight;
                 }
                 var pageHeight, pageWidth;
                 if (yScroll < windowHeight) {
                     pageHeight = windowHeight;
                 } else {
                     pxageHeight = yScroll;
                 }
                 if (xScroll < windowWidth) {
                     pageWidth = windowWidth;
                 } else {
                     pageWidth = xScroll;
                 }
                 arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight)
                 return arrayPageSize;
             }

             var AdMoveConfig = new Object();
             AdMoveConfig.IsInitialized = false;
             AdMoveConfig.ScrollX = 0;
             AdMoveConfig.ScrollY = 0;
             AdMoveConfig.MoveWidth = 0;
             AdMoveConfig.MoveHeight = 0;
             AdMoveConfig.Resize = function () {
                 var winsize = GetPageSize();
                 AdMoveConfig.MoveWidth = winsize[2];
                 AdMoveConfig.MoveHeight = winsize[3];
                 AdMoveConfig.Scroll();
             }
             AdMoveConfig.Scroll = function () {
                 var winscroll = getPageScroll();
                 AdMoveConfig.ScrollX = winscroll[0];
                 AdMoveConfig.ScrollY = winscroll[1];
             }
             addEvent(window, "resize", AdMoveConfig.Resize);
             addEvent(window, "scroll", AdMoveConfig.Scroll);

             function AdMove(id) {
                 if (!AdMoveConfig.IsInitialized) {
                     AdMoveConfig.Resize();
                     AdMoveConfig.IsInitialized = true;
                 }
                 var obj = document.getElementById("ad1");
                 obj.style.position = "absolute";
                 var W = AdMoveConfig.MoveWidth - obj.offsetWidth;
                 var H = AdMoveConfig.MoveHeight - obj.offsetHeight;
                 var x = W * Math.random(), y = H * Math.random(); //0~1随机数
                 var rad = (Math.random() + 1) * Math.PI / 6;  //(1~2)*pi/6  30~60
                 var kx = Math.sin(rad), ky = Math.cos(rad);
                 var dirx = (Math.random() < 0.5 ? 1 : -1), diry = (Math.random() < 0.5 ? 1 : -1);
                 var step = 1;
                 var interval;
                 this.SetLocation = function (vx, vy) { x = vx; y = vy; }
                 this.SetDirection = function (vx, vy) { dirx = vx; diry = vy; }
                 obj.CustomMethod = function () {
                     obj.style.left = (x + AdMoveConfig.ScrollX) + "px";
                     obj.style.top = (y + AdMoveConfig.ScrollY) + "px";
                     rad = (Math.random() + 1) * Math.PI / 6;
                     W = AdMoveConfig.MoveWidth - obj.offsetWidth;
                     H = AdMoveConfig.MoveHeight - obj.offsetHeight;
                     x = x + step * kx * dirx;
                     if (x < 0) { dirx = 1; x = 0; kx = Math.sin(rad); ky = Math.cos(rad); }
                     if (x > W) { dirx = -1; x = W; kx = Math.sin(rad); ky = Math.cos(rad); }
                     y = y + step * ky * diry;
                     if (y < 0) { diry = 1; y = 0; kx = Math.sin(rad); ky = Math.cos(rad); }
                     if (y > H) { diry = -1; y = H; kx = Math.sin(rad); ky = Math.cos(rad); }
                 }
                 this.Run = function () {
                     var delay = 10;
                     interval = setInterval(obj.CustomMethod, delay);
                     obj.onmouseover = function () { clearInterval(interval); }
                     obj.onmouseout = function () { interval = setInterval(obj.CustomMethod, delay); }
                 }
             }
             var ad = new AdMove("ad1");
             ad.Run();
    </script>
@endsection