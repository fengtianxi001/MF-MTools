<template>
    <ul class="m-menu-radio-item">
        <template v-for="option in options">
            <m-menu-radio-item
                :key="option[valueKey]"
                :option="option"
                :valueKey="valueKey"
                :labelKey="labelKey"
                :active="value === option[valueKey]"
                @change="change"
            />
        </template>
    </ul>
</template>
<script>
    export default {
        name: "m-menu-radio",
        props: {
            options: Array,
            valueKey: {
                type: String,
                default: "value"
            },
            labelKey: {
                type: String,
                default: "label"
            },
            value: [String, Boolean, Number]
        },
        components: {
            MMenuRadioItem: () => import("./m-menu-radio-item.vue")
        },
        methods: {
            change(value) {
                this.$emit("input", value);
                this.$emit("change", value);
            }
        }
    };
</script>
<style lang="scss" scoped>
    .m-menu-radio-item {
        /* display: flex; */
        font-size: 12px;
    }
</style>
