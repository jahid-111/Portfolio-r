import { Link } from "react-router-dom";

const image =
  "https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png";
const ProjectCard = () => {
  const arr = ["index", "one", "two", "Three"];
  return (
    <div className=" mb-20">
      <div className=" text-start">
        <h1 className=" text-5xl mb-4  font-semibold my-10">Projects</h1>
        <p className="my-4">
          {
            "I love building projects and practice my engineering skills, here's an archive of things that I've worked on."
          }
        </p>
      </div>

      <div className=" my-14">
        <input
          className="h-10 w-full md:w-6/12 bg-slate-700 focus:border-yellow-600 rounded-md"
          type="text"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mx-auto justify-center items-center">
        {arr.map((c, i) => (
          <div
            key={i}
            className="max-w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg  w-full h-full" src={image} alt="" />
            </a>

            <div className=" p-2">
              <div className=" my-2 flex justify-between items-baseline border-b pb-4">
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Title
                    </h5>
                  </a>
                  <Link
                    to={""}
                    className=" mb-2 button-primary p-2 rounded-md "
                  >
                    {/* Variant Color */}
                    React, js, Tailwind
                  </Link>
                </div>
                <div>
                  {" "}
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <p className=" font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
