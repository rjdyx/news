/**
 * 
 * 新增组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>

  <div class="form-wrap">
  	
	<title-common :title="settitle" v-if="isNeedTitle"></title-common>
		
		<el-form 
			:model="form" 
			label-width="120px">
		<template v-for="(newItem, index) in newData">

			<!-- 预览图 -->
			<el-form-item
				v-if="newItem.type === 'preview'"
				:label="newItem.label">
				<img src="image/test.jpg" alt="" class="form-preview">
			</el-form-item>

			<!-- 文本 -->
			<el-form-item
				v-if="newItem.type === 'text'"
				:label="newItem.label">
				<el-input
					:value="newItem.value"
					v-model="formInline[newItem.name]" 
					:placeholder="newItem.placeholder" />
			</el-form-item>
			
			<!-- 时间 -->
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

			<!-- 多个下拉框【修改14:41】 -->
			<el-form-item 
				v-else-if="newItem.type === 'selete'"
				:label="newItem.label">
					<el-select
						v-model="form.select"
						v-for="(lotsItem, lotsIndex) in newItem.components">
						<el-option
							v-for="(item, itemIndex) in lotsItem.options"
							:label="item.label"
							:key="itemIndex"
							:value="item.value">
						</el-option>
					</el-select>
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

			<!-- 开关 -->
			<el-form-item
			 	v-else-if="newItem.type === 'switch'"
			 	:label="newItem.label">
			        <el-switch
					  	v-model="form.switch"
					  	active-color="#eee"
					  	inactive-color="#13ce66">
					</el-switch>
			</el-form-item>

			<!-- 多行文本 -->
			<el-form-item
			 	v-else-if="newItem.type === 'textarea'"
			 	:label="newItem.label">
			        <el-input 
			        	:value="newItem.value"
			        	type="textarea" 
			        	v-model="form.desc" />
			</el-form-item>

			<!-- file -->
			<el-form-item
			 	v-else-if="newItem.type === 'file'"
			 	:label="newItem.label">
			 		<el-button type="default" @click="openUpload">
			 			<i class="el-icon-picture-outline"></i>
			 			选择图片
			 		</el-button>
			        <multiple-upload 
			        	v-if="isShowUpload"
			        	@changeState="changeState"/>
			        <el-button type="default" @click="openNews">
			 			<i class="el-icon-document"></i>
			 			关联新闻</el-button>
			 		<div class="form-popform" v-if="popNews">
						<div class="form-popcontent">
							<title-common :title="NewsTitle" />
							<card 
								:lists="lists"
								:iconArr="iconArr"
								:hasCheck="hasCheck"
								/>
							<page></page>
							<el-button type="primary" @click="CloseNews">
					 			确定
					 		</el-button>
						</div>
					</div>
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
	
			<el-form-item v-if="isNeedOperate">
			  	<el-button @click="cancel">取消</el-button>
			  	<el-button type="primary" @click="onSubmit">保存</el-button>
			</el-form-item>

	</el-form>
  </div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
import TextAndBtn from 'components/common/textAndBtn.vue'
import MultipleUpload from 'components/common/multiple-upload.vue'
import Card from 'components/common/card.vue'
import Page from 'components/common/pagination.vue'
export default{
	name: 'basic',
	props: {
		settitle: '',
		isNeedTitle: {
			type: Boolean,
			default: true
		},
		isNeedOperate: {
			type: Boolean,
			default: false
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
			isShowUpload: false,
			popNews: false,
			hasCheck: true,
			// formInline: {
			// 	user: '',
			// 	region: ''
			// },
			NewsTitle: '新闻列表',
			formInline: form,
			title: '发布设置',
			form: {
				title: '',
				select: '',
				date: ''
			},
			lists: [{
				txt: '邓音乐教授课题组在PNAS发表重要研究成果'
			},
			{
				txt: '广东省农林生物质工程技术研究中心建设论证会在我校召开'
			}],
			iconArr: {
				edit: false,
				delete: false
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
		},
		changeState () {
			this.isShowUpload = false
		},
		openUpload () {
			this.isShowUpload = true
		},
		openNews () {
			this.popNews = true
		},
		CloseNews () {
			this.popNews = false
		}

	},
	components: {
		TitleCommon,
		TextAndBtn,
		MultipleUpload,
		Card,
		Page
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
	&-preview{
		width: 300px;
		height: 200px;
	}
	&-popform{
  		position: fixed;
  		width: 100%;
  		height: 100%;
  		background: rgba(0,0,0,.5);
  		top: 0;
  		left: 0;
  		z-index: 100000;
  	}
  	&-popcontent{
  		width: 50%;
  		height: 50%;
  		top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
  		position: absolute;
  		background: #fff;
  		padding: 20px;
  	}
}
</style>

