import { computed, ref, watch } from "vue";
import { readFileSync, isFileExist } from "utils/index";
const { join } = require("path")
export function useMarkdown(projectSrc: string) {
    const loading = ref(false)
    const markdown = ref("")
    const currentURL = ref(projectSrc)
    const jsonURL = computed(() => join(currentURL.value, "README.md"))
    const refresh = () => {
        loading.value = true
        if (isFileExist(jsonURL.value)) {
            markdown.value = readFileSync(jsonURL.value)
        } else {
            markdown.value = ""
        }
        loading.value = false

    }
    refresh()
    watch(currentURL, refresh)
    return {
        loading,
        currentURL,
        markdown,
        refresh
    }
}