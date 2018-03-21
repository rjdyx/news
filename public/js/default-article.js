$(function() {
    getNews();
    getNavNews();
});

function init(){
    $(".tab-pane .linecons-trash").click(function(event) {
        $('#delete-article strong').text($(this).siblings('span').text());
        $('#delete-article').modal('show', {
            backdrop: 'fade'
        });
    });
    $(".tab-pane .linecons-pencil").click(function(event) {
        $('#edit-article').modal('show', {
            backdrop: 'fade'
        });
        $("#article_name").val($(this).siblings('span').text());
        $("#main-nav").children().remove();
        var index = $(this).siblings('span').attr("class");
        var parent = index.substring(0,index.indexOf('_'));
        var priority = index.substring(index.indexOf('_')+1);
        alert(parent+" "+priority);
        getMainNavs(parent,priority);
        var id = $(this).siblings('span').attr("id");
        $("#article_name").siblings('span').attr("id",id);
        setContent(id);
    });
    var ue = UE.getEditor('editor', {
        autoFloatEnabled: false
    });
}

function getNavNews(){
    $.ajax({
    		type:"GET",
    		url : $.GetUrl()+"admin/NewsAction/getNavNews",
    		dataType : "json",
    		success:function(ret){
                debugger;
                for(var i=1;i<ret.length-1;i++){
                    var tmp = "";
                    var nav = "";
                    var news = "";
                    var parent = 0,priority = 0,flag=0;
                    tmp += '<h3>'+ret[i][0].name+'</h3><br />'+
                           '<div class="col-md-12" id="'+ret[i][0].parent+'-'+ret[i][0].priority+'">'+
                           '<ul class="nav nav-tabs nav-tabs-justified">';
                    for(var j=1;j<ret[i].length;j++){
                        if(ret[i][j].parent != parent || ret[i][j].priority != priority){
                            if(flag !=0 ){
                                news += '</ul></div>';
                            }
                            nav +='<li '+(j==1?'class="active"':'')+'>'+
                                  '    <a href="#'+ret[i][j].parent+'-'+ret[i][j].priority+'" data-toggle="tab">'+
                                  '      <span>'+ret[i][j].name+'</span>'+
                                  '    </a>'+
                                  '</li>';
                            news += '<div class="tab-pane '+(flag==0?'active':'')+'" id="'+ret[i][j].parent+'-'+ret[i][j].priority+'">'+
                                    '<ul class="list-group list-group-minimal">'+
                                    '<li class="list-group-item">';
                            if(typeof(ret[i][j].title)=="undefined"){
                                    news += '<span></span></li>';
                            }else{
                                    news += '    <i class="linecons-trash"></i>'+
                                          '    <i class="linecons-pencil"></i>'+
                                          '  <span id="'+ret[i][j].newsId+'" class="'+ret[i][j].parent+'_'+ret[i][j].priority+'">'+ret[i][j].title+'</span>'+
                                          '</li>';
                            }
                            parent = ret[i][j].parent;
                            priority = ret[i][j].priority;
                            flag =1;
                        }else{
                            news += '<li class="list-group-item">'+
                                    '    <i class="linecons-trash"></i>'+
                                    '    <i class="linecons-pencil"></i>'+
                                    '  <span id="'+ret[i][j].newsId+'" class="'+ret[i][j].parent+'_'+ret[i][j].priority+'">'+ret[i][j].title+'</span>'+
                                    '</li>';
                        }
                    }
                    tmp +=  nav + '</ul>' + '<div class="tab-content">'+ news + '</ul></div></div></div>';
                    $(".edit-article").append(tmp);
                }
                init();
    		},
    		error:function(){
    			toastr.error("连接失败");
    		}
    });
}

//获取主导航栏
function getMainNavs(parent,priority){
    $.ajax({
    		type:"GET",
    		url : $.GetUrl()+"admin/NavAction/getMainNavs",
    		dataType : "json",
    		contentType:"application/json",
    		success:function(ret){
    			var tmp="";
    			tmp += '<select class="form-control" onchange="getSubNavs()">';
				tmp += '<option '+(-2==parent?'selected="selected"':'')+' value="-2">最新消息</option>';
				tmp += '<option '+(-3==parent?'selected="selected"':'')+' value="-3">通知公告</option>';
				tmp += '<option value="-4">图片新闻</option>';
				tmp += '<option value="-5">办事指南</option>';
				for(var i=1;i<ret.length-1;i++){
					tmp += '<option '+(ret[i].priority==parent?'selected="selected"':'')+' value="'+ret[i].priority+'">'+ret[i].name+'</option>';
				}
				tmp += '</select>';
				$("#main-nav").append(tmp);
				getSubNavs(priority);
    		},
    		error:function(){
    			toastr.error("连接失败");
    		}
    });
}

