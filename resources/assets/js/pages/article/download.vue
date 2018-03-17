/**
 * 
 * 下载中心组件
 * @author 
 * @date 2018/03/17
 * 
 */
<template>

<div class="download-wrap">
	<div class="download-news">
		<title-common 
			:title="title" 
			:iconState="iconState"
			@handleParent="openModel"></title-common>
		<Card 
			:lists="srcLists" 
			:iconArr="iconArr" />
		<Upload v-if="isShowUpload"></Upload>
	</div>
</div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
import FormNew from 'components/common/form.vue'
import Card from 'components/common/card.vue'
import Upload from 'components/common/upload.vue'

export default{
	name: 'download',
	data () {
		return {
			title: '下载中心',
			iconState: {
				class: 'el-icon-circle-plus',
				state: true
			},
			srcLists: [{
				txt: '图片1.png',
				delete: 'el-icon-delete'
			}],
			iconArr: {
				delete: true
			},
			isShowUpload: false
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
		openModel () {
			this.isShowUpload = true
		},
		changeState () {
			this.isShowUpload = false
		}
	},
	components: {
		FormNew,
		TitleCommon,
		Card,
		Upload
	}
}
</script>

<style lang="sass">
  .download{
  	&-wrap{
  		background: #eee;
  	}
  	&-news{
  		padding: 20px;
  		background: #fff;
  	}
  	&-title{
		border-bottom: 2px solid #f5f5f5;
  		font-size: 17px;
  		padding: 0 0 15px;
  	}
  	&-form{
  		background: #fff;
  		margin-top: 20px;
  	}
  }
</style>
