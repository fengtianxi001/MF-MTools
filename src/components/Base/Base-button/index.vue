<template>
    <span
        class="base-button"
        :style="style"
        @click="$emit('click')"
    >
        <base-icon
            :icon="icon"
            v-if="icon"
        ></base-icon>
        <slot></slot>
    </span>
</template>
<script>
    const color_enum = {
        blue: "#0083ff",
        origin: "#fe8401",
        green: "#38a576",
        red: "#c8372d"
    };
    export default {
        name: "base-button",
        props: {
            color: String,
            icon: String
        },
        data() {
            return {};
        },
        computed: {
            style() {
                const { color } = this;
                if (color) {
                    return {
                        backgroundColor: color_enum[color]
                    };
                } else {
                    return {};
                }
            }
        },
        watch: {},
        created() {},
        mounted() {},
        destroyed() {},
        methods: {}
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .base-button {
        display: inline-block;
        border: 0;
        font-size: 12px;
        padding: 4px 10px;
        height: $element-h;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-align: center;
        user-select: none;
        border-width: 1px;
        border-style: solid;
        @include border_color("border_color2");
        color: #fff;
        background-color: #3c3c3c;
        transition: background 0.3s ease;
        &:active {
            background: transparent !important;
        }
    }
</style>