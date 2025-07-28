import borderImg from "../assets/image/border-img-.png";
import servicesImage from "../assets/image/iserviceImage_0.jpg";
import boardImage from "../assets/image/board.jpg";

import {
  FaReact,
  FaDatabase,
  FaLaptopCode,
  FaCodeBranch,
  FaPaintBrush,
  FaSyncAlt,
  FaGitAlt,
  FaBolt,
  FaWpforms,
} from "react-icons/fa";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
import { GrIntegration } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { GiDiscussion } from "react-icons/gi";
import Reval from "./animation/Reval";
import { useEffect, useState } from "react";

const Expertise = () => {
  const [expertise, setExpertise] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("Expertise data:", expertise === null ? "Loading..." : expertise);
  // Icon mapping
  console.log(loading);
  const iconMapping = {
    "React Apps": <FaReact className="text-blue-500" />,
    "NextJs Apps": <TbBrandNextjs className="text-gray-500" />,
    "RestFull API": <TbApi className="text-green-500" />,
    "Database Connection with MongoDB": (
      <FaDatabase className="text-yellow-600" />
    ),
    "Custom Website Development": <FaLaptopCode className="text-purple-500" />,
    "Reusable Components": <FaCodeBranch className="text-teal-500" />,
    "User Interface (UI) Design": <FaPaintBrush className="text-yellow-400" />,
    "API Integration": <GrIntegration className="text-orange-500" />,
    "Performance Boosting": <FaBolt className="text-blue-600" />,
    Testing: <SiTestcafe className="text-green-500" />,
    "Form Handling": <FaWpforms className="text-cyan-500" />,
    Consultation: <GiDiscussion className="text-teal-500" />,
    "State Management": <FaSyncAlt className="text-purple-500" />,
    "Package Management": <FaGitAlt className="text-blue-500" />,
    "Git Version Control": <FaGitAlt className="text-yellow-500" />,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          import.meta.env.VITE_APP_PORTFOLIO_API_URL + "/expertise"
        );

        const data = await response.json();
        setLoading(true); // Start loading before fetching data
        setExpertise(data);
      } catch (error) {
        console.log("Error fetching expertise data:", error);
      } finally {
        setLoading(false); // Stop loading here
      }
    }
    fetchData();
  });

  return (
    <div className="px-4 md:px-0 h-auto my-14 mb-14">
      <div className="left-2 md:left-0 relative flex flex-col md:items-center my-2 md:my-5">
        <h3 className="text-3xl ms-2 md:text-4xl font-semibold mb-4 relative z-10">
          Expertise
        </h3>
        <div className="absolute w-full inset-0 md:inset-1 flex items-center md:justify-center pointer-events-none">
          <img
            className="w-30 h-10 md:w-44 object-cover opacity-60"
            src={borderImg}
            alt="Border"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5  rounded-t-md ">
        {loading ? (
          <div className="my-20">
            <div className="loader h-4"></div>
          </div>
        ) : (
          <div className="w-full p-2 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-start relative">
            {expertise?.map((expertise) => (
              <Reval slide={true} key={expertise._id}>
                <div className="h-32 w-full flex flex-col shadow-md shadow-neutral-500 rounded-md p-2 justify-start items-start mb-4 relative z-10 hover:bg-[#11110e] cursor-pointer hover:duration-300 hover:ease-linear">
                  <div className="flex items-center gap-2 text-xl">
                    <span className="text-2xl">
                      {iconMapping[expertise.name]}{" "}
                      {/* Dynamically render icon */}
                    </span>
                    <span className="font-semibold">{expertise.name}</span>
                  </div>
                  <p className="text-gray-400 text-sm ml-8 mt-2">
                    {expertise.description}
                  </p>
                </div>
              </Reval>
            ))}

            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-0">
              <img
                className="w-full h-full max-w-full rounded-lg shadow-lg object-cover"
                src={boardImage}
                alt="Service board"
              />
            </div>
          </div>
        )}
      </div>
      <Reval slide={true} delay={0.6}>
        <div className="w-full hidden md:flex justify-center items-center">
          <img
            className=" w-full max-w-full rounded-b-md shadow-lg"
            src={servicesImage}
            alt="Service-Image"
          />
        </div>
      </Reval>
    </div>
  );
};

export default Expertise;
