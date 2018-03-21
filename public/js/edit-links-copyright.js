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
    var tabLiHeigth = $('.nav-tabs-justified li').height();
    $('.nav-tabs-justified li a').css({
        height: tabLiHeigth + 'px'
    });
    $('.nav-tabs-justified li a span').css({
        display: "inline-block",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        width: "80%",
    });
    $('.edit-links .linecons-pencil').click(function(event) {
        $('#edit-links').modal('show', {
            backdrop: 'fade'
        });
        $(".m_id").attr("id", $(this).siblings("span").attr("id"));
        $("#edit-links #link_name").val($(this).siblings("span").text());
        $("#edit-links #link_address").val($(this).siblings("input[name=address]").val());
        $("#link_category").val($(this).siblings("input[name=parent]").val()); //设置Select的Value值为category的项选中
    });
    $('.edit-links .linecons-trash').click(function(event) {
        $('#delete-links').modal('show', {
            backdrop: 'fade'
        });
        $('#delete-links strong').text($(this).parent().siblings('.panel-title').text());
        $('#delete-links strong').attr("id", $(this).siblings("span").attr("id"));
    });
    $('#footerForm').validate();
    $('#editLinkForm').validate({
        submitHandler: function(form) {
            modifyLink();
        }
    });
    jQuery.extend(jQuery.validator.messages, {
        required: "必选字段",
        email: "请输入正确格式的电子邮件",
        url: "请输入合法的网址",
        date: "请输入合法的日期",
        number: "请输入合法的数字",
        digits: "只能输入整数",
        equalTo: "请再次输入相同的新密码",
        accept: "请输入拥有合法后缀名的字符串",
        maxlength: jQuery.validator.format("请输入一个 长度最多是 {0} 的字符串"),
        minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
        rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
        range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
        max: jQuery.validator.format("请输入一个最大为{0} 的值"),
        min: jQuery.validator.format("请输入一个最小为{0} 的值")
    });

}

function modifyLink() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "LinkAction/modifyLink",
        data: {
            id: $(".m_id").attr("id"),
            name: $("#edit-links #link_name").val(),
            link: $("#edit-links #link_address").val(),
            parent: $('#link_category option:selected').val()
        },
        dataType: "json",
        success: function(ret) {
            window.location.reload();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

function deleteLink() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "LinkAction/deleteLink",
        data: {
            id: $("#delete-links strong").attr("id")
        },
        dataType: "json",
        success: function(ret) {
            window.location.reload();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

function getLinks(parent) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "LinkAction/getLinks",
        data: {
            parent: parent
        },
        dataType: "json",
        success: function(ret) {
            var tmp = "";
            for (var i = 0; i < ret.length; i++) {
                tmp += '<li class="list-group-item">' +
                    '    <i class="linecons-trash"></i>' +
                    '    <i class="linecons-pencil"></i>' +
                    '    <span id="' + ret[i].id + '">' + ret[i].name + '</span>' +
                    '    <input type="hidden" value="' + ret[i].link + '" name="address"></input>' +
                    '    <input type="hidden" value="' + ret[i].parent + '" name="parent"></input>' +
                    '</li>';
            }
            $("#category" + parent + " ul").children().remove();
            $("#category" + parent + " ul").append(tmp);
            init();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });

}

function modifyCopyrightMessage() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "BottomMessageAction/modifyCopyrightMessage",
        data: {

        },
        dataType: "json",
        success: function(ret) {},
        error: function() {
            toastr.error("连接失败");
        }
    });
}