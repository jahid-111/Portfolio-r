import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BlogNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Menu Button */}
      <div className="md:hidden mx-2 flex justify-start items-center border-b border-[#464232]">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="px-2 focus:outline-none w-full"
          aria-label="Toggle menu"
        >
          {!open ? (
            <div className="flex justify-center items-center">
              <IoMdArrowDropdown className="h-10 w-10" />
              <p>More Blogs</p>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <MdArrowDropUp className="h-10 w-10" />
              <p>Collapse</p>
            </div>
          )}
        </button>
      </div>

      {/* Dropdown Menu with Transition */}
      {open && (
        <div
          className={`absolute top-10 left-2 right-2 px-2 flex flex-col bg-[#464232] z-10 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out`}
        >
          {[...Array(5)].map((_, i) => (
            <Link
              onClick={() => setOpen(false)} // Close dropdown on link click
              key={i}
              to={`/blogs/${i}`}
              className="text-white border-b border-gray-500 p-3 hover:bg-[#39372d] rounded-md"
            >
              Blog API-{i + 1}
            </Link>
          ))}
        </div>
      )}

      {/* Static Blog Links */}
      <div className=" hidden md:block">
        <div className="flex flex-col gap-1">
          {[...Array(5)].map((_, i) => (
            <Link
              key={i}
              to={`/blogs/${i}`}
              className="text-white border-gray-500 p-2 bg-[#464232] hover:bg-[#39372d] rounded-md"
            >
              Blog API-{i + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
