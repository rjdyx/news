<template>

  <div class="common-title">
    <h2>{{title}}</h2>
  </div>

</template>

<script>
export default{
	name: 'title',
	props: {
		title: ''
	}
}
</script>

<style>
.common-title{
	border-bottom: 2px solid #f5f5f5;
  	padding: 0 0 15px;
  	margin-bottom: 20px;
}
</style>
