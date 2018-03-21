@section('menu')
	<div class="sidebar-menu toggle-others fixed">
		<div class="sidebar-menu-inner">
			<header class="logo-env">
				<!-- logo -->
				<div class="logo">
					<a href="/" class="logo-expanded">
						<span>HOME</span>
					</a>
					<a href="/" class="logo-collapsed">
						<i class="fa-home"></i>
					</a>
				</div>
				<!-- This will toggle the mobile menu and will be visible only on mobile devices -->
				<div class="mobile-menu-toggle visible-xs">
					<a href="#" data-toggle="mobile-menu">
						<i class="fa-bars"></i>
					</a>
				</div>
			</header>
			
			<ul id="main-menu" class="main-menu">
				<!-- add class "multiple-expanded" to allow multiple submenus to open -->
				<!-- class "auto-inherit-active-class" will automatically add "active" class for parent elements who are marked already with class "active" -->
				<li class="active opened active">
					<a href="mailbox-main.html">
						<i class="linecons-mail"></i>
						<span class="title">消息管理</span>
					</a>
					<ul>
						<li class="active">
							<a href="${adminPath}/NavForwardAction/add-article">
								<span class="title">发布消息</span>
							</a>
						</li>
						<li class="has-sub">
							<a href="${adminPath}/NavForwardAction/edit-article">
								<span class="title">编辑消息</span>
							</a>
						</li>
						<li>
							<a href="${adminPath}/NavForwardAction/downLoad">
								<span class="title">下载中心</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
				<a href="/index">
					<i class="linecons-cog"></i>
					<span class="title">导航栏管理</span>
				</a>
				<ul>
					<li>
						<a href="${adminPath}/NavForwardAction/add-nav">
							<span class="title">新增栏目</span>
						</a>
					</li>
					<li>
						<a href="${adminPath}/NavForwardAction/edit-nav">
							<span class="title">修改栏目</span>
						</a>
					</li>
				</ul>
				</li>
				<li>
					<a href="layout-variants.html">
						<i class="linecons-desktop"></i>
						<span class="title">友情链接管理</span>
					</a>
					<ul>
						<li>
							<a href="${adminPath}/NavForwardAction/add-links">
								<span class="title">新增链接</span>
							</a>
						</li>
						<li>
							<a href="${adminPath}/NavForwardAction/edit-links">
								<span class="title">编辑链接</span>
							</a>
						</li>
						<li>
							<a href="${adminPath}/NavForwardAction/manage-category">
								<span class="title">管理分类</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="ui-panels.html">
						<i class="linecons-note"></i>
						<span class="title">版权信息管理</span>
					</a>
					<ul>
						<li >
							<a href="${adminPath}/NavForwardAction/edit-copyright">
								<span class="title">修改版权信息</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="${adminPath}/NavForwardAction/pic-news">
						<i class="linecons-database"></i>
						<span class="title">图片新闻管理</span>
					</a>
				</li>
				<li>
					<a href="${adminPath}/NavForwardAction/float-pic">
						<i class="linecons-photo"></i>
						<span class="title">浮动图片管理</span>
					</a>
				</li>
				<li>
					<a href="${adminPath}/NavForwardAction/supervisor">
						<i class="linecons-user"></i>
						<span class="title">超级管理员</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
@show

@section('javascript')
@endsection