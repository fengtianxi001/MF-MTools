<template>
    <div class="form-item">
        <div
            class="form-item-label"
            :style="style"
        >
            <el-tooltip
                :content="tips"
                placement="top-start"
                v-if="tips"
            >
                <i
                    class="el-icon-warning-outline"
                    style="margin-right:6px"
                ></i>
            </el-tooltip>
            <span class="form-label-text">{{label}}:</span>
        </div>
        <div class="form-element">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "m-form-cell",
        props: {
            tips: String,
            label: String,
            width: String
        },
        computed: {
            style() {
                const style = {};
                if (this.width) {
                    style.width = this.width;
                }
                return style;
            }
        }
    };
</script>
<style lang='scss' scoped>
    .form-item {
        position: relative;
        display: flex;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
        .form-item-label {
            width: 86px;
            font-size: 12px;
            position: relative;
            color: #fff;
            /* text-align: right; */
            box-sizing: border-box;
            /* padding-right: 12px; */
        }
        .form-element {
            flex: 1;
        }
    }
</style>