// Import Dependencies
import { Navigate, useLocation, useOutlet } from "react-router";

// Local Imports
import { useAuthContext } from "@/app/contexts/auth/context";
import { GHOST_ENTRY_PATH, REDIRECT_URL_KEY } from "@/constants/app";

// ----------------------------------------------------------------------

export default function AuthGuard() {
  const outlet = useOutlet();
  const { isAuthenticated, isInitialized } = useAuthContext();
  const location = useLocation();

  if (!isInitialized) return null;

  if (!isAuthenticated) {
    const search = new URLSearchParams({
      [REDIRECT_URL_KEY]: `${location.pathname}${location.search}${location.hash}`,
    });

    return <Navigate to={`${GHOST_ENTRY_PATH}?${search.toString()}`} replace />;
  }

  return <>{outlet}</>;
}
