import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          TaskPro
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link
                to="/dashboard"
                className="hover:text-blue-600 transition"
              >
                Dashboard
          </Link>

          {!user && (
          
            <Link
              to="/login"
              className="  hover:text-blue-700 transition"
            >
              Login
            </Link>

            
          )}


          {user && (
            <>
              
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          <Link to="/" className="block">
            Home
          </Link>

          <Link to="/dashboard" className="block">
                Dashboard
              </Link>

          {!user && (
            <Link to="/login" className="block">
              Login
            </Link>
          )}

          

          {user && (
            <>
              
              <button
                onClick={handleLogout}
                className="block text-left w-full"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
