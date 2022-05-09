<template>
  <ul v-loading="loading" class="b-files-tree">
    <li v-show="navigationVisible" class="b-files-tree-item" @click="onNavigation">
      ...
    </li>
    <li v-for="file in list" :key="file.path" class="b-files-tree-item" @click="onRowHandle(file)">
      <div>
        <files-tree-icon :file="file" />
        <span>{{ file.label }}</span>
      </div>
      <span>2022-12-12 12:12:12</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import FilesTreeIcon from "./files-tree-icon.vue"
import { getPrevDir } from "utils/index";
import { computed } from "vue";
import { useFilesTree } from "hooks/useFilesTree";

interface propsType {
  baseURL: string
}
const props = defineProps<propsType>()
const navigationVisible = computed(() => props.baseURL !== currentURL.value)
const { currentURL, loading, list } = useFilesTree(props.baseURL)
const onRowHandle = (item) => {
  if (item.isLeaf) return void 0;
  currentURL.value = item.path
}
const onNavigation = () => currentURL.value = getPrevDir(currentURL.value);
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>