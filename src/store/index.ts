import { createStore } from "vuex";
import plugin from "./plugin";

//应为数据要和本地json同步,所以没用module模式
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [plugin],
});
