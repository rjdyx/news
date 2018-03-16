import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../app/index.vue'
import basic from 'components/layouts/basic.vue'
import publishNews from 'pages/publish-news.vue'
import addColumn from '../pages/navManage/addColumn.vue'
import editColumn from '../pages/navManage/editColumn.vue'

const routes = [
	{
		path: '/',
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
						path: 'addColumn',
						component: addColumn
					},
					{
						path: 'editColumn',
						component: editColumn
					}
				]
			}
		]
	}
]

export default new Router({
	routes
})
