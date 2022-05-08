<template>
    <div
        class="base-drawer"
        ref="baseDrawer"
        :class="{show:visible}"
    >
        <div
            class="base-drawer-coat"
            @click="coatHandle"
        ></div>
        <div class="base-drawer-content">
            <ul class="base-drawer-title">
                <li></li>
                <li>项目信息详情</li>
                <li></li>
            </ul>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "base-drawer",
        data() {
            return {};
        },
        computed: {
            visible: {
                get() {
                    return this.$attrs.visible;
                },
                set(value) {
                    this.$emit("update:visible", value);
                }
            }
        },
        methods: {
            coatHandle() {
                this.visible = false;
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .base-drawer {
        width: $vw;
        height: $vh - $layout-bar-h;
        background-color: transparent;
        position: fixed;
        top: $layout-bar-h;
        right: 0;
        padding: 10px;
        display: flex;
        justify-content: flex-end;
        transform: translateX(100%);
        transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        &.show {
            transform: translateX(0%);
        }
        .base-drawer-coat {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent;
        }
        .base-drawer-content {
            width: 400px;
            height: calc(100% - 20px);
            @include background_color("background_color5");
            border-width: 1px;
            border-style: solid;
            @include border_color("border_color2");
            position: absolute;
            padding: 6px 20px;
            .base-drawer-title {
                height: $layout-bar-h;
                /* border-bottom-width: 1px; */
                /* border-bottom-style: solid; */
                /* @include border_color("border_color2"); */
                /* padding-bottom: 4px; */
                display: flex;
                align-items: center;
                color: #767676;
                /* font-weight: bold; */
            }
        }
    }
</style>