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
import { numberToPx } from "utils/index";
import { size } from "lodash-es";
const props = defineProps<{
  badges: Array<string | number>
  lines?: number,
}>()
const isEmpty = computed(() => size(props.badges) === 0)
const style = computed(() => ({
  height: numberToPx((props.lines || 1) * 22)
})) as StyleValue
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>