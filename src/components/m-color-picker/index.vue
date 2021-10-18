<template>
    <div class="m-color-picker">
        <el-popover
            placement="bottom-end"
            width="200"
            trigger="click"
            popper-class="color-picker-popover"
            v-model="visible"
        >
            <div class="m-color-picker-block">
                <span
                    v-for="colorItem in colorBlockItem"
                    :key="colorItem"
                    :style="{background:colorItem}"
                    class="m-color-picker-item"
                    @click="handle(colorItem)"
                ></span>
            </div>
            <div
                slot="reference"
                class="m-color-picker-button"
                :style="{background:value}"
            ></div>
        </el-popover>
    </div>

</template>
<script>
    import { colorBlockItem } from "./static";
    export default {
        name: "m-color-picker",
        props: {
            value: {
                type: String,
                default: "#000000"
            }
        },
        data() {
            return {
                visible: false,
                colorBlockItem
            };
        },
        methods: {
            handle(color) {
                this.$emit("input", color);
                this.$emit("change", color);
                this.visible = false;
            }
        }
    };
</script>
<style lang='scss' scoped>
    .m-color-picker {
        .m-color-picker-button {
            width: 21px;
            height: 21px;
            background-color: #1f1f1f;
            border: 2px solid #fff;
            cursor: pointer;
            box-sizing: border-box;
            border-radius: 2px;
        }
    }
    .m-color-picker-block {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-row-gap: 10px;
        grid-column-gap: 6px;
        .m-color-picker-item {
            display: inline-block;
            width: 21px;
            height: 21px;
            border-radius: 2px;
            cursor: pointer;
            position: relative;
            outline: none;
            background: #fc6921;

            &:nth-child(n + 8) {
                margin-bottom: 0;
            }
        }
    }
</style>
<style lang='scss'>
    .color-picker-popover {
        background-color: #242f35 !important;
        border: $border !important;
        .popper__arrow {
            display: none !important;
        }
    }
</style>

