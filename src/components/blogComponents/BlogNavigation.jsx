import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { blogData } from "../../data/blog/blogData";

export default function BlogNavigation() {
  const [open, setOpen] = useState(false);

  const nav = blogData;

  useEffect(() => {
    const mainContent = document.getElementById("blog-content");

    if (mainContent) {
      if (open) {
        mainContent.style.filter = "blur(2px)";
        mainContent.style.transition = "filter 0.7s ease";

        const handleClickOutside = (event) => {
          const blogNav = document.getElementById("blog-nav");
          if (blogNav && !blogNav.contains(event.target)) {
            setOpen(false);
          }
        };

        // Add event listener to close on outside click
        window.addEventListener("click", handleClickOutside);

        // Cleanup listener on unmount or when `open` changes
        return () => {
          window.removeEventListener("click", handleClickOutside);
        };
      } else {
        mainContent.style.filter = "none"; // Remove blur
      }
    }
  }, [open]);

  return (
    <div id="blog-nav">
      {/* Menu Button */}
      <div className="lg:hidden mx-2 flex justify-start items-center border-b border-[#464232]">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="px-2 focus:outline-none w-full"
          aria-label="Toggle menu"
        >
          {!open ? (
            <div className="flex justify-end items-center">
              <p>More Blogs</p>
              <IoMdArrowDropdown className="h-10 w-10" />
            </div>
          ) : (
            <div className="flex justify-end items-center">
              <p>Collapse</p>
              <MdArrowDropUp className="h-10 w-10" />
            </div>
          )}
        </button>
      </div>

      {/* Dropdown Menu with Transition */}
      {open && (
        <div
          className={`absolute top-10 left-2 right-2 px-2 flex flex-col bg-[#11110e] z-10 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out`}
        >
          {nav?.map((category) => (
            <Link
              onClick={() => setOpen(false)} // Close dropdown on link click
              key={category.category}
              to={`/blogs/${encodeURIComponent(
                category.category.toLocaleLowerCase()
              )}`}
              className="text-white border-b border-gray-800 p-3 hover:bg-[#1e1e1b] rounded-md"
            >
              {category?.category}
            </Link>
          ))}
        </div>
      )}

      {/* Static Blog Links */}
      <div className=" hidden lg:block">
        <div className="flex flex-col gap-1">
          {nav?.map((category) => (
            <Link
              key={category?.category}
              to={`/blogs/${encodeURIComponent(
                category.category.toLocaleLowerCase()
              )}`}
              className="text-white border-gray-800 p-2  border-b hover:bg-[#39372d] rounded-sm"
            >
              {category.category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
