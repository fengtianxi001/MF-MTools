import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import moduleProject from "./module-project";
import moduleWebs from "./module-webs"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: moduleProject[0]["path"],
  },
  ...moduleProject,
  ...moduleWebs,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
