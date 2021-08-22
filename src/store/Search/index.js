export default {
	state: {
		info: '',
	},
	mutations: {
		setSerchInfo(state, data) {
			state.info = data
		},
	},
	actions: {
		setSerchInfo({ commit }, data) {
			commit('setSerchInfo', data)
		},
	},
	getters: {
		searchInfo: state => state.info,
	},
}
