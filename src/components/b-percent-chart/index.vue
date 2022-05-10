<template>
  <div class="b-percent-chart">
    <ul class="b-percent-chart-bar">
      <li v-for="item in data" :key="item.key" :style="barStyle(item)" />
    </ul>
    <ul class="b-percent-chart-mark">
      <li v-for="{ key, value } in data" :key="key">
        <span :style="markStyle(key)" />
        <span>{{ key }}</span>
        <span>{{ value }}%</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { StyleValue } from 'vue';
import { stringToColor } from "utils/index";
interface propsType {
  data: Array<{
    key: string,
    value: number
  }>
}
defineProps<propsType>()

const barStyle = ({ key, value }) => ({
  backgroundColor: stringToColor(key),
  width: value + "%",
} as StyleValue)

const markStyle = (key) => ({
  backgroundColor: stringToColor(key)
} as StyleValue)

</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>