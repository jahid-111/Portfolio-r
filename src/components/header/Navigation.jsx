import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative ">
      {/* Backdrop Blur Overlay */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}

      <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 px-2 md:px-24 xl:px-32 z-50">
        <div className="h-full flex justify-between items-center">
          <h6 className="text-white text-xl font-bold">Image Brand</h6>

          <button
            onClick={() => setOpenMenu((prevState) => !prevState)}
            className="md:hidden text-white"
          >
            {openMenu ? (
              <HiMiniXMark className="h-8 w-8" />
            ) : (
              <IoReorderThree className="h-8 w-8" />
            )}
          </button>

          <nav
            className={`${
              openMenu
                ? "absolute top-16 right-0 w-3/5 md:w-auto h-screen z-30 bg-gray-800 text-white flex flex-col items-center gap-3 p-4 rounded-tl-md rounded-bl-md"
                : "hidden"
            } md:flex md:flex-row md:items-center md:gap-5 md:w-auto md:h-auto md:bg-transparent md:relative`}
          >
            <Link
              className="px-4 py-2 md:px-none w-full border-b sm:border-none rounded-md hover:rounded-md hover:text-[#202018] hover:bg-[#d2b960] text-white text-center"
              to={`/home`}
            >
              Home
            </Link>
            <Link
              className="px-4 py-2 md:px-none w-full border-b sm:border-none rounded-md hover:rounded-md hover:text-[#202018] hover:bg-[#d2b960] text-white text-center"
              to={`/project`}
            >
              Projects
            </Link>
            <Link
              className="px-4 py-2 md:px-none w-full border-b sm:border-none rounded-md hover:rounded-md hover:text-[#202018] hover:bg-[#d2b960] text-white text-center"
              to={`/blogs`}
            >
              Blogs
            </Link>
            <Link
              className="px-4 py-2 md:px-none w-full border-b sm:border-none rounded-md hover:rounded-md hover:text-[#202018] hover:bg-[#d2b960] text-white text-center"
              to={`/contacts`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
