<template>
    <div class="softwareCard">
        <folder
            v-if="data.length>1"
            :data="data"
        ></folder>
        <single
            v-else
            :data="data"
        ></single>
    </div>
</template>

<script>
    import single from "./single.vue";
    import folder from "./folder.vue";
    export default {
        name: "SoftwareCard",
        props: {
            data: Array
        },
        computed: {
            type() {
                const isFolder = this.data.length === 1;
                return isFolder ? "folder" : "single";
            }
        },
        components: {
            folder,
            single
        }
    };
</script>
<style lang='scss' scoped>
    .softwareCard {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        border-radius: 6px;
        &.single {
        }
        &.folder {
        }
    }
</style>