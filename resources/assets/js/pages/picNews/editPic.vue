/**
 * 
 * 图片新闻列表组件
 * @author 
 * @date 2018/03/17
 * 
 */
<template>

<div class="pic-wrap">
	<div class="pic-news">
		<title-common 
			:title="title" />
		<div class="pic-lists">
			<el-row>
				<el-col :span="6" v-for="(item, index) in imgLists">
					<a class="pic-imgWrap" >
						<el-checkbox v-model="checked" class="pic-checkbox"/>
						<img :src="item.src" alt="" class="pic-img" />
					</a>
				</el-col>
			</el-row>
		</div>
		<div class="pic-operate">
			<el-button type="info" @click="goback">返回</el-button>
  			<el-button type="primary">保存更改</el-button>
		</div>
	</div>
</div>

</template>

<script>
import TitleCommon from 'components/common/title.vue'
// v-model="checked"
export default{
	name: 'download',
	data () {
		return {
			title: '图片列表',
			checked: false,
			imgLists: [{
				src: 'image/test.jpg'
			},
			{
				src: 'image/test.jpg'
			},
			{
				src: 'image/test.jpg'
			},
			{
				src: 'image/test.jpg'
			},
			{
				src: 'image/test.jpg'
			}]
		}
	},
	methods: {
		goback () {
			this.$router.go(-1)
		}
	},
	watch: {
	},
	components: {
		TitleCommon
	}
}
</script>

<style lang="sass">
  .pic{
  	&-wrap{
  		background: #eee;
  	}
  	&-news{
  		padding: 20px;
  		background: #fff;
  	}
  	&-img{
  		width: 100%;
  	}
  	&-operate {
  		float: right;
  	}
  	&-title{
		border-bottom: 2px solid #f5f5f5;
  		font-size: 17px;
  		padding: 0 0 15px;
  	}
  	&-imgWrap{
  		margin: 10px;
  		display: inline-block;
  		position: relative;
  	}
  	&-checkbox{
  		position: absolute;
  		top: 10px;
  		right: 10px;
  	}
  }
</style>
