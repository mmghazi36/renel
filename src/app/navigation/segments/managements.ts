import { NavigationTree } from "@/@types/navigation";

export const managements: NavigationTree = {
  id: "management",
  type: "item",
  path: "/management",
  title: "management",
  transKey: "nav.management.management",
  icon: "management",
  childs: [
    {
      id: "users",
      type: "item",
      path: "/management/users",
      title: "Users",
      transKey: "nav.management.users",
      icon: "management.users",
    },
    {
      id: "role",
      type: "item",
      path: "/management/roles",
      title: "Roles",
      transKey: "nav.management.roles",
      icon: "management.roles",
    },
  ],
};
