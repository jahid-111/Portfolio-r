// import { useState } from "react";
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function BlogNavigation() {
//   const [blogCategory, setBlogCategory] = useState(false);
//   console.log(blogCategory);
//   return (
//     <div className=" w-full flex">
//       {blogCategory && (
//         <div className=" w-full flex flex-col">
//           {[...Array(5)].map((_, i) => (
//             <Link
//               key={i}
//               to={`/blogs/${i}`} // Dynamic link to the blog category page
//               className="hover:underline text-white border py-2"
//             >
//               <span> Blog API- {i}</span>
//             </Link>
//           ))}
//         </div>
//       )}
//       <div className=" absolute  right-0 top-16">
//         <button onClick={() => setBlogCategory((prev) => !prev)}>
//           {!blogCategory ? (
//             <FaChevronCircleRight className=" h-8 w-8" />
//           ) : (
//             <FaChevronCircleLeft className=" h-8 w-8" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SwipeNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX !== null) {
      const deltaX = endX - startX;

      // Swipe left to right to open
      if (deltaX > 50) {
        setIsOpen(true);
      }

      // Swipe right to left to close
      if (deltaX < -50) {
        setIsOpen(false);
      }
    }

    setStartX(null);
  };

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="relative bg-gray-100 h-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "pan-y" }} // Prevent conflicts with vertical scrolling
    >
      <div
        className={`fixed top-0 left-0 h-full bg-blue-600 text-white shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <div className="p-4">
          <button onClick={toggleNav} className="text-xl mb-4">
            <FaChevronCircleLeft />
          </button>
          {[...Array(5)].map((_, i) => (
            <Link
              key={i}
              to={`/blogs/${i}`}
              className="block hover:underline py-2"
            >
              Blog API-{i}
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="h-full flex items-center justify-center">
        {!isOpen && (
          <button
            onClick={toggleNav}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl"
          >
            <FaChevronCircleRight />
          </button>
        )}
        <h1 className="text-center text-gray-700 text-xl">
          Swipe or Click to Open the Navigation Menu
        </h1>
      </div>
    </div>
  );
};

export default SwipeNav;
