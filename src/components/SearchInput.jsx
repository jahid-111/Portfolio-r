import { useState } from "react";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  function handleSearchFrom(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  console.log(search);
  return (
    <div className="my-14 relative w-full md:w-6/12">
      {/* Input Field */}
      <input
        className="h-10 w-full bg-[#464232] focus:border-white focus:outline-dotted rounded-md pl-4 pr-10 placeholder:text-white"
        type="text"
        placeholder="Search projects..."
        onChange={(e) => handleSearchFrom(e)}
      />

      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="#f7b100"
            d="m15.7 14.3l-4.2-4.2c-.2-.2-.5-.3-.8-.3c.8-1 1.3-2.4 1.3-3.8c0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.4 0 2.8-.5 3.8-1.4c0 .3 0 .6.3.8l4.2 4.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5"
          />
        </svg>
      </div>

      {/* Conditional Bottom Component */}
      {search && (
        <div className="absolute bg-[#464232] z-50 my-2 rounded-sm w-full">
          <div className=" flex flex-col gap-1 justify-center items-start w-full">
            {[...Array(3)].map((_, index) => (
              <Link
                key={index}
                className="border-b text-white border-gray-500 w-full p-3 rounded-sm hover:bg-[#39372d]"
              >
                <p>Project - {index + 1}</p>{" "}
              </Link>
            ))}
            <p className=" text-red-400">
              {" "}
              🥲 This Search is Not Implement Yet
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
