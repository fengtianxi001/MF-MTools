export type menuConfigType = {
  path: string;
  icon?: string;
  title: string;
};
export type menusConfigType = Readonly<Array<menuConfigType>>
export const menus: menusConfigType = Object.freeze([
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
]);
