import { onMounted, onBeforeUnmount, ref } from "vue";
import { useDragFilePropsType } from "./types";
import { isFunction } from "lodash-es";
export function useDragFile({ formatter, success }: useDragFilePropsType) {
  const files = ref();
  const dropListener = async (e: DragEvent) => {
    e.preventDefault();
    const fileList = Array.from(e.dataTransfer.files);
    files.value = isFunction(formatter) ? await formatter(fileList) : fileList;
    isFunction(success) && (await success(files.value));
  };
  const preventDefault = (e: Event) => e.preventDefault();
  onMounted(() => {
    document.addEventListener("drop", dropListener, false);
    document.addEventListener("dragover", preventDefault, false);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("drop", dropListener);
    document.removeEventListener("dragover", preventDefault);
  });
  return { files };
}
