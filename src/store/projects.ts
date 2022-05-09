export const projects = {
  state: {
    projects: [123],
  },
  mutations: {
    setProjects(state, data) {
      state.projects = data;
    },
    addProject(state, data) {
      if (Array.isArray(data)) {
        state.projects = state.projects.concat([...data])
      } else {
        state.projects.unshift(data);
      }
    },
    remmoveProject(state, id) {
      const index = state.projects.findIndex((project) => project.id === id);
      state.projects.splice(index, 1)
    },
  },
  actions: {

  },
  getters: {
    projects(state) { 
      return state.projects.sort((a,b) => b.lastModified - a.lastModified)
     }
  }
};


