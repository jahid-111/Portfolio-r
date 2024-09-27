import NextSvg from "../assets/svg/nextJs.svg";
import LinkContact from "./LinkContact";
import { FaReact } from "react-icons/fa";
const IntroCard = () => {
  return (
    <div className="relative flex flex-col  my-16  items-start p-2">
      {/* Background image */}
      <div className="absolute top-0 -left-10 inset-0 z-0 h-44 w-44">
        <img
          src="https://svgsilh.com/svg/26432.svg"
          alt="Background SVG"
          className=" h-32 w-44 object-cover"
        />
      </div>

      <div className="relative z-10 text-white">
        <h3 className=" text-2xl my-2 md:text-[2rem] indent-5 font-semibold">
          {"Hey there!, I'm-"}
        </h3>
        <h4 className=" mb-2 text-5xl xl:text-[6rem] text-wrap font-semibold">
          Mohd. Jahidul Islam.
        </h4>
        <h4 className="text-xl my-5 tracking-tight  md:text-[1.7rem] leading-relaxed">
          <span className="font-semibold">Frontend Developer. </span>
          <span className="text-gray-400">
            - A self-taught developer with an
            <br className="hidden md:inline" />
            interest in Frontend Develope.
          </span>
        </h4>
        <div className=" my-6 text-sm md:text-xl">
          <p className=" flex items-center justify-start gap-2">
            <span>
              <FaReact className="text-[#61DAFB]" />
            </span>
            <span> Currently specializing in Frontend (React)</span>
          </p>
          <p className=" flex items-center justify-start gap-2">
            <span>
              <img src={NextSvg} height={24} width={24} alt="" />
            </span>
            <span>Focusing on Next.js</span>
          </p>
        </div>
      </div>
      <LinkContact />
    </div>
  );
};

export default IntroCard;
