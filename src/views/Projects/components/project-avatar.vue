<template>
  <div class="project-avatar" :style="style">{{ name.slice(0, 2) }}</div>
</template>
<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { isArray } from "lodash-es";
const stringToColor = require('string-to-color');
interface propsType {
  name: string,
  size?: number | [number, number]
}
const props = defineProps<propsType>()
const style = computed(() => {
  const color: string = stringToColor(props.name)
  let width, height;
  if (isArray(props.size)) {
    width = props.size[0] ?? 50
    height = props.size[1] ?? 50
  } else {
    width = height = props.size ?? 50
  }
  return {
    backgroundColor: color,
    width: width + "px",
    height: height + "px",
    fontSize: (width) / 2 + "px",
  } as StyleValue
})
</script>
<style lang="scss" scoped>
.project-avatar {
  @extend %vh-center;
  color: #fff;
  font-weight: bold;
  border: 1px solid #ccc;
  text-shadow: #ccc 1px 0 0, #ccc 0 1px 0, #ccc -1px 0 0, #ccc 0 -1px 0;
}
</style>