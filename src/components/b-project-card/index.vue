<template>
  <div class="project-card" @click="onHandle">
    <div class="project-card-base">
      <b-avatar :name="project.name" :size="[70, 55]" />
      <div class="project-card-info">
        <div class="project-card-name">
          {{ project.name }}
        </div>
        <div class="project-card-description" ref="descRef">
          {{ project.description }}
        </div>
        <div v-if="isShowCreateTime" class="project-card-createtime">
          {{ formatDay(project.lastModified, "YYYY-MM-DD") }}
        </div>
      </div>
    </div>
    <b-badges :badges="project.topics" :lines="1" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { createWindow } from "@/controllers/window/plugins";
import { projectType } from "@/views/Projects/types/index";
import { formatDay, getStringBytes } from "@/utils/index"
import { useDomRef } from "hooks/useDomRef/inde"
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
const descRef = ref<HTMLElement>()
const { result } = useDomRef(descRef, "clientHeight")


const isShowCreateTime = computed(() => {
  //GINGLE_HEIGHT define in ./style.css 
  const GINGLE_HEIGHT = 17
  return result.value <= GINGLE_HEIGHT ? true : false
})
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>