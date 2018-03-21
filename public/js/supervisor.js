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

//初始化
function init() {
    $('.manager .linecons-pencil').click(function(event) { //弹出修改子密码
        $('#edit-password').modal('show', {
            backdrop: 'fade'
        });
        var id = $(this).siblings("span").attr("id");
        $("#change_sub_pwd_id").val(id);
    });
    $('.supervisor .btn-plus').click(function(event) { //弹出增加子账户
        $('#add-manager').modal('show', {
            backdrop: 'fade'
        });
    });
    $('#edit-password').on('hidden.bs.modal', function(e) {
        $('#sub_password').val("");
    });
    $('#add-manager').on('hidden.bs.modal', function(e) {
        $('#username').val("");
        $('#password').val("");
    });
}

//检查用户名是否重复
function checkUserName() {
    if ($("#username").val() == "") {
        return false;
    }
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "UserAction/checkUserName",
        data: {
            username: $("#username").val()
        },
        dataType: "json",
        success: function(ret) {
            if (ret != "1") {
                toastr.error("用户名重复");
                $("#addUserBtn").addClass('disabled');
            } else {
                // $("#addUserBtn").removeClass('disabled');
                g_flag = 1;
            }
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//检查创建账号时输入的密码是否合法
function checkPWD() {
    var re = /^[a-zA-Z0-9]{6,12}$/; //密码长度6~12，只包含数字和字母
    if (!re.test($("#new_password").val())) {
        $("#addUserBtn").addClass('disabled');
    } else {
        if (g_flag == 1) {
            $("#addUserBtn").removeClass('disabled');
        }
    }
}

//检查修改子帐号密码是输入的密码是否合法
function checkSubPWD() {
    var re = /^[a-zA-Z0-9]{6,12}$/; //密码长度6~12，只包含数字和字母
    if (!re.test($("#sub_password").val())) {
        $("#change_sub_pwd_btn").addClass('disabled');
    } else {
        $("#change_sub_pwd_btn").removeClass('disabled');
    }
}

//新增子账号
function addUser() {
    //alert($("#username").val()+" "+$("#new_password").val());
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "UserAction/addUser",
        data: {
            username: $("#username").val(),
            password: $("#new_password").val()
        },
        dataType: "json",
        success: function(ret) {
            if (ret == "1") {
                toastr.success("新增成功");
                g_flag = 0;
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

//修改子账号密码
function changeSubPassword() {
    //alert($("#change_sub_pwd_id").val()+" "+$("#sub_password").val());
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "UserAction/changeSubPassword",
        data: {
            id: $("#change_sub_pwd_id").val(),
            newPWD: $("#sub_password").val()
        },
        dataType: "json",
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

//冻结或解冻子账号
function lockUser(obj, id) {
    var flag = 0;
    if (obj.checked) {
        flag = 1;
    } else {
        flag = 0;
    }
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "UserAction/lockUser",
        data: {
            id: id,
            flag: flag
        },
        dataType: "json",
        success: function(ret) {

        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}