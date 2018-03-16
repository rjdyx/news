/**
 * 
 * 新增组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

  <div class="form-wrap">
	<title-common :title="title"></title-common>

	<el-form :model="formInline">
		<template v-for="(newItem, index) in newData">
			<el-form-item
				v-if="newItem.type === 'text'"
				:label="newItem.label">
				<el-input 
					v-model="formInline.user" 
					:placeholder="newItem.placeholder"></el-input>
			</el-form-item>

			<el-form-item 
				v-else-if="newItem.type === 'selete'"
				:label="newItem.label">
				<el-select 
					v-model="formInline.region" 
					:placeholder="newItem.placeholder">
					<el-option
						v-for="item in newItem.options"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>

			 <el-form-item
			 	v-else-if="newItem.type === 'time'"
			 	:label="newItem.label">
			        <el-date-picker
			        	type="date"
			        	:placeholder="newItem.placeholder"
			        	></el-date-picker>
			  </el-form-item>

		</template>

	</el-form>
  </div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
export default{
	name: 'basic',
	props: {
		newData: []
	},
	data () {
		return {
			formInline: {
				user: '',
				region: ''
			},
			title: '发布设置'
		}
	},
	methods: {
		onSubmit () {
			console.log('obj')
		}
	},
	components: {
		TitleCommon
	}
}
</script>

<style lang="sass">
.form{
	&-wrap{
		padding: 20px;
	}
}
</style>

