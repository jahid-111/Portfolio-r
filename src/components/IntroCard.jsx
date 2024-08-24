import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const IntroCard = () => {
  return (
    <div className=" px-2 mt-20 flex flex-col justify-start items-start">
      <div>
        <div>
          <h6 className=" text-2xl my-2 md:text-[2rem] font-semibold">
            {"Hey there!, I'm-"}
          </h6>
          <h1 className=" mb-2 text-5xl xl:text-[6rem] text-wrap font-semibold">
            Mohd. Jahidul Islam
          </h1>

          <h4 className="text-xl my-5  text-justify md:text-[1.7rem] leading-relaxed">
            <span className="font-semibold">Frontend Developer. </span>
            <span className="text-gray-400">
              - A self-taught developer with an
              <br className="hidden md:inline" />
              interest in Frontend Develope.
            </span>
          </h4>
        </div>

        <div className=" my-6 text-sm md:text-xl">
          <p>🚀 Currently specializing in Frontend (React)</p>
          {/* <p>🚀 Frontend Engineer at GGL </p> */}
        </div>
      </div>

      <div className="my-5  flex flex-wrap justify-start items-center gap-2">
        <Link
          className="hover:bg-gray-500 rounded-md py-1 px-3 flex justify-start items-center"
          to={""}
        >
          <FaGithub className="me-2" />
          Github
        </Link>

        <Link
          className="hover:bg-gray-500 rounded-md py-1 px-3 flex items-center"
          to={""}
        >
          <FaLinkedin className="me-2" />
          Linkedin
        </Link>
        <Link
          className="hover:bg-gray-500 rounded-md py-1 px-3 flex items-center"
          to={""}
        >
          <IoMail className="me-2" />
          Email
        </Link>
      </div>
    </div>
  );
};

export default IntroCard;
