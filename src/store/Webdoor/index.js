/*eslint-disable*/
import { websiteData } from '../../database/index'
export default {
	state: {
		website: websiteData.fetch(),
	},
	mutations: {
		setWebsite(state, data) {
			state.website = JSON.parse(JSON.stringify(data))
			this.commit('keepWebsiteStorageFit', state.website)
		},
		addWebsite(state, data) {
			state.website.unshift(data)
			this.commit('keepWebsiteStorageFit', state.website)
		},
		deleteWebsite(state, id) {
			const cache = [...state.website]
			const index = cache.findIndex(project => project.id === id)
			cache.splice(index, 1)
			state.website = cache
			this.commit('keepWebsiteStorageFit', state.website)
		},
		keepWebsiteStorageFit(state, data) {
			websiteData.update(data)
		},
	},
	getters: {
		website: state => state.website,
	},
}
