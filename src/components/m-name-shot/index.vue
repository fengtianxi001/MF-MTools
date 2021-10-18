<script>
    export default {
        name: "name-shot",
        props: {
            label: String,
            color: String,
            size: {
                type: String,
                default: "45px"
            }
        },
        computed: {
            style() {
                const style = {};
                const { color,size } = this;
                style.width = style.height = size
                if (color) style.background = color;
                return style;
            }
        },
        render() {
            return (
                <div class="name-shot" style={this.style}>
                    {this.$slots.default[0]["text"].trim()[0].toUpperCase()}
                </div>
            );
        },
    };
</script>
<style lang='scss' scoped>
    .name-shot {
        font-weight: bolder;
        font-size: 22px;
        width: 45px;
        height: 45px;
        border-radius: 10px;
        background-color: #1f1f1f;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        flex-shrink: 0;
        border: $border;
        color: #fff;
        /* &.vue {
                                color: #41b883;
                                background-color: #fff;
                            }
                            &.react {
                                color: #61dafb;
                                background-color: #393f4c;
                            }
                            &.electron {
                                color: #fff;
                                background-color: #1f1f1f;
                            }
                            &.node {
                                color: #fff;
                                background-color: #43853d;
                            }
                            &.normal {
                                color: #fff;
                                background-color: #f6e031;
                                color: #34322f;
                            } */
    }
</style>