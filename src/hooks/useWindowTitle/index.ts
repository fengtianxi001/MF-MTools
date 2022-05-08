import { onMounted, ref } from "vue";
import { remote } from "electron";
export function useWindowTitle() {
  const title = ref();
  onMounted(() => {
    title.value = remote?.getCurrentWindow()?.title ?? "MTools"
  });
  return title
}
