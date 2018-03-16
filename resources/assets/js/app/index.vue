<template>

  <div class="wrap">
	  	<my-header @change="changcol">
	  	</my-header>
	  	<side-bar
	  		:menus="menus"
	  		:show="show"
	  		:Collapse="isCollapse"
	  	></side-bar>
		<router-view></router-view>
  </div>

</template>

<script>
import MyHeader from '../components/layouts/header.vue'
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
		MyHeader,
		SideBar
	},
	methods: {
		changcol () {
			this.isCollapse = !this.isCollapse
			console.log('rhue')
		}
	}
}
</script>

<style>
  .wrap {
  	width: 100%;
  	height: 1000px;
    background: #eeeeee;
  }
</style>

