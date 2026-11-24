// Import Dependencies
import { Navigate, useLocation, useOutlet } from "react-router";

// Local Imports
import { useAuthContext } from "@/app/contexts/auth/context";
import { HOME_PATH, REDIRECT_URL_KEY, GHOST_ENTRY_PATH } from "@/constants/app";

// ----------------------------------------------------------------------

export default function GhostGuard() {
  const outlet = useOutlet();
  const { isAuthenticated, isInitialized } = useAuthContext();
  const location = useLocation();

  if (!isInitialized) return null;

  if (isAuthenticated) {
    const redirect = new URLSearchParams(location.search).get(REDIRECT_URL_KEY);
    let destination = HOME_PATH;

    // Accept only same-origin absolute paths, excluding the login page.
    if (redirect?.startsWith("/") && !redirect.startsWith("//")) {
      try {
        const url = new URL(redirect, window.location.origin);
        const pathname = url.pathname.replace(/\/+$/, "").toLowerCase();
        const loginPath = GHOST_ENTRY_PATH.replace(/\/+$/, "").toLowerCase();

        if (url.origin === window.location.origin && pathname !== loginPath) {
          destination = `${url.pathname}${url.search}${url.hash}`;
        }
      } catch {
        // Invalid destinations fall back to the home page.
      }
    }

    return <Navigate to={destination} replace />;
  }
  return <>{outlet}</>;
}
