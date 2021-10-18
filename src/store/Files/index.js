/*eslint-disable*/
import { fileData } from '../../database/index'
export default {
	state: {
		files: fileData.fetch(),
		fileSet: {
			column: 3,
		},
	},
	mutations: {
		setFiles(state, data) {
			state.files = JSON.parse(JSON.stringify(data))
			this.commit('keepFilesStorageFit', state.files)
		},
		addFiles(state, data) {
			const _data = JSON.parse(JSON.stringify(data))
			state.files.unshift(_data)
			this.commit('keepFilesStorageFit', state.files)
		},
		updateFiles(state, data) {
			const _data = JSON.parse(JSON.stringify(data))
			const cache = [...state.files]
			const index = cache.findIndex(files => files.id === _data.id)
			cache[index] = _data
			state.files = cache
			this.commit('keepFilesStorageFit', state.files)
		},
		deleteFile(state, id) {
			const cache = [...state.files]
			const index = cache.findIndex(file => file.id === id)
			cache.splice(index, 1)
			state.files = cache
			this.commit('keepFilesStorageFit', state.files)
		},
		keepFilesStorageFit(state, data) {
			fileData.update(data)
		},
		setFileColumn(state, data) {
			state.fileSet.column = data
		},
	},
	getters: {
		files: state => JSON.parse(JSON.stringify(state.files)),
		fileColumn: state => JSON.parse(JSON.stringify(state.fileSet.column)),
	},
}
