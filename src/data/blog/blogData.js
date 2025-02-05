export const fetchedBlogData = {
  title: "Understanding React Hooks",
  author: "John Doe",
  date: "February 5, 2025",
  content: `
      React Hooks are functions that let you use state and other React features 
      without writing a class. In this article, we will explore the core hooks like useState, useEffect, 
      and custom hooks in detail.

      ## useState

      The \`useState\` hook allows you to add state to your functional components. Here's a simple example:

      \`\`\`js
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      }
      \`\`\`

      ## useEffect

      The \`useEffect\` hook lets you perform side effects in function components, like fetching data or updating the DOM.

      \`\`\`js
      import React, { useState, useEffect } from 'react';

      function Timer() {
        const [seconds, setSeconds] = useState(0);

        useEffect(() => {
          const interval = setInterval(() => setSeconds(seconds + 1), 1000);
          return () => clearInterval(interval); // Cleanup on unmount
        }, [seconds]);

        return <p>{seconds} seconds have passed.</p>;
      }
      \`\`\`

      ## Conclusion

      React Hooks make it easier to manage state and side effects in functional components. As you become more familiar with hooks, you’ll be able to build more complex and powerful applications without the need for class-based components.
    `,
};
