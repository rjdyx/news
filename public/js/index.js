$(document).ready(function() {
//    getNavs();
//    getCarouselPic();
//    getNews();
//    getLinks();
});

//获取导航栏
function getNavs() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "IndexAction/getNavs",
        dataType: "json",
        contentType: "application/json",
        success: function(ret) {
            var tmp = "";
            for (var i = 2; i < ret.length; i++) {
                tmp += '<li class="dropdown">';
                if (ret[i].length > 1) {
                    tmp += '    <a href="nav/' + ret[i][1].parent + '-' + ret[i][1].priority + '" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + ret[i][0].name + '<span class="caret"></span></a>' +
                        '           <ul class="dropdown-menu" role="menu">';
                } else {
                    tmp += ' <a href="nav/' + (ret[i][0].priority + '-0') + '">' + ret[i][0].name + '</a>';
                }
                for (var j = 1; j < ret[i].length; j++) {
                    tmp += '<li><a href="nav/' + ret[i][j].parent + '-' + ret[i][j].priority + '" target="_blank">' + ret[i][j].name + '</a></li>';
                }
                if (ret[i].length > 1) {
                    tmp += '</ul>';
                }
                tmp += '</li>';
            }
            //                $("#nav").children().remove();
            tmp += '<li><a href="/IndexAction/getEnclosure">下载中心</a></li>';
            $("#nav").append(tmp);
            shrinkNav(ret);
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//导航栏的变化
function shrinkNav(ret) {
    var navLength = $('#nav > li').length; //栏目长度
    if (navLength > 7) {
        var subNav = $('#nav > li').slice(6);
        $('#nav > li').slice(6).remove();
        var li = document.createElement('li');
        var liMore = $(li).addClass('dropdown');
        var aMore = $('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多<span class="caret"></span></a>');
        var ulMore = $('<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu"></ul>');
        for (var index = 0; index < subNav.length; index++) {
            var navLi = $('<li class="dropdown-submenu">' + '<a href="' + subNav.eq(index).children('a').attr("href") + '">' + subNav.eq(index).children('a').text() + '</a><li>');
            var subUl = $('<ul class="dropdown-menu"><ul>');
            var subLi = subNav.eq(index).children('.dropdown-menu').children('li');
            if (subLi.length == 0) {
                navLi.removeClass('dropdown-submenu');
                ulMore.append(navLi);
            } else {
                subUl.append(subLi);
                navLi.append(subUl);
                ulMore.append(navLi);
            }
        }
        liMore.append(aMore, ulMore);
        $('#nav').append(liMore);
    }
}

//获取滚动图片
function getCarouselPic() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "IndexAction/getCarouselPic",
        dataType: "json",
        contentType: "application/json",
        success: function(ret) {
            var tmp = "";
            for (var i = 0; i < ret.length; i++) {
                if(i == 6){
                    break;
                }
                tmp += '<div class="item ' + (i == 0 ? 'active' : '') + '">' +
                    '  <a href="/static/html/news?id=' + ret[i].newsId + '" target="_blank">' + ret[i].pic + '</a>' +
                    '  <div class="carousel-caption">' +
                    '      <a href="/static/html/news?id=' + ret[i].newsId + '" target="_blank">' + ret[i].title + '</a>' +
                    '  </div>' +
                    '</div>';
            }
            $(".carousel-inner").append(tmp);
        },
        error: function() {
            toastr.error("连接失败");
        }
    });

}

//获取新闻
function getNews() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "IndexAction/getNews",
        dataType: "json",
        contentType: "application/json",
        success: function(ret) {
            var t = new Date();
            var tmp = "";
            for (var i = 0; i < ret.length; i++) {
                tmp = "";
                t.setTime(ret[i].time);
                if (ret[i].parent == -2) {
                    tmp = '<li class="list-group-item"><a href="/static/html/news?id=' + ret[i].id + '" target="_blank"><div class="news-title">' + ret[i].title + '</div></a><span class="date">' + t.toLocaleDateString() + '</span></li>';
                    $("#latestNews").append(tmp);
                } else if (ret[i].parent == -3) {
                    tmp = '<li class="list-group-item"><a href="/static/html/news?id=' + ret[i].id + '" target="_blank"><div class="news-title">' + ret[i].title + '</div></a><span class="date">' + t.toLocaleDateString() + '</span></li>';
                    $("#informNews").append(tmp);
                } else if (ret[i].parent == -5) {
                    tmp = '<li class="list-group-item"><a href="/static/html/news?id=' + ret[i].id + '" target="_blank"><div class="news-title">' + ret[i].title + '</div></a></li>';
                    $("#guidNews").append(tmp);
                }
            }
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}

//获取友情链接
function getLinks() {
    $.ajax({
        type: "GET",
        url: $.GetUrl() + "IndexAction/getLinks",
        dataType: "json",
        contentType: "application/json",
        success: function(ret) {
            var tmp = "";
            for (var i = 0; i < ret.length; i++) {
                tmp += '<div class="links">' +
                    '    <select class="form-control input-sm" onchange="window.open(this.value)">' +
                    '        <option>' + ret[i][0].name + '</option>';
                for (var j = 1; j < ret[i].length; j++) {
                    tmp += '<option value="' + ret[i][j].link + '">' + ret[i][j].name + '</option>';
                }
                tmp += '</select></div>';
            }
            $("#link").append(tmp);
            $('.links').css({
                width: 'calc(100%/' + ret.length + ')',
                width: '-webkit-calc(100%/' + ret.length + ')'
            });
        },
        error: function() {
            toastr.error("连接失败");
        }
    });
}