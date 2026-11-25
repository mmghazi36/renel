import { Permission } from "@/@types/Permission.ts";

export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: Permission[];
}
