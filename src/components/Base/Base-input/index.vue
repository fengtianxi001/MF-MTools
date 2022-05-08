<template>
    <input
        type="text"
        class="base-input"
        :style="{width,height}"
    >
</template>
<script>
    export default {
        name: "base-input",
        components: {},
        mixins: [],
        props: {
            width: {
                type: String,
                default: "160px"
            },
            height: {
                type: String,
                default: "30px"
            }
        },
        data() {
            return {};
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        destroyed() {},
        methods: {}
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .base-input {
        outline: none;
        /* background-color: #1e1e1e; */
        @include background_color("element_background1");
        border: 0;
        @include font_color("font_color1");
        font-size: 14px;
        padding: 4px;
        padding-left: 10px;
        height: $element-h;
        border-width: 1px;
        border-style: solid;
        @include border_color("border_color2");
    }
</style>