import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './components/Global/index'
import './assets/styles/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'

Vue.use(element)
Vue.use(global)
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
