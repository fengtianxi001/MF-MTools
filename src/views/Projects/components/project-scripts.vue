<template>
  <ul class="project-scripts">
    <li v-for="item in scripts" :key="item">run {{ item }}</li>
  </ul>
</template>
<script setup lang="ts">
import { useFetchScripts } from "hooks/useFetchScripts"
interface propsType {
  src: string
}
const props = defineProps<propsType>()
const { scripts } = useFetchScripts(props.src)

</script>

<style lang="scss" scoped>
.project-scripts {
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
</style>