<template>
  <div class="projects">
    <b-search :configs="searchConfig" @submit="onSearchSubmit" />
    <div class="projects-content">
      <b-project-card v-for="project in list" :key="project.id" :project="project" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDragFile } from "hooks/useDragFile";
import { computed, Ref } from "vue";
import { projectType } from "views/Projects/types/index";
import { useStore } from "vuex";
import { createProjectPacker } from "utils/index";
import { projectsSearchConfigs as searchConfig } from "../configs/index";
import { useProjectList } from "hooks/useProjectList";
const store = useStore();
useDragFile({
  accept: [""],
  success: (files: Array<File>) => {
    const result = createProjectPacker(files);
    store.commit("addProject", result);
  },
});
// const projects: Ref<Array<projectType>> = computed(() => store.getters.projects);
const { list,refresh } = useProjectList()
const onSearchSubmit = (res) => {
  // console.log(res);
  refresh(res)
};
</script>
<style lang="scss" scoped>
@import "../styles/projects.scss"
</style>
