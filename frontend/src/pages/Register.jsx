import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/register", form);
    login(data);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 px-4">

  <div className="w-full max-w-md">

    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
    >
      
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Create Account 🚀
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Join TaskPro and start managing your work efficiently
        </p>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-600 block mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-600 block mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-600 block mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-200"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />
      </div>

      {/* Button */}
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">
        Register
      </button>

      {/* Footer */}
      <p className="text-sm text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-600 font-medium hover:underline cursor-pointer"
        >
          Login
        </Link>
      </p>

    </form>

  </div>
</div>

  );
};

export default Register;
