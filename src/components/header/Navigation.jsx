import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

import Brand from "../../assets/svg/brand.svg";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const routesName = ["Home", "Projects", "Blogs", "Contacts"];
  const location = useLocation(); // To get the current location/pathname

  return (
    <div className="relative">
      {/* Backdrop Blur Overlay */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}

      <div className="fixed top-0 left-0 w-full h-16 bg-[#11110e] shadow-md shadow-[#232526] px-2 md:px-24 xl:px-32 z-50">
        <div className="h-full flex justify-between items-center">
          <Link to={"/"} className="flex justify-center items-center gap-2">
            <img height={50} width={50} src={Brand} alt="Brand Logo" />
            <h6 className="text-[#d4a82f] text-xl font-bold">0-𝓭𝓮𝓿</h6>
          </Link>

          <button
            onClick={() => setOpenMenu((prevState) => !prevState)}
            className="md:hidden text-white"
            aria-expanded={openMenu}
            aria-controls="navbar"
          >
            {openMenu ? (
              <HiMiniXMark className="h-8 w-8" />
            ) : (
              <IoReorderThree className="h-8 w-8" />
            )}
          </button>

          <nav
            id="navbar"
            className={`fixed top-16 md:top-0 right-0 w-3/5 h-screen bg-[#11110e] flex flex-col items-center gap-3 p-4 transform transition-transform duration-300 ease-in-out ${
              openMenu
                ? "translate-x-0 opacity-100 z-30"
                : "translate-x-full opacity-0 -z-10"
            } md:relative md:flex md:flex-row md:items-center md:gap-2 md:w-auto md:h-auto md:bg-transparent md:opacity-100 md:translate-x-0 md:z-auto`}
          >
            {routesName.map((name) => {
              // Check if the current route is the home route
              const isHomeRoute = location.pathname === "/";

              return (
                <NavLink
                  key={name}
                  onClick={() => setOpenMenu(false)} // Close the menu when a route is clicked
                  className={({ isActive }) =>
                    `px-4 py-2 w-full rounded-md text-white text-start transition-colors duration-300 ${
                      isActive || (isHomeRoute && name === "Home") // Check if current route is active or Home route
                        ? "text-yellow-600 bg-[#3731]" // Styles for active or Home route
                        : "hover:text-yellow-600 hover:bg-[#3731]" // Inactive route hover styles
                    }`
                  }
                  to={`/${name === "Home" ? "" : name}`} // Home routes to '/'
                >
                  {name === "Home" ? "Home" : name}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
