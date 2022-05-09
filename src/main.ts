import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Prism from 'prismjs';
import ElementPlus from 'element-plus'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import { requireComponents } from "components/install"
import "mf-icos"
import "mf-fonts"
import "@/styles/global.scss"
import 'element-plus/theme-chalk/src/index.scss';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import 'prismjs/components/prism-json';

VMdPreview.use(vuepressTheme, {
  Prism,
});

createApp(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .use(VMdPreview)
  .use(requireComponents)
  .mount('#app')
