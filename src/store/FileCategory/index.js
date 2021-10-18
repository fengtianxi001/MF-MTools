/*eslint-disable*/
import { fileCategory } from '../../database/index'
export default {
	state: {
		fileCategory: fileCategory.fetch(),
	},
	mutations: {
		setFileCategory(state, data) {
			state.fileCategory = JSON.parse(JSON.stringify(data))
			this.commit('keepFileCategorysStorageFit', state.fileCategory)
		},
		addFileCategory(state, data) {
			state.fileCategory.unshift(JSON.parse(JSON.stringify(data)))
			this.commit('keepFileCategorysStorageFit', state.fileCategory)
		},
		deleteFileCategory(state, id) {
			const cache = [...state.fileCategory]
			const index = cache.findIndex(category => category.id === id)
			cache.splice(index, 1)
			state.fileCategory = cache
			this.commit('keepFileCategorysStorageFit', state.fileCategory)
		},
		keepFileCategorysStorageFit(state, data) {
			fileCategory.update(JSON.parse(JSON.stringify(data)))
		},
	},
	getters: {
		fileCategory: state => JSON.parse(JSON.stringify(state.fileCategory)),
	},
}
