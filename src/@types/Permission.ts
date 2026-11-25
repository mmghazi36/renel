export type Permission =
  // Projects
  | "projects:view"
  | "projects:create"
  | "projects:edit"
  | "projects:delete"
  | "projects:assign_members"
  // Tasks / Kanban
  | "tasks:view"
  | "tasks:create"
  | "tasks:edit"
  | "tasks:delete"
  | "tasks:move"
  // Clients
  | "clients:view"
  | "clients:create"
  | "clients:edit"
  | "clients:delete"
  | "clients:link_project"
  // Chat
  | "chat:access"
  | "chat:direct_message"
  | "chat:group_create"
  | "chat:delete_message"
  // File Manager
  | "files:view"
  | "files:upload"
  | "files:download"
  | "files:delete"
  // Finances
  | "finances:view_summary"
  | "finances:records_create"
  | "finances:records_edit"
  | "finances:reports_export"
  // System & IAM
  | "users:manage"
  | "roles:manage"
  | "permissions:assign";



