import { update, get } from '../../utils/datastore'
console.log(get())
export default {
	state: {
		list: get(),
	},
	mutations: {
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
			update(state.list)
		},
	},
	actions: {
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
