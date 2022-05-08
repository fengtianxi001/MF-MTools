import { RouteRecordRaw } from "vue-router";
import layout from "@/components/b-layout/index.vue";
const moduleProject: Array<RouteRecordRaw> = [
  {
    path: "/webs",
    name: "webs",
    component: layout,
    redirect: "/webs/index",
    children: [
      {
        path: "/webs/index",
        name: "webs",
        meta: {
          title: ["门户管理"],
          inMenu: true,
        },
        component: () => import("@/views/Webs/webs.vue"),
      },
    ],
  },
];

export default moduleProject;
