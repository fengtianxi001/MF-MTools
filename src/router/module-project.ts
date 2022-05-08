import { RouteRecordRaw } from "vue-router";
import layout from "@/components/b-layout/index.vue";
const moduleProject: Array<RouteRecordRaw> = [
  {
    path: "/project",
    name: "project",
    component: layout,
    redirect: "/project/index",
    children: [
      {
        path: "/project/index",
        name: "project",
        meta: {
          title: ["项目管理"],
          inMenu: true,
        },
        component: () => import("@/views/Projects/pages/products.vue"),
      },
    ],
  },
  {
    path: "/product/:id",
    name: "product",
    meta: {
      title: ["项目管理", "项目详情"],
    },
    component: () => import("@/views/Projects//pages/product.vue"),
  },
];

export default moduleProject;
