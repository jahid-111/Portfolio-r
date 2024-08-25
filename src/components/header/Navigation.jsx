import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`h-16 p-2 relative flex justify-between items-center`}>
      <div>
        <h6
          className=" h-14 w-14 
        "
        >
          Image Brand
        </h6>
      </div>

      <button
        onClick={() => setOpenMenu((prvState) => !prvState)}
        className=" absolute top-0 right-0 md:hidden"
      >
        {openMenu ? (
          <HiMiniXMark className=" h-14 w-14" />
        ) : (
          <IoReorderThree className=" h-14 w-14" />
        )}
      </button>

      <nav
        className={`${
          openMenu
            ? "absolute flex justify-center items-start flex-col gap-3 p-2 rounded-tl-md rounded-bl-md bg-black top-16 right-0 w-6/12 h-screen"
            : "hidden"
        } md:flex md:justify-around md:gap-5 md:w-auto  md:h-auto text-center md:static`}
      >
        <Link
          className=" px-4 py-2 md:px-none w-full border sm:border-none rounded-md  hover:rounded-md hover:text-[#202018] hover:bg-[#d2b960] text-white text-center"
          to={`/home`}
        >
          Home
        </Link>
        <Link
          className=" px-4 py-2 md:px-none w-full border sm:border-none rounded-md  hover:rounded-md hover:text-[#202018] hover:bg-[#d2b960] text-white text-center"
          to={`/project`}
        >
          Projects
        </Link>
        <Link
          className=" px-4 py-2 md:px-none w-full border sm:border-none rounded-md  hover:rounded-md hover:text-[#202018] hover:bg-[#d2b960] text-white text-center"
          to={`/contacts`}
        >
          Contact
        </Link>
        <div></div>
      </nav>
    </div>
  );
};

export default Navigation;
