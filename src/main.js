

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Base from '@/components/Base'
import Custom from '@/components/Custom'
import The from '@/components/The'
import elementui from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import draggable from 'vuedraggable'
import filters from "@/filters/index"
Vue.component('draggable', draggable)
Vue.use(Base).use(Custom).use(The)
Vue.use(elementui)
Vue.config.productionTip = false

Object.keys(filters).map(key => {
	Vue.filter(key, filters[key])
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')