<template>
  <el-form-item :label="props.config.label">
    <el-input
      :modelValue="props?.modelValue"
      :placeholder="props.config.props?.placeholder || '请输入'"
      @update:modelValue="onInput"
    />
  </el-form-item>
</template>
<script setup lang="ts">
import { InputPropsType, InputConfigType } from '../type';
interface propsType {
  modelValue: InputPropsType['modelValue'];
  config: InputConfigType;
}
const props = defineProps<propsType>();
const emit = defineEmits<{
  (e: 'update:modelValue', value?: string): void;
}>();
const onInput = (value: string) => {
  emit('update:modelValue', value);
};

</script>
<style scoped lang="scss"></style>
