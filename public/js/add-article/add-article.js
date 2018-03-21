$(function() {
    getMainNavs();
    var toastrOpts = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-left",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "700",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
//    $('.btn-success').click(function(event) {
////        toastr.success("发布成功");
//        // toastr.info("这是一个提示信息");
//        toastr.error("连接失败", toastrOpts);
//    });
});

//获取主导航栏
function getMainNavs() {
    $.ajax({
        type: "GET",
        url: "/admin/nav/indexNav",
        dataType: "json",
        contentType: "application/json",
        success: function(ret) {
            console.log(ret)
            var tmp = "";
            tmp += '<select class="form-control" onchange="getSubNavs()">';
            tmp += '<option value="-2">最新消息</option>';
            tmp += '<option value="-3">通知公告</option>';
            tmp += '<option value="-4">图片新闻</option>';
            tmp += '<option value="-5">办事指南</option>';
            for (var i = 0; i < ret.length; i++) {
                tmp += '<option value="' + ret[i].id + '">' + ret[i].name + '</option>';
            }
            tmp += '</select>';
            $("#main-nav").append(tmp);
            getSubNavs();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//获取子导航栏
function getSubNavs() {
    var parent = $("#main-nav select option:selected").val();
    $("#sub-nav select").remove();
    if (parent <= -2) {
        var tmp = "";
        tmp += '<select class="form-control">' +
            '<option value="' + parent + '">无子栏目</option>' +
            '</select>';
        $("#sub-nav").append(tmp);
        return false;
    }
    $.ajax({
        type: "GET",
        url: "/admin/nav/indexSubNav/" + parent,
        dataType: "json",
        success: function(ret) {
            var tmp = "";
            tmp += '<select class="form-control">';
            for (var i = 0; i < ret.length; i++) {
                tmp += '<option value="' + ret[i].id + '">' + ret[i].name + '</option>';
            }
            if (ret.length == 0) {
                tmp += '<option value="0" selected="selected">无子栏目</option>';
            }
            tmp += '</select>';
            $("#sub-nav").append(tmp);
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

function submitNews() {
    var flag = $("#main-nav select option:selected").val();
    if (flag == -4) {
        $('#edit-modal').modal('show', {
            backdrop: 'static'
        });
        choosePic();
    } else {
        addNewsWithoutPic();
    }
}

//新增新闻到lab_news表中，此新闻为滚动图片新闻
function addNews() {
    	// alert($("#main-nav select option:selected").val()+" "+$("#sub-nav select option:selected").val());
    	// alert($('input:checkbox[name=flag]:checked').parent().siblings()[0].outerHTML);
    	var src = $($('input:checkbox[name=flag]:checked').parent().siblings()[0].outerHTML)[0].attributes[0].value;
        if (src.toLowerCase().indexOf('http') == -1) {
            src = src.substring(src.indexOf('images') + 7);
        }
    $.ajax({
        type: "POST",
        url: "/admin/news",
        data: {
            title: $("#article_name").val(),
            content: UE.getEditor('editor').getContent(),
            pic: src,
            pid: $("#main-nav select option:selected").val(),
            priority: $("#sub-nav select option:selected").val(),
            time:$("#article_date").val()
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function(ret) {
            if (ret == true) {
                toastr.success("发布成功");
                setTimeout(function() {
                    window.location.reload();
                }, 800);
            }
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//新增新闻到lab_news表中，此新闻为非滚动图片新闻
function addNewsWithoutPic() {
    //	alert($("#main-nav select option:selected").val()+" "+$("#sub-nav select option:selected").val());
    //	alert($('input:checkbox[name=flag]:checked').parent().siblings()[0].outerHTML);
    //	return false;
    $.ajax({
        type: "POST",
        url: "/admin/news",
        data: {
            title: $("#article_name").val(),
            content: UE.getEditor('editor').getContent(),
            pid: $("#main-nav select option:selected").val(),
            priority: $("#sub-nav select option:selected").val(),
            time:$("#article_date").val()
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function(ret) {
            if (ret == true) {
                toastr.success("发布成功");
                setTimeout(function() {
                    window.location.reload();
                }, 800);
            }
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//选择新闻中的图片
function choosePic() {
    var content = UE.getEditor('editor').getContent();
    var images = new Array();
    var index = 0;
    while (true) {
        content = content.substring(content.indexOf("<img"));
        var img = content.substring(0, content.indexOf("/>") + 2);
        if(img.indexOf("width")>0){
            img = img.substring(0,img.indexOf("width")) + ">";
        }
        images[index++] = img;
        content = content.substring(content.indexOf("/>") + 2);
        if (content.indexOf("<img") == -1) {
            break;
        }
    }
    var tmp = "";
    for (var i = 0; i < images.length; i++) {
        tmp += '<div class="col-md-3 col-sm-4 col-xs-6">' +
            '	 <div class="album-image">';
        tmp += images[i];
        tmp += '	 <div class="image-checkbox">' +
            '		     <input type="checkbox" name="flag" />' +
            '	     </div>' +
            '    </div>' +
            '   </div>';
    }
    $("#news-pic").children().remove();
    $("#news-pic").append(tmp);
    $(':checkbox[name=flag]').each(function() {
        $(this).click(function() {
            if ($(this).prop('checked')) {
                $(':checkbox[name=flag]').removeProp('checked');
                $(this).prop('checked', 'checked');
                $("#submitPicNews").removeClass('disabled');
            }
            if (!($(this).prop('checked'))) {
                $("#submitPicNews").addClass('disabled');
            }
        });
    });
}

//检查标题是否为空
function checkTitle(){
    if($("#article_name").val() == ""){
        $("#submitBtn").addClass('disabled');
    }else{
        $("#submitBtn").removeClass('disabled');
    }
}