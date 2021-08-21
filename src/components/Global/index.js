import icon from './Icon'
const contexts = require.context('./', true, /index.vue$/)
const globalCompoents = contexts.keys().reduce((prev, key) => {
	const component = contexts(key).default
	if (component) prev[component.name] = component
	return prev
}, {})

globalCompoents.icon = icon

export default {
	install: Vue => {
		Object.keys(globalCompoents).forEach(key => {
			Vue.component(key, globalCompoents[key])
		})
	}
}
