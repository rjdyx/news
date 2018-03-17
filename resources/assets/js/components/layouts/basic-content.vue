/**
 * 
 * 中间内容组件
 * @author 
 * @date 2018/03/16
 * 
 */
<template>

<div id="basic-content">
	<basic-model></basic-model>
</div>

</template>

<script>
import basicModel from 'components/common/basic-model.vue'
export default{
	name: 'basic',
	components: {
		basicModel
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

