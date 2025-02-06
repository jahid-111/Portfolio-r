import { useParams } from "react-router-dom";

// Dummy blog data
const blogData = [
  {
    id: "1",
    title: "Web Development",
    description:
      "All things related to web development, frameworks, and best practices.",
  },
  {
    id: "2",
    title: "JavaScript",
    description:
      "Everything about JavaScript - from ES6 features to frameworks.",
  },
  {
    id: "3",
    title: "React.js",
    description:
      "Learn React.js through tutorials, tips, and real-world examples.",
  },
  {
    id: "4",
    title: "Node.js",
    description:
      "Node.js backend development - from setting up servers to building APIs.",
  },
  {
    id: "5",
    title: "CSS & Design",
    description:
      "Master CSS and design concepts for building beautiful websites.",
  },
];

const BlogCategory = () => {
  const { id } = useParams();
  const blog = blogData.find((category) => category.id === id);

  if (!blog) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-500">Category not found!</h1>
        <p className="text-lg">
          Sorry, we couldn't find the blog category you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="blog-category max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{blog.description}</p>

      {/* Example Blog Posts */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">
          Recent Posts in {blog.title}
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              How to Build Your First Web Application
            </a>
          </li>
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              Introduction to JavaScript ES6
            </a>
          </li>
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              Understanding React Components
            </a>
          </li>
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              Introduction to Node.js
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogCategory;
