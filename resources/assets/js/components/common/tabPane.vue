/**
 * 
 * 标签栏组件
 * @author 
 * @date 2018/03/16
 */
<template>

	<div class="tabpane-wrap">
		<el-tabs type="border-card">
			<el-tab-pane
				v-for="(tab, index) in tabData"
				:label="tab.label">
				{{tab.content}}
				<!-- list -->
				<Card :lists="tab.lists" 
					  :iconArr="iconArr"
					  @handleEditOpen="openEdit"></Card>
			</el-tab-pane>
		</el-tabs>
		<EditForm
			v-if="isEdit"
			:editTitle="editTitle"
			:isHasIcon="isHasIcon"
			:formtitle="formtitle"
			:newData="newData" />
	</div>

</template>

<script>
import EditForm from 'components/common/popeditForm.vue'
import Card from 'components/common/card.vue'
export default{
	name: 'tabpane',
	props: {
		tabData: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			editTitle: '编辑消息',
			formtitle: '修改设置',
			isEdit: false,
			isHasIcon: {
				class: 'el-icon-close',
				state: true
			},
			iconArr: {
				edit: true,
				delete: true
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
		onSubmit () {
			console.log('obj')
		},
		handleDelete (e) {
			this.$alert(e.target.dataset.txt, '删除消息', {
				confirmButtonText: '确定',
				callback: action => {
					this.$message({
						type: 'info',
						massage: `action: ${action}`
					})
				}
			})
		},
		openEdit () {
			this.isEdit = !this.Edit
		},
		changeState () {
			console.log('obj')
			this.isEdit = false
		}
	},
	components: {
		EditForm,
		Card
	}
}
</script>
 
<style lang="sass">
.tabpane{
	&-icon{
		float: right;
	}
}

</style>

