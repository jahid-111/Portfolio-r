import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import PageIntro from "./PageIntro";
import data from "../data";
import Reval from "./animation/Reval";
import { GrLinkNext } from "react-icons/gr";

const ProjectCard = () => {
  // console.log(data);
  return (
    <div className=" px-4 my-24   ">
      <PageIntro />

      <div className=" my-14  md:px-0">
        <SearchInput />
      </div>

      <h5 className=" text-2xl my-4">
        Total Projects : {data.projects.length}
      </h5>

      <div className="grid sm:grid-cols-2 gap-7 mx-auto justify-center items-center">
        {data?.projects?.map((project, i) => (
          <Reval key={i}>
            <div className="max-w-full border border-gray-200 rounded-lg shadow  bg-[#6d725111] dark:border-gray-700">
              <Link
                target="_blank"
                to={project?.liveLink}
                className="relative block overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl rounded-t-lg w-full h-64 md:h-96"
                    src={project.thumbnail}
                    alt=""
                  />
                </div>
              </Link>

              <div className="p-2">
                <div className="my-2 flex justify-between items-baseline border-b pb-4">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project?.title}
                    </h5>
                    <div className="w-full flex flex-wrap justify-start items-center">
                      {project?.technologies?.map((technology, index) => (
                        <div
                          key={index}
                          className="mt-2 mb-2 me-2 inline-block"
                        >
                          <Link
                            to="#"
                            className="text-wrap rounded-md button-primary py-1 px-2 sm:-2"
                          >
                            {technology}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Link
                      to={""}
                      className="flex font-semibold items-center px-5 py-2 bg-[#686c5b22] text-white rounded-lg group hover:bg-[#0c0b0bcb] transition-colors duration-300"
                    >
                      Link
                      <span className="relative">
                        <GrLinkNext className="text-2xl ml-2 text-yellow-50 group-hover:text-red-700 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                <p className="font-normal text-gray-700 h-auto  line-clamp-3 dark:text-gray-400">
                  {project?.description}
                </p>
              </div>
            </div>
          </Reval>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
