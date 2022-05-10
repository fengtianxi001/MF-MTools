<template>
  <ul class="project-operate">
    <li v-for="{ value, label } in OPERATE_LIST" :key="value" @click="onHandle(value)">{{ label }}</li>
  </ul>
</template>
<script setup lang="ts">
import { OPERATE_LIST } from "constants/projects";
import projectControllers from "controllers/projects/index"
import { isFunction } from "lodash-es";
const props = defineProps<{
  src: string
}>()
const onHandle = (operate) => {
  const controller = projectControllers[operate]
  if (isFunction(controller)) {
    controller(props.src)
  } else {
    alert(`no find ${operate}`)
  }
}
</script>

<style lang="scss" scoped>
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
</style>