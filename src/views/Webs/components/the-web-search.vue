<template>
    <ul class="the-web-search">
        <li
            class="the-web-search-item"
            v-for="{ icon, key, name } in searchMethods"
            :key="key"
            :class="computedClass(key)"
        >
            <base-icon :icon="icon"></base-icon>
            <input
                type="text"
                :placeholder="name | placeholderFilter"
                @focus="focus(key)"
                @blur="blur($event)"
                v-model="keyword[key]"
                @keydown.enter="search(key)"
                :ref="key"
            />
        </li>
    </ul>
</template>
<script>
    const { shell } = require("electron");
    export default {
        name: "the-web-search",
        data() {
            return {
                searchMethods: [
                    { icon: "baidu", key: "baidu", name: "baidu" },
                    { icon: "github", key: "github", name: "github" },
                    { icon: "fanyi", key: "youdao", name: "youdao" }
                ],
                active: "null",
                keyword: {
                    baidu: "",
                    github: "",
                    youdao: ""
                }
            };
        },
        computed: {
            isEmpty() {
                return this.keyword.length === 0;
            }
        },
        methods: {
            focus(key) {
                this.active = key;
            },
            blur() {
                this.keyword = {
                    baidu: "",
                    github: "",
                    youdao: ""
                };
                this.active = "null";
            },
            computedClass(key) {
                const { active } = this;
                if (active === "null") {
                    return "normal";
                } else if (active === key) {
                    return "full";
                } else {
                    return "hide";
                }
            },
            search(key) {
                const kw = this.keyword[key];
                const _enum = {
                    baidu: `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${kw}&fenlei=256`,
                    github: `https://github.com/search?q=${kw}`,
                    youdao: `http://www.youdao.com/w/eng/${kw}/#keyfrom=dict2.index`
                };
                shell.openExternal(_enum[key]);
            }
        },
        filters: {
            placeholderFilter(val) {
                return `在${val}中搜索`;
            }
        }
    };
</script>
<style lang="scss" scoped>
    .the-web-search {
        display: flex;
        @include background_color("element_background1");
        @include font_color("font_color4");
        height: 40px;
        box-sizing: border-box;
        padding: 4px 15px;
        font-size: 13px;
        margin-top: 30px;
        .the-web-search-item {
            width: 33.333%;
            position: relative;
            overflow: hidden;
            transition: all 0.2s cubic-bezier(0.72, -0.05, 0.46, 0.54);
            display: flex;
            align-items: center;
            .base-icon {
                font-size: 24px;
            }
            &.full {
                width: 100%;
            }
            &.hide {
                width: 0%;
            }
            input {
                width: 100%;
                height: 100%;
                outline: none;
                padding: 0 20px 0 30px;
                border: none;
                background-color: transparent;
                @include font_color("font_color4");
                font-weight: bolder;
            }
            .icon {
                position: absolute;
                font-size: 18px;
                font-weight: bolder;
                top: 5px;
                color: #fff;
                width: 20px;
                height: 20px;
            }
            .icon:first-child {
                left: 0;
                top: 3px;
                font-size: 22px;
            }
            .icon:last-child {
                right: 0;
                top: 6px;
                cursor: pointer;
            }
        }
    }
</style>