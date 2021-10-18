import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './components/index'
import ElementUI from 'element-ui'
import utils from './utils/utils'
import draggable from 'vuedraggable'
import { FragmentPlugin } from 'fragment-for-vue'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/global.scss'
Vue.prototype.$utils = utils
Vue.component('draggable', draggable)
Vue.use(ElementUI)
Vue.use(global)
Vue.use(FragmentPlugin)


Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
