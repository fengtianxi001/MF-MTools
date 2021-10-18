<template>
    <m-form-cell v-bind="$attrs">
        <el-input
            :disabled="disabled"
            v-model="data"
            autocomplete="off"
            size="mini"
            :placeholder="placeholder"
        ></el-input>
    </m-form-cell>
</template>
<script>
    export default {
        name: "m-form-input",
        props: {
            placeholder: String,
            value: [String, Number],
            disabled: Boolean
        },
        data() {
            return {
                data: ""
            };
        },
        watch: {
            data: {
                immediate: true,
                deep: true,
                handler(data) {
                    this.$emit("input", data);
                }
            },
            value: {
                immediate: true,
                handler(value) {
                    this.data = value;
                }
            }
        }
    };
</script>
