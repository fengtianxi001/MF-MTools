<template>
  <ul class="b-files-tree">
    <li class="b-files-tree-item" v-show="baseURL !== currentURL" @click="onPrev">...</li>
    <li v-for="item in files" :key="item.path" class="b-files-tree-item" @click="onRowHandle(item)">
      <div >
        <i v-if="item.isLeaf" class='far fa-file file' style='color:#57606a'></i>
        <i v-else class="fas fa-folder folder" style="color:#54aeff" />
        <span>{{ item.label }}</span>
      </div>
      <span>2022-12-12 12:12:12</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { traverseFolder, getPrevDir } from "utils/index";
import { onMounted, ref, watch } from "vue";
const props = defineProps<{
  baseURL: string
}>()
const files = ref([])
const currentURL = ref(props.baseURL)
const onFetchFileTree = (src: string) => {
  const tree = traverseFolder(src, {
    deep: true,
    ignore: ["node_modules"],
    isFlat: false
  })
  console.log(tree)
  files.value = tree
}
const onRowHandle = (item) => {
  if (item.isLeaf) {
    //todo
  } else {
    currentURL.value = item.path
  }

}
const onPrev = () => {
  currentURL.value = getPrevDir(currentURL.value)
}
watch(currentURL, (newPath) => {
  onFetchFileTree(newPath)
})
onMounted(() => {
  onFetchFileTree(props.baseURL)
})
</script>

<style lang="scss" scoped>
.b-files-tree {
  width: 100%;
  // height: 300px;
  max-height: 300px;
  overflow-y: auto;
  border: $border;
  background-color: #f1f3f4;
  margin-bottom: 10px;

  &-item {
    font-size: 12px;
    height: 38px;
    padding: 8px 16px;
    border-bottom: 1px solid #ccc;
    @extend %v-center;
    cursor: pointer;
    justify-content: space-between;

    i {
      margin-right: 6px;
      font-size: 14px;
    }
  }
}
</style>