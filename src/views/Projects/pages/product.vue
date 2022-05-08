<template>
  <div class="project">
    <div class="project-left">
      <div></div>
      <div class="project-files-panel"></div>
      <div class="project-markdwon"></div>
    </div>
    <div class="project-right">
      <div class="project-base">
        <div class="project-base-name"></div>
        <div class="project-base-createTime"></div>
      </div>
      <ul class="project-topics">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul class="project-operate">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="project-operate">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="project-languages">
        <div class="project-languages-bar"></div>
        <div class="project-languages-mark"></div>
      </div>
      <div class="project-calendar">
        <li v-for="item in 80" :key="item"></li>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log();
</script>

<style lang="scss" scoped>
$border: 1px solid #ccc;
.project {
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 10px;
  .project-left {
    width: 100%;
    height: 100%;
    border: $border;
    padding: 10px;
    .project-files-panel {
      width: 100%;
      height: 300px;
      border: $border;
      background-color: #f1f3f4;
      margin-bottom: 10px;
    }
    .project-markdwon {
      width: 100%;
      height: 400px;
      border: $border;
      background-color: #f1f3f4;
    }
  }
  .project-right {
    width: 100%;
    height: 100%;
    border: $border;
    padding: 10px;
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
      }
      &-createTime {
        height: 20px;
        border: $border;
        background-color: #f1f3f4;
      }
    }
    .project-topics {
      border: $border;
      padding: 4px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4px;
      grid-row-gap: 4px;
      margin-bottom: 10px;
      li {
        height: 30px;
        background-color: #f1f3f4;
        border: $border;
      }
    }
    .project-operate {
      border: $border;
      padding: 4px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4px;
      grid-row-gap: 4px;
      margin-bottom: 10px;
      li {
        height: 30px;
        background-color: #f1f3f4;
        border: $border;
      }
    }
    .project-languages {
      padding: 4px;
      border: $border;
      margin-bottom: 10px;
      &-bar {
        width: 100%;
        height: 20px;
        background-color: #f1f3f4;
        border: $border;
        margin-bottom: 4px;
      }
      &-mark {
        border: $border;
        background-color: #f1f3f4;
        height: 100px;
      }
    }
    .project-calendar {
      border: $border;
      padding: 4px;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-row-gap: 4px;
      grid-column-gap: 4px;

      li {
        width: 100%;
        height: 10px;
        background-color: #f1f3f4;
        border: $border;
      }
    }
  }
}
</style>