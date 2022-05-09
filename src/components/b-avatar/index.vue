<template>
  <div
    class="project-avatar"
    :style="style"
  >
    {{ name.slice(0, 2) }}
  </div>
</template>
<script lang="ts" setup>
import { computed, StyleValue, withDefaults } from "vue";
import { stringToColor, numberToPx } from "utils/index";
interface propsType {
  name: string,
  size?: number | [number, number]
}
const props = withDefaults(defineProps<propsType>(), {
  name: "name",
  size: 50
})
const style = computed(() => {
  let width, height;
  [width, height] = Array.isArray(props.size) ? props.size : [props.size, props.size]
  return {
    backgroundColor: stringToColor(props.name),
    width: numberToPx(width),
    height: numberToPx(height),
    fontSize: numberToPx(width / 2),
  } as StyleValue
})
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>