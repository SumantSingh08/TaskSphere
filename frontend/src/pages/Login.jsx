import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/login", form);
    login(data);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-blue-50 to-gray-100 px-4">

  <div className="w-full max-w-md">

    {/* Card */}
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
    >
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Login to manage your tasks securely
        </p>
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-600 block mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-600 block mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />
      </div>

      {/* Login Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
        Login
      </button>

      {/* Footer */}
      <p className="text-sm text-center text-gray-500 mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          Register
        </Link>
      </p>
    </form>

  </div>
</div>

  );
};

export default Login;
