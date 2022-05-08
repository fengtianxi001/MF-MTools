//导入svg
import contextmenu from "./Base-contextmenu"

const req = require.context('../../assets/icons', true, /\.svg$/)
const requireAll = requireContext => {
    requireContext.keys().map(requireContext)
}
requireAll(req)



const contexts = require.context("./", true, /index.vue/);

const Base = contexts.keys().map(key => {
    const component = contexts(key).default
    return {
        name: component["name"],
        component
    }
}, {});

export default {
    install: Vue => {
        Base.map(({ name, component }) => {
            Vue.component(name, component)
        })
        contextmenu.install(Vue)
    }
}