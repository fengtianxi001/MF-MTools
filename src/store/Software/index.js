/*eslint-disable*/
import { softwareData } from '../../database/index'
export default {
	state: {
		softwares: softwareData.fetch(),
		softwareSet: {
			column: 4,
		},
	},
	mutations: {
		//项目操作
		setSoftware(state, data) {
			const _data = JSON.parse(JSON.stringify(data))
			state.softwares = _data
			this.commit('keepSoftwareStorageFit', state.softwares)
		},
		updateSoftware(state, data) {
			const _data = JSON.parse(JSON.stringify(data))
			const cache = [...state.softwares]
			const index = cache.findIndex(software => software.id === _data.id)
			cache[index] = _data
			state.softwares = cache
			this.commit('keepSoftwareStorageFit', state.softwares)
		},
		addSoftware(state, data) {
			const _data = JSON.parse(JSON.stringify(data))
			state.softwares.unshift(_data)
			this.commit('keepSoftwareStorageFit', state.softwares)
		},
		deleteSoftware(state, id) {
			const cache = [...state.softwares]
			const index = cache.findIndex(software => software.id === id)
			cache.splice(index, 1)
			state.softwares = cache
			this.commit('keepSoftwareStorageFit', state.softwares)
		},
		keepSoftwareStorageFit(state, data) {
			softwareData.update(data)
		},

		//项目列数设置操作
		setSoftwareColumn(state, data) {
			state.softwareSet.column = data
		},
	},
	getters: {
		softwares: state => JSON.parse(JSON.stringify(state.softwares)),
		softwareColumn: state =>
			JSON.parse(JSON.stringify(state.softwareSet.column)),
	},
}
