import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCourseQuery } from '../featuers/api/courseApi';

const CourseList = () => {
  const { data: courses, isLoading, error } = useGetCourseQuery();
   console.log(courses)
  if (isLoading) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-lg">Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Failed to fetch courses. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Course List</h2>

        {courses?.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b text-left px-4 py-2 text-gray-700">#</th>
                <th className="border-b text-left px-4 py-2 text-gray-700">Course Title</th>
                <th className="border-b text-left px-4 py-2 text-gray-700">Price ($)</th>
                <th className="border-b text-left px-4 py-2 text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course._id} className="hover:bg-gray-50">
                  <td className="border-b px-4 py-2 text-gray-800">{index + 1}</td>
                  <td className="border-b px-4 py-2 text-gray-800">{course.courseTitle}</td>
                  <td className="border-b px-4 py-2 text-gray-800">${course.price || NaN} </td>
                  <td className="border-b px-4 py-2">
                    <Link to={`/admin/edit-course/${course._id}`}>
                      <button  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
