import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("auth-token", "authenticated");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-700 ">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 p-6 border rounded-lg shadow-lg w-96 bg-slate-300 text-gray-800"
      >
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Admin Login
        </h1>

        <div>
          <label
            htmlFor="email"
            className="block font-medium text-gray-600 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your admin email"
            className="border p-3 w-full rounded-lg focus:border-blue-500 focus:outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block font-medium text-gray-600 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border p-3 w-full rounded-lg placeholder-gray-400 focus:border-blue-500 focus:outline-none transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
