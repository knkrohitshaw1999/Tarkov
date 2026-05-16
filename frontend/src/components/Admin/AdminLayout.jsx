import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle Button */}
      <div className=" flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium"> Admin Dashboard</h1>
      </div>
      {/* OVERLAY For Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
       {/*  Sidebar */}
      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative z-30 transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } md:translate-x-0 transition-transform duration-300 md:static md:block`}>
        <AdminSidebar/>
       </div>
       {/* Main Content Area */}
       <div className="flex-grow p-4 md:p-6 overflow-auto">
        <Outlet/>
       </div>
    </div>
   
  );
};

export default AdminLayout;
