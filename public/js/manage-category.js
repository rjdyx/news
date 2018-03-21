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
    $('.category .linecons-trash').click(function(event) {
        $('#delete-category').modal('show', {
            backdrop: 'fade'
        });
        $("#delete-category strong").text($(this).parent().text().trim());
        $("#delete-category strong").attr("id", $(this).parent().attr("id"));
    });

    $('.category .linecons-pencil').click(function(event) {
        $('#edit-category').modal('show', {
            backdrop: 'fade'
        });
        $("#category_new_name").val($(this).parent().text().trim());
        $(".cId").attr("id", $(this).parent().attr("id"));
    });

    $('.btn-plus').click(function(event) {
        $('#add-category').modal('show', {
            backdrop: 'fade'
        });
    });
    $('#add-category').on('hidden.bs.modal', function(e) {
        $("#category_name").val("");
    });
}

function addCategory() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "LinkAction/addCategory",
        data: {
            name: $("#category_name").val()
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

function deleteCategory() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "LinkAction/deleteCategory",
        data: {
            id: $("#delete-category strong").attr("id")
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

function modifyCategory() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "LinkAction/modifyCategory",
        data: {
            id: $(".cId").attr("id"),
            name: $("#category_new_name").val()
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


function checkCategoryName() {
    if ($("#category_name").val() == "") {
        $("#add_category_btn").addClass('disabled');
    } else {
        $("#add_category_btn").removeClass('disabled');
    }
}

function checkCategoryNewName() {
    if ($("#category_new_name").val() == "") {
        $("#modify_category_btn").addClass('disabled');
    } else {
        $("#modify_category_btn").removeClass('disabled');
    }
}