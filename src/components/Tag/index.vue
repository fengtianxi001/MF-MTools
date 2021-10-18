<template>
    <div
        class="m-tag"
        :style="style"
        @click.stop="$emit('click')"
    >
        <slot>1122</slot>
    </div>
</template>
<script>
    export default {
        name: "m-tag",
        props: {
            label: String,
            color: {
                type: String,
                default: "grey"
            }
        },
        computed: {
            style() {
                const { color } = this;
                const _enum = {
                    origin: "#ef4f3a",
                    green: "#38a576",
                    grey: "#404c54"
                };
                return {
                    background: _enum[color] || _enum["grey"]
                };
            }
        }
    };
</script>
<style lang='scss' scoped>
    .m-tag {
        display: inline-block;
        padding: 1px 6px;
        background-color: #404c54;
        border-radius: 2px;
        transition: all 0.15s ease-in-out;
        border: $border;
        cursor: pointer;
        color: #fff;
        font-size: 12px;
        margin-right: 4px;
        &:last-child {
            margin-right: 0px;
        }
        &:active{
            background-color: $buttonActive!important;
        }
    }
</style>