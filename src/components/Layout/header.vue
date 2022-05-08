<template>
    <div class="layout-header">
        <div class="layout-header-title">MF-Tools</div>
        <ul class="layout-header-operate">
            <li
                @click="themeHandle('dark')"
                v-if="theme === 'light'"
            >
                <base-icon icon="nightmode"></base-icon>
            </li>

            <li
                @click="themeHandle('light')"
                v-else
            >
                <base-icon icon="Daytimemode"></base-icon>
            </li>
            <li>
                <base-icon icon="exchangerate"></base-icon>
            </li>
            <li>
                <base-icon
                    icon="sami-select"
                    @click="miniHandle"
                ></base-icon>
            </li>
            <li>
                <base-icon
                    icon="close"
                    @click="closeHandle"
                ></base-icon>
            </li>
        </ul>
    </div>
</template>
<script>
    const { remote } = require("electron");
    export default {
        name: "layout-header",
        data() {
            return {
                theme: "dark"
            };
        },
        mounted() {
            const theme = window.localStorage.getItem("data-theme") || "dark";
            this.themeHandle(theme);
        },
        methods: {
            themeHandle(theme) {
                this.theme = theme;
                window.localStorage.setItem("data-theme", theme);
                window.document.documentElement.setAttribute("data-theme", theme);
            },
            miniHandle() {
                const currentWindow = remote.getCurrentWindow();
                currentWindow.minimize();
            },
            closeHandle() {
                remote.app.quit();
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .layout-header {
        width: $vw;
        height: $layout-bar-h;
        @include background_color("background_color1");
        display: flex;
        align-items: center;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        @include border_color("border_color2");
        -webkit-app-region: drag;
        .layout-header-title {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 22px;
            @include font_color("font_color1");
            padding-left: 20px;
            font-family: fs;
        }
        .layout-header-operate {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            li {
                width: 30px;
                height: 20px;
                margin-right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                @include font_color("font_color1");
                cursor: pointer;
                -webkit-app-region: no-drag;
            }
        }
    }
</style>