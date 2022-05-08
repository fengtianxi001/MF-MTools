<template>
    <i
        class="base-icon"
        :class="iconName"
        @click="$emit('click')"
    ></i>
</template>
<script>
    export default {
        name: "base-icon",
        props: {
            icon: {
                type: String,
                default: "folder"
            }
        },
        computed: {
            iconName() {
                return "iconfont icon-" + this.icon;
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import url("../../../assets/icons/common_icon/iconfont.css");
</style>