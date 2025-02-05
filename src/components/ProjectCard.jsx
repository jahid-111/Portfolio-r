import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import PageIntro from "./PageIntro";
import data from "../data";
// import image from "../assets/projectImage/notAvale.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import Reval from "./animation/Reval";

const ProjectCard = () => {
  const { projects } = data;
  // console.log(projects);

  return (
    <div className="px-4 my-24">
      <PageIntro />
      <div className="my-14 md:px-0">
        <SearchInput />
      </div>
      <h5 className="text-2xl my-4 text-start">
        Total Projects: {projects.length}
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <Reval key={index}>
            <div className="w-full max-w-md bg-[#1f1f19] h-30rem rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-3">
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[#50492f] color  rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex  justify-end gap-5 mt-4 border-t pt-4 border-gray-700">
                  <Link
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <div className=" flex justify-center items-center gap-2">
                      <FaExternalLinkAlt />
                      <p>Live Demo</p>
                    </div>
                  </Link>

                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <div className=" flex justify-center items-center gap-2">
                      <TbBrandGithub />
                      <p>Source Code</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Reval>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
