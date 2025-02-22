import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideData() {
  return (
    <nav className="w-full  p-4 text-white">
      {/* Home Button */}
      <div className="w-full mb-4">
        <Link
          to="/"
          className="block bg-yellow-600 hover:bg-yellow-700 text-center py-3 rounded text-white font-semibold transition"
        >
          <div className=" flex justify-center items-center gap-7">
            <FaHome className=" h-5 w-5" />
            <p>Go Home</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2">
        <li>
          <Link
            to="/admin/dashboard/blog"
            className="block border-b border-gray-700 py-2 text-white hover:text-yellow-400 transition"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/expertise"
            className="block border-b border-gray-700 py-2 text-white hover:text-yellow-400 transition"
          >
            Expertise
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/skill"
            className="block border-b border-gray-700 py-2 text-white hover:text-yellow-400 transition"
          >
            Skill
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/project"
            className="block border-b border-gray-700 py-2 text-white hover:text-yellow-400 transition"
          >
            Project
          </Link>
        </li>
      </ul>
    </nav>
  );
}
