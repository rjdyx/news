/**
 * 
 * 编辑链接组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

<div class="indexnews-wrap">
	<div class="indexnews-news">
		<tab-pane :tabData="tabData" />
	</div>
</div>

</template>

<script>
import TabPane from 'components/common/tabPane.vue'
export default{
	name: 'IndexNews',
	data () {
		return {
			tabData: [{
				label: '最新消息',
				lists: [{
					txt: '广东省果蔬农产品冷链物流装备工程技术研究中心建设论证会在我校召开',
					edit: 'el-icon-edit-outline',
					delete: 'el-icon-delete'
				},
				{
					txt: '广东省果蔬农产品冷链物流装备工程技术研究中心建设论证会在我校召开',
					edit: 'el-icon-edit-outline',
					delete: 'el-icon-delete'
				}]
			},
			{
				label: '最新消息'
			},
			{
				label: '最新消息'
			},
			{
				label: '最新消息'
			}]
		}
	},
	methods: {
	},
	components: {
		TabPane
	}
}
</script>

<style lang="sass">
</style>
