<template>
	<div class="w100 h100">
		<side-bar
			:class="['h100', 'pull-left', `${isCollapse ? 'smallSide' : 'largeSide'}`]"
			:menus="menus"
			:Collapse="isCollapse"
		>
		</side-bar>
		<el-container :class="['h100', 'pull-left', `${isCollapse ? 'largeContainer' : 'smallContainer'}`]">
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
	</div>
</template>

<script>
import SideBar from '../components/layouts/sideBar.vue'
import menu from './menu.js'
export default{
	name: 'index',
	components: {
		SideBar
	},
	data () {
		return {
			menus: [],
			isCollapse: false,
			dynamicNav: [],
		}
	},
	beforeRouteEnter (to, from, next) {
		axios.get('/admin/nav')
			.then(res => {
				let menus = menu
				menus.forEach(m => {
					if (m.name === '消息管理') {
						m.children.forEach(subm => {
							if (subm.path === '/edit-article') {
								res.data.forEach(rd => {
									subm.children.push({
										path: `/edit-model/${rd[0].sequence}`,
										name: rd[0].name
									})
								})
							}
						})
					}
				})
				next(vm => {
					vm.dynamicNav = res.data
					vm.menus = menus
				})
			})
	},
	methods: {
		collapse () {
			this.isCollapse = !this.isCollapse
		}
	},
	mounted () {
		console.log(this.$route)
	}
}
</script>
<style lang="sass" scoped>
    .header{
        background: #fff;
        // 默认高度60px
        line-height: 60px;
    }
    .largeContainer {
    	width: calc(100% - 64px);
    }
	.smallContainer {
    	width: calc(100% - 250px);
	}
	.largeSide {
		width: 249px;
	}
	.smallSide {
		width: 63px;
	}
</style>
