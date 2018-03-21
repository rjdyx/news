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
    init();
    var imageWidth = $('.album-image .thumb img').width(); //图片高度自适应
    $('.album-image .thumb img').height(imageWidth * 2 / 3);
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
    $('.linecons-trash').click(function(event) {
        $('#delete-pic').modal('show', {
            backdrop: 'fade'
        });
        $("#delete-pic .modal-body strong").text($(this).parents('.image-options').siblings('.name').children('span').text());
    });
    $(':checkbox[name=flag]').each(function() {
        $(this).click(function() {
            if ($(this).prop('checked')) {
                $(':checkbox[name=flag]').removeProp('checked');
                $(this).prop('checked', 'checked');
            }
        });
    });
    $(".thumb img").css({
        "width": "",
        "height": "",
        "style": ""
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
                    '    <i class="linecons-trash"></i>' +
                    '    <a href="edit-pic.html"><i class="linecons-pencil"></i></a>' +
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

function saveChange() {
    var tmp = $('input:checkbox[name=flag]:checked').parent().siblings(".thumb").html()+"";
    if(tmp.indexOf('style') > 0){
        var ano = tmp.substring(tmp.indexOf('style')+7);
        ano = ano.substring(ano.indexOf('\"')+1);
        tmp  = tmp.substring(0,tmp.indexOf('style'));
        tmp +=ano;
    }
    if(tmp.indexOf('width') > 0){
        ano = tmp.substring(tmp.indexOf('width')+7);
        ano = ano.substring(ano.indexOf('\"')+1);
        tmp  = tmp.substring(0,tmp.indexOf('width'));
        tmp +=ano;
    }
    if(tmp.indexOf('height') > 0){
        ano = tmp.substring(tmp.indexOf('height')+8);
        ano = ano.substring(ano.indexOf('\"')+1);
        tmp  = tmp.substring(0,tmp.indexOf('height'));
        tmp +=ano;
    }
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "CarouselPicAction/saveChange",
        data: {
            id: $(".carouselId").attr("id"),
            pic: tmp
        },
        dataType: "json",
        success: function(ret) {
            window.location.href = $.GetUrl() + "/NavForwardAction/pic-news";
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}