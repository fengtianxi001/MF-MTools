import { createStore } from "vuex";
import plugin from "./plugin";
import { projects } from "./projects";
//应为数据要和本地json同步,所以没用module模式

export default createStore({
  state: {
    ...projects.state
  },
  getters: {
    ...projects.getters
  },
  mutations: {
    ...projects.mutations
  },
  actions: {
    ...projects.actions
  },
  plugins: [plugin],
});
