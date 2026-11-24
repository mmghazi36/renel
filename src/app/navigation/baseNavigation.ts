import { NavigationTree } from "@/@types/navigation";

export const baseNavigationObj: Record<string, NavigationTree> = {
  dashboards: {
    id: "dashboards",
    type: "item",
    path: "/dashboards",
    title: "Dashboards",
    transKey: "nav.dashboards.dashboards",
    icon: "dashboards",
  },
  apps: {
    id: "apps",
    type: "item",
    path: "/apps",
    title: "Applications",
    transKey: "nav.apps.apps",
    icon: "apps",
  },
  tables: {
    id: "tables",
    type: "item",
    path: "/tables",
    title: "Tables",
    transKey: "nav.tables.tables",
    icon: "tables",
  },
  forms: {
    id: "forms",
    type: "item",
    path: "/forms",
    title: "Forms",
    transKey: "nav.forms.forms",
    icon: "forms",
  },
  components: {
    id: "components",
    type: "item",
    path: "/components",
    title: "Components",
    transKey: "nav.components.components",
    icon: "components",
  },
  management: {
    id: "management",
    type: "item",
    path: "/managements",
    title: "management",
    transKey: "nav.managements.title",
    icon: "managements",
  },
};

export const baseNavigation: NavigationTree[] = Array.from(
  Object.values(baseNavigationObj),
);
