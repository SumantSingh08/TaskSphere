import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 pt-20">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Manage Your Tasks <br />
            <span className="text-blue-600">Efficiently & Securely</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            TaskPro helps you organize your daily work with secure authentication,
            real-time updates, and a powerful dashboard.
          </p>

          <div className="flex space-x-4">
            <Link
              to="/dashboard"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

          
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="hero"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Secure Authentication
            </h3>
            <p className="text-gray-600">
              JWT-based login system with encrypted passwords for maximum security.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Real-time Dashboard
            </h3>
            <p className="text-gray-600">
              Manage tasks with full CRUD functionality and search filtering.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              Scalable Architecture
            </h3>
            <p className="text-gray-600">
              Built with modern React & Node.js for production-level scaling.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
