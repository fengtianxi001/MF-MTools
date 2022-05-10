<template>
  <div class="project">
    <div class="project-left">
      <b-files-tree :baseURL="project.path" />
      <b-markdown :src="project.path" />
    </div>
    <div class="project-right">
      <project-baseinfo :name="project.name" :lastModified="project.lastModified" />
      <project-topics :topics="project.topics" />
      <project-operate :src="project.path" />
      <project-scripts :src="project.path" />
      <b-percent-chart :data="languages" />
      <project-calendar />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { getProjectLanguages } from "utils/index";
import ProjectScripts from "../components/project-scripts.vue"
import ProjectOperate from "../components/project-operate.vue"
import ProjectTopics from "../components/project-topics.vue"
import projectBaseinfo from "../components/project-baseinfo.vue"
import projectCalendar from "../components/project-calendar.vue"
const store = useStore();
const route = useRoute();


const project = store.getters.projects.find(item => {
  return item.id == route.params.id
})
const languages = getProjectLanguages(project.path)
</script>

<style lang="scss" scoped>
@import "../styles/project.scss"
</style>
