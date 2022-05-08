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
const stringToColor = require('string-to-color');
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
$border: 1px solid #ccc;

.b-percent-chart {
  padding: 4px;
  border: $border;
  margin-bottom: 10px;

  &-bar {
    width: 100%;
    height: 10px;
    background-color: #f1f3f4;
    border: $border;
    margin-bottom: 4px;
    display: flex;
    // border-radius: 10px;
    overflow: hidden;
    grid-column-gap: 2px;

    li {
      &:nth-child(1) {
        width: 50%;
        background-color: #2b7489;
      }

      &:nth-child(2) {
        width: 20%;
        background-color: #41b883;
      }

      &:nth-child(3) {
        width: 10%;
        background-color: #f1e05a;
      }
    }
  }

  &-mark {
    border: $border;
    background-color: #f1f3f4;
    // height: 100px;
    padding: 4px 0;

    li {
      font-size: 12px;
      height: 20px;
      display: flex;
      @extend %v-center;
      padding: 0 6px;

      span:nth-child(1) {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #2b7489;
        margin-right: 4px;
      }

      span:nth-child(2) {
        margin-right: 4px;
      }
    }
  }
}
</style>