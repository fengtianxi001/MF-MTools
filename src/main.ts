import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import "mf-icos"
import "mf-fonts"
import "@/styles/global.scss"
import 'element-plus/theme-chalk/src/index.scss';
createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
