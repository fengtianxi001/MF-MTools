<template>
    <div
        class="base-search-bar"
        :style="style"
        :class="{expansion}"
    >
        <template v-if="expansion">
            <div class="base-search-bar-search">
                <base-icon icon="search"></base-icon>
                <input type="text">
                <span class="base-search-bar-tips">无结果</span>
            </div>

            <span class="base-search-bar-operate">
                <base-icon icon="rising1"></base-icon>
                <base-icon icon="falling"></base-icon>
                <base-icon
                    icon="close"
                    @click="closeHandle"
                ></base-icon>
            </span>
        </template>
        <base-icon
            v-else
            icon="search"
            @click="openHandle"
            style="cursor: pointer;"
        ></base-icon>
    </div>

</template>
<script>
    export default {
        name: "base-search-bar",
        data() {
            return {
                expansion: true
            };
        },
        computed: {
            style() {
                const { expansion } = this;
                if (expansion) {
                    return {
                        width: "380px"
                    };
                } else {
                    return {
                        width: "34px",
                        padding: 0,
                        borderRadius: "50%",
                        border: "none",
                        justifyContent: "center"
                    };
                }
            }
        },
        watch: {},
        created() {},
        mounted() {},
        destroyed() {},
        methods: {
            closeHandle() {
                this.expansion = false;
            },
            openHandle() {
                this.expansion = true;
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .base-search-bar {
        width: 380px;
        height: 34px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
        @include font_color("font_color1");
        border-width: 1px;
        border-style: solid;
        @include border_color("border_color2");
        border-left: 2px solid #38a576;
        border-left-color: #38a576!important;
        background-color: #282828;
        @include background_color("background_color5");
        align-items: center;
        display: flex;
        padding: 0 10px;
        box-shadow: 0 0 0 #000;
        font-size: 12px;
        justify-content: space-between;
        overflow: hidden;
        transition: width 0.5s ease, border-radius 1s ease;
        &.expansion{
            transition: width 0.5s ease,border-radius 0s ease;
        }
        .base-search-bar-search {
            display: flex;
            align-items: center;
            position: relative;
            .base-icon {
                font-size: 20px;
                margin-right: 4px;
                cursor: pointer;
                position: absolute;
                left: 4px;
            }
            input {
                /* background-color: #3c3c3c; */
                @include background_color("background_color2");
                @include font_color("font_color1");
                border: none;
                height: 24px;
                width: 200px;
                padding: 0 10px;
                outline: none;
                padding-left: 30px;
            }
        }

        .base-search-bar-tips {
            margin-left: 10px;
        }
        .base-search-bar-operate {
            .base-icon {
                font-size: 18px;
                margin-right: 4px;
                cursor: pointer;
            }
        }
    }
</style>