import React from 'react';
import CourseCard from '../components/CourseCard';

const MyLearning = () => {
  const isLoading = false; // Mock loading state
  const myLearningCourses = [1,2]; // Mock data for the courses

  return (
    <div className="py-16 px-4">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-blue-500 mb-8">
        My Learning
      </div>

      {/* Loading or Courses List */}
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : myLearningCourses.length === 0 ? (
        <div className="text-center text-gray-500">No courses found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Course Card (This would be dynamic in real use) */}
          {myLearningCourses.map((course, index) => (
            <div key={index}>
             <CourseCard/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLearning;
