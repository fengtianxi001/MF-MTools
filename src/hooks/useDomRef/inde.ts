import { onBeforeUnmount, onMounted, ref, Ref } from "vue";

export function useDomRef(eleRef: Ref<HTMLElement>, props: string) {
    const result = ref()
    const refresh = () => { result.value = eleRef.value[props] }
    onMounted(() => {
        refresh()
        window.addEventListener("resize", refresh)
    })
    onBeforeUnmount(() => window.removeEventListener("resize", refresh))
    return {
        result
    }
}