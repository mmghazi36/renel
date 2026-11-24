import { NavigationTree } from "@/@types/navigation";
import { baseNavigationObj } from "../baseNavigation";

const ROOT_APPS = "/apps";

const path = (root: string, item: string) => `${root}${item}`;

export const apps: NavigationTree = {
  ...baseNavigationObj["apps"],
  type: "root",
  childs: [
    {
      id: "apps.chat",
      path: path(ROOT_APPS, "/chat"),
      type: "item",
      title: "Chat",
      transKey: "nav.apps.chat",
      icon: "apps.chat",
    },
    {
      id: "apps.kanban",
      path: path(ROOT_APPS, "/kanban"),
      type: "item",
      title: "Kanban Board",
      transKey: "nav.apps.kanban",
      icon: "apps.kanban",
    },
    {
      id: "apps.todo",
      path: path(ROOT_APPS, "/todo"),
      type: "item",
      title: "Todo",
      transKey: "nav.apps.todo",
      icon: "apps.todo",
    },
    {
      id: "apps.divide-1",
      type: "divider",
    },
    {
      id: "apps.filemanager",
      path: path(ROOT_APPS, "/filemanager"),
      type: "item",
      title: "File Manager",
      transKey: "nav.apps.filemanager",
      icon: "apps.filemanager",
    },
  ],
};
