import { onMounted, onBeforeUnmount, ref } from "vue";
import { useDragFilePropsType } from "./types";
import { isFunction } from "lodash-es";
const path = require("path")
export function useDragFile({ formatter, success, accept }: useDragFilePropsType) {
  const files = ref();
  const dropListener = async (e: DragEvent) => {
    e.preventDefault();
    let fileList = Array.from(e.dataTransfer.files);
    if (accept) {
      fileList = fileList.filter(item => accept.includes(path.parse(item.path).ext))
    }
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
