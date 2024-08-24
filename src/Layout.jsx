import { Outlet } from "react-router-dom";
import Navigation from "./components/header/Navigation";

const Layout = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
