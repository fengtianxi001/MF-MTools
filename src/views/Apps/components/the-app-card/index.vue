<template>
    <div
        class="the-app-card"
        @contextmenu.prevent="onContextmenu"
        @click="cardHandle"
        @mousemove="mousemove = true"
        @mouseout="mousemove = false"
    >
        <the-app-icon :app="app"></the-app-icon>
        <div
            :style="style"
            class="app-card-name"
        >{{app.name}}</div>
    </div>
</template>
<script>
    /*eslint-disable*/
    import { deleteApp, openApp } from "../../controller";
    export default {
        name: "the-app-card",
        props: {
            app: Object
        },
        data() {
            return { mousemove: false };
        },
        components: {
            theAppIcon: () => import("../the-app-icon")
        },
        computed: {
            style() {
                const bottom = this.mousemove ? 0 : "-20px";
                return {
                    bottom
                };
            }
        },
        methods: {
            onContextmenu(event) {
                this.$contextmenu({
                    items: [
                        {
                            label: "打开应用",
                            icon: "el-icon-document",
                            onClick: () => {
                                openApp(this.app.target);
                            }
                        },
                        {
                            label: "删除文件",
                            icon: "el-icon-delete",
                            onClick: () => {
                                deleteApp(this.app.id);
                            }
                        }
                    ],
                    event,
                    customClass: "custom-class",
                    zIndex: 3,
                    minWidth: 160
                });
                return false;
            },
            cardHandle() {
                const { target } = this.app;
                openApp(target);
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .the-app-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include background-color("background_color5");
        position: relative;
        font-size: 0;
        cursor: pointer;
        width: 58px;
        height: 58px;
        overflow: hidden;
        box-shadow: $box_shadow;
        .app-card-name {
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            width: 58px;
            height: 20px;
            line-height: 20px;
            position: absolute;
            bottom: -20px;
            @include background-color("background_color8");
            @include font_color("font_color2");
            transition: bottom .5s ease;
            /* transform: translateY(-20px); */
        }
    }
</style>