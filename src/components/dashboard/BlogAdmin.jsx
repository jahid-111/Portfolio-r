import { useEffect, useState } from "react";

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);

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
  console.log(blogs);
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold text-center mb-4">Blog Management</h2>
      <div className=" flex items-center justify-end my-4">
        <button className="py-2  px-5 bg-green-500 text-white rounded hover:bg-blue-600 transition">
          Add blog
        </button>
      </div>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found!</p>
      ) : (
        <div className="space-y-2">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-4 shadow-md rounded-lg flex justify-between items-center border border-gray-700"
            >
              <div>
                <h3 className="text-lg font-bold">{blog?.category}</h3>
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
