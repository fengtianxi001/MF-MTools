<template>
  <div class="menu-bar">
    <div class="menu-bar-title">{{ title }}</div>
    <ul>
      <li @click="miniWindowCurrent">
        <i class="far fa-minus"></i>
      </li>
      <li @click="maxiWindowCurrent"><i class="far fa-stop"></i></li>
      <li @click="closeWindowCurrent"><i class="far fa-times"></i></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {
  closeWindowCurrent,
  miniWindowCurrent,
  maxiWindowCurrent,
} from "@/controllers/window/plugins";
import { useWindowTitle } from "@/hooks/useWindowTitle";
const title = useWindowTitle();

</script>
<style lang="scss" scoped>
.menu-bar {
  height: 30px;
  width: 100vw;
  background-color: #f1f3f4;
  -webkit-app-region: drag;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .menu-bar-title {
    // font-weight: bold;
    color: #666;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      width: 30px;
      height: 20px;
      // background-color: #c7cacf;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      font-size: 12px;
      cursor: pointer;
      -webkit-app-region: no-drag;
    }
  }
}
</style>