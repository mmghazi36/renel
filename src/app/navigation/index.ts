import { apps } from "./segments/apps";
import { components } from "./segments/components";
import { dashboards } from "./segments/dashboards";
import { forms } from "./segments/forms";
import { tables } from "./segments/tables";
import { managements } from "@/app/navigation/segments/managements.ts";

export const navigation = [
  dashboards,
  apps,
  tables,
  forms,
  components,
  managements
];
