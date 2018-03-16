<template>
	<el-container class="w100 h100">
		<el-aside>
			<side-bar
				:menus="menus"
				:show="show"
				:Collapse="isCollapse"
			></side-bar>
		</el-aside>
		<el-container>
			<el-header class="header">
				<div class="pull-left">
					<i :class="isCollapse ? ['el-icon-d-arrow-right'] : ['el-icon-d-arrow-left']" @click="collapse"></i>
				</div>
				<div class="pull-right">
					<el-dropdown>
						<span>
							<Avatar icon="person" />
							用户名
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>
								<Icon type="compose" />修改密码
							</el-dropdown-item>
							<el-dropdown-item>
								<Icon type="wrench" />退出登录
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import SideBar from '../components/layouts/sideBar.vue'
import menu from './menu.js'
export default{
	name: 'index',
	data () {
		return {
			show: true,
			menus: menu,
			isCollapse: false
		}
	},
	components: {
		SideBar
	},
	methods: {
		collapse () {
			this.isCollapse = !this.isCollapse
		},
	}
}
</script>
<style lang="sass" scoped>
    .header{
        background: #fff;
        // 默认高度60px
        line-height: 60px;
    }
</style>
