export type menusConfigType = {
  path: string;
  icon?: string;
  title: string;
};
const menusConfig: Array<menusConfigType> = [
  {
    path: "/project",
    icon: "far fa-keyboard",
    title: "项目管理",
  },
  {
    path: "/webs",
    icon: "far fa-keyboard",
    title: "门户网站",
  },
];
export default Object.freeze(menusConfig);
