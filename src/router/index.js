/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [
	{
		path: '/',
		redirect: '/projects',
		component: () => import('../components/m-layout'),
		children: [
			{
				name: 'projects',
				path: '/projects',
				component: () => import('../views/Projects'),
			},
			{
				name: 'files',
				path: '/files',
				component: () => import('../views/Files'),
			},
			{
				name: 'software',
				path: '/software',
				component: () => import('../views/Software'),
			},
			{
				name: 'webdoor',
				path: '/webdoor',
				component: () => import('../views/Webdoor'),
			},
			{
				name: 'setting',
				path: '/setting',
				component: () => import('../views/Setting'),
			},
		],
	},
]
const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
})

export default router
