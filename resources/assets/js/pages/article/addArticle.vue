/**
 * 
 * 发布消息组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

<div class="publish-wrap">
	<div class="publish-news">
			<title-common :title="title"></title-common>
			<div class="publish-editor">
				<quill-editor v-model="content"
		            ref="myQuillEditor"
		            :options="editorOption"
		            @blur="onEditorBlur($event)"
		            @focus="onEditorFocus($event)"
		            @ready="onEditorReady($event)">
				</quill-editor>
			</div>
	</div>
	<div class="publish-form">
		<form-new :newData="newData" :formCss="formCss" :settitle="settitle"></form-new>
	</div>
</div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
import FormNew from 'components/common/form.vue'
export default{
	name: 'PublishNews',
	data () {
		return {
			editorOption: {},
			content: '',
			title: '内容编写：',
			settitle: '发布设置',
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
		}
	},
	components: {
		FormNew,
		TitleCommon
	}
}
</script>

<style lang="sass">
  .publish{
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
