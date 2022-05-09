<template>
  <div class="b-markdwon">
    <v-md-preview :text="markdownContent" />
  </div>
</template>
<script setup lang="ts">
import { readFileSync, isFileExist } from "utils/index";
import { onMounted, ref } from "vue";
const props = defineProps<{
  src: string
}>()
const onFetchMd = (src) => {
  if (isFileExist(src)) {
    return readFileSync(src)
  }
}
const markdownContent = ref("# null")
onMounted(() => {
  markdownContent.value = onFetchMd(props.src)
})

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