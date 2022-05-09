<template>
  <div class="project-card" @click="onHandle">
    <div class="project-card-base">
      <ProjectAvatar :name="project.name" :size="[70, 55]"></ProjectAvatar>
      <div class="project-card-info">
        <div class="project-card-name">{{ project.name }}</div>
        <div class="project-card-description">{{ project.description }}</div>
        <div class="project-card-createtime" v-if="isShowCreateTime">{{ formatDay(project.lastModified, "YYYY-MM-DD") }}
        </div>
      </div>
    </div>
    <BBadges :badges="project.topics" :lines="1"></BBadges>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { createWindow } from "@/controllers/window/plugins";
import { projectType } from "@/views/Projects/types/index";
import { formatDay, getStringBytes } from "@/utils/index"
import ProjectAvatar from "./project-avatar.vue"
import BBadges from "@/components/b-badges/index.vue"

const props = defineProps<{
  project: projectType
}>()

const onHandle = () => {
  createWindow({
    width: 780,
    height: 800,
    title: "项目详情",
    route: `/product/${props.project.id}`,
    resizable: false,
    maximizable: false,
    name: "project",
  });
};

const isShowCreateTime = computed(() => {
  console.log(getStringBytes(props.project.description))
  return getStringBytes(props.project.description) <= 18 ? true : false
})
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
        @extend %one-ellipsis;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
      }

      .project-card-description {
        width: 100%;
        font-size: 12px;
        word-break: break-all;
        @extend %two-ellipsis;
        color: #999;
        // text-decoration: underline;
      }

      .project-card-createtime {
        font-size: 12px;
        line-height: 12px;
        color: #999;
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