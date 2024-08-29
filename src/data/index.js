import weather from "../assets/image/weather_image.png";
import astroShipThumbnail from "../assets/image/astro_web.jpg";
import music from "../assets/image/music.jpg";
import foodKitchen from "../assets/image/food_kitchen.jpg";
import phoneSearch from "../assets/image/phone_search.jpg";
import letsJucyCoctail from "../assets/image/lets_Jucy.jpg";
import smartGadget from "../assets/image/smart.gadget.jpg";
import quizImage from "../assets/image/quiz_image.jpg";
import gym from "../assets/image/gym.jpg";
import ticTacToe from "../assets/image/tic_tac_toe.png";
import learnerImage from "../assets/image/learner_image.png";
import taskList from "../assets/image/task_list.png";
import Bookshelf from "../assets/image/book.jpg";
import movie from "../assets/image/movie.jpg";
import news from "../assets/image/news.jpg";
import fakebook from "../assets/image/fakebookjpg.jpg";
import blogify from "../assets/image/blogify.png";

const data = {
  home: [
    {
      intro: [
        {
          // Add intro data here
        },
      ],
      about: [
        {
          // Add about data here
        },
      ],
      expertise: [
        {
          // Add expertise data here
        },
      ],
    },
  ],
  projects: [
    {
      title: "Weather",
      description:
        "A simple weather application built with Vanilla JavaScript and styled using Tailwind CSS. It fetches real-time weather data from an API and displays the current conditions, including temperature, and humidity for any location.",
      technologies: ["Vanilla JS", "Tailwind Css", "API"],
      thumbnail: weather,
      liveLink: "https://weather-wheat-xi-28.vercel.app/",
    },
    {
      title: "Astro landing page",
      description:
        "AstroShip is a visually stunning, responsive website that offers a captivating user experience with space-themed designs. Built with modern web technologies, it showcases interactive elements and smooth animations, making it an ideal platform for exploring space-related content.",
      technologies: ["Vanilla JS", "Tailwind Css"],
      thumbnail: astroShipThumbnail,
      liveLink: "https://astroship-website-chi.vercel.app/",
    },
    {
      title: "Play Music",
      description:
        "An interactive music player where pressing different keys on the keyboard triggers various sounds. Built with Vanilla JavaScript and styled using Tailwind CSS, this project creates a fun and engaging way to play musical notes or beats directly from the keyboard.",
      technologies: ["Vanilla JS", "Tailwind Css"],
      thumbnail: music,
      liveLink: "https://drum-play.vercel.app/",
    },
    {
      title: "Food Kitchen",
      description:
        "A web application that helps users discover and explore various recipes. Built with Vanilla JavaScript and styled using BootStrap CSS, it features a user-friendly interface where users can search for recipes by ingredients, cuisine, or meal type, with detailed instructions and images.",
      technologies: ["Vanilla JS", "BootStrap CSS"],
      thumbnail: foodKitchen,
      liveLink: "https://meal-db-one.vercel.app/",
    },
    {
      title: "Phone Search",
      description:
        "A web application designed to help users search for various phones and their specifications. Built with Vanilla JavaScript and styled using BootStrap CSS, this tool allows users to find detailed information about different phone models, including features, prices, and reviews.",
      technologies: ["Vanilla JS", "BootStrap CSS", "Custom api"],
      thumbnail: phoneSearch,
      liveLink: "https://phone-market-ten.vercel.app/",
    },
    {
      title: "Jucy Coctail",
      description:
        "A responsive website showcasing a variety of cocktail recipes. Built with HTML and styled using BootStrap CSS, it provides an engaging user experience with a mobile-friendly design and interactive features for exploring different cocktail options.",
      technologies: ["HTML", "BootStrap CSS"],
      thumbnail: letsJucyCoctail,
      liveLink: "https://coctail-tau.vercel.app/#",
    },
    {
      title: "Smart Gadget",
      description:
        "An interactive functional web application designed to showcase and manage various smart gadgets and tech products. Built with Vanilla JavaScript and styled using BootStrap CSS, this site offers a user-friendly interface to explore product details, compare features, and stay updated with the latest tech trends.",
      technologies: ["Vanilla JS", "BootStrap CSS"],
      thumbnail: smartGadget,
      liveLink: "https://smart-gadget-coral.vercel.app/",
    },
    {
      title: "Quiz For Dev",
      description:
        "An interactive quiz application designed for developers to test their knowledge on various programming topics are React, Javascript, CSS, Git. Built with ReactJS and styled using BootStrap CSS. making it an engaging tool for learning and self-assessment.",
      technologies: ["ReactJs", "BootStrap CSS"],
      thumbnail: quizImage,
      liveLink: "https://dev-quiz-ashy.vercel.app/",
    },
    {
      title: "Strong Gym",
      description:
        "A beautifully designed web application showcasing a gym's services and facilities. Created with React.js and styled using Tailwind CSS, this project highlights modern UI/UX design principles, featuring a visually appealing layout that enhances user engagement and showcases fitness offerings effectively.",
      technologies: ["ReactJs", "Tailwind CSS"],
      thumbnail: gym,
      liveLink: "https://gym-nine-indol.vercel.app/",
    },
    {
      title: "Tic-tac-toe",
      description:
        "A classic Tic-tac-toe game built with Vanilla JavaScript and styled using Tailwind CSS. This interactive game allows users to play against each other or the computer, with a clean and responsive design that adapts to different screen sizes.",
      technologies: ["ReactJs", "Tailwind Css"],
      thumbnail: ticTacToe,
      liveLink: "https://tic-tac-toe-bice-mu.vercel.app/",
    },
    {
      title: "Learner Grade",
      description:
        "A visually appealing design concept for a learner grades management system. Created with React.js and styled using Tailwind CSS, this project showcases a clean and modern interface for displaying grades and performance metrics, focusing on aesthetic presentation rather than functionality.",
      technologies: ["React.js", "Tailwind CSS"],
      thumbnail: learnerImage,
      liveLink: "https://learners-list.vercel.app/",
    },
    {
      title: "Task List",
      description:
        "A React.js application for task management, enhanced with Tailwind CSS styling. Provides a user-friendly interface for adding, viewing, and organizing tasks. Includes features for marking tasks as completed and tracking progress. Ideal for efficient task management and productivity.",
      technologies: ["React.js", "Tailwind CSS"],
      thumbnail: taskList,
      liveLink: "https://task-managers-pink.vercel.app/",
    },
    {
      title: "Bookshelf",
      description:
        "A React.js application for managing and displaying your book collection, styled with Tailwind CSS. Features a clean interface for adding, organizing, and viewing books. Ideal for book enthusiasts to track and showcase their library.",
      technologies: ["React.js", "Tailwind CSS"],
      thumbnail: Bookshelf,
      liveLink: "https://book-finder-react-brown.vercel.app/",
    },
    {
      title: "Movie Cine",
      description:
        "A React.js application for browsing and managing movie information, styled with Tailwind CSS. Offers a sleek interface for searching, viewing, and organizing movies. Perfect for movie enthusiasts to explore and manage their favorite films.",
      technologies: ["React.js", "Tailwind CSS"],
      thumbnail: movie,
      liveLink: "https://movie-cine-iota.vercel.app/",
    },
    {
      title: "NEWS Feed",
      description:
        "A React.js application for displaying and managing news articles, styled with Tailwind CSS. Provides a user-friendly interface for browsing and reading the latest news updates. Ideal for staying informed and up-to-date with current events.",
      technologies: ["React.js", "Tailwind CSS"],
      thumbnail: news,
      liveLink: "https://news-feeder-react-xi.vercel.app/",
    },
    {
      title: "FaceHook",
      description:
        "A React.js application mimicking a social media platform, styled with Tailwind CSS. Features a login page and a clean interface for managing and interacting with user profiles and posts. Ideal for social media enthusiasts looking to explore and simulate social interactions.",
      technologies: ["React.js", "Tailwind CSS", "CRUD"],
      thumbnail: fakebook,
      liveLink: "https://facehook-one.vercel.app/login",
    },
    {
      title: "react Blogifi",
      description:
        "A React.js application for creating and managing blog posts, styled with Tailwind CSS. Features an intuitive interface for writing, editing, and viewing blog entries. Perfect for bloggers looking to manage and showcase their content with a modern design.",
      technologies: ["React.js", "Tailwind CSS", "CRUD"],
      thumbnail: blogify,
      liveLink: "https://react-blogify-tawny-kappa.vercel.app/",
    },
  ],
  blogs: [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "John Doe",
      date: "2024-08-15",
      content:
        "React Hooks are a new addition in React 16.8 that lets you use state and other React features without writing a class.",
      tags: ["React", "Hooks", "JavaScript"],
      thumbnail: "https://example.com/path/to/thumbnail.jpg",
      category: "Programming",
      readTime: "5 min read",
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          date: "2024-08-16",
          content: "Great article! I learned a lot about hooks.",
        },
      ],
    },
    {
      id: 2,
      title: "Getting Started with TypeScript",
      author: "Alice Johnson",
      date: "2024-08-10",
      content:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      tags: ["TypeScript", "JavaScript", "Development"],
      thumbnail: "https://example.com/path/to/another-thumbnail.jpg",
      category: "Programming",
      readTime: "7 min read",
      comments: [
        {
          id: 2,
          author: "Bob Brown",
          date: "2024-08-11",
          content: "This is a very informative post. Thanks for sharing!",
        },
      ],
    },
  ],
};

export default data;
