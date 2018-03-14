<header>
	<div class="header_wrap">
		<div class="header_logo"></div>
		<div class="header_right"></div>
		<div class="header_txt">
			<span>修德</span>
			<span>博学</span>
			<span>求实</span>
			<span>创新</span>
		</div>
	</div>
</header>
<nav class="navbar navbar-default">
	<div class="container">
		<ul class="nav navbar-nav" id="nav">
		<?php 
			$navs = ['首页', '首页','首页','首页','首页','首页']
			?>
		@foreach ($navs as $nav)
		<li class="dropdown">
			<a href="{{url('test')}}" target="_blank">{{$nav}}</a>
		</li>
		@endforeach
	</ul>
	</div>
</nav>
<style>
	.navbar-default{
		text-align: center;
		background: #fff;
		border-top: 1px solid #ebebeb;
	}
	nav{
		border: 0px !important;
		box-shadow: 0 5px 15px rgba(0,0,0,0.2);
		font-weight: 700;
	}
	#nav{
		width: 1000px;
		margin: 0 auto;
	}
	.navbar-default ul.navbar-nav{
		float: none;
	}
	.navbar-default li a:hover, .navbar-default li a:focus{
		color: #054e75;
	}
	.navbar-default li{
		width: calc(14.2857%);
	}
	.dropdown:hover{
		background: #e7e7e7;
	}
	header{
		background: #0e3856;
	}
	.header_wrap{
		width: 1000px;
		height: 175px;
		position: relative;
		margin: 0 auto;
	}
	.header_logo{
		width: 633px;
		height: 111px;
		top: 20px;
		left: -45px;
		position: absolute;
		background: url(image/logo_01.png);
	}
	.header_right{
		position: absolute;
		background: url(image/banner.jpg);
		width: 428px;
		height: 155px;
		bottom: 0px;
		right: -30px;
	}
	.header_txt{
		color: #fff;
		font-size: 20px;
		width: 200px;
		height: 60px;
		position: absolute;
		left: -45px;
		bottom: 15px;
	}
	.header_txt span{
		width: 20px;
		display: inline-block;
		margin-left: 15px;
		font-weight: bold;
		font-family: "STXingkai","STKaiti";
		bottom: 20px;
	}
</style>
<style>
	
</style>