import { Outlet } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navigation />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
