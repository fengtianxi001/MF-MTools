import { update, get } from '../../utils/datastore'
export default {
	state: {
		list: get('files'),
		keyword: '',
	},
	mutations: {
		setFilesKeyword(state, data) {
			state.keyword = data
			state.list = get().filter(
				cur =>
					cur.name
						.toLocaleLowerCase()
						.indexOf(data.toLocaleLowerCase()) >= 0
			)
		},
		setFiles(state, data) {
			state.list = data
			update(state.list, 'files')
		},
		insertFiles(state, data) {
			data.map(cur => {
				const flag = state.list.find(
					list_item => list_item.path === cur.path
				)
				if (!flag) {
					state.list.unshift(cur)
					update(state.list, 'files')
				}
			})
		},
		delFiles(state, path) {
			const index = state.list.findIndex(cur => cur.path === path)
			state.list.splice(index, 1)
			const raw = get('files')
			const index2 = raw.findIndex(cur => cur.path === path)
			raw.splice(index2, 1)
			update(raw, 'files')
		},
		orderFiles(state, data) {
			if (state.keyword.length === 0) {
				state.list = data
				update(state.list, 'files')
			}
		},
	},
	actions: {
		setFilesKeyword({ commit }, data) {
			commit('setFilesKeyword', data)
		},
		setFiles({ commit }, data) {
			commit('setFiles', data)
		},
		insertFiles({ commit }, data) {
			commit('insertFiles', data)
		},
		delFiles({ commit }, data) {
			commit('delFiles', data)
		},
	},
	getters: {
		files: state => state.list,
	},
}
