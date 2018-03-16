/**
 * 
 * 公共模块组件
 * @author 
 * @date 2018/03/16
 * 
 */
<template>

	<div id="basic-model">
		呵呵呵呵好
		<tab-pane></tab-pane>
	</div>

</template>

<script>
import tabPane from 'components/common/tabPane.vue'
export default{
	name: 'basicModel',
	components: {
		tabPane
	}
}
</script>

<style>
  #basic{
  	width: 82%;
	position: absolute;
	left: 309px;
	top: 76px;
	background: #eee;
	margin: 20px 0 0 20px;
  }
</style>

