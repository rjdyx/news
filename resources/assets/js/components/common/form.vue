/**
 * 
 * 新增组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

  <div class="form-wrap">
	<title-common v-if="isNeedTitle" :title="title"></title-common>

	<el-form :model="formInline">
		<template v-for="(newItem, index) in newData">
			<el-form-item
				v-if="newItem.type === 'text'"
				:label="newItem.label">
				<el-input 
					v-model="formInline[newItem.name]" 
					:placeholder="newItem.placeholder"></el-input>
			</el-form-item>

			<el-form-item 
				v-else-if="newItem.type === 'selete'"
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
						v-model="formInline[newItem.name]"
						v-on:addOneColumn="addOneColumn"
					></textAndBtn>
			       	<!-- <el-input :placeholder="newItem.placeholder" v-model="formInline[newItem.name].value" class="input-with-select">
				    	<el-button slot="append" @click="addOneColumn(newItem.name)">添加</el-button>
				  </el-input>
				  <ul>
				  	<li v-for="arrItem in formInline[newItem.name].arr">{{arrItem}}</li>
				  </ul> -->
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
		},
	},
	data () {
		let form = {}
		this.newData.forEach((formItem) => {
			if (formItem.type === 'textAndBtn') {
				form[formItem.name] = {value: '', arr: []}
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
			title: '发布设置'
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

		/*
			添加一个子列表
		*/
		addOneColumn (arr) {
			console.log(arr)
			this.formInline[key].arr.push(this.formInline[key].value)
			this.formInline[key].value = ''
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
}
</style>

