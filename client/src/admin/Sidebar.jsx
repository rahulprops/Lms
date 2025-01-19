import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <nav className="space-y-2">
            <Link
              to="/admin/addcourse"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Add Course
            </Link>
            <Link
              to="/admin/list-courses"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              List Courses
            </Link>
            <Link
              to="/admin/analytics"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Analytics
            </Link>
          </nav>
        </aside>
  )
}

export default Sidebar