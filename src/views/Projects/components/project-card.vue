<template>
  <div class="project-card" @click="onHandle">
    <div class="project-card-base">
      <ProjectAvatar :name="project.name" :size="[70, 55]"></ProjectAvatar>
      <div class="project-card-info">
        <div class="project-card-name">{{ project.name }}</div>
        <div class="project-card-intro">
          肯定是解放多少积分肯定是解放多少积分肯定是解放多少积分
        </div>
      </div>
    </div>
    <BBadges :badges="['Vue', 'three', 'node', '1', 'three', 'node', '1']" :lines="1"></BBadges>
    <!-- <ul class="project-card-badge">
      <li>Vue</li>
      <li>three.js</li>
      <li>node.js</li>
      <li>electron</li>
    </ul> -->
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { createWindow } from "@/controllers/window/plugins";
import { projectType } from "@/views/Projects/types/index";
import ProjectAvatar from "./project-avatar.vue"
import BBadges from "@/components/b-badges/index.vue"
interface propsType {
  project: projectType
}
const props = defineProps<propsType>()
const onHandle = () => {
  createWindow({
    width: 780,
    height: 800,
    title: "项目详情",
    route: "/product/1000",
    resizable: false,
    maximizable: false,
    name: "project",
  });
};
</script>
<style lang="scss" scoped>
.project-card {
  // height: 80px;
  background-color: #fff;
  border: 1px solid #cccccc;
  padding: 4px;
  cursor: pointer;


  .project-card-base {
    display: flex;
    grid-column-gap: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid #ccc;

    .project-card-info {
      flex: 1;
      height: 55px;
      display: grid;
      grid-row-gap: 4px;
      grid-template-rows: 18px 1fr;

      .project-card-name {
        flex-shrink: 0;
        @include ellipsis(1);
        width: 100%;
        font-size: 16px;
        font-weight: bold;
      }

      .project-card-intro {
        width: 100%;
        font-size: 12px;
        word-break: break-all;
        @include ellipsis(2);
        color: #888;
      }
    }
  }

  .project-card-badge {
    li {
      font-size: 12px;
      padding: 2px 10px;
      background-color: #da98d3;
      float: left;
      margin-right: 4px;
      margin-top: 4px;
      color: #fff;
    }

  }


}
</style>