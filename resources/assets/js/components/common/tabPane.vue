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
		<EditForm v-if="isEdit"></EditForm>
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
			isEdit: false,
			iconArr: {
				edit: true,
				delete: true
			}
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

