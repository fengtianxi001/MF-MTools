/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/components/Layout"
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}



const routes = [
	{
		path: "/",
		component: layout,
		redirect: "/projects",
		children: [
			{
				path: "projects",
				name: "projects",
				component: () => import("@/views/Projects"),
				meta: {
					id: "projects",
					name: "项目管理",
					icon: "product",
				}
			},
			{
				path: "files",
				name: "files",
				component: () => import("@/views/Files"),
				meta: {
					id: "files",
					name: "文件管理",
					icon: "folder",
				}
			},
			{
				path: "apps",
				name: "apps",
				component: () => import("@/views/Apps"),
				meta: {
					id: "apps",
					name: "程序管理",
					icon: "save",
				}
			},
			{
				path: "webs",
				name: "webs",
				component: () => import("@/views/Webs"),
				meta: {
					id: "webs",
					name: "网页管理",
					icon: "discount",
				}
			},
			{
				path: "walls",
				name: "walls",
				component: () => import("@/views/Walls"),
				meta: {
					id: "walls",
					name: "壁纸中心",
					icon: "shuffling-banner",
				}
			},
			{
				path: "store",
				name: "store",
				component: () => import("@/views/Store"),
				meta: {
					id: "store",
					name: "插件中心",
					icon: "Newuserzone",
				}
			}
		]
	}
]
const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
