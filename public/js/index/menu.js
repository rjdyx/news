//导航栏的变化
jQuery(document).ready(function($) {
  var minHeight = $(window).height() - 175 - 55 - 105;
  var pHeight = $('#passage').height();
  if (pHeight < minHeight) { //passage高度小于屏幕高度时自适应
    $('#passage').height(minHeight);
  }
  shrinkNav();
});

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
      var navLi = $('<li class="dropdown-submenu">' + '<a href="' + subNav.eq(index).children('a').attr("href") + '" target="_blank">' + subNav.eq(index).children('a').text() + '</a><li>');
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