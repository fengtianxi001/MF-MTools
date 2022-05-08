<template>
    <span
        class="base-name"
        :style="style"
    >
        {{name | nameFilter}}
    </span>
</template>
<script>
    import { stringColor } from "@/utils/index.js";
    export default {
        name: "base-name",
        props: {
            name: {
                type: String,
                default: "Demo"
            },
            size: {
                type: String,
                default: "50px"
            }
        },
        data() {
            return {};
        },
        computed: {
            style() {
                const color = stringColor(this.name);
                // console.log(color);
                const { size } = this;
                return {
                    backgroundColor: color,
                    width: size,
                    height: size,
                    fontSize: size.replace("px", "") / 2 + "px",
                    fontWeight: "bolder"
                };
            }
        },
        methods: {},
        filters: {
            nameFilter(name) {
                return name.slice(0, 2).toUpperCase();
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .base-name {
        display: inline-block;
        background: #38a569;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-family: fs;
        /* background-image: url("../../../assets/images/123.png");
        background-size: cover; */
    }
</style>