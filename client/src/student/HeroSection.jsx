import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center  min-h-80 bg-blue-500 text-white">
      <div className="text-center space-y-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold">
          Find Your Next Adventure
        </h1>
        <p className="text-lg">
          Explore the world with just a few clicks.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search destinations, activities, or guides"
            className="w-80 px-4 py-2 rounded-l-md focus:outline-none text-gray-700"
          />
          <button className="px-4 py-2 bg-blue-700 text-white rounded-r-md hover:bg-blue-800 focus:outline-none">
            Search
          </button>
        </div>

        {/* Explore Button */}
        <button className="px-6 py-3 bg-white text-blue-500 font-medium rounded-md hover:bg-gray-100 focus:outline-none">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
