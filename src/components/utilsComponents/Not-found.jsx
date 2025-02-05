import { Link, useLocation } from "react-router-dom";
import Brand from "../../assets/svg/brand.svg";

const NotFound = () => {
  const { pathname } = useLocation();
  const lastSegment = pathname.split("/").pop();

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-transparent px-4">
      <div className="my-10">
        <img
          src={Brand}
          alt="Brand Logo"
          height={200}
          width={200}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-200 mb-4 leading-tight">
        Sorry, the page{" "}
        <span className="text-orange-500 font-medium">“{lastSegment}”</span>{" "}
        isn’t available.
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        Sorry, the page you were trying to visit doesn’t exist or has been
        removed.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
