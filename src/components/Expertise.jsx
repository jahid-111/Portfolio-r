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

const services = [
  {
    name: "React Apps",
    description:
      "Modern and scalable React applications with optimized performance.",
    icon: <FaReact className="text-blue-500" />,
  },
  {
    name: "NextJs Apps",
    description:
      "Server-side rendered (SSR) and static site generation (SSG) with Next.js.",
    icon: <TbBrandNextjs className="text-gray-500" />,
  },
  {
    name: "RestFull API",
    description: "Secure and scalable RESTful API development.",
    icon: <TbApi className="text-green-500" />,
  },
  {
    name: "Database Connection with MongoDB",
    description: "Seamless integration and management of MongoDB databases.",
    icon: <FaDatabase className="text-green-600" />,
  },
  {
    name: "Custom Website Development",
    description:
      "Tailor-made websites designed to meet specific business needs.",
    icon: <FaLaptopCode className="text-purple-500" />,
  },
  {
    name: "Reusable Components",
    description:
      "Reusable and modular UI components for scalable applications.",
    icon: <FaCodeBranch className="text-teal-500" />,
  },
  {
    name: "User Interface (UI) Design",
    description:
      "Intuitive and visually appealing UI for enhanced user experience.",
    icon: <FaPaintBrush className="text-yellow-400" />,
  },
  {
    name: "API Integration",
    description:
      "Seamless integration of third-party APIs for enhanced functionality.",
    icon: <GrIntegration className="text-orange-500" />,
  },
  {
    name: "Performance Boosting",
    description: "Optimizing code and resources for better app performance.",
    icon: <FaBolt className="text-blue-600" />,
  },
  {
    name: "Testing",
    description:
      "Ensuring bug-free, high-quality applications with automated/manual testing.",
    icon: <SiTestcafe className="text-green-500" />,
  },
  {
    name: "Form Handling",
    description:
      "Efficient and secure form validation and submission handling.",
    icon: <FaWpforms className="text-cyan-500" />,
  },
  {
    name: "Consultation",
    description: "Expert guidance and strategy for web development projects.",
    icon: <GiDiscussion className="text-teal-500" />,
  },
  {
    name: "State Management",
    description:
      "Efficient state handling using Context API, or TansTackquery.",
    icon: <FaSyncAlt className="text-purple-500" />,
  },
  {
    name: "Package Management",
    description:
      "Managing project dependencies with npm, yarn, and optimizations.",
    icon: <FaGitAlt className="text-blue-500" />,
  },
  {
    name: "Git Version Control",
    description:
      "Efficient code management with Git, GitHub, and versioning strategies.",
    icon: <FaGitAlt className="text-yellow-500" />,
  },
];

const Expertise = () => {
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
        <div className="w-full p-2 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-start relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-32 w-full flex flex-col shadow-md shadow-neutral-500 rounded-md p-2 justify-start items-start mb-4 relative z-10 hover:bg-[#11110e] cursor-pointer hover:duration-300 hover:ease-linear"
            >
              <div className="flex items-center gap-2 text-xl">
                <span className="text-2xl">{service.icon}</span>
                <span className="font-semibold">{service.name}</span>
              </div>
              <p className="text-gray-400 text-sm ml-8 mt-2">
                {service.description}
              </p>
            </div>
          ))}

          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-0">
            <img
              className="w-full h-full max-w-full rounded-lg shadow-lg object-cover"
              src={boardImage}
              alt="Service board"
            />
          </div>
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center items-center">
        <img
          className=" w-full max-w-full rounded-b-md shadow-lg"
          src={servicesImage}
          alt="Service-Image"
        />
      </div>
    </div>
  );
};

export default Expertise;
