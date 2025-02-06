import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const BlogLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto my-24">
      {/* Navbar and Dropdown Mobile */}
      <div className="relative">
        {/* Menu Button */}
        <div className="md:hidden mx-2 flex justify-start items-center border-b border-[#464232]">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="px-2 focus:outline-none w-full"
            aria-label="Toggle menu"
          >
            {!open ? (
              <div className=" flex justify-center items-center">
                <IoMdArrowDropdown className="h-10 w-10" />
                <p>More Blogs</p>
              </div>
            ) : (
              <div className=" flex justify-center items-center">
                <MdArrowDropUp className="h-10 w-10" />

                <p>Collapse</p>
              </div>
            )}
          </button>
        </div>

        {/* Dropdown Menu with Transition */}
        <div
          className={`absolute top-10 left-2 right-2 px-2 flex flex-col bg-[#464232] z-10 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out transform ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {[...Array(5)].map((_, i) => (
            <Link
              onClick={() => setOpen(false)} // Close dropdown on link click
              key={i}
              to={`/blogs/${i}`}
              className="text-white border-b border-gray-500 p-3 hover:bg-[#39372d] rounded-md"
            >
              Blog API-{i}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full p-4">
        <Outlet />
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          inventore minus quos odit adipisci minima sapiente reiciendis rerum.
          Reprehenderit laboriosam nesciunt adipisci. Veritatis illo unde
          quaerat, rem assumenda expedita hic!
        </p>
      </div>
    </div>
  );
};

export default BlogLayout;
