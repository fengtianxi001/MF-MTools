<template>
  <div class="b-badges" :style="style">
    <div v-if="isEmpty" class="b-badges-item">暂无数据</div>
    <div v-for="(badge, index) in badges" :key="index" :badge="badge" class="b-badges-item">
      {{ badge }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { StyleValue, computed } from "vue";
const props = defineProps<{
  badges: Array<string | number>
  lines?: number,
}>()
const style = computed(() => ({
  height: (props.lines || 1) * 22 + "px"
})) as StyleValue

const isEmpty = computed(() => {
  return props.badges.length === 0
})
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>