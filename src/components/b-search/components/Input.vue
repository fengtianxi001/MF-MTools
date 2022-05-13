<template>
  <el-form-item :label="props.config.label">
    <el-input
      :model-value="props?.modelValue"
      :placeholder="props.config.props?.placeholder || '请输入'"
      @keydown.enter="onresult"
      @update:model-value="onInput"
    />
  </el-form-item>
</template>

<script setup lang="ts">
import { InputPropsType, InputConfigType } from "../type";
interface propsType {
  modelValue: InputPropsType["modelValue"];
  config: InputConfigType;
  onresult: () => void;
}
const props = defineProps<propsType>();
const emit = defineEmits<{
  (e: "update:modelValue", value?: string): void;
}>();
const onInput = (value: string) => {
  console.log(1);
  emit("update:modelValue", value);
};
// const onChange = () => {}
</script>
<style scoped lang="scss"></style>
