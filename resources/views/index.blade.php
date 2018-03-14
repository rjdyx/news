<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <!-- bootstrap -->
        <link href="https://cdn.bootcss.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
        
        <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>

        <!-- bootstrap -->
        <link href="https://cdn.bootcss.com/bootstrap/3.3.2/js/bootstrap.min.css" rel="stylesheet">
        <script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                /*font-family: 'Raleway', sans-serif;*/
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }
            @media (min-width: 992px) {
                .container-fluid{
                    width: 1000px;
                    margin: 0 auto;
                }
                
            }
            #slide{
                height: 288px;
                margin-bottom: 20px;
            }
            #slide img{
                height: 288px;
                width: 100%;
            }
            .carousel-indicators li{
                width: 15px;
                height: 15px;
                line-height: 15px;
                font-size: 10px;
                text-indent: 0px;
            }
            #slide .carousel-caption{
                width: 100%;
                height: 30px;
                font-size: 13px;
                position: absolute;
                left: 0px;
                bottom: 0px;
                color: #000;
                background: #fff;
                opacity: 0.7;
            }
            #slide .carousel-caption a{
                display: block;
                width: 350px;
                margin: 0 auto;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #000;
            }
            .carousel-indicators .active{
                width: 16px;
                height: 16px;
            }
            .list-group .more{
                float: right;
                color: #fff;
                text-decoration: none;
            }
            .list-group a{
                color: #000;
            }
            .list-group a:hover{
                color: #428bca;
            }
             .list-group .date{
                display: inline;
                float: right;
            }
            .list-group-item{
                height: 42px;
            }
            .news, .inform{
                height: 308px;
            }
            .news-title{
                width: 400px;
                overflow: hidden;
                display: inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .use li:nth-child(odd) {
                background-color: #e4e4e4;
            }
            .links{
                width: calc(25%);
                float: left;
                padding: 0px 5px;
            }
        </style>
    </head>
    <body>
        @include("common.header")

        <div class="container-fluid">
            <div class="row" id="contains">
                <!-- 轮播图 -->
                <div class="col-md-5" id="slide">
                    
                    <div id="myCarousel" class="carousel slide"  data-ride="carousel">
                        <!-- 轮播（Carousel）指标 -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class>1</li>
                            <li data-target="#myCarousel" data-slide-to="1" class>2</li>
                            <li data-target="#myCarousel" data-slide-to="2" class>3</li>
                        </ol>   
                        <!-- 轮播（Carousel）项目 -->
                        <div class="carousel-inner">
                            <div class="item active">
                                <a href="">
                                    <img src="image/test.jpg" alt="First slide" data-layer="photo">
                                </a>
                                <div class="carousel-caption">
                                    <a href="" target="_blank">广东省动物病毒载体疫苗工程技术研究中心建设论证会在我校召开</a>
                                </div>
                            </div>
                            <div class="item">
                                <a href="">
                                    <img src="image/test.jpg" alt="First slide" data-layer="photo">
                                </a>
                                <div class="carousel-caption"></div>
                            </div>
                            <div class="item">
                                <a href="">
                                    <img src="image/test.jpg" alt="First slide" data-layer="photo">
                                </a>
                                <div class="carousel-caption"></div>
                            </div>
                        </div>
                        <!-- 轮播（Carousel）导航 -->
                        <a class="carousel-control left" href="#myCarousel" 
                           data-slide="prev">
                               <span class="glyphicon glyphicon-chevron-left"></span>
                           </a>
                        <a class="carousel-control right" href="#myCarousel" 
                           data-slide="next">
                           <span class="glyphicon glyphicon-chevron-right"></span>
                       </a>
                    </div> 
                </div>

                <!-- 最新消息 -->
                <div class="col-md-7 news">
                    <div class="list-group">
                        <div class="list-group-item active list-header">
                            最新消息
                            <a href="" class="more" target="_blank">更多</a>
                        </div>
                        <li class="list-group-item">
                            <a href="" target="_blank">
                                <span class="news-title">
                                    广东省果蔬农产品冷链物流装备工程技术研究中心建设论证会在我校召开
                                </span>
                            </a>
                            <span class="date">2017/12/04</span>
                        </li>
                    </div>
                </div>

                <!-- 常用管理系统 -->
                <div class="col-md-5 use">
                    <div class="list-group">
                        <div class="list-group-item active list-header">
                            常用管理系统
                            <a href="" class="more" target="_blank">更多</a>
                        </div>
                        <li class="list-group-item">
                            <a href="" target="_blank">
                                <span class="news-title">
                                    国家科技管理信息系统管理系统
                                </span>
                            </a>
                        </li>
                    </div>
                </div>
                
                <!-- 通知公告 -->
                <div class="col-md-7 inform">
                    <div class="list-group">
                        <div class="list-group-item active list-header">
                            最新消息
                            <a href="" class="more" target="_blank">更多</a>
                        </div>
                        <li class="list-group-item">
                            <a href="" target="_blank">
                                <span class="news-title">
                                    广东省果蔬农产品冷链物流装备工程技术研究中心建设论证会在我校召开
                                </span>
                            </a>
                            <span class="date">2017/12/04</span>
                        </li>
                    </div>
                </div>

                <!-- 友情链接 -->
                <div class="col-md-12">
                    <div class="links">
                        <select class="form-control input-sm" onchange="window.open(this.value)">
                            <option>国家各部委</option>
                            <option value="http://www.sdpc.gov.cn/">国家发改委</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        @include("common.footer")
    </body>
</html>
