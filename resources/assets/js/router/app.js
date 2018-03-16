import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../app/index.vue'
import basic from 'components/layouts/basic.vue'
import publishNews from 'pages/publish-news.vue'
import indexNews from 'pages/index-news.vue'
import basicContent from 'components/layouts/basic-content.vue'

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
					}
				]
			}
		]
	}
]

export default new Router({
	routes
})
