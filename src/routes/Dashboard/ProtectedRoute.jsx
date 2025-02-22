import AdminLogin from "../../page/auth/AdminLogin";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth-token");
  console.log(isAuthenticated);
  return isAuthenticated ? children : <AdminLogin />;
};

export default ProtectedRoute;
