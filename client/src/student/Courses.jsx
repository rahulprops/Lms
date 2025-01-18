import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const isLoading = false; // Mock loading state

  return (
    <div className="py-16">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-blue-500 mb-8">
        Our Courses
      </div>

      {/* Loading or Courses Grid */}
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {/* Example Course Cards */}
          <div >
            <CourseCard/>
          </div>
          <div >
            <CourseCard/>
          </div>
          <div >
            <CourseCard/>
          </div>
          <div >
            <CourseCard/>
          </div>
          <div >
            <CourseCard/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
