/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 19:55:36
 * @LastEditTime: 2021-12-31 12:52:07
 */

export default {
    state: {
        files: []
    },
    mutations: {
        setFiles(state, data) {
            state.files = data
        },
        addFiles(state, data) {
            state.files.unshift(data)
        },
        removeFile(state, id) {
            const index = state.files.findIndex(files => files.id === id)
            state.files.splice(index, 1)
        },
        removeFileByPath(state, path) {
            const index = state.files.findIndex(files => files.path === path)
            state.files.splice(index, 1)
        },
    },
    actions: {

    },
    getters: {
        files: state => {
            return state.files
        }
    }
}
