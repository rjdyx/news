jQuery.GetUrl = function() {
    var array_url = window.location.pathname.split("/");
    //    alert("0:"+array_url[0]+" 1:"+array_url[1]);
    if (array_url[1] == "static" ||
        array_url[1].indexOf("Action") > 0) {
        return "/";
    }
    return "/" + array_url[1] + "/";
};
$(function() {
    getNewsPic();
    $('')
    $('.datepicker').cxCalendar();
    var t = new Date();
    $('.datepicker').val(t.getFullYear() + '-' + (t.getMonth() > 8 ? '' : '0') + (t.getMonth() + 1) + '-' + t.getDate());
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
});

function init() {
    $(".linecons-trash").click(function(event) {
        $('#delete-pic').modal('show', {
            backdrop: 'fade'
        });
        $(".modal-body strong").text();
        $(".deleteId").attr("id", $(this).attr("id"));
    });
}


function getNewsPic() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "CarouselPicAction/getNewsPic",
        dataType: "json",
        success: function(ret) {
            var tmp = "";
            for (var i = 0; i < ret.length; i++) {
                tmp += '<li class="list-group-item">' +
                    '    <i class="linecons-trash" id="' + ret[i].id + '"></i>' +
                    '    <a href="' + $.GetUrl() + 'CarouselPicAction/editPic?id=' + ret[i].id + '"><i class="linecons-pencil"></i></a>' +
                    '  <span>' + ret[i].title + '</span>' +
                    '</li>';
            }
            $("#newsPic").append(tmp);
            init();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

function addNewPic() {
    $('#edit-article').modal('show', {
        backdrop: 'fade'
    });
    var ue = UE.getEditor('editor', {
        autoFloatEnabled: false,
        elementPathEnabled: false,
        zIndex: 9999
    });
}

function submitNews() {
    $('#edit-modal').modal('show', {
        backdrop: 'static'
    });
    var content = UE.getEditor('editor').getContent();
    var images = new Array();
    var index = 0;
    while (true) {
        content = content.substring(content.indexOf("<img"));
        var img = content.substring(0, content.indexOf("/>") + 2);
        if (img.indexOf("width") > 0) {
            img = img.substring(0, img.indexOf("width")) + ">";
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
        });
    });
}

//新增新闻到lab_news表中
function addNews() {
    //	alert($("#main-nav select option:selected").val()+" "+$("#sub-nav select option:selected").val());
    //	alert($('input:checkbox[name=flag]:checked').parent().siblings()[0].outerHTML);
    //	return false;
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "NewsAction/addNews",
        data: {
            title: $("#article_name").val(),
            content: UE.getEditor('editor').getContent(),
            pic: $('input:checkbox[name=flag]:checked').parent().siblings()[0].outerHTML,
            parent: $("#main-nav select option:selected").val(),
            priority: $("#sub-nav select option:selected").val(),
            time: $("#article_date").val()
        },
        dataType: "json",
        success: function(ret) {
            if (ret == "1") {
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

function deleteCarouselPic() {
    var id = $(".deleteId").attr("id");
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "CarouselPicAction/deleteCarouselPic",
        data: {
            id: $(".deleteId").attr("id")
        },
        dataType: "json",
        success: function(ret) {
            $("#" + id).parent().remove();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//检查标题是否为空
function checkTitle() {
    if ($("#article_name").val() == "") {
        $("#submitBtn").addClass('disabled');
    } else {
        $("#submitBtn").removeClass('disabled');
    }
}