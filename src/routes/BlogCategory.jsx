import CodeSkeleton from "../components/blogComponents/CodeSkeleton";
import { blogData } from "../data/blog/blogData";
import { useLocation } from "react-router-dom";

// Header Component
const Header = ({ title, subtitle }) => (
  <header className="text-center px-2 py-6 bg-gray-800 rounded-lg">
    <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-lg">{subtitle}</p>
  </header>
);

// Section Component
const Section = ({ heading, content, children }) => (
  <section className="my-8 rounded-lg">
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{heading}</h2>
    {content && <p className="text-gray-700 mb-4">{content}</p>}
    {children}
  </section>
);

// Blog Component
const Blog = ({ blogData }) => {
  const { title, subtitle, sections } = blogData;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Blog Header */}
      <Header title={title} subtitle={subtitle} />

      {/* Blog Sections */}
      {sections?.map((section, i) => (
        <Section
          key={section.id || section.heading} // Use unique id or fallback to heading
          heading={section.heading}
          content={section.content}
        >
          {section?.codeExamples?.map((code) => (
            <CodeSkeleton key={code} code={code} />
          ))}
          {section.listItems && (
            <ul className="list-disc ml-8 text-gray-700">
              {section.listItems.map((item) => (
                <li key={item.id || item}>{item}</li>
              ))}
            </ul>
          )}
        </Section>
      ))}
    </div>
  );
};

// Blogs Component
const Blogs = () => {
  const pathName = useLocation();
  const lastSegment = pathName?.pathname
    .split("/")
    .pop()
    ?.replace(/-/g, "") // Remove hyphens
    .toLowerCase();

  // console.log(lastSegment);

  const blog = blogData.find(
    (blog) => blog.category.toLocaleLowerCase() === lastSegment
  );

  return (
    <div className="min-h-screen mb-4 xl:p-8">
      {blog ? <Blog blogData={blog} /> : <p>Blog not found.</p>}
    </div>
  );
};

export default Blogs;
