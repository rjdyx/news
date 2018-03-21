$(function() {
    $("#main_nav_name").focus();
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
})

//新增主栏目+子栏目
function addNav() {
    if ($("#iswitch").prop("checked")) {
        var model = 1;
    } else {
        var model = 0;
    }
    var arr = new Array();
    $(".m-label span").each(function(index) {
        arr[index] = new Array();
        arr[index][0] = $(this).text();
        if ($(this).siblings("input").prop("checked")) {
            arr[index][1] = "1";
        } else {
            arr[index][1] = "0";
        }
    });
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/addNav",
        data: {
            navName: $("#main_nav_name").val(),
            model: model,
            subNav: JSON.stringify(arr)
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

function checkName() {
    if ($("#main_nav_name").val() == "") {
        $("#subAjax").addClass('disabled');
    } else {
        $("#subAjax").removeClass('disabled');
    }
}

function checkSubName() {
    if ($("#sub_nav_name").val() == "") {
        $("#add_btn").addClass('disabled');
    } else {
        $("#add_btn").removeClass('disabled');
    }
}