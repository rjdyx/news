jQuery.GetUrl = function() {
    var array_url = window.location.pathname.split("/");
    //    alert("0:"+array_url[0]+" 1:"+array_url[1]);
    if (array_url[1] == "static" ||
        array_url[1].indexOf("Action") > 0) {
        return "/";
    }
    return "/" + array_url[1] + "/";
};
$(document).ready(function() {
    getNavs();
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

//获取导航栏
function getNavs() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/getNavsToBackStage",
        dataType: "json",
        contentType: "application/json",
        success: function(ret) {
            //              alert(ret);
            var tmp = "";
            for (var i = 2; i < ret.length; i++) {
                tmp += '<div class="col-sm-4">' +
                    '  <div class="panel panel-default panel-border panel-shadow">' +
                    '    <div class="panel-heading">' +
                    '      <h3 class="panel-title" id="' + ret[i][0].id + '_' + ret[i][0].model + '">' + ret[i][0].name + '</h3>' +
                    '      <div class="panel-options">' +
                    '          <i class="linecons-pencil"></i>' +
                    '          <i class="linecons-trash"></i>' +
                    '      </div>' +
                    '    </div>' +
                    '    <div class="panel-body">' +
                    '      <ul>';
                if (ret[i].length > 1) {
                    for (var j = 1; j < ret[i].length; j++) {
                        tmp += '<li id="' + ret[i][j].id + '_' + ret[i][j].model + '">' + ret[i][j].name + '</li>';
                    }
                }
                tmp += '</ul>' +
                    '    </div>' +
                    '  </div>' +
                    '</div>';
            }
            $(".edit-nav").append(tmp);
            init();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//初始化
function init() {
    var main_nav_name = $("#main_nav_name");
    var sub_nav_name = $("#sub_nav_name");
    var subNavList = $('.subNavList ul');
    var subnavID = 100;
    $(".panel .linecons-pencil").click(function() {
        var heading = $(this).parents('.panel-heading');
        var mainName = heading.children('.panel-title').text();
        var subList = heading.siblings('.panel-body').children('ul').children();
        var idAndModel = heading.children('.panel-title').attr("id").split("_");
        var id = idAndModel[0];
//        alert(id);
        $('#edit-modal').modal('show', {
            backdrop: 'static'
        });
        main_nav_name.val(mainName);
        main_nav_name.siblings("span").remove();
        var m_switch = '<span class="input-group-btn iswitch-box">' +
            '   <input type="checkbox"  id="iswitch" ' + (idAndModel[1] == 1 ? ' checked="checked" ' : '') + ' onclick="changeNavModel(\'' + idAndModel[0] + '\',' + idAndModel[1] + ')" /><label for="iswitch"></label>' +
            '</span>';
        main_nav_name.after(m_switch);
        $(".input-group").attr("id", id);
        sub_nav_name.attr("id", id);
        for (var i = 0; i < subList.length; i++) {
            var tmp = subList[i].id.split("_");
            var listItem = $('<li class="m-label" id="' + tmp[0] + '"><span>' + $(subList[i]).text() + '</span><input type="text" /><i class="fa-check" ></i><input type="checkbox" id="subnav-' + i + '" ' + (tmp[1] == 1 ? ' checked="checked" ' : '') + ' onclick="changeNavModel(\'' + tmp[0] + '\',' + tmp[1] + ')" /><label class="f-r" for="subnav-' + i + '"></label><i class="linecons-trash f-r"></i><i class="linecons-pencil f-r"></i ></li>');
            $("#edit-modal  ul").append(listItem);
        }
        $('.subNavList .linecons-trash').click(function(event) {
            var obj = $(this).parent();
            deleteSubNav($(this).parent().attr("id"), obj);
        });
    });

    $(".panel .linecons-trash").click(function() {
        $('#delete-nav').modal('show', {
            backdrop: 'fade'
        });
        var id = $(this).parents('.panel-heading').children('.panel-title').attr("id");
        $('#delete-nav strong').attr("id", id);
    });

    $('#add_btn').click(function(event) { //添加子栏目
        var itemText = sub_nav_name.val();
        var navId = $(this).parent().siblings().attr("id");
        alert(navId);
        addSubNav(navId, itemText, sub_nav_name);
    });


    $('#edit-modal').delegate('.subNavList .linecons-pencil', 'click', function(event) {
        var check_btn = $(this).siblings('.fa-check');
        var input = $(this).siblings('input[type="text"]');
        var iswitch = $(this).siblings('label');
        var span = $(this).siblings('span');
        $(this).siblings('.fa-check, input[type="text"]').css({
            "display": "inline",
        });
        input.val(span.text());
        span.text("");
        $(this).siblings('.linecons-trash').css({
            "display": "none"
        });
        $(this).css({
            "display": "none",
        });
        iswitch.css({
            "display": "none"
        });
        check_btn.click(function(event) {
            $(this).siblings('.linecons-pencil,.linecons-trash,span,label').css({
                "display": "inline"
            });
            $(this).siblings('span').text($(this).siblings('input').val());
            input.css({
                "display": "none",
            });
            $(this).css({
                "display": "none"
            });
            var id = $(this).parent().attr("id");
            var newName = $(this).siblings('input').val();
            modifySubNav(id, newName);
        });
    });

    $('#edit-modal').on('hidden.bs.modal', function(e) {
        $("#edit-modal ul").empty();
    });

//    alert("in");
    $('#edit-modal').delegate('#subAjax', 'click', function(event) {
        //        alert("in");
        var mainNavName = main_nav_name.val();
        var subNavName = [];
        $.each(subNavList.children('.m-label'), function(index, el) {
            subNavName.push($(el).children('span').text());
        });
        console.log(subNavName);
        var id = $(this).parent().siblings().find(".input-group").attr("id");
//        alert(id+" "+mainNavName);
        modifyNav(id, mainNavName);
    });
    dragNav();
}

//新增子栏目
function addSubNav(navId, subNavName, sub_nav_name) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/addSubNav",
        data: {
            navId: navId,
            subNavName: subNavName
        },
        dataType: "json",
        success: function(ret) {
            var subnavID = $('.subNavList ul li').length;
            var addItem = $('<li class="m-label" id="' + ret + '"><span>' + subNavName + '</span><input type="text" /><i class="fa-check" ></i> <input type="checkbox" id="subnav-' + subnavID + '" onclick="changeNavModel(\'' + ret + '\',' + 0 + ')"/><label class="f-r" for="subnav-' + subnavID + '"></label><i class="linecons-trash f-r"></i><i class="linecons-pencil f-r"></i ></li>');
            sub_nav_name.val("");
            subnavID += 1;
            $('.subNavList ul').append(addItem);
            $('.subNavList .linecons-trash').click(function(event) {
                var obj = $(this).parent();
                deleteSubNav($(this).parent().attr("id"), obj);
            });
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//删除主栏目+子栏目
function deleteNav() {
    var id = $("#delete-nav strong").attr("id");
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/deleteNav",
        data: {
            navId: id.split("_")[0]
        },
        dataType: "json",
        success: function(ret) {
            $("#" + id).parents(".col-sm-4").remove();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//删除子栏目
function deleteSubNav(id, obj) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/deleteSubNav",
        data: {
            navSubId: id
        },
        dataType: "json",
        success: function(ret) {
            obj.remove();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//修改主栏目
function modifyNav(id, newName) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/modifyNav",
        data: {
            navId: id,
            newNavName: newName
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

//修改子栏目
function modifySubNav(id, newName) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/modifyNav",
        data: {
            navId: id,
            newNavName: newName
        },
        dataType: "json",
        success: function(ret) {},
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//导航拖动
function dragNav() {
    var editNavHeight = $('.edit-nav').height();
    $('.edit-nav').sortable({
        appendTo: "parent",
        forceHelperSize: true,
        forcePlaceholderSize: true,
        helper: "clone",
        delay: 150,
        cursor: "move",
        revert: true,
        scroll: true,
        scrollSensitivity: 10,
        tolerance: "pointer",
        containment: "parent",
        activate: function(event, ui) {
            $('.save-order').css({
                display: 'inline-block',
            });
            $('.edit-nav').height(editNavHeight);

        }
    });
}

//保存顺序
function saveSequence() {
    var arr = new Array();
    $(".panel-title").each(function(index) {
        arr[index] = $(this).attr("id").split("_")[0];
    });
    $.ajax({
        type: "POST",
        url: $.GetUrl() + "NavAction/saveSequence",
        data: {
            navs: JSON.stringify(arr)
        },
        dataType: "json",
        success: function(ret) {
            if (ret == "1") {
                toastr.success("修改成功");
            }
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//改变子栏目的model
function changeNavModel(id, oldModel) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "NavAction/changeNavModel",
        data: {
            id: id,
            model: (oldModel == 1 ? 0 : 1)
        },
        dataType: "json",
        success: function(ret) {
            $("#" + id + "_" + oldModel).attr("id", id + "_" + (oldModel == 1 ? 0 : 1));
            if (typeof($("#" + id).children("input[type=checkbox]").attr("id")) == "undefined") {
                $("#iswitch").attr("onclick", "changeNavModel(\'" + id + "\', " + (oldModel == 1 ? 0 : 1) + ")");
            } else {
                $("#" + id).children("input[type=checkbox]").attr("onclick", "changeNavModel(\'" + id + "\', " + (oldModel == 1 ? 0 : 1) + ")");
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
    if ($(".sub_nav_name").val() == "") {
        $("#add_btn").addClass('disabled');
    } else {
        $("#add_btn").removeClass('disabled');
    }
}