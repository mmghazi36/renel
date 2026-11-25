import { User } from "@/@types/user";
import { createSafeContext } from "@/utils/createSafeContext";
import { Permission } from "@/@types/Permission.ts";

export type LoginErrorKey =
  | "auth.errors.invalid"
  | "auth.errors.limited"
  | "auth.errors.server"
  | "auth.errors.network"
  | "auth.errors.unknown";

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;

  user: User | null;
  login: (credentials: {
    username: string;
    password: string;
  }) => Promise<LoginErrorKey | null>;
  logout: () => Promise<void>;

  can: (permission: Permission) => boolean;
  hasRole: (roleName: string) => boolean;
}

export const [AuthProvider, useAuthContext] =
  createSafeContext<AuthContextType>(
    "useAuthContext must be used within AuthProvider",
  );
