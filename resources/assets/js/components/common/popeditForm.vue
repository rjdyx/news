/**
 * 
 * 发布消息组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

<div class="popedit-wrap">
	<div  class="popedit-content">
		<title-common :title="editTitle" :iconState="isHasIcon" @handleParent="closedForm" />
		<div class="publish-editor">
			<editor />
		</div>
	<div class="publish-form">
		<form-new 
			:newData="newData"
			:settitle="formtitle"
			 />
	</div>
	</div>
</div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
import Editor from 'components/common/editor.vue'
import FormNew from 'components/common/form.vue'
export default{
	name: 'PublishNews',
	props: {
		editTitle: '',
		isHasIcon: {},
		formtitle: '',
		newData: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
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
		}
	},
	components: {
		FormNew,
		Editor,
		TitleCommon
	}
}
</script>
 
<style lang="sass">
  .popedit{
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
  		width: 90%;
  		height: 90%;
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
