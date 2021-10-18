/*eslint-disable*/
import { config } from '../../database/index'
export default {
	state: {
		config: config.fetch(),
	},
	mutations: {
		setConfig(state, data) {
			state.config = data
			this.commit('keepConfigStorageFit', state.config)
		},
		addConfig(state, data) {
			state.config.unshift(data)
			this.commit('keepConfigStorageFit', state.config)
		},
		keepConfigStorageFit(state, data) {
			config.update(data)
		},
	},
	getters: {
		config: state => state.config,
	},
}
