<template>
	<div class="addColumn">
		<el-card class="box-card">
		   <ColumnForm 
				:newData="formSetting.formData" 
				:isNeedTitle="formSetting.isNeedTitle"
				:showFooter="formSetting.showFooter"
				v-on:submit="submit">
			</ColumnForm>
		</el-card>
	</div>
</template>

<script>
import ColumnForm from 'components/common/form'
export default{
	name: 'addColumn',
	components: {
		ColumnForm
	},
	data () {
		return {
			formSetting: {
				isNeedTitle: true,
				title: '添加栏目',
				formData: [
					{
						name: 'column',
						type: 'text',
						label: '主栏目',
						placeholder: '长度：1~20',
						// options:
					},
					{
						name: 'subColumn',
						type: 'textAndBtn',
						label: '子栏目',
						placeholder: '长度：1~20'
					},
					{
						name: 'submit',
						type: 'submit',
						btntype: 'submit',
						value: '保存'
					}
				],
				showFooter: false
			}
		}
	},
	methods: {
		submit () {
			// this.$set(this.dialogSetting, 'dialogFormVisible', false)
		}
	}
}
</script>

<style lang="sass" scoped>
.addColumn{
  	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 480px;
		margin: 0 auto;
	}
}
	
</style>
