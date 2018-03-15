<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>axios</title>
	<script src="/js/axios.min.js"></script>
</head>
<body>
	<script>
		window.onload=function(){
			// 后台获取所有导航栏
			// axios.get('/admin/nav')
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})

			// 新增主导航栏+子导航栏
			// var nav = {
			// 	name: '123',
			// 	model: 0,
			// 	subNavs: [
			// 		{
			// 			name: '123-1',
			// 			model: 0
			// 		},
			// 		{
			// 			name: '123-2',
			// 			model: 1
			// 		},
			// 		{
			// 			name: '123-3',
			// 			model: 4
			// 		}
			// 	]
			// }
			// axios.post('/admin/nav', nav)
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
			

			//修改导航栏（主/子）
			// nav = {
			// 	name: '123-2-change'
			// }
			// axios.put('/admin/nav/27', nav)
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})

			// 新增子导航栏
			// nav = {
			// 	name: '123-3',
			// 	model: 0
			// }
			// axios.put('/admin/nav/storeSubNav/28', nav)
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
		
			// 改变导航栏的model
			// axios.post('/admin/nav/triggle/28')
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
		
			// 删除主导航栏或子导航栏
			// axios.delete('/admin/nav/32')
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
		
			// 改变导航栏顺序
			// axios.post('/admin/nav/changeSequence', {sequence: [5, 12, 2, 11, 9]})
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
		
			// 后台获取所有链接
			// axios.get('/admin/link')
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})

			// 后台获取主链接
			// axios.get('/admin/link/indexMain')
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
		
			// 新增链接分类
			// var link = {
			// 	name: 'main'
			// }

			// axios.post('/admin/link', link)
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})

			//新增子链接
			// var link = {
			// 	name: 'sub-2',
			// 	link: 'http://www/baidu.com',
			// 	pid: 36
			// }

			// axios.post('/admin/link', link)
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
		
			// 编辑链接分类
			// var link = {
			// 	name: 'main-change'
			// }

			// axios.put('/admin/link/36', link)
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})

			//编辑子链接
			// var link = {
			// 	name: 'sub-change',
			// 	link: 'http://www/baidu.com/123',
			// 	pid: 36
			// }

			// axios.put('/admin/link/37', link)
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
				
			// 删除分类或子链接
			// axios.delete('/admin/link/36')
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})
		
			// 后台获取底部信息
			// axios.get('/admin/bottom-message')
			// 	.then(function (response) {
			// 		console.log(response.data);
			// 	})

			// 修改底部信息
			var message = {
				address: "广州市天河区五山路483号华南农业大学行政楼902 1",
				copyright: "Copyright © 华南农业大学重点实验室建设办公室 2",
				email: "123sysjs@scau.edu.cn",
				fax: "020-85285000",
				phone: "020-85285000",
				postcode: "510600"
			}

			axios.post('/admin/bottom-message', message)
				.then(function (response) {
					console.log(response.data);
				})
		}
	</script>
</body>
</html>