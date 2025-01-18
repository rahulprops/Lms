import React from 'react';

const CourseCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg border shadow-lg">
      {/* Course Image */}
      <img
        src="https://via.placeholder.com/300x200"
        alt="Course Image"
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
        {/* Course Title */}
        <h3 className="text-xl font-semibold text-gray-800">Course Title</h3>
        
        {/* Instructor Section */}
        <div className="flex items-center space-x-3 mt-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Instructor Photo"
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="text-sm text-gray-600">Instructor Name</p>
          </div>
        </div>

        {/* Course Price */}
        <div className="mt-4 text-xl font-semibold text-blue-600">
          $199.99
        </div>

        {/* Enroll Button */}
        <button className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
