import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Spinner } from "@/components/ui/spinner";

/**
 * PrivateRoute — wraps any route that requires the user to be logged in.
 * If not authenticated, redirects to /login and saves the current path
 * so the user can be redirected back after login.
 */
const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;
