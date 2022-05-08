<template>
    <div class="base-waterfall">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "base-waterfall",
        data() {
            return {
                // images,
                layout: [0, 0, 0, 0, 0]
            };
        },
        methods: {
            init() {
                const slots = this.$slots.default;
                slots.map(vnode => {
                    const height = vnode.elm.clientHeight;
                    let min = Math.min(...this.layout);
                    let index = this.layout.findIndex(cur => cur === min);
                    this.layout[index] = min + height + 10;
                    const top = min + 10 + "px";
                    const left = index * (10 + 188) + "px";
                    vnode.elm.style.top = top;
                    vnode.elm.style.left = left;
                });
            }
        },
        mounted() {
            this.init();
        },
        watch: {
            $slots: {
                deep: true,
                handler() {
                    this.init();
                }
            }
        }
    };
</script>
<style lang='scss' scoped>
    .base-waterfall {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>