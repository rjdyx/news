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
    $("#link_name").focus();
    $('#addLinkForm').validate({
        submitHandler: function(form) {
            addLink();
        }
    });
    jQuery.extend(jQuery.validator.messages, {
        required: "必选字段",
        url: "请输入合法的网址",
    });
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

function addLink() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "LinkAction/addLink",
        data: {
            name: $("#link_name").val(),
            link: $("#link_address").val(),
            parent: $('#select_category option:selected').val()
        },
        dataType: "json",
        success: function(ret) {
            if (ret == "1") {
                toastr.success("新增成功");
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