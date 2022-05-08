<template>
  <div class="layout-main">
    <LayoutMenu :menus="menus" @click="onMenuItemHandle"></LayoutMenu>
    <div class="layout-main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import LayoutMenu from "./b-layout-menu.vue";
import menus from "@/config/menus";
import { useRouter } from "vue-router";
const router = useRouter();
const onMenuItemHandle = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.layout-main {
  width: 100vw;
  height: calc(100vh - 30px);
  display: flex;

  .layout-main-content {
    flex: 1;
    padding: 10px;
  }
}
</style>