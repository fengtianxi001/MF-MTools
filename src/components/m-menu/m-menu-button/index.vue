<template>
    <div
        class="m-menu-button"
        @click="$emit('click')"
    >
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "m-menu-button"
    };
</script>
<style lang='scss' scoped>
    .m-menu-button {
        background-color: #222d35;
        margin-top: 10px;
        box-sizing: border-box;
        height: 28px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        border: $border;
        text-align: center;
        font-size: 12px;
        justify-content: center;
        &:active{
            background-color: #000;
        }
    }
</style>