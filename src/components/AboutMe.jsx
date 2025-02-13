import { FaBolt } from "react-icons/fa";
import me from "../assets/image/meDP.png";

const AboutMe = () => {
  return (
    <div className="flex flex-col py-4 my-10 px-1 justify-around items-center gap-5 md:flex-row mx-auto">
      <div className="w-full md:w-6/12 text-gray-200">
        <h4 className="text-3xl font-semibold flex justify-start items-center gap-2">
          <FaBolt className="text-yellow-400" />
          <span>About Me</span>
        </h4>
        <div className="text-justify leading-relaxed tracking-tighter text-[1rem]">
          <p className="my-3">
            <span className=" text-3xl text-yellow-500 font-semibold">A</span>s
            a passionate{" "}
            <span className=" border-[1px] border-yellow-500 text-xl rounded-md px-1 ">
              MERN stack
            </span>{" "}
            developer with a strong foundation in JavaScript, I specialize in
            crafting dynamic and responsive front-end solutions, as well as
            RESTful APIs with MongoDB and *NodeJS. My journey into web
            development has been fueled by a deep interest in creating intuitive
            user experiences and leveraging the latest technologies.
          </p>
          <p>
            I thrive on learning and growing, consistently refining my skills to
            stay ahead in the fast-paced tech world. My expertise in React,
            along with my understanding of modern web development practices,
            enables me to build engaging applications and contribute effectively
            to team projects.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center md:w-6/12">
        <img className="h-80 w-80 rounded-full" src={me} alt="Me" />
      </div>
    </div>
  );
};

export default AboutMe;
