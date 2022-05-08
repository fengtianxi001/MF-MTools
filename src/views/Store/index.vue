<template>
    <div class="store">
        <div class="store-content">
            <template v-for="index in 20">
                <the-store-card :key="index"></the-store-card>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        name: "store",
        components: {
            theStoreCard: () => import("./components/the-store-card.vue")
        },
        mixins: [],
        props: {},
        data() {
            return {};
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        destroyed() {},
        methods: {}
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .store {
        min-height: $page-h;
        width: $page-w;
        @include font_color("font_color1");
        padding: 10px;
        .store-header {
            width: 150px;
            font-family: fs PingFang-Medium;
            font-size: 22px;
            border-left: 4px solid $active_green;
            padding-left: 10px;
            height: 34px;
            line-height: 34px;
        }
        .store-content {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-row-gap: 10px;
            grid-column-gap: 10px;
            grid-auto-rows: min-content;
            margin-top: 16px;
        }
    }
</style>