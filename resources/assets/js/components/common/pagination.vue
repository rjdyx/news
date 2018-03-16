/**
 * 
 * 分页组件
 * @author 
 * @date 2018/03/16
 */
<template>

	<div class="pagination-wrap">
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[100, 200, 300, 400]"
			:page-size="100"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400">
		</el-pagination>
	</div>

</template>

<script>
export default{
	name: 'tabpane',
	props: {
	},
	data () {
		return {
			currentPage: 1
		}
	},
	methods: {
		handleSizeChange (val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange (val) {
			console.log(`当前页: ${val}`)
		}
	},
	components: {
	}
}
</script>
 
<style lang="sass">
.pagination{
	&-wrap{
		margin: 30px;
	}
}
</style>

