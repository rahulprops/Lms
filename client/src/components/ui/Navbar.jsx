import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../featuers/api/authApi";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = true; // Mock user
  // authentication state
  const { user } = useSelector((store) => store.auth);
  // console.log(user.user.role)
  const navigate = useNavigate();
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [
    logout,
    {
      isLoading: logoutLoading,
      isSuccess: logoutSuccess,
      isError: logoutIsError,
      error: logoutError,
    },
  ] = useLazyLogoutQuery();

  const toggleUserDetails = () => {
    setShowUserDetails((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      setShowUserDetails(false); // Close user dropdown on logout
    } catch (e) {
      console.error("Logout Error:", e);
    }
  };

  useEffect(() => {
    if (logoutSuccess) {
      alert("Logout successful!");
      // Perform any additional actions here, like redirecting to the login page.
      navigate("login");
    }

    if (logoutIsError) {
      const errorMessage =
        logoutError?.data?.message ||
        logoutError?.message ||
        "Logout failed. Please try again.";
      alert(errorMessage);
    }
  }, [logoutSuccess, logoutIsError, logoutError]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">LOGO</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* User Section */}
        <div className="relative">
          {user ? (
            <>
              <button
                onClick={toggleUserDetails}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border"
                />
                <span className="hidden md:block text-gray-700 font-medium">
                  Welcome, User
                </span>
              </button>
              {showUserDetails && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <Link
                    to="/user-profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/mylearning"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    My Learning
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={logoutHandler}
                    disabled={logoutLoading}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    {logoutLoading ? "Logging Out..." : "Logout"}
                  </button>
                  {user.user.role === "instructor" && (
                    <>
                      <Link to="/admin" className="block w-full">
                        <button className="flex items-center w-full px-4 py-3 text-left text-white bg-red-500 rounded-md shadow hover:bg-red-600 hover:shadow-md transition duration-300">
                          <span className="flex items-center justify-center w-6 h-6 mr-3 bg-red-700 text-white font-bold rounded-full">
                            D
                          </span>
                          Dashboard
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Login
              </button>
              <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
                Signup
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
