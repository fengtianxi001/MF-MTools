/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'
import path from 'path'
import plugins from "./plugins"
Vue.use(Vuex)

const contexts = require.context('./', true, /index.js$/);
let _state = {}
let _mutations = {}
let _actions = {}
let _getters = {}

contexts.keys().forEach(key => {
	const dirname = path.dirname(key)
	if (dirname === '.') return false
	const { state, mutations, actions, getters } = contexts(key).default
	_state = Object.assign(_state, state)
	_mutations = Object.assign(_mutations, mutations)
	_actions = Object.assign(_actions, actions)
	_getters = Object.assign(_getters, getters)
})

//应为数据要和本地json同步,所以没用module模式
export default new Vuex.Store({
	state: _state,
	mutations: _mutations,
	actions: _actions,
	getters: _getters,
	plugins: [plugins],

})
