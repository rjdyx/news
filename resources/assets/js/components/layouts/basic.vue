/**
 * 
 * 中间内容组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

  <div id="basic">
  	<router-view></router-view>
  </div>

</template>

<script>
export default{
	name: 'basic'
}
</script>

<style>
  #basic{
	position: absolute;
	left: 309px;
	top: 76px;
	background: #eee;
	margin: 20px 0 0 20px;
  }
</style>

