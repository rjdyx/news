/**
 * 
 * 头部组件
 * @author 
 * @date 2018/03/15
 * 
 */
<template>
    <div class="header">
        <!-- <div class="collapse" v-model="isCollapse">
                <span @click="open">展开</span>
        </div> -->
        <div class="user">
            <el-dropdown  class="user-dropdown">
                <span class="el-dropdown-link">
                    <Avatar icon="person" />
                    用户名
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <Icon type="compose" />修改密码
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <Icon type="wrench" />退出登录
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { Avatar, Button } from 'iview'
export default {
	props: {
		isCollapse: ''
	},
	mounted () {
		console.log('Component mounted.')
	},
	methods: {
		open () {
			this.$emit('change')
		}
	},
	components: {
		Avatar,
		Button
	}
}
</script>
<style lang="sass">
    .header{
        width: 78%;
        height: 76px;
        background: #fff;
        margin-left: 302px;
        position: fixed;
        top: 0;
        .user-dropdown{
            float: right;
            .el-dropdown-link{
                margin: 20px 20px 0 0;
                display: inline-block;
            }
        }
        .collapse{
            float: left;
            width: 200px;
            height: 200px;
        }
    }
</style>
