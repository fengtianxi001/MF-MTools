<template>
  <div class="b-markdwon">
    <v-md-preview :text="text" />
  </div>
</template>
<script setup lang="ts">
import { readFileSync } from "utils/index";
const props = defineProps<{
  src: string
}>()
const text = readFileSync(props.src)
</script>
<style lang="scss" scoped>
.b-markdwon {
  width: 100%;
  height: 400px;
  border: $border;
  background-color: #f1f3f4;
  overflow-y: auto;
}
</style>