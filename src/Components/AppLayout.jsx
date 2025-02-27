import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    console.log("Sidebar toggled!"); // Debug
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex">
      {/* Render Sidebar based on isSidebarVisible */}
      {isSidebarVisible && <Sidebar />}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarVisible ? "ml-0" : "ml-[-275px]"
        }`}
      >
        {/* Pass toggleSidebar to Header */}
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-4">
          <h1>Main Content Goes Here</h1>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
