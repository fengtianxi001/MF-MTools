/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 19:55:36
 * @LastEditTime: 2021-12-31 12:47:51
 */
import Vue from 'vue';
export default {
    state: {
        projects: []
    },
    mutations: {
        setProjects(state, data) {
            state.projects = data
        },
        addProjects(state, data) {
            state.projects.unshift(data)
            console.log("inter");
        },
        removeProject(state, id) {
            const index = state.projects.findIndex(project => project.id === id)
            state.projects.splice(index, 1)
        },
        removeProjectByPath(state, path) {
            const index = state.projects.findIndex(project => project.path === path)
            state.projects.splice(index, 1)
        },
        updateProject(state, project) {
            const { id } = project
            const index = state.projects.findIndex(project => project.id === id)
            Vue.set(state.projects, index, project);
        },
    },
    actions: {
    },
    getters: {
        projects: state => state.projects
    }
}
