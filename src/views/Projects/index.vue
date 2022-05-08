<template>
    <div class="project">
        <draggable
            v-model="projects"
            ghost-class="ghost"
            dragClass='drag'
            class="the-project-content"
        >
            <template v-for="project in projects">
                <the-project-card
                    :key="project.id"
                    :project="project"
                ></the-project-card>
            </template>
        </draggable>
    </div>
</template>
<script>
    import { addProjects } from "./controller";
    import mixin from "@/mixins/dragFile.js";
    export default {
        name: "Projects",
        mixins: [mixin],
        data() {
            return {
                visible: false,
                projectId: "null"
            };
        },
        computed: {
            projects: {
                get() {
                    return this.$store.getters.projects;
                },
                set(projects) {
                    this.$store.commit("setProjects", projects);
                }
            }
        },
        components: {
            theProjectCard: () => import("./components/the-project-card")
        },
        methods: {
            projectHandle(project) {
                this.visible = true;
                this.projectId = project.id;
            },
            dropListener(e) {
                e.preventDefault();
                const files = e.dataTransfer.files;
                addProjects(files);
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .project {
        padding: 10px;
        transform: scale(1);
        height: $page-h;
        width: $page-w;
        .project-filter {
            width: 100%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @include font_color("font_color4");
            position: sticky;
            top: 0;
            z-index: 999;
            @include background_color("background_color2");
            .title {
                display: flex;
                align-items: center;
                .base-icon {
                    font-size: 24px;
                    margin-right: 4px;
                }
            }
        }
        .the-project-content {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            grid-auto-rows: min-content;
        }
    }
    .ghost {
        opacity: 0.5;
    }
</style>