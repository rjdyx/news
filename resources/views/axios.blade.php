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
			axios.post('/admin/nav/changeSequence', {sequence: [5, 12, 2, 11, 9]})
				.then(function (response) {
					console.log(response.data);
				})
		}
	</script>
</body>
</html>