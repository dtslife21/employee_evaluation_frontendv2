// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Sidebar = ({ isOpen, onClose }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [employeeMenuOpen, setEmployeeMenuOpen] = useState(false);
//   const [kpiMenuOpen, setKpiMenuOpen] = useState(false);

//   useEffect(() => {
//     if (location.pathname.includes('executive') || location.pathname.includes('non-executive')) {
//       setEmployeeMenuOpen(true);
//     }
//   }, [location.pathname]);

//   const handleNavigation = (path) => {
//     navigate(path);
//     onClose();
//   };

//   return (
//     <>
//       {/* Overlay to capture clicks outside sidebar */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-blue-900 transform transition-transform duration-300 ease-in-out z-30 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <h2 className="text-white text-xl font-bold p-5">EVALUATION SYSTEMS</h2>

//         <nav className="px-4 py-2">
//           {/* Employee Evaluation Section */}
//           <div className="mb-4">
//             <button
//               onClick={() => setEmployeeMenuOpen(!employeeMenuOpen)}
//               className="flex items-center w-full text-white hover:text-yellow-400 transition-colors py-2"
//             >
//               <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//               </svg>
//               <span className="text-lg">Employee Evaluation</span>
//               <svg
//                 className={`ml-auto w-5 h-5 transition-transform duration-200 ${employeeMenuOpen ? 'rotate-180' : ''}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {employeeMenuOpen && (
//               <div className="ml-8 mt-2 space-y-2">
//                 <button
//                   onClick={() => handleNavigation('/executive')}
//                   className="w-full text-left text-white hover:text-yellow-400 transition-colors py-1"
//                 >
//                   Executive
//                 </button>
//                 <button
//                   onClick={() => handleNavigation('/non-executive')}
//                   className="w-full text-left text-white hover:text-yellow-400 transition-colors py-1"
//                 >
//                   Non-Executive
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* KPI Entry Section */}
//           <div className="mb-4">
//             <button
//               onClick={() => setKpiMenuOpen(!kpiMenuOpen)}
//               className="flex items-center w-full text-white hover:text-yellow-400 transition-colors py-2"
//             >
//               <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//               </svg>
//               <span className="text-lg">KPI Entry</span>
//               <svg
//                 className={`ml-auto w-5 h-5 transition-transform duration-200 ${kpiMenuOpen ? 'rotate-180' : ''}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {kpiMenuOpen && (
//               <div className="ml-8 mt-2">
//                 <button
//                   onClick={() => handleNavigation('/kpi-entry')}
//                   className="w-full text-left text-white hover:text-yellow-400 transition-colors py-1"
//                 >
//                   KPI
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Logout Button */}
// <div className="absolute bottom-8 left-0 right-0 px-4">
//   <button
//     onClick={() => {
//       localStorage.clear(); // Clear all local storage
//       handleNavigation('/'); // Redirect to the homepage or login
//     }}
//     className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors flex items-center justify-center gap-2"
//   >
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//     </svg>
//     Logout
//   </button>
// </div>

//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;



import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      setOpenSubmenu(null); // Close the open submenu after navigation
      onClose(); // Close the sidebar
    }, 0);
  };
  

  const handleLogout = () => {
    Swal.fire({
      title: "Logout Confirmation",
      text: "Are you sure you want to sign out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3B82F6",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
        Swal.fire("Logged Out", "Your session has ended securely", "success");
      }
    });
  };

  const menuItems = [
    {
      title: "Employee Management",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      subItems: [
        { name: "Executive Emplpoyee", path: "/executive", },
        { name: "Non-executive Emplpoyee", path: "/non-executive",  },
      ],
    },
    {
      title: "Performance Metrics",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      subItems: [
        { name: "KPI", path: "/kpi-entry", icon: "📊" },
      ],
    },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/25 backdrop-blur-sm z-40 
          transition-opacity duration-300 ease-out 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-gray-100 shadow-xl
          transform transition-all duration-300 ease-out z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          border-r border-gray-700`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50">
          <h2 className="text-xl font-bold tracking-tight">
            <span className="text-blue-400">Evaluation</span>System
          </h2>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-2 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title} className="group relative">
              <button
                onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                  hover:bg-gray-700/50 transition-colors"
                aria-expanded={openSubmenu === item.title}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <svg 
                  className={`w-4 h-4 transform transition-transform ${
                    openSubmenu === item.title ? "rotate-180" : ""
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSubmenu === item.title && (
                <div className="ml-8 mt-1 space-y-1 overflow-hidden animate-slideDown">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => handleNavigation(subItem.path)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg
                        transition-colors ${
                          selectedTab === subItem.path 
                            ? "bg-blue-900/30 text-blue-400"
                            : "hover:bg-gray-700/30 text-gray-300"
                        }`}
                    >
                      <span>{subItem.icon}</span>
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900/50 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium
              bg-gray-800 hover:bg-gray-700 text-red-400 rounded-lg transition-all
              hover:shadow-md hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

