<template>
  <div class="project">
    <div class="project-left">
      <div></div>
      <div class="project-files-panel"></div>
      <div class="project-markdwon"></div>
    </div>
    <div class="project-right">
      <div class="project-base">
        <div class="project-base-name">MTools</div>
        <div class="project-base-createTime">2015-08-12 13:00:44</div>
      </div>
      <ul class="project-topics">
        <li>Vue</li>
        <li>Node</li>
        <li>Three</li>
        <li>Electron</li>
        <li>Scss</li>
        <li>Element</li>
      </ul>
      <ul class="project-operate">
        <li>安装依赖</li>
        <li>编辑器打开</li>
        <li>打开文件夹</li>
        <li>重新加载数据</li>
        <li>项目日报</li>
        <li>项目周报</li>
        <li>编辑项目</li>
        <li>删除项目</li>
      </ul>
      <ul class="project-operate">
        <li>run dev</li>
        <li>run build</li>
        <li>run preview</li>
      </ul>
      <BPercentChart :data="languages" />
      <div class="project-calendar">
        <li v-for="item in 80" :key="item"></li>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { useRoute } from "vue-router";
import BPercentChart from "components/b-percent-chart/index.vue";
const languages = [
  {
    key: "TypeScript",
    value: 60.5,
  },
  {
    key: "Vue",
    value: 30.6,
  },
  {
    key: "JavaScript",
    value: 6.5,
  },
  {
    key: "Scss",
    value: 1.7,
  },
  {
    key: "Html",
    value: 0.7,
  },
];
// const route = useRoute();
// console.log();
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

    .project-topics {
      border: $border;
      padding: 4px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 4px;
      grid-row-gap: 4px;
      margin-bottom: 10px;

      li {
        height: 24px;
        background-color: #f1f3f4;
        border: $border;
        font-size: 12px;
        @extend %vh-center;
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
        font-size: 13px;
        @extend %vh-center;
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
