import { configType } from "components/b-search/type";
export const projectsSearchConfigs: Array<configType> = [
    {
        name: "name",
        component: "Input",
        label: "项目名称:",
        props: {
            placeholder: "请输入关键字",
        },
    },
    {
        name: "key",
        component: "Select",
        label: "项目分类:",
        props: {
            options: [
                {
                    label: "laebl",
                    value: "value",
                },
            ],
            placeholder: "placeholder",
        },
    },
];