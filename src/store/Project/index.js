import { update, get } from '../../utils/datastore'
export default {
	state: {
		list: get(),
		keyword: '',
	},
	mutations: {
		setKeyword(state, data) {
			state.keyword = data
			state.list = get().filter(
				cur =>
					cur.name
						.toLocaleLowerCase()
						.indexOf(data.toLocaleLowerCase()) >= 0
			)
		},
		setProject(state, data) {
			state.list = data
			update(state.list)
		},
		insertProject(state, data) {
			data.map(cur => {
				const flag = state.list.find(
					list_item => list_item.path === cur.path
				)
				if (!flag) {
					state.list.unshift(cur)
					update(state.list)
				}
			})
		},
		delProject(state, path) {
			const index = state.list.findIndex(cur => cur.path === path)
			state.list.splice(index, 1)
			const raw = get()
			const index2 = raw.findIndex(cur => cur.path === path)
			raw.splice(index2, 1)
			update(raw)
		},
		orderProject(state, data) {
			if (state.keyword.length === 0) {
				state.list = data
				update(state.list)
			}
		},
	},
	actions: {
		setKeyword({ commit }, data) {
			commit('setKeyword', data)
		},
		setProject({ commit }, data) {
			commit('setProject', data)
		},
		insertProject({ commit }, data) {
			commit('insertProject', data)
		},
		delProject({ commit }, data) {
			commit('delProject', data)
		},
	},
	getters: {
		projects: state => state.list,
	},
}
