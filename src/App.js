// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ExecutivePage from "./Pages/ExecutivePage";
// import NonExecutivePage from "./Pages/NonExecutivePage";
// import EmployeeKPIEntry from "./Pages/EmployeeKPIEntry";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";
// import Unkown from "./Pages/UnknownPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/executive" element={<ExecutivePage />} />
//         <Route path="/non-executive" element={<NonExecutivePage />} />
//         <Route path="/kpi-entry" element={<EmployeeKPIEntry />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/un" element={<Unkown />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ExecutivePage from "./Pages/ExecutivePage";
import NonExecutivePage from "./Pages/NonExecutivePage";
import EmployeeKPIEntry from "./Pages/EmployeeKPIEntry";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Unkown from "./Pages/UnknownPage";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

// Create a wrapper component to handle location-based sidebar state
const AppContent = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  // ✅ Check if we're on the login page
  const isLoginPage = location.pathname === "/";

  // ✅ Open sidebar when logging in, but not after refresh
  useEffect(() => {
    if (!isLoginPage) {
      const wasSidebarOpen = localStorage.getItem("sidebarOpen");
      setIsSidebarOpen(wasSidebarOpen === "true");
    }
  }, [location.pathname, setIsSidebarOpen]);

  // ✅ Save sidebar state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebarOpen", isSidebarOpen);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div 
        className={`min-h-screen transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-64' : 'translate-x-0'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4">
          <Routes>
            <Route path="/executive" element={<ExecutivePage />} />
            <Route path="/non-executive" element={<NonExecutivePage />} />
            <Route path="/kpi-entry" element={<EmployeeKPIEntry />} />
            <Route path="/home" element={<Home />} />
            <Route path="/un" element={<Unkown />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <AppContent 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </BrowserRouter>
  );
}

export default App;