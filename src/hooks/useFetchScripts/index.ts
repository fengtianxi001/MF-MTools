const path = require("path")
const fs = require("fs")

import { ref, Ref } from "vue";

export function useFetchScripts(src: string) {
    const url = ref(src)
    const loading = ref(false)
    const scripts: Ref<string[]> = ref([])
    const refresh = () => {
        loading.value = true
        const jsonName = "package.json";
        if (path.basename(src) !== jsonName) {
            src = path.join(src, jsonName);
        }
        if (!fs.existsSync(src)) return [];
        const result = JSON.parse(fs.readFileSync(src, "utf-8"));
        scripts.value = Object.keys({ ...result.scripts });
        loading.value = false
    }
    refresh()
    return {
        url,
        loading,
        scripts,
        refresh
    }
}