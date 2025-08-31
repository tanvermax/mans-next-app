// app/components/Dashboard/Dashboard.jsx
"use client";

import React from "react";
import Dashitem from "./Dashitem";
import { signOut } from "next-auth/react";

const Dashboard = ({ children }) => {
  const handlesignsout = async () => {
    console.log("sign outed")
    await signOut()
  }
  return (
    <div className=" min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div>
          {/* You can add profile/avatar/logout here */}
          <button onClick={handlesignsout} className="px-4 py-2 bg-blue-600 text-white btn rounded hover:bg-blue-700 transition">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className=" w-64 bg-white shadow-lg p-4">
          <Dashitem />
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-100 rounded-l-lg">
          {children ? (
            children
          ) : (
            <div className="text-center text-gray-500 mt-20">
              Select an option from the sidebar
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
