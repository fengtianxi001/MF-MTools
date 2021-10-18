<template>
    <div class="layout">
        <m-tabbar></m-tabbar>
        <div class="layout-body">
            <div class="layout-menu">
                <m-layout-menu />
            </div>
            <div class="layout-main">
                <div class="contianer">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "m-layout",
        components: {
            mLayoutMenu: () => import("./m-layout-menu.vue")
        }
    };
</script>
<style lang="scss" scoped>
    .layout {
        width: $width;
        height: $height;
        display: flex;
        box-shadow: 0px 0px 15px 0px #000000d6;
        flex-direction: column;
        overflow: hidden;
        border-radius: 6px;
        overflow: hidden;
        color: $menuDefaultColor;
        .layout-body {
            width: 100%;
            height: calc(100% - #{$barHeight});
            display: flex;
            overflow: hidden;
        }
        .layout-menu {
            width: 170px;
            height: 100%;
            background-color: $menuBgc;
        }
        .layout-main {
            width: calc(100% - 170px);
            height: 100%;
            background-color: $mainBgc;
            .contianer {
                height: 100%;
            }
        }
    }
</style>
