<template>
    <el-drawer
        :visible.sync="visible"
        direction="rtl"
        :modal="false"
        size="410px"
    >
        <div class="the-project-drawer">
            <div class="project-baseinfo">
                <div class="project-baseinfo-col">
                    <base-name
                        :name="project.pinyin"
                        size="60px"
                    ></base-name>
                    <div class="project-name">
                        <div style="font-size:20px">{{project.name}}</div>
                        <div style="font-size:12px;margin-top:2px">{{project.addtime|time_format}}</div>
                    </div>
                </div>
                <base-input
                    v-model="project.path"
                    width="100%"
                    disabled
                ></base-input>
            </div>

            <div class="operate-container">
                <base-button
                    icon="exchangerate"
                    @click="reloadHandle"
                >重载项目</base-button>
                <base-button
                    color="red"
                    icon="ashbin"
                    @click="deleteHandle"
                >删除项目</base-button>
            </div>
            <div class="operate-container">
                <base-button
                    icon="code1"
                    @click="editorHandle"
                >编辑器打开</base-button>
                <base-button
                    icon="folder"
                    @click="folderHandle"
                >文件夹打开</base-button>
                <base-button
                    icon="centeralignment"
                    @click="cmdHandle"
                >终端打开</base-button>
                <base-button
                    icon="copy"
                    @click="copyHandle"
                >复制路径</base-button>
            </div>
            <div
                class="operate-container"
                v-show="project.remote === 'git'"
            >
                <base-button
                    color="origin"
                    @click="gitPull"
                >git拉取</base-button>
                <base-button
                    color="origin"
                    @click="gitPush"
                >git提交</base-button>
                <base-button
                    color="origin"
                    @click="gitCommit"
                >git推送</base-button>
            </div>
            <div
                class="operate-container"
                v-show="project.scripts.length > 0"
            >
                <base-button
                    color="green"
                    @click="runHandle('npm install')"
                >npm install</base-button>

                <template v-for="(script,index) in project.scripts">

                    <base-button
                        :key="index"
                        color="green"
                        @click="runHandle('npm run ' + script)"
                    >npm run {{script}}</base-button>
                </template>
            </div>
            <the-project-card-calendar
                v-show="project.remote === 'git'"
                :project-path="project.path||''"
            ></the-project-card-calendar>
        </div>
    </el-drawer>
</template>

<script>
    import {
        deleteProject,
        reloadProject,
        editorProject,
        folderProject,
        cmdProject,
        runProject,
        gitCommit,
        gitPush,
        gitPull,
        copyText
    } from "../../controller";
    export default {
        name: "the-project-card-detail",
        props: {
            project: Object
        },
        computed: {
            visible: {
                get() {
                    return this.$attrs.visible;
                },
                set(visible) {
                    this.$emit("update:visible", visible);
                }
            }
        },
        methods: {
            reloadHandle() {
                //重载项目
                reloadProject(this.project);
            },
            deleteHandle() {
                //删除项目
                const { id, path } = this.project;
                deleteProject({ id, path }).then(() => {
                    this.visible = false;
                });
            },
            editorHandle() {
                //编辑器打开
                const { path } = this.project;
                editorProject(path).then(() => {
                    this.visible = false;
                });
            },
            folderHandle() {
                //文件夹打开
                const { path } = this.project;
                folderProject(path).then(() => {
                    this.visible = false;
                });
            },
            cmdHandle() {
                //终端打开
                const { path } = this.project;
                cmdProject(path).then(() => {
                    this.visible = false;
                });
            },
            copyHandle() {
                //复制路径
                const { path } = this.project;
                copyText(path).then(() => {
                    this.visible = false;
                });
            },
            runHandle(script) {
                //运行脚本
                const { path } = this.project;
                runProject({ script, path }).then(() => {
                    this.visible = false;
                });
            },
            gitCommit() {
                const { path } = this.project;
                gitCommit(path).then(() => {
                    this.visible = false;
                });
            },
            gitPush() {
                const { path } = this.project;
                gitPush(path).then(() => {
                    this.visible = false;
                });
            },
            gitPull() {
                const { path } = this.project;
                gitPull(path).then(() => {
                    this.visible = false;
                });
            }
        },
        components: {
            theProjectCardCalendar: () => import("../the-project-card-calendar")
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .the-project-drawer {
        overflow-x: hidden;
    }
    .project-baseinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        height: 100%;
        .project-baseinfo-col {
            display: flex;
            margin-bottom: 20px;
            width: 100%;
            height: 60px;
            .project-name {
                @include background_color("element_background1");
                @include font_color("font_color1");
                color: #fff;
                width: calc(100% - 60px);
                height: 100%;
                padding-left: 14px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                font-family: PingFang-Bold;
            }
        }
    }
    .project-detail {
        padding-top: 10px;
    }
    .operate-container {
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 10px;
        padding: 6px;
        padding-bottom: 0;
        border-width: 1px;
        border-style: solid;
        @include border_color("border_color3");
        /* border-radius: 4px; */
        .base-button {
            margin-bottom: 6px;
        }
    }
</style>