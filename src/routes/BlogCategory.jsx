import { useState } from "react";
import CodeSkeleton from "../components/blogComponents/CodeSkeleton";

// Header Component
const Header = ({ title, subtitle }) => (
  <header className="text-center px-2 py-6 bg-gray-800 rounded-lg">
    <h1 className=" text-xl md:text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-lg">{subtitle}</p>
  </header>
);

// Section Component
const Section = ({ heading, content, children }) => (
  <section className="my-8 rounded-lg ">
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{heading}</h2>
    {content && <p className="text-gray-700 mb-4">{content}</p>}
    {children}
  </section>
);

// Blog Component
const Blog = ({ blogData }) => {
  const { title, subtitle, sections } = blogData;
  // console.log(blogData);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Blog Header */}
      <Header title={title} subtitle={subtitle} />

      {/* Blog Sections */}
      {sections?.map((section, index) => (
        <Section
          key={index}
          heading={section.heading}
          content={section.content}
        >
          {section?.codeExamples &&
            section?.codeExamples.map((code, codeIndex) => (
              <CodeSkeleton key={codeIndex} code={code} />
            ))}
          {section.listItems && (
            <ul className="list-disc ml-8 text-gray-700">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </Section>
      ))}
    </div>
  );
};

const Blogs = () => {
  const [currentBlog, setCurrentBlog] = useState(0);

  const blogDataList = [
    {
      title: "Understanding JavaScript: The Backbone of Modern Web Development",
      subtitle:
        "Explore the core concepts, applications, and future of JavaScript.",
      sections: [
        {
          heading: "What is JavaScript?",
          content:
            "JavaScript is a lightweight, interpreted programming language primarily used to create dynamic and interactive web content.",
        },
        {
          heading: "Why is JavaScript So Popular?",
          content:
            "JavaScript’s popularity stems from its versatility, rich ecosystem, community support, browser compatibility, and real-time functionality.",
          listItems: [
            "Versatility: Client-side and server-side usage.",
            "Rich Ecosystem: Frameworks like React, Angular, Vue.",
            "Community Support: Vast resources and tutorials.",
            "Browser Compatibility: Universally supported.",
            "Real-Time Functionality: Features like live chat and dynamic dashboards.",
          ],
        },
        {
          heading: "Core Concepts in JavaScript",
          codeExamples: [
            'let message = "Hello, World!";\nconsole.log(message);',
            'function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet("Alice"));',
            'document.getElementById("btn").addEventListener("click", function() {\n  alert("Button clicked!");\n});',
            'async function fetchData() {\n  const response = await fetch("https://api.example.com/data");\n  const data = await response.json();\n  console.log(data);\n}\nfetchData();',
          ],
        },
      ],
    },
    {
      title: "React: Building Modern User Interfaces",
      subtitle:
        "Dive into the world of React and learn how it simplifies web development.",
      sections: [
        {
          heading: "What is React?",
          content:
            "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers.",
        },
        {
          heading: "Why Use React?",
          listItems: [
            "Component-Based Architecture",
            "Reusable Components",
            "Virtual DOM for Performance",
            "Strong Community Support",
            "Rich Ecosystem with Tools and Libraries",
          ],
        },
        {
          heading: "Sample React Code",
          codeExamples: [
            "import React from 'react';\nconst App = () => <h1>Hello, World!</h1>;\nexport default App;",
            "import { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>Count: {count}</button>\n  );\n}",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen  mb-4 xl:p-8">
      <Blog blogData={blogDataList[currentBlog]} />
    </div>
  );
};

export default Blogs;
