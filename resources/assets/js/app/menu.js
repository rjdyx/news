/**
 * 左菜单栏数据
 */
export default [
	{
		name: '消息管理',
		icon: 'el-icon-message',
		children: [
			{
				path: '/add-article',
				name: '发布消息'
			},
			{
				path: '/edit-article',
				name: '编辑消息',
				children: [
					{
						path: '/eidt-index',
						name: '首页消息'
					},
					{
						path: '/defaultMsg',
						name: '默认消息'
					}
				]
			},
			{
				path: '/download',
				name: '下载中心'
			},
		]
	},
	{
		name: '导航栏管理',
		icon: 'el-icon-tickets',
		children: [
			{
				path: '/add-nav',
				name: '新增栏目'
			},
			{
				path: '/edit-nav',
				name: '修改栏目'
			}
		]
	},
	{
		name: '友情链接管理',
		icon: 'el-icon-share',
		children: [
			{
				path: '/add-links',
				name: '新增链接'
			},
			{
				path: '/edit-links',
				name: '编辑链接'
			},
			{
				path: '/manage-category',
				name: '管理分类'
			}
		]
	},
	{
		name: '版权信息管理',
		icon: 'el-icon-document',
		children: [
			{
				path: '/edit-copyright',
				name: '修改版权信息'
			}
		]
	},
	{
		name: '图片新闻管理',
		icon: 'el-icon-picture',
		path: '/pic-news'
	},
	{
		name: '浮动图片管理',
		icon: 'el-icon-picture-outline',
		path: '/float-pic'
	}
]
