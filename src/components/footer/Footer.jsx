import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkContact from "../LinkContact";
import { RxSlash } from "react-icons/rx";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 flex flex-col justify-center items-center text-center gap-5">
        <h2 className="text-4xl pb-2 md:text-5xl font-semibold">
          Keep In Touch.{" "}
        </h2>
        <div className=" text-center">
          <p>{"I'm currently specializing in"}</p>
          <p className="flex items-center text-[#f4dc85] font-semibold">
            <FaChevronLeft />
            Front-end Development
            <RxSlash className="-me-2" />
            <FaChevronRight />
          </p>
        </div>
        <p className=" text-wrap px-7">
          Feel free to get in touch and talk more about your projects.
        </p>
        <LinkContact />
      </div>

      <div className="text-center text-sm py-2">
        <div className="md:flex justify-between gap-10 items-center ">
          <div className=" my-2 flex justify-center items-center gap-1">
            <p> Frontend Built With</p>
            <span className="font-semibold text-[#f4dc85]">ReactJS.</span>
            <p>
              Hosted on{" "}
              <span className="text-[#f4dc85] font-semibold">Vercel</span>.
            </p>
          </div>
          <div className=" my-2 flex justify-center items-center gap-1">
            <p> Backend Built With</p>
            <span className="font-semibold text-[#f4dc85]">NodeJs Express</span>
            <p>
              Hosted on{" "}
              <span className="text-[#f4dc85] font-semibold">Render</span>.
            </p>
          </div>
        </div>
        <div className=" ">
          {" "}
          <p className="">Designed and Developed by Mohd. Jahidul Islam</p>
        </div>
      </div>

      <div className="bg-gray-000 mb-3">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mohd. Jahidul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
