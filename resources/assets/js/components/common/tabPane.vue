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
				<el-card>
					<div class="bottom clearfix" 
						v-if="tab.lists"
						v-for="(list, liIndex) in tab.lists">
					  	<span class="time">{{list.txt}}</span>
					  	<div class="tabpane-icon">
					  		<i :class="list.edit" />
					  		<i :class="list.delete" />
					 	</div>
					</div>
				</el-card>
			</el-tab-pane>
		</el-tabs>
	</div>

</template>

<script>
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
		}
	},
	methods: {
		onSubmit () {
			console.log('obj')
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

