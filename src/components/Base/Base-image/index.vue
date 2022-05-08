<template>
    <img
        :src="src"
        class="waterfall-image"
        :style="style"
    >
</template>
<script>
    export default {
        name: "base-image",
        props: {
            src: String,
            size: Array
        },
        data() {
            return {
                loading: true
            };
        },
        computed: {
            style() {
                const { size } = this;
                if (size) {
                    return {
                        width: size[0] + "px",
                        height: size[1] + "px"
                    };
                } else {
                    return {};
                }
            }
        },
        watch: {
            src: {
                immediate: true,
                handler(src) {
                    this.loading = true;
                    const image = new Image();
                    image.onload = () => {
                        this.loading = false;
                    };
                    image.src = src;
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/handle.scss";
    .waterfall-image {
        cursor: pointer;
        border-width: 1px;
        border-style: solid;
        @include border_color("border_color2");
    }
</style>