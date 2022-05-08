<template>
    <div class="the-webs">
        <the-web-header></the-web-header>
        <the-web-search></the-web-search>
        <draggable
            v-model="webs"
            ghost-class="ghost"
            dragClass='drag'
            class="the-web-content"
        >
            <template v-for="web in webs">
                <the-web-site
                    :key="web.id"
                    :site="web"
                ></the-web-site>
            </template>
        </draggable>
    </div>
</template>
<script>
    const default_site = [
        {
            id: "ee2b6acb-ecd7-46bd-9ed9-e666aca7c6ec",
            site: "https://www.github.com",
            name: "github",
            icon: "github"
        },
        {
            id: "6521d937-8843-40a8-bd44-3a4947246112",
            site: "https://lanhuapp.com/web/#/item",
            name: "蓝湖",
            icon: "lanhu"
        },
        {
            id: "c0d07b61-67dc-4b98-b220-d9aeaa5e8eec",
            site: "https://www.bilibili.com/",
            name: "bilibili",
            icon: "bilibili"
        },
        {
            id: "ab2cb921-cc67-4a98-8ac0-4706324e7955",
            site: "http://112.124.22.244:3000/fengtianxi001",
            name: "gogs",
            icon: "gogs"
        },
        {
            id: "526b78d2-d17e-4b91-a652-a26068782028",
            site: "https://www.npmjs.com/",
            name: "npm",
            icon: "npm"
        },
        {
            id: "1e2e441b-818f-4dc9-8c8a-716e5fdb9ba1",
            site: "https://www.baidu.com",
            name: "baidu",
            icon: "baidu"
        },
        {
            id: "46ad6253-02bf-41b1-8440-42045dfcf295",
            site: "https://uniapp.dcloud.io/",
            name: "uniapp",
            icon: "uniapp"
        },
        {
            id: "2caa1ae3-e68c-4061-8ac9-bebdc6e7b1e1",
            site: "https://www.iconfont.cn/",
            name: "iconfont",
            icon: "iconfont"
        },
        {
            id: "59676c27-bb05-4c15-8c39-461ba4b805f1",
            site: "http://112.124.22.244:8080/",
            name: "jenkins",
            icon: "jenkins"
        },
        {
            id: "68a2a861-8738-4513-aa62-fa27b112b3b2",
            site: "https://www.figma.com/community",
            name: "figma",
            icon: "figma"
        },
        {
            id: "2ea24bb0-aa6a-43b2-acf5-76f72036ee63",
            site: "https://dribbble.com/",
            name: "dribbble",
            icon: "dribbble"
        },
        {
            id: "bbdb77b0-4b30-428e-bb52-752af0c42ae4",
            site: "https://www.zcool.com.cn/",
            name: "zcool",
            icon: "zcool"
        },
        {
            id: "4c1b8aff-8b4d-4d18-ae3c-5764e12d64e3",
            site: "https://www.xiaomapan.com/#/",
            name: "xiaomapan",
            icon: "xiaomapan"
        },
        {
            id: "29cfd449-de8a-4577-9f36-41ae7bf659c3",
            site: "https://www.imooc.com/",
            name: "imooc",
            icon: "imooc"
        },
        {
            id: "8442dd6b-abdc-4df2-a000-b2567c25ba8e",
            site: "https://www.zhihu.com/hot",
            name: "zhihu",
            icon: "zhihu"
        },
        {
            id: "c714cc9f-8e95-4d92-bbb8-b2ca4fb47f4f",
            site: "https://react.docschina.org/",
            name: "react",
            icon: "react"
        },
        {
            id: "b47e7a2d-f720-4444-8f3b-0b691a6c6254",
            site: "https://storyset.com/",
            name: "storyset",
            icon: "storyset"
        },
        {
            id: "12e29479-b310-46cf-bf3b-9955b4f9b90b",
            site: "http://nodejs.cn/",
            name: "nodejs",
            icon: "node"
        },
        {
            id: "4bb2df25-eb6f-48cb-aaf2-d24461948862",
            site: "http://www.webgl3d.cn/",
            name: "threejs",
            icon: "threejs"
        },
        {
            id: "8f093b89-038c-4679-8e3f-9ddef7a5acd2",
            site: "https://pan.baidu.com/",
            name: "baiduyun",
            icon: "baiduyun"
        },
        {
            id: "2936311d-c589-4a62-bb10-18683319db62",
            site: "https://mail.qq.com/",
            name: "qq邮箱",
            icon: "qqmail"
        },
        {
            id: "3b54b2f2-3ada-4261-b108-a9e25c3f7182",
            site: "http://www.youdao.com/",
            name: "有道翻译",
            icon: "youdao"
        }
    ];
    export default {
        name: "Webs",
        components: {
            theWebHeader: () => import("./components/the-web-header.vue"),
            theWebSearch: () => import("./components/the-web-search.vue"),
            theWebSite: () => import("./components/the-web-site.vue")
        },
        data() {
            return {};
        },
        computed: {
            webs: {
                get() {
                    return default_site;
                },
                set(webs) {
                    this.$store.commit("setWebs", webs);
                }
            }
        },
        watch: {},
        created() {},
        mounted() {},
        destroyed() {},
        methods: {}
    };
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/handle.scss";
    .the-webs {
        min-height: $page-h;
        width: $page-w;
        /* @include background_image("background_image"); */
        padding: 10px;
        .the-web-content {
            display: grid;
            grid-template-columns: repeat(15, 1fr);
            grid-column-gap: 14px;
            grid-row-gap: 14px;
            grid-auto-rows: min-content;
            margin-top: 20px;
        }
    }
</style>
