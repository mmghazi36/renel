import { baseNavigationObj } from "../baseNavigation";
import { NavigationTree } from "@/@types/navigation";

const ROOT_DASHBOARDS = "/dashboards";

const path = (root: string, item: string) => `${root}${item}`;

export const dashboards: NavigationTree = {
  ...baseNavigationObj["dashboards"],
  type: "root",
  childs: [
    {
      id: "dashboards.home",
      path: path(ROOT_DASHBOARDS, "/home"),
      type: "item",
      title: "Home",
      transKey: "nav.dashboards.home",
      icon: "dashboards.home",
    },
    {
      id: "dashboards.sales",
      path: path(ROOT_DASHBOARDS, "/sales"),
      type: "item",
      title: "Sales",
      transKey: "nav.dashboards.sales",
      icon: "dashboards.sales",
    },
    {
      id: "dashboards.orders",
      path: path(ROOT_DASHBOARDS, "/orders"),
      type: "item",
      title: "Orders",
      transKey: "nav.dashboards.orders",
      icon: "dashboards.orders",
    },
    {
      id: "dashboards.divide-1",
      type: "divider",
    },
    {
      id: "dashboards.banking-1",
      path: path(ROOT_DASHBOARDS, "/banking/banking-1"),
      type: "item",
      title: "Banking v1",
      transKey: "nav.dashboards.banking-1",
      icon: "dashboards.banking",
    },
    {
      id: "dashboards.personal",
      path: path(ROOT_DASHBOARDS, "/personal"),
      type: "item",
      title: "Personal",
      transKey: "nav.dashboards.personal",
      icon: "dashboards.personal",
    },
    {
      id: "dashboards.projects-board",
      path: path(ROOT_DASHBOARDS, "/projects-board"),
      type: "item",
      title: "Projects Board",
      transKey: "nav.dashboards.projects-board",
      icon: "dashboards.projects-board",
    },
  ],
};
