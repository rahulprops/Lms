import React, { useState } from 'react';

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [categories] = useState([
    'Web Development',
    'Data Science',
    'AI & Machine Learning',
    'Design',
    'Marketing',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseTitle && courseCategory) {
      alert(`Course Added: ${courseTitle} - ${courseCategory}`);
      // Add logic to submit the course data to your backend or state management
      setCourseTitle('');
      setCourseCategory('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Course</h2>
        <form onSubmit={handleSubmit}>
          {/* Course Title */}
          <div className="mb-4">
            <label
              htmlFor="courseTitle"
              className="block text-gray-700 font-medium mb-2"
            >
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              placeholder="Enter course title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Course Category */}
          <div className="mb-6">
            <label
              htmlFor="courseCategory"
              className="block text-gray-700 font-medium mb-2"
            >
              Course Category
            </label>
            <select
              id="courseCategory"
              value={courseCategory}
              onChange={(e) => setCourseCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
