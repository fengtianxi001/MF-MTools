<template>
    <m-form-cell v-bind="$attrs">
        <el-switch
            style="transform:scale(.8)"
            v-model="data"
        ></el-switch>
    </m-form-cell>
</template>
<script>
    export default {
        name: "m-form-switch",
        props: {
            value: [String, Number, Boolean],
            disable: Boolean
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
