
import iView from 'iview'
// import 'iview/dist/styles/iview.css'

import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(iView)
Vue.use(VueQuillEditor)

require('sass/app.scss')
// 注册element-ui全局组件
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-default/index.css'
// 设置语言
switch (require('projectRoot/env.js').app_lang) {
case 'zh-CN':
	locale.use(zhLocale)
	break
case 'en':
	locale.use(enLocale)
	break
default:
	locale.use(zhLocale)
}
import * as elementComponent from './element-ui.js'

import * as iviewComponent from './iview.js'

/**
* 饿了么组件按需引用组件有两种方式，其中Vue.use可能会导致属性冲突，故不推荐使用
*/
// Object.keys(elementComponent).forEach(function (component) {
// 	Vue.component(elementComponent[component].name, elementComponent[component])
// })
// 注册组件
Object.keys(elementComponent).forEach(function (component) {
	switch (component) {
	case 'Loading':
		Vue.use(elementComponent[component].directive)
		Vue.prototype.$loading = elementComponent[component].service
		break
	case 'MessageBox':
		Vue.prototype.$msgbox = elementComponent[component]
		Vue.prototype.$alert = elementComponent[component].alert
		Vue.prototype.$confirm = elementComponent[component].confirm
		Vue.prototype.$prompt = elementComponent[component].prompt
		break
	case 'Notification':
		Vue.prototype.$notify = elementComponent[component]
		break
	case 'Message':
		Vue.prototype.$message = elementComponent[component]
		break
	default:
		Vue.use(elementComponent[component])
		break
	}
})
Object.keys(iviewComponent).forEach(function (component) {
	Vue.component(iviewComponent[component].name, iviewComponent[component])
})
