/**
 * 
 * 侧边栏组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>
	<el-menu
		:collapse="isCollapse"
		background-color="#2c2e2f"
		text-color="#fff"
		active-text-color="#ffd04b">
			<div class="sidebar-logo">
				HOME
			</div>
			<template v-for="(menu, index) in menus">
				<el-submenu
					v-if="menu.children"
					:index="menu.name"
					:key="index"
					:router="$route.path">
					<template slot="title">
						<i :class="menu.icon"></i>
						<span slot="title">
							{{menu.name}}
						</span>
					</template>
					<template v-for="(subMenu, subIndex) in menu.children">
						<el-menu-item v-if="!subMenu.children"
							:index="subMenu.path">{{subMenu.name}}</el-menu-item>
						<el-submenu
							v-else
							:index="subMenu.path">
							<template slot="title">{{subMenu.name}}</template>
							<el-menu-item 
							v-for="(childMenu, childIndex) in subMenu.children"
							:index="childMenu.path"
							:key="childIndex"
							>{{childMenu.name}}</el-menu-item>
					  	<el-submenu
					  		v-else
					  		:key="subIndex"
					  		:index="subMenu.path">
					  		<template slot="title">{{subMenu.name}}</template>
						  <el-menu-item 
						  	v-for="(childMenu, childIndex) in subMenu.children"
						  	:index="childMenu.path"
						  	:key="childIndex"
						  	@click="open(childMenu.path)"
						  	>{{childMenu.name}}</el-menu-item>
						</el-submenu>
					</template>
				</el-submenu>
				<el-menu-item
					v-else
					:index="menu.name"
					:key="index">
					<i :class="menu.icon"></i>
					<span slot="title">
						{{menu.name}}
					</span>
				</el-menu-item>
			</template>
    </el-menu>
</template>

<script>
export default {
	name: 'SideBar',
	props: {
		menus: {
			type: Array,
			default () {
				return []
			}
		},
		Collapse: Boolean,
	},
	data () {
		return {
			isCollapse: false
		}
	},
	watch: {
		Collapse (nv) {
			this.isCollapse = nv
		}
	},
<<<<<<< HEAD
=======
	mounted () {
	},
	methods: {
		open (path) {
			console.log(path)
		}
	}
>>>>>>> Denton
}
</script>
 
<style lang="sass" scoped>
	.sidebar{
		height: 100%;
<<<<<<< HEAD
=======
		&-wrap{
			position: absolute;
			left: 0;
			top: 0;
			width: 309px;
			height: 1000px;
			margin-right: 309px;
		}
>>>>>>> Denton
		&-logo{
			width: 100%;
			height: 89px;
			font-size:20px;
			color: #fff;
			text-align: center;
			line-height: 89px;
		}
	}
</style>
