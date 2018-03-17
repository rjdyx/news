/**
 * 
 * 文本和按钮组件，点击添加到列表
 * @wyp
 * @date 2018/03/16
 * 
 	Attribute：
 	参数				说明		类型			默认值
 	placeholder			占位符		string			''
 	name				name		string			''
 	arrValue			列表		Array			[]

 	Methods：
 	事件名称：		说明	  				参数
 	addOneColumn	点击添加按钮的回调		{name，arr}
 */
<template>
  <div class="textAndBtn">
    <el-input  :placeholder="placeholder" v-model="value" class="input-with-select">
		<el-button  slot="append" @click="addOneColumn">添加</el-button>
	</el-input>
	<ul>
		<li v-for="(item, i) in arr" class="clearfix" :key="i">
			<div v-if="bolArr[i].bol">
				<el-input size="small" v-model='bolArr[i].value' style="width: 200px"></el-input>
				<span class="fr">
					<i class="el-icon-check mr10 pointer" @click="submitSubColumn(i)">√</i>
				</span>
			</div>
			<div v-else>
				<span>{{item}}</span>
				<span class="fr">
		        	<i class="el-icon-edit mr10 pointer" @click="editSubColumn(i)">edit</i>
		        	<i class="el-icon-delete pointer" @click="delSubColumn(i)">del</i>
		        </span>
	        </div>
		</li>
	</ul>
  </div>
</template>

<script>
export default{
	name: 'textAndBtn',
	props: {
		placeholder: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		arrValue: {
			type: Array,
			default: []
		}
	},
	data () {
		let bolArr = []
		this.arrValue.forEach((item) => {
			bolArr.push({value: item, bol: false})
		})
		return {
			value: '',
			arr: this.arrValue,
			bolArr: bolArr
		}
	},
	methods: {
		/*
			添加一个子列表
		*/
		addOneColumn () {
			if (this.value === '') {
				return
			}
			this.arr.push(this.value)
			this.bolArr.push({value: this.value, bol: false})
			this.value = ''
			this.$emit('addOneColumn', {name: this.name, arr: this.arr})
		},

		// 点击编辑子栏目
		editSubColumn (i) {
			let sub = this.bolArr[i]
			sub.bol = true
			this.bolArr.splice(i, 1, sub)
		},

		// 点击删除子栏目
		delSubColumn (i) {
			console.log(i)
			this.arr.splice(i, 1)
			this.bolArr.splice(i, 1)
			this.$emit('addOneColumn', {name: this.name, arr: this.arr})
		},

		// 点击√提交子栏目
		submitSubColumn (i) {
			let sub = this.bolArr[i]
			this.arr.splice(i, 1, sub.value)
			console.log(this.arr)
			this.$emit('addOneColumn', {name: this.name, arr: this.arr})
			sub.bol = false
			this.bolArr.splice(i, 1, sub)
		}
	}
}
</script>

<style lang="sass">
.textAndBtn{
	li{
	}
}
</style>
