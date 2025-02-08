export const blogData= [
  {
    category: "JavaScript",
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
        ],
      },
    ],
  },
  {
    category: "ReactJs",
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
  {
    category: "NodeJS",
    title: "Node.js: Powering the Backend of Modern Applications",
    subtitle:
      "Learn how Node.js enables scalable, fast, and efficient backend solutions.",
    sections: [
      {
        heading: "What is Node.js?",
        content:
          "Node.js is a runtime environment that allows JavaScript to run on the server side, making it ideal for building scalable applications.",
      },
      {
        heading: "Why Choose Node.js?",
        listItems: [
          "Asynchronous, Non-Blocking Architecture",
          "Fast Execution with V8 Engine",
          "Rich NPM Ecosystem",
          "Cross-Platform Development",
          "Large Community Support",
        ],
      },
      {
        heading: "Sample Node.js Code",
        codeExamples: [
          'const http = require("http");\nconst server = http.createServer((req, res) => {\n  res.end("Hello, World!");\n});\nserver.listen(3000);',
          "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => res.send('Hello World!'));\napp.listen(3000);",
        ],
      },
    ],
  },
  {
    category: "TailwindCss",
    title: "Tailwind CSS: A Utility-First Approach to Styling",
    subtitle:
      "Discover how Tailwind CSS revolutionizes the way you style your web projects.",
    sections: [
      {
        heading: "What is Tailwind CSS?",
        content:
          "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs efficiently.",
      },
      {
        heading: "Key Features of Tailwind CSS",
        listItems: [
          "Utility-First Approach",
          "Customizable via Configuration",
          "Responsive Design Made Simple",
          "Prebuilt Components with Tailwind UI",
          "Integrated with Popular Frameworks",
        ],
      },
      {
        heading: "Sample Tailwind CSS Code",
        codeExamples: [
          '<div class="text-center text-2xl font-bold text-blue-500">Hello, Tailwind CSS!</div>',
          '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>',
        ],
      },
    ],
  },
  {
    category: "HTML",
    title: "HTML: The Foundation of the Web",
    subtitle: "Master the basics of HTML to build the structure of web pages.",
    sections: [
      {
        heading: "What is HTML?",
        content:
          "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.",
      },
      {
        heading: "Why Learn HTML?",
        listItems: [
          "Essential for Web Development",
          "Defines Page Structure",
          "Supports Multimedia Integration",
          "Foundation for CSS and JavaScript",
          "Simple and Easy to Learn",
        ],
      },
      {
        heading: "Sample HTML Code",  
        codeExamples: [
          "<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello, World!</title>\n</head>\n<body>\n  <h1>Welcome to HTML</h1>\n</body>\n</html>",
          '<div class="container">\n  <p>This is a simple HTML paragraph.</p>\n</div>',
        ],
      },
    ],
  },
];
