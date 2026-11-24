import { User } from "@/@types/user";
import { createSafeContext } from "@/utils/createSafeContext";

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
}

export const [AuthProvider, useAuthContext] =
  createSafeContext<AuthContextType>(
    "useAuthContext must be used within AuthProvider",
  );
