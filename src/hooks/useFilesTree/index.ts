import { ref, watch } from "vue";
import { traverseFolder } from "utils/index";

export function useFilesTree(url: string) {
    const loading = ref(false)
    const currentURL = ref(url)
    const list = ref([])
    const refresh = () => {
        loading.value = true
        list.value = traverseFolder(currentURL.value, {
            deep: true,
            ignore: ["node_modules"],
            isFlat: false
        })
        loading.value = false

    }
    refresh()
    watch(currentURL, refresh)
    return {
        loading,
        currentURL,
        list,
        refresh
    }
}