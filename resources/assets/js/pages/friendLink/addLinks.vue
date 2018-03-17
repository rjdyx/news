/**
 * 
 * 新增链接组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

<div class="addLinks-wrap">
	<div class="publish-form">
		<form-new :newData="newData" 
			:settitle="settitle"
			:showFooter="false"></form-new>
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
			settitle: '添加友情链接',
			newData: [{
				name: 'title',
				type: 'text',
				placeholder: '长度：1~100',
				label: '链接名称:',
			},
			{
				name: 'address',
				type: 'text',
				placeholder: '格式如：http://www.scau.cn',
				label: '链接地址:',
			},
			{
				name: 'title',
				type: 'selete',
				placeholder: '格式如：http://www.scau.cn',
				label: '链接分类:',
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
				}]
			},
			{
				name: 'title',
				type: 'submit',
				value: '确定',
				btntype: 'success'
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
