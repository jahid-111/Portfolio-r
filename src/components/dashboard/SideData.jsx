import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function SideData() {
  const route = useLocation();
  const currentPath = route.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <nav className="w-full p-4 text-white">
      {/* Home Button */}
      <div className="w-full mb-4">
        <Link
          to="/"
          className={`block bg-yellow-600 hover:bg-yellow-700 text-center py-3 text-gray-300 rounded font-semibold transition ${
            isActive("/") ? "bg-yellow-700" : ""
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <FaHome className="h-5 w-5" />
            <p>Go Home</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2">
        {[
          { path: "/admin/dashboard/blog", label: "Blog" },
          { path: "/admin/dashboard/expertise", label: "Expertise" },
          { path: "/admin/dashboard/skill", label: "Skill" },
          { path: "/admin/dashboard/project", label: "Project" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`block border-b border-gray-700 py-2 transition ${
                isActive(path)
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
