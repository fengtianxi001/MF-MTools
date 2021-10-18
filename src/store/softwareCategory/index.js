/*eslint-disable*/
import { softwareCategory } from '../../database/index'
export default {
	state: {
		softwareCategory: softwareCategory.fetch(),
	},
	mutations: {
		setSoftwareCategory(state, data) {
			state.softwareCategory = JSON.parse(JSON.stringify(data))
			this.commit(
				'keepSoftwareCategoryStorageFit',
				state.softwareCategory
			)
		},
		addSoftwareCategory(state, data) {
			state.softwareCategory.unshift(JSON.parse(JSON.stringify(data)))
			this.commit(
				'keepSoftwareCategoryStorageFit',
				state.softwareCategory
			)
		},
		deleteFileCategory(state, id) {
			const cache = [...state.softwareCategory]
			const index = cache.findIndex(software => software.id === id)
			cache.splice(index, 1)
			state.fileCategory = cache
			this.commit(
				'keepSoftwareCategoryStorageFit',
				state.softwareCategory
			)
		},
		keepSoftwareCategoryStorageFit(state, data) {
			softwareCategory.update(JSON.parse(JSON.stringify(data)))
		},
	},
	getters: {
		softwareCategory: state =>
			JSON.parse(JSON.stringify(state.softwareCategory)),
	},
}
