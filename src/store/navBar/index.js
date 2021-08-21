
export default {
	state: {
		list: []
	},
	mutations: {
		setNavbarList(state, data) {
			state.list = data
		},
	},
	actions: {
		setNavbarList({ commit }, data) {
			commit("setNavbarList", data)
		}
	},
	getters: {
		navbarList: state => state.list
	}
}
