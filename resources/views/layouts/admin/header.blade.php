@section('header')
	<!-- 用户栏 -->
	<nav class="navbar user-info-navbar" role="navigation">
		<ul class="user-info-menu left-links list-inline list-unstyled">
			<li class="hidden-sm hidden-xs">
				<a href="#" data-toggle="sidebar">
					<i class="fa-bars"></i>
				</a>
			</li>
		</ul>
		<ul class="user-info-menu right-links list-inline list-unstyled">
			<li class="dropdown user-profile">
				<a href="#" data-toggle="dropdown">
					<img src="{{ url('images/user-4.png') }}" alt="user-image" class="img-circle img-inline userpic-32" width="28" />
					<span>
						{{ auth::user()->name }}
						<i class="fa-angle-down"></i>
					</span>
				</a>

				<ul class="dropdown-menu user-profile-menu list-unstyled">
					<li>
						<a href="{{ url('admin/edit-user') }}">
							<i class="fa-edit"></i>
							修改密码
						</a>
					</li>
					<li>
						<a href="/logout">
							<i class="fa-wrench"></i>
							退出登录
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
@show

@section('javascript')
@endsection