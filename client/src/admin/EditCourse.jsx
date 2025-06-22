import React, { useState } from "react";

const EditCourse = () => {
  const [isPublished, setIsPublished] = useState(true);

  const togglePublish = () => setIsPublished((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-100 flex  justify-center ">
      <div className="w-full  bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Edit Course</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={togglePublish}
              className={`px-4 py-2 text-sm font-medium rounded ${
                isPublished ? "bg-green-500 text-white" : "bg-gray-400 text-gray-100"
              }`}
            >
              {isPublished ? "Published" : "Publish"}
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded hover:bg-red-600">
              Remove Course
            </button>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Title</label>
              <input
                type="text"
                placeholder="Course Title"
                className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Subtitle</label>
              <input
                type="text"
                placeholder="Course Subtitle"
                className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              placeholder="Brief description of the course"
              rows="4"
              className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <select
              className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="technology">Technology</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          {/* Course Level */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Course Level</label>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="level" value="beginner" />
                Beginner
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="level" value="intermediate" />
                Intermediate
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="level" value="advanced" />
                Advanced
              </label>
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Price (USD)</label>
            <input
              type="number"
              placeholder="Enter price"
              className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Thumbnail Image</label>
            <input
              type="file"
              accept="image/*"
              className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-100 hover:file:bg-gray-200"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              className="px-6 py-2 text-sm font-medium bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
