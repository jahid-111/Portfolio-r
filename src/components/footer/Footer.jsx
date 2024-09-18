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

      <div className="text-center my-10 ">
        <p className="mb-2">Designed and Developed by Mohd. Jahidul Islam</p>

        <div className="mb-2 flex justify-center items-center gap-1">
          <p>Built With</p>
          <span className="font-semibold text-[#f4dc85]">ReactJS.</span>
          <p>
            Hosted on{" "}
            <span className="text-[#f4dc85] font-semibold">Vercel</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
