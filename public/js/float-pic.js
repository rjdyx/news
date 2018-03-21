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
    $("#choose_news").click(function(event) {
        $('#news-list').modal('show', {
            backdrop: 'fade'
        });
        getAllNews(1);
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

function init() {
    $(':checkbox[name=select_news]').each(function() {
        $(this).click(function() {
            if ($(this).prop('checked')) {
                $(':checkbox[name=select_news]').removeProp('checked');
                $(this).prop('checked', 'checked');
                $("#commitBtn").removeClass('disabled');
            }
            if (!($(this).prop('checked'))) {
                $("#commitBtn").addClass('disabled');
            }
        });
    });
}

//保存修改
function saveChange() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "FloatPicAction/saveChange",
        data: {
            pic: $(".pic").attr("src"),
            flag: $("input[type='checkbox']").is(':checked'),
            id: $("#news_id").val(),
            title: $("#news_title").text()
        },
        dataType: "json",
        success: function(ret) {
            if (ret == "1") {
                toastr.success("保存成功");
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

//获取所有新闻，新闻按时间排序
function getAllNews(index) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "FloatPicAction/getAllNews",
        data: {
            index: index
        },
        dataType: "json",
        success: function(ret) {
            $("#newsList").children().remove();
            var tmp = "";
            for (var i = 0; i < ret.newsList.length; i++) {
                tmp += '<li class="list-group-item"><span class="news-title" id=' + ret.newsList[i].id + '>' + ret.newsList[i].title + '</span> <input type="checkbox"  class="f-r" name="select_news" /></li>';
            }
            $("#newsList").append(tmp);
            $(".pagination").children().remove();
            tmp = "";
            if (ret.begin > 1) {
                tmp += '<li><a href="#" onclick="getAllNews(' + (ret.index - 1) + ')">&laquo;</a></li>' +
                    '<li><a href="#" onclick="getAllNews(' + (ret.index) + ')">1...</a></li>';
            }
            for (var i = ret.begin; i <= ret.end; i++) {
                tmp += ' <li ' + (i == ret.index ? 'class="active"' : '') + '><a href="#" onclick="getAllNews(' + i + ')">' + i + '</a></li>';
            }
            if (ret.end < ret.pageCount) {
                tmp += '<li><a href="#" onclick="getAllNews(' + ret.pageCount + ')">...${pageCount}</a></li>' +
                    '<li><a href="#" onclick="getAllNews(' + (ret.index + 1) + ')">&raquo;</a></li>';
            }
            tmp += '<li><a href="#">第' + ret.index + '/' + ret.pageCount + '页</a></li>';
            $(".pagination").append(tmp);
            init();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//搜索新闻
function searchNews(index) {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "FloatPicAction/searchNews",
        data: {
            index: index,
            name: $("#searchName").val()
        },
        dataType: "json",
        success: function(ret) {
            $("#newsList").children().remove();
            var tmp = "";
            for (var i = 0; i < ret.newsList.length; i++) {
                tmp += '<li class="list-group-item"><span class="news-title" id=' + ret.newsList[i].id + '>' + ret.newsList[i].title + '</span> <input type="checkbox"  class="f-r" name="select_news" /></li>';
            }
            $("#newsList").append(tmp);
            $(".pagination").children().remove();
            tmp = "";
            if (ret.begin > 1) {
                tmp += '<li><a href="#" onclick="searchNews(' + (ret.index - 1) + ')">&laquo;</a></li>' +
                    '<li><a href="#" onclick="searchNews(' + (ret.index) + ')">1...</a></li>';
            }
            for (var i = ret.begin; i <= ret.end; i++) {
                tmp += ' <li ' + (i == ret.index ? 'class="active"' : '') + '><a href="#" onclick="searchNews(' + i + ')">' + i + '</a></li>';
            }
            if (ret.end < ret.pageCount) {
                tmp += '<li><a href="#" onclick="searchNews(' + ret.pageCount + ')">...${pageCount}</a></li>' +
                    '<li><a href="#" onclick="searchNews(' + (ret.index + 1) + ')">&raquo;</a></li>';
            }
            tmp += '<li><a href="#">第' + ret.index + '/' + ret.pageCount + '页</a></li>';
            $(".pagination").append(tmp);
            init();
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//关联新闻
function referNews() {
    $(':checkbox[name=select_news]:checkbox:checked').each(function() {
        $("#news_id").val($(this).siblings().attr("id"));
        $("#news_title").text($(this).siblings().text());
    });
}