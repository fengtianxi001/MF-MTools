<template>
  <ul class="project-scripts">
    <li v-for="item in scripts" :key="item" @click="onHandle(item)">run {{ item }}</li>
  </ul>
</template>
<script setup lang="ts">
import { useFetchScripts } from "hooks/useFetchScripts"
import { runScript } from "controllers/projects/index";
interface propsType {
  src: string
}
const props = defineProps<propsType>()
const { scripts } = useFetchScripts(props.src)
const onHandle = (script) => {
  runScript(props.src, script)
  // const win = remote.getCurrentWindow();
  // win.setSize(400, 400, true)
}
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
    cursor: pointer;
  }
}
</style>