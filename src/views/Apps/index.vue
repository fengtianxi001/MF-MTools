<template>
    <div class="app">
        <draggable
            v-model="apps"
            ghost-class="ghost"
            dragClass='drag'
            class="the-app-content"
        >
            <template v-for="app in apps">
                <the-app-card
                    :key="app.id"
                    :app="app"
                ></the-app-card>
            </template>
        </draggable>
    </div>
</template>
<script>
    import mixin from "@/mixins/dragFile.js";
    import { addApps } from "./controller";
    export default {
        name: "Apps",
        mixins: [mixin],
        data() {
            return {};
        },
        components: {
            theAppCard: () => import("./components/the-app-card")
        },
        computed: {
            apps: {
                get() {
                    return this.$store.getters.apps;
                },
                set(apps) {
                    this.$store.commit("setApps", apps);
                }
            }
        },
        methods: {
            dropListener(e) {
                e.preventDefault();
                const files = e.dataTransfer.files;
                addApps(files);
            }
        }
    };
</script>
<style lang='scss' scoped>
    .app {
        padding: 10px 10px 20px 10px;
        transform: scale(1);
        height: $page-h;
        width: $page-w;
        .the-app-content {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(15, 1fr);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            grid-auto-rows: min-content;
        }
    }
</style>