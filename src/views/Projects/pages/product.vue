<template>
  <div class="project">
    <div class="project-left">
      <b-files-tree :baseURL="project.path" />
      <b-markdown :src="project.path" />
    </div>
    <div class="project-right">
      <div class="project-base">
        <div class="project-base-name">{{ project.name }}</div>
        <div class="project-base-createTime">{{ project.lastModified }}</div>
      </div>
      <ul class="project-topics">
        <li v-for="topic in project.topics" :key="topic">{{ topic }}</li>
      </ul>
      <ul class="project-operate">
        <li>安装依赖</li>
        <li>编辑器打开</li>
        <li>打开文件夹</li>
        <li>打开github</li>
        <li>重新加载数据</li>
        <li>项目日报</li>
        <li>项目周报</li>
        <li>编辑项目</li>
        <li>删除项目</li>
      </ul>
      <ul class="project-operate">
        <li v-for="item in scripts" :key="item">run {{ item }}</li>
      </ul>
      <b-percent-chart :data="languages" />
      <div class="project-calendar">
        <li v-for="item in 80" :key="item"></li>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { getProjectLanguages, getProjectScripts } from "utils/index";
const path = require("path")
const store = useStore();
const route = useRoute();


const project = store.getters.projects.find(item => {
  return item.id == route.params.id
})
const languages = getProjectLanguages(project.path)
const scripts = getProjectScripts(project.path)
// const markdownURL = path.join(project.path, "README.md")

</script>

<style lang="scss" scoped>
@import "../styles/project.scss"
</style>
