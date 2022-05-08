<template>
    <div class="the-store-card">
        <div class="the-store-card-icon"></div>
        <div class="the-store-card-info">
            <div class="the-store-card-name">软件管理我的</div>
            <el-rate
                :value="1"
                disabled
                :show-score="false"
                text-color="#ff9900"
                class="the-store-card-rate"
            >
            </el-rate>
        </div>
    </div>
</template>
<script>
    export default {
        name: "the-store-card",
        components: {},
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
    .the-store-card {
        width: 100%;
        height: 176px;
        background-color: #dedede;
        @include background_color("background_color5");
        box-shadow: $box_shadow;
        cursor: pointer;
        position: relative;
        .the-store-card-icon {
            width: 117.5px;
            height: 117.5px;
            background-color: #3b1c8b;
        }
        .the-store-card-info {
            font-size: 12px;
            padding: 6px;
            
            .the-store-card-name {
                font-size: 16px;
            }
            .the-store-card-rate {
                position: absolute;
                bottom: 0;
                /* left: 0; */
            }
        }
    }
</style>