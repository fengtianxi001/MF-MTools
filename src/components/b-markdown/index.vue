<template>
  <div class="b-markdwon" v-loading="loading">
    <v-md-preview :text="markdown" />
  </div>
</template>
<script setup lang="ts">
import { useMarkdown } from "hooks/useMarkdown";
interface propsType {
  src: string
}
const props = defineProps<propsType>()
const { currentURL, loading, markdown, refresh } = useMarkdown(props.src)

</script>
<style lang="scss" scoped>
@import "./style.scss"
</style>