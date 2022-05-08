export default {
  state: {
    projects: [],
  },
  mutations: {
    setProjects(state, data) {
      state.projects = data;
    },
    addProject(state, data) {
      state.projects.unshift(data);
    },
    remmoveProject(state, id) {
      const index = state.projects.findIndex((project) => project.id === id);
      state.projects.splice(index,1)
    },
  },
};
