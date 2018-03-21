var g_flag = 0;
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

function checkOldPassword() {
    if ($("#odd_password").val() == "") {
        $("#odd_password").attr("placeholder", "旧密码不能为空");
        return false;
    }
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "AdminAction/checkOldPassword",
        data: {
            oldPassword: $("#odd_password").val()
        },
        dataType: "json",
        success: function(ret) {
            if (ret != "1") {
                toastr.error("连接失败");
            } else {
                g_flag = 1;
            }
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//检查输入的密码是否合法
function checkPWD() {
    var re = /^[a-zA-Z0-9]{6,12}$/; //密码长度6~12，只包含数字和字母
    if (!re.test($("#new_password").val())) {
        $("#subAjax").addClass('disabled');
    } else {
        checkPasswordAgain();
    }
}


function checkPasswordAgain() {
    if ($("#new_password").val() == $("#snew_password").val()) {
        if (g_flag == 1) {
            $("#subAjax").removeClass('disabled');
        }
    } else {
        $("#subAjax").addClass('disabled');
    }
}

function submitChange() {
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "AdminAction/changePassword",
        data: {
            newPWD: $("#new_password").val(),
            sNewPWD: $("#snew_password").val()
        },
        success: function(ret) {
            if (ret == "1") {
                toastr.success("修改成功");
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