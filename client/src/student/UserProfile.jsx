import React, { useState } from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  };

  const courses = []; // Mock data for courses enrolled by the user

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="py-16 px-4 bg-gray-100">
      {/* User Profile Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Profile Info */}
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">Role: Student</p>
          </div>

          <button
            onClick={openModal}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Enrolled Courses</h3>
          
          {courses.length === 0 ? (
            <div className="text-center text-gray-500">No courses enrolled</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Course Card (This would be dynamic in real use) */}
              {courses.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
                  <h4 className="text-xl font-semibold text-gray-800">{course.name}</h4>
                  <p className="text-gray-600">{course.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Continue Learning
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Edit Profile</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={user.name}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={user.email}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
