import { NavigationTree } from "@/@types/navigation";
import { baseNavigationObj } from "../baseNavigation";

export const administration: NavigationTree = {
  ...baseNavigationObj.administration,
  type: "root",
  childs: [
    {
      id: "administration.users",
      type: "item",
      path: "/administration/users",
      title: "Users",
      transKey: "nav.administration.users",
      icon: "administration.users",
    },
    {
      id: "administration.roles",
      type: "item",
      path: "/administration/roles",
      title: "Roles",
      transKey: "nav.administration.roles",
      icon: "administration.roles",
    },
  ],
};
