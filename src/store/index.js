
import Vue from 'vue'
import Vuex from 'vuex'
import path from 'path'
Vue.use(Vuex)

const contexts = require.context('./', true, /index.js$/);
let modules = {}
contexts.keys().forEach(key => {
  const dirname = path.dirname(key)
  if (dirname === '.') return false
  const moduleName = dirname.replace(/^\.\//, '')
  modules[moduleName] = contexts(key).default || contexts(key)
})
export default new Vuex.Store({
  modules
})
