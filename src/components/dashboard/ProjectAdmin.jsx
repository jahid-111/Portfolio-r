import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectAdmin() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          import.meta.env.VITE_APP_PORTFOLIO_API_URL + "/project"
        );
        const data = await response.json();
        setProject(data || []); // if data is null, set it to an empty array
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    }
    fetchData();
  }, []);
  // console.log(project);
  return (
    <section className="p-4 absolute top-16 left-0 right-0">
      <h2 className="text-xl bg-[#050505] rounded-md py-4 font-bold text-center mb-4">
        Expertise Management
      </h2>
      <div className=" flex items-center justify-between my-4">
        <p className=" font-semibold"> Total Project : {project?.length}</p>
        <button className="py-2  px-5 bg-green-500 text-white rounded hover:bg-blue-600 transition">
          Add Project
        </button>
      </div>
      {project.length === 0 ? (
        <p className="text-center text-gray-500">No Expertise found!</p>
      ) : (
        <div className="space-y-2 overflow-y-scroll h-screen pb-16">
          {project.map((blog, i) => (
            <div
              key={blog._id}
              className="p-4 shadow-md bg-[#1f1f1b]  rounded-lg flex justify-between items-center border border-gray-700"
            >
              <div>
                <h3 className="text-lg font-bold">
                  {" "}
                  <span className=" text-white"> {i + 1}</span>. {blog.title}
                </h3>
                <p className="text-xs text-gray-400 text-justify me-5 my-1">
                  {blog.description}
                </p>
                <Link
                  target="_blank"
                  to={blog?.liveLink}
                  className=" bg-blue-400"
                >
                  <div className=" flex items-center gap-2 text-blue-200">
                    <p>Live Link</p>
                    <FaLink />
                  </div>
                </Link>
              </div>
              <div className="flex gap-2">
                <button className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  Edit
                </button>
                <button className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
