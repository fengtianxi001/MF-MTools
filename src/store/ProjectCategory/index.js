/*eslint-disable*/
import { projectCategory } from '../../database/index'
export default {
	state: {
		projectCategory: projectCategory.fetch(),
	},
	mutations: {
		setProjectCategory(state, data) {
			state.projectCategory = data
			this.commit('keepProjectCategorysStorageFit', state.projectCategory)
		},
		addProjectCategory(state, data) {
			state.projectCategory.unshift(data)
			this.commit('keepProjectCategorysStorageFit', state.projectCategory)
		},
		deleteProjectCategory(state, id) {
			const cache = [...state.projectCategory]
			const index = cache.findIndex(category => category.id === id)
			console.log(index)
			// cache.splice(index, 1)
			// state.projectCategory = cache
			// this.commit('keepProjectCategorysStorageFit', state.projectCategory)
		},
		keepProjectCategorysStorageFit(state, data) {
			projectCategory.update(data)
		},
	},
	getters: {
		projectCategory: state => state.projectCategory,
	},
}
