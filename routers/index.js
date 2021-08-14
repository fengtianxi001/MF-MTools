const layout = require('../components/Layout')
const project = require('../views/Projects')
const files = require('../views/Files')

const routes = [
	{
		name: 'home',
		path: '/',
		component: layout,
		redirect: '/project',
		children: [
			{ name: 'project', path: 'project', component: project },
			{ name: 'files', path: 'files', component: files },
		],
	},
]
module.exports = new VueRouter({
	routes,
})
