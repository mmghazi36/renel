import { Navigate, RouteObject } from "react-router";

import AuthGuard from "@/middleware/AuthGuard";
import { DynamicLayout } from "../layouts/DynamicLayout";
import { AppLayout } from "../layouts/AppLayout";

/**
 * Protected routes configuration
 * These routes require authentication to access
 * Uses AuthGuard middleware to verify user authentication
 */
const protectedRoutes: RouteObject = {
  id: "protected",
  Component: AuthGuard,
  children: [
    // The dynamic layout supports both the main layout and the sideblock.
    {
      Component: DynamicLayout,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboards/sales" />,
        },
        {
          path: "/components",
          children: [
            {
              index: true,
              element: <Navigate to="/components/basic-ui/avatar" />,
            },
            {
              path: "basic-ui/avatar",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/avatar"))
                  .default,
              }),
            },
            {
              path: "basic-ui/button",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/button"))
                  .default,
              }),
            },
            {
              path: "basic-ui/badge",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/badge"))
                  .default,
              }),
            },
            {
              path: "basic-ui/tag",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/tag")).default,
              }),
            },
            {
              path: "basic-ui/divider",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/divider"))
                  .default,
              }),
            },
            {
              path: "basic-ui/typography",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/Typography"))
                  .default,
              }),
            },
            {
              path: "data-display/box",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/Box")).default,
              }),
            },
            {
              path: "data-display/popover",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/popover"))
                  .default,
              }),
            },
            {
              path: "data-display/timeline",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/timeline"))
                  .default,
              }),
            },
            {
              path: "data-display/collapse",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/collapse"))
                  .default,
              }),
            },
            {
              path: "data-display/legend",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/legend"))
                  .default,
              }),
            },
            {
              path: "data-display/mask",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/mask"))
                  .default,
              }),
            },
            {
              path: "data-display/contextual-help",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/components/contextual-help")
                ).default,
              }),
            },
            {
              path: "navigation/accordion",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/accordion"))
                  .default,
              }),
            },
            {
              path: "navigation/tab",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/tab")).default,
              }),
            },
            {
              path: "navigation/dropdown",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/dropdown"))
                  .default,
              }),
            },
            {
              path: "navigation/steps",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/steps"))
                  .default,
              }),
            },
            {
              path: "navigation/pagination",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/pagination"))
                  .default,
              }),
            },
            {
              path: "navigation/menu-list",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/menu-list"))
                  .default,
              }),
            },
            {
              path: "navigation/treeview",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/treeview"))
                  .default,
              }),
            },
            {
              path: "loading/progress",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/progress"))
                  .default,
              }),
            },
            {
              path: "loading/circlebar",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/circlebar"))
                  .default,
              }),
            },
            {
              path: "loading/skeleton",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/skeleton"))
                  .default,
              }),
            },
            {
              path: "loading/spinner",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/spinner"))
                  .default,
              }),
            },
            {
              path: "feedback/tooltip",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/tooltip"))
                  .default,
              }),
            },
            {
              path: "feedback/notification",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/notification"))
                  .default,
              }),
            },
            {
              path: "feedback/alert",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/alert"))
                  .default,
              }),
            },
            {
              path: "modal/modal",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/modal"))
                  .default,
              }),
            },
            {
              path: "modal/drawer",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/drawer"))
                  .default,
              }),
            },
            {
              path: "advanced/scroll-shadow",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/components/scroll-shadow")
                ).default,
              }),
            },
            {
              path: "advanced/charts",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/charts"))
                  .default,
              }),
            },
            {
              path: "advanced/carousel",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/carousel"))
                  .default,
              }),
            },
          ],
        },
        {
          path: "/forms",
          children: [
            {
              index: true,
              element: <Navigate to="/forms/input" />,
            },
            {
              path: "ekyc-form",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/KYCForm")).default,
              }),
            },
            {
              path: "add-product-form",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/add-product-form"))
                  .default,
              }),
            },
            {
              path: "new-post-form",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/new-post-form"))
                  .default,
              }),
            },
            {
              path: "input",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/input")).default,
              }),
            },
            {
              path: "input-group",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/input-group"))
                  .default,
              }),
            },
            {
              path: "input-mask",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/input-mask"))
                  .default,
              }),
            },
            {
              path: "checkbox",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/checkbox")).default,
              }),
            },
            {
              path: "radio",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/radio")).default,
              }),
            },
            {
              path: "switch",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/switch")).default,
              }),
            },
            {
              path: "swap",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/swap")).default,
              }),
            },
            {
              path: "textarea",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/textarea")).default,
              }),
            },
            {
              path: "select",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/select")).default,
              }),
            },
            {
              path: "range",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/range")).default,
              }),
            },
            {
              path: "listbox",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/listbox")).default,
              }),
            },
            {
              path: "autocomplete",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/autocomplete"))
                  .default,
              }),
            },
            {
              path: "file-upload",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/file-upload"))
                  .default,
              }),
            },
            {
              path: "form-validation",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/form-validation"))
                  .default,
              }),
            },
            {
              path: "text-editor",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/text-editor"))
                  .default,
              }),
            },
            {
              path: "filepond",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/filepond")).default,
              }),
            },
            {
              path: "datepicker",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/datepicker"))
                  .default,
              }),
            },
          ],
        },
        {
          path: "/tables",
          children: [
            {
              index: true,
              element: <Navigate to="/tables/orders-datatable-1" />,
            },
            {
              path: "basic-table",
              lazy: async () => ({
                Component: (await import("@/app/pages/tables/basic-table"))
                  .default,
              }),
            },
            {
              path: "react-table",
              lazy: async () => ({
                Component: (await import("@/app/pages/tables/react-table"))
                  .default,
              }),
            },
            {
              path: "advanced-tables",
              lazy: async () => ({
                Component: (await import("@/app/pages/tables/advanced-table"))
                  .default,
              }),
            },
            {
              path: "orders-datatable-1",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/orders-datatable-1")
                ).default,
              }),
            },
            {
              path: "orders-datatable-2",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/orders-datatable-2")
                ).default,
              }),
            },
            {
              path: "courses-datatable",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/courses-datatable")
                ).default,
              }),
            },
            {
              path: "users-datatable",
              lazy: async () => ({
                Component: (await import("@/app/pages/tables/users-datatable"))
                  .default,
              }),
            },
            {
              path: "projects-datatable",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/projects-datatable")
                ).default,
              }),
            },
          ],
        },
        {
          path: "dashboards",
          children: [
            {
              index: true,
              element: <Navigate to="/dashboards/sales" />,
            },
            {
              path: "sales",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/sales"))
                  .default,
              }),
            },
            {
              path: "orders",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/orders"))
                  .default,
              }),
            },
            {
              path: "banking/banking-1",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/banking-1"))
                  .default,
              }),
            },
            {
              path: "personal",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/personal"))
                  .default,
              }),
            },
            {
              path: "projects-board",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/dashboards/projects-board")
                ).default,
              }),
            },
          ],
        },
        {
          path: "apps",
          children: [
            {
              index: true,
              lazy: async () => ({
                Component: (await import("@/app/pages/apps/list")).default,
              }),
            },
          ],
        },
      ],
    },
    // The app layout supports only the main layout. Avoid using it for other layouts.
    {
      Component: AppLayout,
      children: [
        {
          path: "apps",
          children: [
            {
              path: "filemanager",
              lazy: async () => ({
                Component: (await import("@/app/pages/apps/filemanager"))
                  .default,
              }),
            },
            {
              path: "chat",
              lazy: async () => ({
                Component: (await import("@/app/pages/apps/chat")).default,
              }),
            },
            {
              path: "todo",
              lazy: async () => ({
                Component: (await import("@/app/pages/apps/todo")).default,
              }),
            },
            {
              path: "kanban",
              lazy: async () => ({
                Component: (await import("@/app/pages/apps/kanban")).default,
              }),
            },
          ],
        },
        {
          path: "settings",
          lazy: async () => ({
            Component: (await import("@/app/pages/settings/Layout")).default,
          }),
          children: [
            {
              index: true,
              element: <Navigate to="/settings/general" />,
            },
            {
              path: "general",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/General")
                ).default,
              }),
            },
            {
              path: "notifications",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Notifications")
                ).default,
              }),
            },
            {
              path: "billing",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Billing")
                ).default,
              }),
            },
          ],
        },
        {
          path: "managements",
          lazy: async () => ({
            Component: (await import("@/app/pages/managements/managements")).default,
          }),
          children: [],
        },
      ],
    },
  ],
};

export { protectedRoutes };
