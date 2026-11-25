// import { Permission } from "./Permission";
import { Role } from "@/@types/role";

export interface User {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  roles: Role[];
  // permissions: Permission[];
  active: boolean;
}

