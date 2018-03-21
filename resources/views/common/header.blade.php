@section('header')
	<header>
	    <div class="header-wrapper">
	        <div class="header-banner"></div>
	        <div class="header-pic"></div>
	    </div>
	</header>

	<nav class="navbar navbar-default">
	    <div class="container">
	        <ul id="nav" class="nav navbar-nav">
	            <li><a href="/">首页</a></li>
	            @foreach ($navs as $nav)
	                <li class="dropdown">
	                    @if (sizeof($nav[1]) > 0)
	                        <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ $nav[0]->name }}<span class="caret"></span></a>
	                        <ul class="dropdown-menu" role="menu">
	                    @else
	                        <a href="{{ url('/news-page/'.$nav[0]->id.'-'.$nav[0]->model) }}"role="button" aria-expanded="false" target="_blank">{{ $nav[0]->name }}</span></a>
	                    @endif
	                    @foreach ($nav[1] as $subNav)
	                        <li><a href="{{ url('/news-page/'.$subNav->id.'-'.$subNav->model) }}" target="_blank">{{ $subNav->name }}</a></li>
	                    @endforeach
	                    @if (sizeof($nav[1]) > 0)
	                       </ul>
	                    @endif
	                </li>
	            @endforeach
	            <li><a href="/download" target="_blank">下载中心</a></li>
	        </ul>
	    </div>
	</nav>
@show

@section('javascript')
    @parent
    <script>
        $('#nav > li').width('calc(100%/' + 8 +')');
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
	</script>
@endsection