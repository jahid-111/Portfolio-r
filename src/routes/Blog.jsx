import BLogImage from "../assets/svg/blog.svg";
import Reval from "../components/animation/Reval";
const Blog = () => {
  return (
    <div className=" px-4  mt-32 md:mt-36 w-full h-[500px] text-white ">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full ms-14 bg-sky-400 opacity-100">
          <h3 className="text-2xl mt-10 ms-1 font-semibold text-black">
            Coming Soon....
          </h3>
        </span>
        <span className="relative inline-flex rounded-full h-3 w-3 ">
          <h3 className=" text-2xl font-semibold">Blog</h3>
        </span>
      </span>
      <Reval>
        <img src={BLogImage} className=" -z-50 relative h-96 w-96"></img>
      </Reval>
    </div>
  );
};

export default Blog;
