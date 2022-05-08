<template>
  <div class="menu-bar">
    <div class="menu-bar-title">
      {{ title }}
    </div>
    <ul>
      <li @click="miniWindowCurrent">
        <i class="far fa-minus" />
      </li>
      <li @click="maxiWindowCurrent">
        <i class="far fa-stop" />
      </li>
      <li @click="closeWindowCurrent">
        <i class="far fa-times" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {
  closeWindowCurrent,
  miniWindowCurrent,
  maxiWindowCurrent,
} from "controllers/window/plugins";
import { useWindowTitle } from "hooks/useWindowTitle";
const title = useWindowTitle();
</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>