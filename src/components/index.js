const contexts = require.context('./', true, /index.vue$/)
const compoents = contexts.keys().map(cur => {
	const component = contexts(cur).default
	return {
		name: component.name,
		component,
	}
})

export default {
	install: Vue => {
		compoents.map(({ name, component }) => Vue.component(name, component))
	},
}
