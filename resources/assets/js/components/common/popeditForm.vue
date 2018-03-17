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
		<div >
		<title-common :title="title" :iconState="iconState" @handleParent="closedForm"></title-common>
		<div class="publish-editor">
			<editor></editor>
		</div>
	</div>
	<div class="publish-form">
		<form-new :newData="newData" :formCss="formCss"></form-new>
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
	data () {
		return {
			editorOption: {},
			content: '',
			iconState: {
				class: 'el-icon-close',
				state: true
			},
			title: '编辑消息',
			formCss: {
				width: '70%',
				margin: '0 auto',
				padding: '20px'
			},
			newData: [{
				name: 'title',
				type: 'text',
				placeholder: '标题长度：1~255',
				label: '消息标题:',
			},
			{
				name: 'title',
				type: 'selete',
				label: '所属栏目:',
				components: [{
					options: [{
						value: '亩',
						label: '亩'
					},
					{
						value: '平方米',
						label: '平方米'
					},
					{
						value: '公顷',
						label: '公顷'
					}]
				},
				{
					options: [{
						value: '亩',
						label: '亩'
					},
					{
						value: '平方米',
						label: '平方米'
					},
					{
						value: '公顷',
						label: '公顷'
					}]
				}]
			},
			{
				name: 'title',
				type: 'time',
				placeholder: '请写入标题',
				label: '发布日期:'
			},
			{
				name: 'title',
				type: 'submit',
				btntype: 'success',
				value: '发布',
				icon: 'el-icon-check'
			}]
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
