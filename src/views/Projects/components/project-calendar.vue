<template>
  <div class="project-calendar">
    <li v-for="item in 80" :key="item"></li>
  </div>
</template>
<script setup lang="ts">
// import { getProjectScripts } from "utils/index";
// interface propsType {
//   name: string
//   lastModified: number | string
// }
// const props = defineProps<propsType>()
// const scripts = getProjectScripts(props.src)

</script>

<style lang="scss" scoped>
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
</style>