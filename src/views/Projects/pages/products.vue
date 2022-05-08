<template>
  <div class="projects">
    <BSearch :configs="searchConfig" @submit="onSearchSubmit" />
    <div class="projects-content">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ProjectCard from "../components/project-card.vue";
import BSearch from "components/b-search/index.vue"
// import { useDragFile } from "@/hooks/useDragFile";
import { reactive } from "vue";
import { projectType } from "@/views/Projects/types/index";
// const { files } = useDragFile({
//   formatter: (fileList) => {
//     return fileList.map(file => ({
//       path: file.path,
//       name: file.name,
//       lastModified: file.lastModified,
//       type: file.type
//     }))
//   },
//   success: () => { }
// })
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
  topics: ['Vue', 'three', 'node', '123', 'node'],
  description: "一个狗都不用的前端开发工具"
}]
const projects = reactive(cacheProjects)

const searchConfig = [
  {
    name: 'name',
    component: 'Input',
    label: '项目名称:',
    props: {
      placeholder: '请输入关键字',
    },
  },
  {
    name: 'key',
    component: 'Select',
    label: '项目分类:',
    props: {
      options: [
        {
          label: 'laebl',
          value: 'value',
        },
      ],
      placeholder: 'placeholder',
    },
  },

]

const onSearchSubmit = (res) => {
  console.log(res)
}
</script>
<style lang="scss" scoped>
.projects-search {
  width: 100%;
  height: 100%;
  border: $border;
  padding: 6px;
  margin-bottom: 10px;
}

.projects-content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-auto-rows: min-content;
}
</style>
