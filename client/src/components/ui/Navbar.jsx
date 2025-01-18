import React, { useState } from 'react';

const Navbar = () => {
  const user = true; // Mock user authentication state
  const [showUserDetails, setShowUserDetails] = useState(false);

  const toggleUserDetails = () => {
    setShowUserDetails((prev) => !prev); // Toggle user details visibility
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          LOGO
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* User Section */}
        <div className="relative">
          {user ? (
            <>
              {/* User Profile */}
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

              {/* User Details Dropdown */}
              {showUserDetails && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <div className="px-4 py-2 text-gray-800">User Name</div>
                  <div className="px-4 py-2 text-gray-800">user@example.com</div>
                  <hr className="my-1" />
                  <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Login and Signup Buttons */}
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Login
              </button>
              <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
                Signup
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
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
    </nav>
  );
};

export default Navbar;
