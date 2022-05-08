const contexts = require.context("./", true, /index.vue/);

const The = contexts.keys().map(key => {
    const component = contexts(key).default
    return {
        name: component["name"],
        component
    }
}, {});

export default {
    install: Vue => {
        The.map(({ name, component }) => {
            Vue.component(name, component)
        })
    }
}