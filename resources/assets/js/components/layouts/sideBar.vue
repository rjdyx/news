/**
 * 
 * 侧边栏组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>
    <div class="sidebar-wrap">
		<el-menu
			:collapse="Collapse"
			class="sidebar"
			background-color="#545c64"
      		text-color="#fff"
      		active-text-color="#ffd04b">
      		<div class="sidebar-logo">
	    		HOME
	    	</div>
			<template v-for="(menu, index) in menus">
				<el-submenu
					v-if="menu.children"
					:index="menu.name"
					:key="index">
					<template slot="title">
					 	{{menu.name}}
					</template>
					<template v-for="(subMenu, subIndex) in menu.children">
						<el-menu-item v-if="!subMenu.children"
					  		:index="subMenu.path"
					  		@click="open(subMenu.path)"
					  		:key="subIndex"
					  		exact>{{subMenu.name}}</el-menu-item>
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
					{{menu.name}}
				</el-menu-item>
			</template>
    </el-menu>
    </div>
</template>

<script>
export default {
	name: 'SideBar',
	data () {
		return {
		}
	},
	props: {
		menus: {
			type: Array,
			default () {
				return []
			}
		},
		Collapse: false
	},
	mounted () {
	},
	methods: {
		open (path) {
			console.log(path)
		}
	}
}
</script>
 
<style lang="sass">
	.sidebar{
		width: 100%;
		height: 100%;
		&-wrap{
			position: absolute;
			left: 0;
			top: 0;
			width: 309px;
			height: 1000px;
			margin-right: 309px;
		}
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
