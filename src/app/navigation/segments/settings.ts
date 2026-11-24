import { NavigationTree } from "@/@types/navigation";

export const settings: NavigationTree = {
  id: "settings",
  type: "item",
  path: "/settings",
  title: "Settings",
  transKey: "nav.settings.settings",
  icon: "settings",
  childs: [
    {
      id: "general",
      type: "item",
      path: "/settings/general",
      title: "General",
      transKey: "nav.settings.general",
      icon: "settings.general",
    },
    {
      id: "billing",
      type: "item",
      path: "/settings/billing",
      title: "Billing",
      transKey: "nav.settings.billing",
      icon: "settings.billing",
    },
    {
      id: "notifications",
      type: "item",
      path: "/settings/notifications",
      title: "Notifications",
      transKey: "nav.settings.notifications",
      icon: "settings.notifications",
    },
  ],
};
