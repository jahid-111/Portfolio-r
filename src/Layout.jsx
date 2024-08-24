import { Outlet } from "react-router-dom";
import Navigation from "./components/header/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />

      <Outlet />
    </div>
  );
};

export default Layout;
