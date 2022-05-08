<template>
  <el-form-item :label="props.config.label">
    <el-select
      :modelValue="props.modelValue"
      class="select"
      :placeholder="props.config.props?.placeholder || '请选择'"
      :loading="props.config.props?.loading"
      @change="onChange"
    >
      <el-option
        v-for="option in props.config.props?.options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
  </el-form-item>
</template>
<script setup lang="ts">
import { SelectPropsType, SelectConfigType } from '../type';
interface propsType {
  modelValue: SelectPropsType['modelValue'];
  config: SelectConfigType;
}
const props = defineProps<propsType>();
const emit = defineEmits<{
  (e: 'update:modelValue', value?: propsType['modelValue']): void;
}>();
const onChange = (value: string) => {
  emit('update:modelValue', value);
};
</script>