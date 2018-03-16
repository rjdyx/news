import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../app/index.vue'
import basic from 'components/layouts/basic.vue'
import publishNews from 'pages/publish-news.vue'
<<<<<<< HEAD
import indexNews from 'pages/index-news.vue'
import basicContent from 'components/layouts/basic-content.vue'
=======
import addColumn from '../pages/navManage/addColumn.vue'
import editColumn from '../pages/navManage/editColumn.vue'
>>>>>>> dev

const routes = [
	{
		path: '/index',
		component: index,
		children: [
			{
				path: '',
				component: basic,
				children: [
					{
						path: 'publishNews',
						component: publishNews
					},
					{
						path: 'indexNews',
						component: indexNews
					},
					{
						path: 'addColumn',
						component: addColumn
					},
					{
						path: 'editColumn',
						component: addColumn
					}
				]
			}
		]
	}
]

export default new Router({
	routes
})
