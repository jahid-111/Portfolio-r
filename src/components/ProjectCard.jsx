import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import PageIntro from "./PageIntro";
import data from "../data";
import Reval from "./animation/Reval";

const ProjectCard = () => {
  // console.log(data);
  return (
    <div className=" px-4 mb-20">
      <PageIntro />

      <div className=" my-14  md:px-0">
        <SearchInput />
      </div>

      <h5 className=" text-2xl my-4">Total Project : {data.projects.length}</h5>

      <div className="grid sm:grid-cols-2 gap-7 mx-auto justify-center items-center">
        {data?.projects?.map((project, i) => (
          <Reval key={i}>
            <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="#">
                <img
                  className="rounded-t-lg w-full  h-64 md:h-96"
                  src={project.thumbnail}
                  alt=""
                />
              </Link>

              <div className="p-2">
                <div className="my-2 flex justify-between items-baseline border-b pb-4">
                  <div>
                    <Link to="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project?.title}
                      </h5>
                    </Link>

                    <div className="w-full">
                      {project?.technologies?.map((technology, index) => (
                        <div key={index} className="mt-3  me-2 inline-block">
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
                  <div>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        xmlSpace="preserve"
                      >
                        <defs></defs>
                        <g
                          style={{
                            stroke: "none",
                            fill: "rgb(0,0,0)",
                            opacity: 1,
                          }}
                          transform="translate(1.4 1.4) scale(2.81 2.81)"
                        >
                          <path
                            d="M 88.411 90 H 1.59 C 0.712 90 0 89.288 0 88.41 V 1.59 C 0 0.712 0.712 0 1.59 0 h 34.831 c 0.848 0 1.536 0.688 1.536 1.536 V 15.43 c 0 0.848 -0.688 1.536 -1.536 1.536 H 16.967 v 56.066 h 56.066 V 51.932 c 0 -0.848 0.688 -1.536 1.536 -1.536 h 13.894 c 0.848 0 1.536 0.688 1.536 1.536 v 36.478 C 90 89.288 89.288 90 88.411 90 z"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 88.943 38.494 H 73.794 c -0.584 0 -1.057 -0.473 -1.057 -1.057 v -7.968 L 53.27 48.936 c -0.442 0.442 -1.157 0.442 -1.599 0 L 41.064 38.329 c -0.442 -0.442 -0.442 -1.157 0 -1.599 l 19.467 -19.467 h -7.968 c -0.584 0 -1.057 -0.473 -1.057 -1.057 V 1.057 C 51.506 0.473 51.979 0 52.563 0 h 21.231 h 15.149 C 89.527 0 90 0.473 90 1.057 v 15.149 v 21.231 C 90 38.021 89.527 38.494 88.943 38.494 z"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="font-normal text-gray-700 dark:text-gray-400">
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
