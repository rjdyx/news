<template>
	<div class="editColumn">
	    <el-card class="box-card">
		    <div slot="header" class="clearfix">
		        <span>卡片名称</span>
		        <span style="float: right; padding: 3px 0" type="text">
		        	<i class="el-icon-edit mr10 pointer" @click="editColumn"></i>
		        	<i class="el-icon-delete pointer" @click="delColumn"></i>
		        </span>
		    </div>
		    <div v-for="o in 4" :key="o" class="text item">
		        {{'列表内容 ' + o }}
		    </div>
		</el-card>
		<el-dialog 
		:title="dialogSetting.formTitle" 
		:visible.sync="dialogSetting.dialogFormVisible"
		:close-on-click-modal="dialogSetting.closeModel">
			<ColumnForm :newData="formSetting.formData" :isNeedTitle="formSetting.isNeedTitle" v-on:cancel="cancel" v-on:submit="submit"></ColumnForm>
		</el-dialog>
	</div>
</template>

<script>
import ColumnForm from 'components/common/form'
export default{
	name: 'editColumn',
	components: {
		ColumnForm
	},
	data () {
		return {
			dialogSetting: {
				title: 'editColumn',
				dialogTableVisible: false,
				dialogFormVisible: false,
				closeModel: false,
				formTitle: '栏目',
			},
			formSetting: {
				isNeedTitle: false,
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
					}
				]
			}
		}
	},
	methods: {
		editColumn () {
			this.$set(this.dialogSetting, 'dialogFormVisible', true)
			this.$set(this.dialogSetting, 'formTitle', '编辑栏目')
		},
		delColumn () {
			console.log('delColumn')
		},
		cancel () {
			this.$set(this.dialogSetting, 'dialogFormVisible', false)
		},
		submit () {
			this.$set(this.dialogSetting, 'dialogFormVisible', false)
		}
	}
}
</script>

<style lang="sass">
.editColumn{
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
	}
}
	
</style>
