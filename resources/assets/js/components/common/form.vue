/**
 * 
 * 新增组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

  <div class="form-wrap">
  	
	<title-common :title="settitle"></title-common>
		
		<el-form 
			:model="form" 
			:class="formCss"
			label-width="80px">

		<template v-for="(newItem, index) in newData">
			<!-- 文本 -->
			<el-form-item
				v-if="newItem.type === 'text'"
				:label="newItem.label">
				<el-input 
					v-model="form.title"
					:placeholder="newItem.placeholder"></el-input>
			</el-form-item>
			
			<!-- 下拉选择 -->
			<el-form-item 
				v-else-if="newItem.type === 'selete' && newItem.components"
				:label="newItem.label">
				<template v-for="(lotsItem, lotsIndex) in newItem.components">
					<el-select 
						v-model="form.select" 
						:placeholder="lotsItem.placeholder">
						<el-option
							v-for="(item, itemIndex) in lotsItem.options"
							:label="item.label"
							:key="itemIndex"
							:value="item.value">
						</el-option>
					</el-select>
				</template>
				
			</el-form-item>

			<!-- 时间 -->
			<el-form-item
			 	v-else-if="newItem.type === 'time'"
			 	:label="newItem.label">
			        <el-date-picker
			        	type="date"
			        	v-model="form.date"
			        	:placeholder="newItem.placeholder"
			        	></el-date-picker>
			</el-form-item>
				
				<!-- submit -->
 				<el-form-item
			 	v-else-if="newItem.type === 'submit'">
			        <el-button
			        	:type="newItem.btntype"
			        	>
			        	<span v-if="newItem.icon">
			        		<i :class="newItem.icon"></i>
			        	</span>
			        {{newItem.value}}</el-button>
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
		newData: [],
		formCss: {},
		settitle: ''
	},
	data () {
		return {
			form: {
				title: '',
				select: '',
				date: ''
			}
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
	&-demo{
		width: 70%;
		margin: 0 auto;
		padding: 20px;
		.el-select{
			margin-right: 30px
		}
	}
}
</style>

