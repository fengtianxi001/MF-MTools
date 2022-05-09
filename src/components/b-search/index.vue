<template>
  <el-form label-position="left" :mode="result" :inline="true" size="small">
    <template v-for="config in props.configs" :key="config.name">
      <component :is="components[config.component]" v-model="result[config.name]" :config="config" />
    </template>
    <el-form-item>
      <el-button type="primary" @click="onResult">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import * as components from './components';
import { configType } from "./type";
const props = defineProps<{
  configs: configType[]
}>()
// console.log(components)
const result = reactive<{ [key: string]: any }>({});
props.configs.forEach(config => {
  result[config.name] = config.defaultValue || void 0;
})

const emit = defineEmits<{
  (e: 'submit', result: { [key: string]: any }): void;
}>();

const onResult = () => {
  const res = { ...result }
  props.configs.forEach(item => {
    const { name, formateKey } = item
    const dataVal = res[name];
    if (formateKey && Array.isArray(dataVal)) {
      formateKey.forEach((key, index) => {
        res[key] = dataVal[index] || '';
      })
      delete res[name];
    }
  })
  emit('submit', res);
}
</script>
<style scoped lang="scss">
</style>