//获取子导航栏
function getSubNavs(priority){
	var parent = $("#main-nav select option:selected").val();
	$("#sub-nav select").remove();
	if(parent <= -2){
		var tmp="";
		tmp +=  '<select class="form-control">'+
				'<option value="'+parent+'">无子栏目</option>'+
				'</select>';
		$("#sub-nav").append(tmp);
		return false;
	}
    $.ajax({
    		type:"GET",
    		url : $.GetUrl()+"admin/NavAction/getSubNavs",
    		data:{
				parent:parent
    		},
    		dataType : "json",
    		success:function(ret){
    			var tmp="";
				tmp += '<select class="form-control">';
				for(var i=0;i<ret.length;i++){
					tmp += '<option  '+(ret[i].priority==priority?'selected="selected"':'')+' value="'+ret[i].priority+'">'+ret[i].name+'</option>';
				}
				tmp += '</select>';
				$("#sub-nav").append(tmp);
    		},
    		error:function(){
    			toastr.error("连接失败");
    		}
    });
}

//获取最新消息、通知公告里的新闻
function getNews(){
    $.ajax({
    		type:"GET",
    		url : $.GetUrl()+"admin/NewsAction/getNews",
    		dataType : "json",
    		success:function(ret){
                for(var i=0;i<ret.length;i++){
                    var tmp="";
                    if(ret[i].parent == -2){
                        tmp += '<li class="list-group-item">'+
                               '    <i class="linecons-trash"></i>'+
                               '    <i class="linecons-pencil"></i>'+
                               '    <span  id="'+ret[i].id+'" class="-2_-2">'+ret[i].title+'</span>'+
                               '</li>';
                        $("#news ul").append(tmp);
                    }else if(ret[i].parent == -3){
                        tmp += '<li class="list-group-item">'+
                               '    <i class="linecons-trash"></i>'+
                               '    <i class="linecons-pencil"></i>'+
                               '    <span  id="'+ret[i].id+'" class="-3_-3">'+ret[i].title+'</span>'+
                               '</li>';
                        $("#notice ul").append(tmp);
                    }
                }
    		},
    		error:function(){
    			toastr.error("连接失败");
    		}
    });
}

//写入新闻内容到文本编辑器
function setContent(id){
    $.ajax({
    		type:"GET",
    		url : $.GetUrl()+"admin/NewsAction/getOneNews",
    		data:{
    		    id:id
    		},
    		dataType : "json",
    		success:function(ret){
                UE.getEditor('editor').setContent(ret.content, false);
    		},
    		error:function(){
    			toastr.error("连接失败");
    		}
    });
}

//保存修改
function saveChange(){
    $.ajax({
    		type:"POST",
    		url : $.GetUrl()+"admin/NewsAction/modifyNews",
    		data:{
    		    id:$(".newsId").attr("id"),
    		    title:$("#article_name").val(),
    		    content:UE.getEditor('editor').getContent(),
    		    parent:$("#main-nav select option:selected").val(),
    		    priority:$("#sub-nav select option:selected").val()
    		},
    		dataType : "json",
    		success:function(ret){
                if(ret == "1"){
                    alert("insert success");
                }
    		},
    		error:function(){
    			toastr.error("连接失败");
    		}
    });
}



function getNewsByParent(){
    $.ajax({
    		type:"GET",
    		url : $.GetUrl()+"admin/NewsAction/getNewsByParent",
    		data:{
    		    parent:-1
    		},
    		dataType : "json",
    		success:function(ret){
//    			alert(ret);
                var tmp="";
                tmp += '<div class="tab-content">';
                for(var i=0;i<ret.length;i++){
                   tmp +='<div class="tab-pane '+(i==0?'active':'')+'" id="'+ret[i][0].parent+'-'+ret[i][0].priority+'">'+
                   '<ul class="list-group list-group-minimal">';
                    for(var j=0;j<ret[i].length;j++){
                        tmp += '<li class="list-group-item">'+
                               '    <i class="linecons-trash"></i>'+
                               '    <i class="linecons-pencil"></i>'+
                               '  <span>'+ret[i][j].title+'</span>'+
                               '</li>';
                    }
                    tmp += '</ul></div>';
                }
                tmp += '</div>';
                $("#0-"+parent+"").append(tmp);
    			init();
    		},
    		error:function(){
    			toastr.error("连接失败");
    		}
    });
}