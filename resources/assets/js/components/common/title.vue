<template>

  <div class="common-title">
    <h2 class="title">{{title}}</h2>
    	<i :class="iconState.class" v-if="iconState.state" @click="handle"></i>
  </div>

</template>

<script>
export default{
	name: 'common-title',
	props: {
		title: '',
		iconState: {
			type: Object,
			default () {
				return {}
			}
		}
	},
	methods: {
		handle () {
			this.$emit('handleParent')
		}
	}
}
</script>

<style lang="sass">
.common-title{
	border-bottom: 2px solid #f5f5f5;
  	padding: 0 0 15px;
  	margin-bottom: 20px;
  	.title {
		display: inline-block;
  	}
  	i{
  		float: right;
  	}
}
</style>
