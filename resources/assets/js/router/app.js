import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../app/index.vue'
import basic from 'components/layouts/basic.vue'
import publishNews from 'pages/publish-news.vue'

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
						component: publishNews
					}
				]
			}
		]
	}
]

export default new Router({
	routes
})
