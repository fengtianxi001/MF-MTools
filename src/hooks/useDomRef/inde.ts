import { onBeforeUnmount, onMounted, ref, Ref } from "vue";

export function useDomRef(eleRef: Ref<HTMLElement>, props: string) {
    const result = ref()
    const refresh = () => { result.value = eleRef.value[props] }
    window.addEventListener("resize", refresh)
    onMounted(() => refresh)
    onBeforeUnmount(() => window.removeEventListener("resize", refresh))
    return {
        result
    }
}