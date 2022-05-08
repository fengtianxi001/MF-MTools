<template>
  <div class="b-badges" :style="style">
    <BBadge v-for="(badge, index) in badges" :key="index" :badge="badge" />
  </div>
</template>
<script setup lang="ts">
import { defineProps, StyleValue, computed } from "vue";
import BBadge from "./b-badge.vue"
interface propsType {
  badges: Array<string | number>
  lines?: number,
}
const props = defineProps<propsType>()
const style = computed(() => {
  const height = (props.lines || 1) * 22
  return {
    height: height + "px"
  }
}) as StyleValue
</script>
<style lang="scss" scoped>
.b-badges {
  margin-top: 4px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  // background-color: pink;
  align-content: flex-start

}
</style>