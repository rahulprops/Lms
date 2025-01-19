import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Layout with Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
