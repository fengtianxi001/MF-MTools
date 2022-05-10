<template>
  <div class="project-base">
    <div class="project-base-name">{{ name }}</div>
    <div class="project-base-createTime">最新修改时间: {{ formatDay(lastModified) }}</div>
  </div>
</template>
<script setup lang="ts">
import { formatDay } from "utils/index";
interface propsType {
  name: string
  lastModified: number
}
defineProps<propsType>()
</script>

<style lang="scss" scoped>
.project-base {
  width: 100%;
  border: $border;
  padding: 4px;
  margin-bottom: 10px;

  &-name {
    height: 40px;
    border: $border;
    background-color: #f1f3f4;
    margin-bottom: 4px;
    font-size: 24px;
    font-weight: bold;
    @extend %v-center;
  }

  &-createTime {
    height: 20px;
    border: $border;
    background-color: #f1f3f4;
    font-size: 12px;
  }
}
</style>