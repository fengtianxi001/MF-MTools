<template>
    <div
        class="base-dialog"
        v-show="visible"
    >
        <div
            class="base-dislog-content"
            :style="style"
        >
            <div class="base-dialog-title">{{title}}</div>
            <slot></slot>
            <div class="base-dialog-btn">
                <base-button @click="cancelHandle">取消</base-button>
                <base-button
                    @click="confirmHandle"
                    color="green"
                > 确定</base-button>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "base-dialog",
        props: {
            width: {
                type: String,
                default: "600px"
            },
            title: {
                type: String,
                default: "title"
            }
        },
        data() {
            return {};
        },
        computed: {
            style() {
                const { width } = this;
                return {
                    width
                };
            },
            visible: {
                get() {
                    return this.$attrs.visible;
                },
                set(bool) {
                    this.$emit("update:visible", bool);
                }
            }
        },
        watch: {},
        created() {},
        mounted() {},
        destroyed() {},
        methods: {
            cancelHandle() {
                this.$emit("cancel");
                this.visible = false;
            },
            confirmHandle() {
                this.$emit("confirm");
                console.log("123");
                this.visible = false;
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .base-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: #fff;
        user-select: none;
    }
    .base-dislog-content {
        @include background_color("background_color3");
        @include font_color("font_color1");
        padding: 20px 20px 20px;
        .base-dialog-title {
            font-weight: bold;
            color: $active_green;
            margin-bottom: 24px;
            font-size: 16px;
        }
        .base-dialog-btn {
            display: flex;
            justify-content: center;
            margin-top: 24px;
            .base-button {
                margin-left: 10px;
                width: 100px;
            }
        }
    }
</style>