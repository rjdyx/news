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
			<div v-if="bolArr[i]">
				<el-input size="small" :value='item' style="width: 200px"></el-input>
				<span class="fr">
					<i class="el-icon-check mr10 pointer" @click="submitColumn(i)"></i>
				</span>
			</div>
			<div v-else>
				<span>{{item}}</span>
				<span class="fr">
		        	<i class="el-icon-edit mr10 pointer" @click="editSubColumn(i)"></i>
		        	<i class="el-icon-delete pointer" @click="delSubColumn(i)"></i>
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
		this.arrValue.forEach(() => {
			bolArr.push(false)
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
			this.value = ''
			this.$emit('addOneColumn', {name: this.name, arr: this.arr})
		},

		editSubColumn (i) {
			this.bolArr.splice(i, 1, true)
		},

		delSubColumn (i) {
			console.log(i)
			this.arr.splice(i, 1)
			this.$emit('addOneColumn', {name: this.name, arr: this.arr})
		},

		submitColumn (i) {
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
