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
			<el-tab-pane label="上传附件">
			</el-tab-pane>
			
			<el-tab-pane label="在线附件">
				
			</el-tab-pane>
		</el-tabs>
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
			title: '附件'
		}
	},
	methods: {
		onEditorBlur (quill) {
			console.log(quill)
		},
		onEditorFocus (quill) {
			console.log(quill)
		},
		onEditorReady (quill) {
			console.log(quill)
		},
		closedForm () {
			this.$parent.changeState()
		},
		handlePreview () {
			console.log('obj')
		},
		handleRemove () {
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
  }
</style>
