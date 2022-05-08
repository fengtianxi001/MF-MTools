<template>
  <ul class="layout-main-menu">
    <li class="layout-menu-item" v-for="{ title, path, icon } in menus" :key="path" @click="onHandle(path)">
      <div class="layout-menu-item-icon">
        <i :class="icon"></i>
      </div>
      <div class="layout-menu-item-name">{{ title }}</div>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { menusConfigType } from "@/config/config-menus";
import { defineProps, defineEmits } from "vue";
interface propsType {
  menus: Array<menusConfigType>;
}
defineProps<propsType>();
const emit = defineEmits<{
  (e: "click", value?: string): void;
}>();
const onHandle = (path: string) => {
  emit("click", path);
};
</script>
<style lang="scss" scoped>
.layout-main-menu {
  width: 180px;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #cccccc;
  flex-shrink: 0;
  padding: 10px;

  .layout-menu-item {
    width: 100%;
    height: 45px;
    // background-color: #f1f3f4;
    border: 1px solid #cccccc;
    padding: 5px;
    display: flex;
    grid-column-gap: 4px;
    margin-bottom: 10px;
    cursor: pointer;

    .layout-menu-item-icon {
      width: 33px;
      height: 33px;
      background-color: #f1f3f4;
      border: 1px solid #cccccc;
      flex-shrink: 0;
      @extend %vh-center;
    }

    .layout-menu-item-name {
      flex: 1;
      height: 33px;
      background-color: #f1f3f4;
      border: 1px solid #cccccc;
      @extend %v-center;
    }
  }
}
</style>