<template>
    <div class="layout">
        <layout-header></layout-header>
        <div class="layout-content">
            <div
                class="task-progress"
                :class="{hide:progressHide}"
            ></div>
            <layout-menu></layout-menu>
            <div class="router-view">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import { task } from "@/cable/tasks.js";
    export default {
        name: "layout",
        data() {
            return {
                progressHide: true
            };
        },
        components: {
            layoutMenu: () => import("./menu.vue"),
            layoutHeader: () => import("./header.vue")
        },
        mounted() {
            task.on(tasks => {
                if (tasks.size !== 0) {
                    this.progressHide = false;
                } else {
                    this.progressHide = true;
                }
            });
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .layout {
        width: $vw;
        height: $vh;
        transform: scale(1);
        overflow: hidden;
        .layout-content {
            display: flex;
            .router-view {
                width: $vw - $layout-menu-w;
                height: $vh - $layout-bar-h;
                @include background_color("background_color2");
                overflow-y: auto;
                overflow-x: hidden;
            }
        }
    }
    .task-progress {
        width: 100%;
        height: 2px;
        position: absolute;
        top: 35px;
        background-image: linear-gradient(
            to right,
            #00ba0c 0%,
            #00ba0c 75%,
            #d7ffd1 80%,
            #00ba0c 85%,
            #00ba0c 100%
        );
        animation: shine 1.5s linear infinite;
        &.hide {
            display: none;
        }
    }
    @keyframes shine {
        100% {
            background-position: 1080px 0;
        }
    }
</style>