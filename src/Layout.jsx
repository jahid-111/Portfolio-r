import { Outlet } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <div className=" w-full mx-auto">
      <Navigation />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
