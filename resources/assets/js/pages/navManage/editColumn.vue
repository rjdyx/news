<template>
  <div class="editColumn">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default{
	name: 'editColumn',
	data () {
		return {
			title: 'editColumn'
		}
	},
}
</script>

<style>
.editColumn{
	border-bottom: 2px solid #f5f5f5;
  	padding: 0 0 15px;
  	margin-bottom: 20px;
}
</style>
