<template>
  <div class="addColumn">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default{
	name: 'addColumn',
	data () {
		return {
			title: 'addColumn'
		}
	},
}
</script>

<style>
.addColumn{
	border-bottom: 2px solid #f5f5f5;
  	padding: 0 0 15px;
  	margin-bottom: 20px;
}
</style>
