/**
 * 左菜单栏数据
 */
export default [
	{
		name: '消息管理',
		children: [
			{
				path: '/index/publishNews',
				name: '发布消息'
			},
			{
				path: '/test',
				name: '编辑消息',
				children: [
					{
						path: '/test',
						name: '首页消息'
					},
					{
						path: '/index',
						name: '默认消息'
					},
					{
						path: '/index',
						name: '部门职能'
					},
					{
						path: '/index',
						name: '科研平台'
					},
					{
						path: '/index',
						name: '平台管理办法'
					},
					{
						path: '/index',
						name: '政策法规'
					},
					{
						path: '/index',
						name: '联系我们'
					}
				]
			},
			{
				path: '/test',
				name: '下载中心'
			},
		]
	},
	{
		name: '导航栏管理',
		children: [
			{
				path: '/test',
				name: '新增栏目'
			},
			{
				path: '/test',
				name: '修改栏目'
			}
		]
	},
	{
		name: '友情链接管理',
		children: [
			{
				path: '/test',
				name: '新增链接'
			},
			{
				path: '/test',
				name: '编辑链接'
			},
			{
				path: '/test',
				name: '管理分类'
			}
		]
	},
	{
		name: '版权信息管理',
		children: [
			{
				path: '/test',
				name: '修改版权信息'
			}
		]
	},
	{
		name: '图片新闻管理'
	},
	{
		name: '浮动图片管理'
	}
]
