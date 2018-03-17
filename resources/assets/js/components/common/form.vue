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
		
		<el-form 
			:model="form" 
			label-width="80px">
		<template v-for="(newItem, index) in newData">
			<!-- 文本 -->
			<el-form-item
				v-if="newItem.type === 'text'"
				:label="newItem.label">
				<el-input 
					v-model="formInline[newItem.name]" 
					:placeholder="newItem.placeholder"></el-input>
			</el-form-item>
			
			<!-- 下拉选择 -->
			<el-form-item 
				v-else-if="newItem.type === 'selete' && newItem.components"
				:label="newItem.label">
				<el-select 
					v-model="formInline[newItem.name]" 
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
			
			<!-- 文本加按钮 -->
			<el-form-item
				v-else-if="newItem.type === 'textAndBtn'"
				:label="newItem.label">
					<textAndBtn 
						:placeholder="newItem.placeholder"
						:name="newItem.name"
						:arrValue="formInline[newItem.name]"
						@addOneColumn="addOneColumn"
					></textAndBtn>
			</el-form-item>

			<!-- 下拉框 -->
			<el-form-item v-else-if="newItem.type === 'selete'">
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
	
			<el-form-item>
			  	<el-button @click="cancel">取消</el-button>
			  	<el-button type="primary" @click="onSubmit">保存</el-button>
			</el-form-item>

	</el-form>
  </div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
import TextAndBtn from 'components/common/textAndBtn.vue'
export default{
	name: 'basic',
	props: {
		isNeedTitle: {
			type: Boolean,
			default: true
		},
		newData: {
			type: Array,
			default: []
		}
	},
	data () {
		let form = {}
		this.newData.forEach((formItem) => {
			if (formItem.type === 'textAndBtn') {
				form[formItem.name] = ['1', '2']
			} else {
				form[formItem.name] = ''
			}
		})
		console.log(form)
		return {
			// formInline: {
			// 	user: '',
			// 	region: ''
			// },
			formInline: form,
			title: '发布设置',
			form: {
				title: '',
				select: '',
				date: ''
			}
		}
	},
	methods: {
		/*
			取消弹窗
		 */
		cancel () {
			this.$emit('cancel')
		},

		/*
			保存
		 */
		onSubmit () {
			this.$emit('submit')
			console.log(this.formInline)
		},

		addOneColumn (obj) {
			this.formInline[obj.name] = obj.arr
		}
	},
	components: {
		TitleCommon,
		TextAndBtn
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

