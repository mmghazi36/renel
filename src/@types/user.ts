export interface User {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  roles: Role[];
  permissions: Permission[];
}

export type Permission =
  | "projects:read"
  | "projects:write"
  | "finances:manage"
  | "users:admin";

export type Role = "admin" | "manager" | "viewer";

