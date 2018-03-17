/**
 * 
 * 浮动图片组件
 * @author 
 * @date 2018/03/17
 * 
 */
<template>

<div class="copyright-wrap">
	<div class="copyright-news">
		<title-common 
			:title="title" />
		<form-new
			:newData="formData"
			:isNeedTitle="false"
			:showFooter="false"
			@cancel="closeEditPop" />
	</div>
</div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
import FormNew from 'components/common/form.vue'

export default{
	name: 'download',
	data () {
		return {
			title: '浮动图片管理',
			popEditShow: false,
			iconState: {
				class: 'el-icon-circle-plus',
				state: true
			},
			formData: [{
				name: 'address',
				type: 'preview',
				label: '预览图:',
			},
			{
				name: 'email',
				type: 'switch',
				label: '否在首页显示:',
			},
			{
				name: 'postcode',
				type: 'file',
				value: '510642',
				label: '相关操作:',
			},
			{
				name: 'phone',
				type: 'text',
				value: '020-85285029',
				label: '关联的新闻:',
			},
			{
				name: 'submit',
				type: 'submit',
				btntype: 'primary',
				value: '保存'
			}]
		}
	},
	methods: {
		handleEditOpen () {
			this.popEditShow = true
		},
		closeEditPop () {
			this.popEditShow = false
		},
		openModel () {
			this.popNewShow = true
		},
		closeNewPop () {
			this.popNewShow = false
		}
	},
	components: {
		FormNew,
		TitleCommon,
	}
}
</script>

<style lang="sass">
  .copyright{
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
  	&-popform{
  		position: fixed;
  		width: 100%;
  		height: 100%;
  		background: rgba(0,0,0,.5);
  		top: 0;
  		left: 0;
  		z-index: 100000;
  	}
  	&-popcontent{
  		width: 50%;
  		height: 30%;
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
