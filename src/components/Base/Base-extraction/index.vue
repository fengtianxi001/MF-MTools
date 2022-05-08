<template>
    <div
        class="base-extraction"
        :style="style"
    >
        <div
            class="base-extraction-context"
            :style="{overflowY: visible?'hidden':'scroll'}"
        >
            <slot name="main"></slot>
        </div>
        <div
            class="base-extraction-drawer"
            :style="{width: this.width}"
        >
            <div
                class="base-extraction-drawer-coat"
                v-show="visible"
                @click="closeHandle"
            ></div>
            <div class="base-extraction-drawer-content">
                <slot name="drawer"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "base-extraction",
        props: {
            width: {
                type: String,
                default: "400px"
            }
        },
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
            },
            style() {
                if (this.visible) {
                    return {
                        transform: `translateX(-${this.width})`
                    };
                } else {
                    return {
                        transform: `translateX(0px)`
                    };
                }
            }
        },
        methods: {
            closeHandle() {
                this.visible = false;
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .base-extraction {
        display: flex;
        transition: transform 0.5s ease;
        position: relative;
        .base-extraction-context {
            flex-shrink: 0;
            width: $page-w;
            height: $page-h;
            padding: 10px 10px 20px 10px;
        }
        .base-extraction-drawer {
            flex-shrink: 0;
            width: 400px;
            height: $page-h;
            padding: 10px 10px 10px 0;
            box-sizing: border-box;
            .base-extraction-drawer-coat {
                background-color: transparent;
                /* backdrop-filter: blur(.8px); */
                cursor: not-allowed;
                width: $page-w;
                height: $page-h;
                position: absolute;
                top: 0;
                left: 0;
            }
            .base-extraction-drawer-content {
                width: 100%;
                height: 100%;
                @include background_color("background_color5");
                border-width: 1px;
                border-style: solid;
                @include border_color("border_color2");
                padding: 10px;
                overflow-y: auto;
            }
        }
        /* transform: translateX(-400px); */
    }
</style>