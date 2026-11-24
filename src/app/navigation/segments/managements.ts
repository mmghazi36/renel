import { NavigationTree } from "@/@types/navigation";

export const managements: NavigationTree = {
  id: "management",
  type: "item",
  path: "/managements",
  title: "managements",
  transKey: "nav.managements.title",
  icon: "managements",
  childs: [
    {
      id: "users",
      type: "item",
      path: "/managements/users",
      title: "Users",
      transKey: "nav.managements.user-management",
      icon: "managements.users",
    },
    {
      id: "role",
      type: "item",
      path: "/managements/roles",
      title: "Roles",
      transKey: "nav.managements.role-management",
      icon: "managements.roles",
    },
  ],
};
