import { useEffect, useState } from "react";
import Modal from "../Modal";
import DynamicForm from "../../Dtest";

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          import.meta.env.VITE_APP_PORTFOLIO_API_URL + "/blog"
        );
        const data = await response.json();
        setBlogs(data?.data || []); // যদি data নাল হয়, তাহলে খালি অ্যারে রাখবে
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchData();
  }, []);
  // console.log(blogs);

  function handleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="p-4">
      <h2 className="text-xl bg-[#050505] rounded-md py-4 font-bold text-center mb-4">
        Blog Management
      </h2>
      <div className=" flex items-center justify-between my-4">
        <p className=" font-semibold"> Total Blog : {blogs.length}</p>
        <button
          className="py-2 px-5 bg-green-500 text-white rounded hover:bg-blue-600 transition"
          onClick={handleModal}
        >
          Add Project
        </button>


        <Modal isOpen={isOpen} onClose={handleModal}>
        {/* <h2 className="text-lg font-bold mb-4">Add New Expertise</h2> */}
        {/* Add your form for adding expertise here */}
        <DynamicForm keyProps={blogs} />
      </Modal>
      </div>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found!</p>
      ) : (
        <div className="space-y-2 mb-10">
          {blogs.map((blog, i) => (
            <div
              key={blog._id}
              className="p-4 shadow-md rounded-lg bg-[#1f1f1b] flex justify-between items-center border border-gray-700"
            >
              <div>
                <h3 className="text-lg font-bold">
                  {i + 1}. {blog?.category}
                </h3>
                <p className="text-sm text-gray-400">{blog?.title}</p>
                <p className="text-sm text-gray-400">{blog?.subtitle}</p>
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
