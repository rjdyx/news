/**
 * 
 * 图片新闻列表组件
 * @author 
 * @date 2018/03/17
 * 
 */
<template>

<div class="pic-wrap">
	<div class="pic-news">
		<title-common 
			:title="title"></title-common>
		<Card 
			:lists="srcLists" 
			:iconArr="iconArr"
			@handleEditOpen="handleEditOpen" />
		<div class="pic-newBtn">
			<el-button @click="openNew">新增</el-button>
		</div>
		<!-- 编辑 -->
		<div class="manage-popform" v-if="popEditShow">
			<div class="manage-popcontent">
				<pop-form 
					:editTitle="editTitle"
					:isHasIcon="isHasIcon"
					:formtitle="formtitle"
					:newData="editData"/>
			</div>
		</div>
	</div>
</div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
import PopForm from 'components/common/popeditForm.vue'
import Card from 'components/common/card.vue'

export default{
	name: 'download',
	data () {
		return {
			title: '图片新闻列表:',
			editTitle: '新增消息',
			formtitle: '修改设置',
			popEditShow: false,
			isHasIcon: {
				class: 'el-icon-close',
				state: true
			},
			srcLists: [{
				txt: '国家发改委',
				delete: 'el-icon-delete',
				edit: 'el-icon-edit-outline'
			}],
			iconArr: {
				edit: true,
				delete: true
			},
			editData: [{
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
		handleEditOpen () {
			this.popEditShow = true
		},
		closeEditPop () {
			this.popEditShow = false
		},
		openNew () {
			this.popEditShow = true
		},
		changeState () {
			this.popEditShow = false
		}
	},
	components: {
		PopForm,
		TitleCommon,
		Card,
	}
}
</script>

<style lang="sass">
  .pic{
  	&-wrap{
  		background: #eee;
  	}
  	&-news{
  		padding: 20px;
  		background: #fff;
  		overflow: hidden;
  	}
  	&-title{
		border-bottom: 2px solid #f5f5f5;
  		font-size: 17px;
  		padding: 0 0 15px;
  	}
  	&-newBtn{
  		margin-top: 20px;
  		float: right;
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
