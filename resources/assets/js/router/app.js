import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 主体页面
import index from '../app/index.vue'

// 消息管理 ---------------------------------
// 发布消息
import addArticle from '../pages/article/addArticle.vue'
// 编辑消息
import editArticle from '../pages/article/editArticle.vue'
// 首页消息
import eidtIndex from '../pages/article/eidtIndex.vue'
// 默认消息
import defaultMsg from '../pages/article/defaultMsg.vue'
// 动态
import editModel from '../pages/article/editModel.vue'
// 下载中心
import download from '../pages/article/download.vue'

// 导航栏管理 ------------------------------------
// 新增栏目
import addNav from '../pages/navManage/addColumn.vue'
// 修改栏目
import editNav from '../pages/navManage/editColumn.vue'

// 友情链接管理 ------------------------------------
// 新增链接
import addLinks from '../pages/friendLink/addLinks.vue'
// 新增链接
import editLinks from '../pages/friendLink/editLinks.vue'
// 管理分类
import manageCategory from '../pages/friendLink/manageCategory.vue'

// 版权信息管理 ------------------------------------
// 修改版权信息
import editCopyright from '../pages/editCopyright.vue'

// 图片新闻管理
import picNews from '../pages/picNews.vue'

// 浮动图片管理
import floatPic from '../pages/floatPic.vue'

// 登录页面
import login from '../pages/login.vue'
import basic from 'components/layouts/basic.vue'
import indexNews from 'pages/article/index-news.vue'
import basicContent from 'components/layouts/basic-content.vue'
// import addColumn from '../pages/navManage/addColumn.vue'

// import editColumn from '../pages/navManage/editColumn.vue'

const routes = [
	{
		path: '/',
		name: 'index',
		component: index,
		redirect: '/add-article',
		children: [
			// 消息管理 ---------------------------------
			// 发布消息
			{
				path: 'add-article',
				name: 'add-article',
				component: addArticle
			},
			// 编辑消息
			{
				path: 'edit-article',
				name: 'edit-article',
				component: editArticle,
				children: [
					// 首页消息
					{
						path: '/eidt-index',
						name: 'eidt-index',
						component: editModel,
					},
					// // 默认消息
					{
						path: '/defaultMsg',
						name: 'defaultMsg',
						component: editModel,
					},
					// {
					// 	path: 'indexNews',
					// 	component: indexNews
					// },
					// {
					// 	path: 'addColumn',
					// 	component: addColumn
					// },
					{
						path: '/edit-model/:sequence',
						name: 'edit-model',
						component: editModel,
					},
				]
			},
			// 下载中心
			{
				path: 'download',
				name: 'download',
				component: download
			},
			// 导航栏管理 ------------------------------------
			// 新增栏目
			{
				path: 'add-nav',
				name: 'add-nav',
				component: addNav
			},
			// 修改栏目
			{
				path: 'edit-nav',
				name: 'edit-nav',
				component: editNav
			},
			// 友情链接管理 ------------------------------------
			// 新增链接
			{
				path: 'add-links',
				name: 'add-links',
				component: addLinks
			},
			// 编辑链接
			{
				path: 'edit-links',
				name: 'edit-links',
				component: editLinks
			},
			// 管理分类
			{
				path: 'manage-category',
				name: 'manage-category',
				component: manageCategory
			},
			// 版权信息管理 ------------------------------------
			// 修改版权信息
			{
				path: 'edit-copyright',
				name: 'edit-copyright',
				component: editCopyright
			},
			// 图片新闻管理 ------------------------------------
			{
				path: 'pic-news',
				name: 'pic-news',
				component: picNews
			},
			// 浮动图片管理 ------------------------------------
			{
				path: 'float-pic',
				name: 'float-pic',
				component: floatPic
			},
		]
	},
	{
		path: '/login',
		name: 'login',
		component: login,
	}
]

export default new Router({
	routes
})
