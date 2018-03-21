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
    shrinkNav();
});

//导航栏的变化
function shrinkNav() {
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