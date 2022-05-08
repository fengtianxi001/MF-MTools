<template>
  <div class="b-badge" :style="style">{{ badge }}</div>
</template>
<script setup lang="ts">
import { defineProps, computed, StyleValue } from "vue";
const stringToColor = require('string-to-color');
interface propsType {
  badge: string | number
}
const props = defineProps<propsType>()
const style = computed(() => {
  const color: string = stringToColor(props.badge)
  console.log(color)
  return {
    // backgroundColor: color,
  }
}) as StyleValue

</script>
<style lang="scss" scoped>
.b-badge {
  // margin-top: 4px;
  height: 20px;
  padding: 0 10px;
  // float: left;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  background-color: #4ea964;
  // color: #0969da;
}
</style>