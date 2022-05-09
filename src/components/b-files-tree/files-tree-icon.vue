<template>
  <i :class="className" />
</template>
<script setup lang="ts">
import { fileTreeType } from "utils/types";
import { computed } from "vue";
const props = defineProps<{
  file: fileTreeType
}>()
const CONFIG = {
  file: "far fa-file file files-tree-icon",
  folder: "fas fa-folder folder files-tree-icon"
}
const className = computed(() => {
  const flag = props.file.isLeaf ? "file" : "folder";
  return CONFIG[flag]
})
</script>
<style lang="scss" scoped>
.files-tree-icon {
  // margin-right: 6px;
  font-size: 14px;
  width: 20px;

  &.file {
    color: #57606a;
  }

  &.folder {
    color: #54aeff;
  }
}
</style>