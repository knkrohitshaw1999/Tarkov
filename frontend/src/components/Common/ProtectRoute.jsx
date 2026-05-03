import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectRoute = ({ role, children }) => {
  const { user } = useSelector((state) => state.auth);

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role mismatch
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectRoute;
