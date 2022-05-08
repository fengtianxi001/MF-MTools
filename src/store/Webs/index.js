
export default {
    state: {
        webs: []
    },
    mutations: {
        setWebs(state, data) {
            state.webs = data
        },
        addWebs(state, data) {
            state.webs.unshift(data)
        },
        removeWeb(state, id) {
            const index = state.webs.findIndex(web => web.id === id)
            state.webs.splice(index, 1)
        },
    },
    actions: {

    },
    getters: {
        webs: state => {
            return state.webs
        }
    }
}
