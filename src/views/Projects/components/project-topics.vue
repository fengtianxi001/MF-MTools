<template>
  <ul class="project-topics">
    <li v-for="topic in topics" :key="topic">{{ topic }}</li>
  </ul>
</template>
<script setup lang="ts">
interface propsType {
  topics: Array<string>
}
defineProps<propsType>()
</script>

<style lang="scss" scoped>
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
    font-size: 10px;
    @extend %vh-center;
  }
}
</style>