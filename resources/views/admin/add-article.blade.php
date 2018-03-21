@extends('layouts.admin-app')

@section('title', '新增文章 - ')

@section('head')
    @include('UEditor::head');
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    内容编写：
                </div>
                <div class="panel-body">
                <script id="editor" name="content" type="text/plain" style="width:100%;height:500px;margin:0 auto;"></script>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">发布设置</h3>
                </div>
                <div class="panel-body t-c">
                    <form role="form" class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-3 control-label" for="article_name">消息标题：</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="article_name" placeholder="标题长度：1~255" onkeyup="checkTitle()">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label" for="article_nav">所属栏目：</label>
                            <div class="col-sm-3" id="main-nav"></div>
                            <div class="col-sm-3" id="sub-nav"></div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label" for="article_date">发布日期：</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control datepicker" data-provide="datepicker-inline" id="article_date"  value="">
                            </div>
                        </div>
                        <div class="form-group-separator"></div>
                    </form>
                    <button id="submitBtn" class="btn btn-success btn-icon disabled" onclick="submitNews()">
                        <i class="fa-check"></i>
                        <span>发布</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
@endsection

@include('admin.dialog.model')

@section('script')
    @parent
    <script src="{{ asset('js/jquery.cxcalendar.min.js') }}"></script>
    <script src="{{ asset('js/add-article/add-article.js') }}"></script>
    <script type="text/javascript">
        var ue = UE.getEditor('editor');
            ue.ready(function() {
            ue.execCommand('serverparam', '_token', '{{ csrf_token() }}');//此处为支持laravel5 csrf ,根据实际情况修改,目的就是设置 _token 值.    
        });
        $('.datepicker').cxCalendar();
        var t = new Date();
        $('.datepicker').val(t.getFullYear()+'-'+(t.getMonth()>8?'':'0')+(t.getMonth()+1)+'-'+t.getDate());
    </script>    
@endsection