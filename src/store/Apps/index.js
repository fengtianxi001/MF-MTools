
export default {
    state: {
        apps: []
    },
    mutations: {
        setApps(state, data) {
            state.apps = data
        },
        addApps(state, data) {
            state.apps.unshift(data)
        },
        removeApp(state, id) {
            const index = state.apps.findIndex(app => app.id === id)
            state.apps.splice(index, 1)
        },
    },
    actions: {
        
    },
    getters: {
        apps: state => {
            return state.apps
        }
    }
}
