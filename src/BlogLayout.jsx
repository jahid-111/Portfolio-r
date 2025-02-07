import { Outlet } from "react-router-dom";
import BlogNavigation from "./components/blogComponents/BlogNavigation";

const BlogLayout = () => {
  return (
    <div className="w-full md:flex justify-center gap-5 mx-auto my-24">
      {/* Navbar and Dropdown Mobile */}
      <div className="relative  md:w-2/12">
        <BlogNavigation />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-10/12 p-4 bg-[#e1e1e1] text-white rounded-sm">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;
