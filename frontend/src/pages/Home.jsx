import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-gray-100 pt-24">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-800">
            Manage Your Tasks <br />
            <span className="text-blue-600">Efficiently & Securely</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
            TaskPro helps you organize your daily work with secure authentication,
            real-time updates, and a powerful dashboard built for productivity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-lg font-medium"
            >
              Get Started 🚀
            </Link>


          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="Task Management Illustration"
            className="w-full max-w-md md:max-w-lg drop-shadow-lg"
          />
        </div>

      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose TaskPro?
          </h2>

          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Designed with modern technologies to ensure performance, security,
            and scalability for your daily workflow.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                JWT-based login system with encrypted passwords ensuring top-level security.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Real-time Dashboard
              </h3>
              <p className="text-gray-600">
                Full CRUD functionality with advanced search and task management.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Scalable Architecture
              </h3>
              <p className="text-gray-600">
                Built using modern React architecture for production scaling.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>

  );
};

export default Home;
