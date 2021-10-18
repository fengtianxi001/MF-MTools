<template>
    <li
        :class="{ active }"
        @click="$emit('change',option[valueKey])"
    >
        {{ option[labelKey] }}
    </li>
</template>
<script>
    export default {
        props: {
            valueKey: String,
            labelKey: String,
            active: Boolean,
            option: Object
        }
    };
</script>
<style lang="scss" scoped>
    li {
        width: 100%;
        height: 28px;
        background-color: #222d35;
        margin: 10px 0;
        border-radius: 4px;
        margin-right: 10px;
        background-size: 16px 16px;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
        border: $border;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
            background-color: #38a576;
            color: #fff;
        }
        &:active {
            background-color: $buttonActive;
        }
    }
</style>
