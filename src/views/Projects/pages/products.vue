<template>
  <div class="project">
    <ProjectCard v-for="item in projects" :key="item.id" :project="item" />
  </div>
</template>
<script setup lang="ts">
import ProjectCard from "../components/project-card.vue";
import { useDragFile } from "@/hooks/useDragFile";
import { reactive } from "vue";
import { projectType } from "@/views/Projects/types/index";
import { values } from "lodash";
import { isLeaf } from "element-plus/lib/utils";
const { files } = useDragFile({
  formatter: (fileList) => {
    return fileList.map(file => ({
      path: file.path,
      name: file.name,
      lastModified: file.lastModified,
      type: file.type
    }))
  },
  success: () => { }
})
const cacheProjects: projectType[] = [{
  id: "123",
  name: "MTOOLS2.0",
  createTime: new Date().getTime(),
  lastModifyTime: new Date().getTime(),
  languages: [
    {
      value: 1,
      label: "vue"
    }
  ],
  folderTree: [{
    path: "",
    label: "",
    isLeaf: true,
  }],
  isGit: true,
  topics: ["vue"]
}]
const projects = reactive(cacheProjects)
// import Layout from "@/components/b-layout/index.vue";
</script>
<style lang="scss" scoped>
.project {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-auto-rows: min-content;
}
</style>
