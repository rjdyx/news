/**
 * 
 * 卡片列表组件
 * @author 
 * @date 2018/03/17
 */
<template>

	<div class="tabpane-wrap">
		<!-- list -->
		<el-card>
			<div class="bottom clearfix" 
				v-for="(list, liIndex) in lists">
			  	<span class="time">{{list.txt}}</span>
			  	<div class="tabpane-icon">
			  		<i :class="list.edit" @click="handleEdit" v-if="iconArr.edit" />
			  		<i :class="list.delete" :data-txt="list.txt" v-if="iconArr.delete" @click="handleDelete" />
			 	</div>
			</div>
		</el-card>
	</div>

</template>

<script>
export default{
	name: 'tabpane',
	props: {
		lists: {
			type: Array,
			default () {
				return []
			}
		},
		iconArr: {}
	},
	data () {
		return {
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
		handleEdit () {
			this.$emit('handleEditOpen')
		}
	},
	components: {
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

