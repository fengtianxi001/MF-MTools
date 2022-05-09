<template>
  <div class="b-percent-chart">
    <ul class="b-percent-chart-bar">
      <li v-for="{ key, value } in data" :key="key" :style="calcStyle(key, value)" />
    </ul>
    <ul class="b-percent-chart-mark">
      <li v-for="{ key, value } in data" :key="key">
        <span :style="{ backgroundColor: stringToColor(key) }"></span>
        <span>{{ key }}</span>
        <span>{{ value }}%</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { StyleValue } from 'vue';
import { stringToColor } from "utils/index";
const props = defineProps<{
  data: Array<{
    key: string,
    value: number
  }>
}>()
const calcStyle = (key, value) => {
  return {
    backgroundColor: stringToColor(key),
    width: value + "%",
  } as StyleValue
}
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>