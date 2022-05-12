import { computed, Ref, ref } from "vue";
import { useStore } from "vuex";
import { projectType } from "views/Projects/types/index";


type conditionsType = {
    name: string,
}
export function useProjectList() {
    const list = ref()
    const store = useStore();
    const raw: Ref<projectType[]> = computed(() => store?.getters?.projects)
    const refresh = (conditions?: conditionsType) => {
        if (conditions && conditions.name) {
            const reg = new RegExp(conditions.name.toLowerCase())
            return list.value = raw.value.filter(project => project.name.toLowerCase().match(reg))
        }
        list.value = raw.value
    }
    refresh()
    return {
        list,
        raw,
        refresh
    }
}