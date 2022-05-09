import path from "path";
const contexts = require.context("./", true, /index\.vue$/);
const components = contexts.keys().map((key) => {
    const component = contexts(key).default;
    const name = path.parse(key).dir.replaceAll("./", "")
    // console.log(key,component)
    // const name = component.name;
    // if (!name) throw new Error(`${key}组件,缺少name属性`);
    return {
        name,
        component
    };
});

export const requireComponents = (Vue) => {
    components.forEach(({ name, component }) => Vue.component(name, component));
};