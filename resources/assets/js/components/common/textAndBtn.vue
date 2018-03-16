<template>
  <div class="textAndBtn">
    <el-input :placeholder="newItem.placeholder" v-model="formInline[newItem.name].value" class="input-with-select">
		<el-button slot="append" @click="addOneColumn(newItem.name)">添加</el-button>
	</el-input>
	<ul>
		<li v-for="arrItem in formInline[newItem.name].arr">{{arrItem}}</li>
	</ul>
  </div>
</template>

<script>
export default{
	name: 'textAndBtn',
	data () {
		return {
			value: 'addColumn',
			arr: []
		}
	},
}
</script>

<style>
</style>
