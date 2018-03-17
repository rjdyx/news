/**
 * 
 * 上传组件组件
 * @author 
 * @date 2018/03/17
 * 
 */
<template>

<div class="upload-wrap">
	<div  class="upload-content">
		<div >
		<title-common :title="title" :iconState="iconState" @handleParent="closedForm" />
		<el-tabs type="border-card">
			<el-tab-pane label="插入图片">
				<el-upload
				  	action="https://jsonplaceholder.typicode.com/posts/"
				  	list-type="picture-card"
				  	:on-remove="handleRemove">
				  	点击上传
				</el-upload>
			</el-tab-pane>
			
			<el-tab-pane label="本地上传">
			</el-tab-pane>
			<el-tab-pane label="在线管理">
			</el-tab-pane>
			<el-tab-pane label="图片搜索">
			</el-tab-pane>
			
		</el-tabs>
		<div class="upload-operate">
			<el-button type="primary" @click="onSubmit">确认</el-button>
    		<el-button @click="closedForm">取消</el-button>
		</div>
		</div>
	</div>
</div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
export default{
	name: 'PublishNews',
	data () {
		return {
			iconState: {
				class: 'el-icon-close',
				state: true
			},
			title: '多图上传'
		}
	},
	methods: {
		closedForm () {
			this.$emit('changeState')
		},
		handleRemove () {
			console.log('obj')
		},
		onSubmit () {
			console.log('obj')
		}

	},
	components: {
		TitleCommon
	}
}
</script>
 
<style lang="sass">
  .upload{
  	&-wrap{
  		position: fixed;
  		width: 100%;
  		height: 100%;
  		background: rgba(0,0,0,.5);
  		top: 0;
  		left: 0;
  		z-index: 100000;
  	}
  	&-content{
  		width: 50%;
  		height: 50%;
  		top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
  		position: absolute;
  		background: #fff;
  		padding: 20px;
  	}
  	&-operate{
  		position: absolute;
  		bottom: 10%;
  		right: 10%;
  	}
  }
</style>
