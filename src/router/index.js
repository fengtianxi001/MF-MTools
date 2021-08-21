/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout/index.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Layout,
		redirect: '/project',
		children: [
			{
				path: 'project',
				name: 'project',
				component: () => import('../views/Project'),
			},
			{
				path: 'files',
				name: 'files',
				component: () => import('../views/Files'),
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
