<template>
	<div class="editColumn">
	<el-row :gutter="10">
		<el-col :sm="24" :md="12" :lg="8" v-for="(item, i) in data" :key="i">

		 	<!-- 卡片 -->
			<el-card class="box-card">
			    <div slot="header" class="clearfix">
			        <span>{{item.column}}</span>
			        <span style="float: right; padding: 3px 0" type="text">
			        	<i class="el-icon-edit mr10 pointer" @click="editColumn(i)"></i>
			        	<i class="el-icon-delete pointer" @click="delColumn(i)"></i>
			        </span>
			    </div>
			    <ul>
			    	<li v-for="(sItem, sI) in item.subColumn" :key="sI" class="text">{{sItem}}</li>
			    </ul>
			</el-card>
			
			<!-- 弹出框 -->
			<el-dialog 
			:title="dialogSetting.formTitle" 
			:visible.sync="dialogSetting.dialogArr[i]"
			:close-on-click-modal="dialogSetting.closeModel">
				<ColumnForm 
					:newData="formSetting.formData"
					:data="data[i]"
					:isNeedTitle="formSetting.isNeedTitle"
					:type="formSetting.type"
					v-on:cancel="cancel(i)"
					v-on:submit="submit(i)">
				</ColumnForm>
			</el-dialog>

		</el-col>
		
	</el-row>
		
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
			// 所有的栏目数据
			data: [],

			dialogSetting: {
				title: 'editColumn',
				closeModel: false,
				formTitle: '栏目',
				// 哪一个栏目信息
				dialogArr: []
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
				],
				// form的类型：add/edit
				type: 'eidt'
			}
		}
	},
	mounted () {
		let data = [
			{
				column: '部门职能',
				subColumn: []
			},
			{
				column: '科研平台',
				subColumn: [
					'国家级',
					'农业部',
					'教育部',
					'国土资源部',
					'广东省发改委',
					'广东省科技厅'
				]
			},
			{
				column: '平台管理办法',
				subColumn: []
			},
			{
				column: '政策法规',
				subColumn: []
			},
			{
				column: '联系我们',
				subColumn: []
			}
		]
		this.data = data
		let dialogArr = []
		this.data.forEach((item, i) => {
			dialogArr.push(false)
		})
		this.$set(this.dialogSetting, 'dialogArr', dialogArr)
	},
	methods: {
		editColumn (i) {
			this.$set(this.dialogSetting.dialogArr, i, true)
			this.$set(this.dialogSetting, 'formTitle', '编辑栏目')
		},
		delColumn (i) {
			console.log('delColumn')
			this.$confirm('您确定要删除吗?', '信息', {
				cancelButtonText: '取消',
				confirmButtonText: '确定',
				type: 'error'
			}).then(() => {
				this.dialogSetting.dialogArr.splice(i, 1)
				this.data.splice(i, 1)
				this.$message({
					type: 'info',
					message: '删除成功'
				})
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				})
			})
		},
		cancel (i) {
			this.$set(this.dialogSetting.dialogArr, i, false)
		},
		submit (i) {
			// let dialogArr = this.dialogSetting.dialogArr
			// dialogArr[i] = false
			this.$set(this.dialogSetting.dialogArr, i, false)
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
		// max-width: 480px;
		// min-width: 300px;
		height: 260px;
		margin-bottom: 10px;
	}
}
	
</style>
