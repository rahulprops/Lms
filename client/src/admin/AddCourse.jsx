import React, { useEffect, useState } from 'react';
import { useCreateCourseMutation } from '../featuers/api/courseApi';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const navigate=useNavigate()
  const [categories] = useState([
    'Web Development',
    'Data Science',
    'AI & Machine Learning',
    'Design',
    'Marketing',
  ]);

  const [createCourse, { data, isLoading, error, isSuccess }] = useCreateCourseMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!courseTitle || !courseCategory) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await createCourse({ coursetitle: courseTitle, category: courseCategory }).unwrap();
      alert('Course added successfully!');
      setCourseTitle('');
      setCourseCategory('');
    } catch (err) {
      console.error('Error adding course:', err);
    }
  };
  useEffect(()=>{
    if(isSuccess){
        navigate("/admin/list-course")
    }
  },[isSuccess])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Course</h2>

        {/* Form */}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
            >
              {isLoading ? 'Adding Course...' : 'Add Course'}
            </button>
          </div>
        </form>

        {/* Success/Error Messages */}
        {isSuccess && (
          <p className="mt-4 text-green-500 font-medium">
            Course "{data.title}" added successfully!
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-500 font-medium">
            Failed to add course: {error.data?.message || error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddCourse;
