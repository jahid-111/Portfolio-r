import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogImage from "../assets/svg/blog.svg"; // Assuming this image exists
import Reval from "../components/animation/Reval"; // Assuming Reval is an animation component
import { fetchedBlogData } from "../data/blog/blogData";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState(null);

  // Example of fetching blog data dynamically (this could be an API call)
  useEffect(() => {
    // Simulate an API call to fetch blog by ID
    // Here, I'm using a hardcoded example. Replace with actual API fetch logic.

    setBlogData(fetchedBlogData); // Simulating the blog data being set
  }, [blogId]); // Fetch blog data whenever the blogId changes

  if (!blogData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-details px-4 mt-32 md:mt-36 w-full h-auto text-white">
      <main className="blog-content">
        <section className="blog-header mb-8">
          <h1 className="text-4xl font-bold">{blogData.title}</h1>
          <p className="text-lg text-gray-400">
            <strong>Author:</strong> {blogData.author} | <strong>Date:</strong>{" "}
            {blogData.date}
          </p>
        </section>
        <div
          className="blog-body text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></div>
      </main>
    </div>
  );
};

export default BlogDetails;
