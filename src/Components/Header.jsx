// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/images/cdplc_logo.png";
// import Swal from "sweetalert2";
// import { useAuth } from "../../src/Context/AuthContext";
// const Header = ({ toggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const { request_token } = useAuth();
//   const [userName, setUserName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [greeting, setGreeting] = useState("");
//   useEffect(() => {
//     const fetchUserName = async () => {
//       try {
//         const response = await fetch(
//           "https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Login/GetUserDetails",
//           {
//             headers: {
//               request_token,
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.StatusCode === 200 && data.ResultSet) {
//           setUserName(data.ResultSet.ReportName);
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserName();
//   }, [request_token]); // Added request_token as a dependency
//   useEffect(() => {
//     const getGreeting = () => {
//       const hour = new Date().getHours();
//       if (hour >= 5 && hour < 12) {
//         return "Good Morning";
//       } else if (hour >= 12 && hour < 18) {
//         return "Good Afternoon";
//       } else if (hour >= 18 && hour < 22) {
//         return "Good Evening";
//       } else {
//         return "Good Night";
//       }
//     };
//     setGreeting(getGreeting());
//   }, []);
//   const handleLogout = () => {
//     navigate("/");
//   };
//   const handleLogoutConfirmation = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will be logged out!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085D6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, logout!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.clear();
//         handleLogout("/");
//         Swal.fire(
//           "Logged out!",
//           "You have been successfully logged out.",
//           "success"
//         );
//       }
//     });
//   };
//   return (
//     <div className={`flex w-full px-4 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
//       <header
//         className="flex items-center justify-between p-3 bg-white shadow-md border-b rounded-3xl w-full max-w-10xl"
//         style={{ backgroundColor: "#D2F5FA" }}
//       >
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={toggleSidebar}
//             className="text-blue-600 hover:text-blue-800 focus:outline-none border-2 border-blue-600 p-2 rounded-lg"
//             aria-label="Toggle Sidebar"
//           >
//             <FontAwesomeIcon icon={faBars} className="text-2xl" />
//           </button>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <div className="text-lg font-bold">Hello, {greeting} {userName}</div>
//           )}
//         </div>
//         <div className="flex items-center space-x-6">
//           <img src={logo} alt="CDPLC Logo" className="h-10" />
//           <button
//             onClick={handleLogoutConfirmation}
//             className="text-red-600 hover:text-red-800 focus:outline-none flex items-center"
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl mr-1" />
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };
// export default Header;

// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/images/cdplc_logo.png";
// import Swal from "sweetalert2";
// import { useAuth } from "../../src/Context/AuthContext";
// const Header = ({ toggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const { request_token } = useAuth();
//   const [userName, setUserName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [greeting, setGreeting] = useState("");
//   useEffect(() => {
//     const fetchUserName = async () => {
//       try {
//         const response = await fetch(
//           "https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Login/GetUserDetails",
//           {
//             headers: {
//               request_token,
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.StatusCode === 200 && data.ResultSet) {
//           setUserName(data.ResultSet.ReportName);
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserName();
//   }, [request_token]); // Added request_token as a dependency
//   useEffect(() => {
//     const getGreeting = () => {
//       const hour = new Date().getHours();
//       if (hour >= 5 && hour < 12) {
//         return "Good Morning";
//       } else if (hour >= 12 && hour < 18) {
//         return "Good Afternoon";
//       } else if (hour >= 18 && hour < 22) {
//         return "Good Evening";
//       } else {
//         return "Good Night";
//       }
//     };
//     setGreeting(getGreeting());
//   }, []);
//   const handleLogout = () => {
//     navigate("/");
//   };
//   const handleLogoutConfirmation = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will be logged out!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085D6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, logout!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.clear();
//         handleLogout("/");
//         Swal.fire(
//           "Logged out!",
//           "You have been successfully logged out.",
//           "success"
//         );
//       }
//     });
//   };
//   return (
//     // <div className={`flex w-full px-4 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
//     //   <header
//     //     className="flex items-center justify-between p-3 bg-white shadow-md border-b rounded-3xl w-full max-w-10xl"
//     //     style={{ backgroundColor: "#D2F5FA" }}
//     //   >
//     //     <div className="flex items-center space-x-4">
//     //       <button
//     //         onClick={toggleSidebar}
//     //         className="text-blue-600 hover:text-blue-800 focus:outline-none border-2 border-blue-600 p-2 rounded-lg"
//     //         aria-label="Toggle Sidebar"
//     //       >
//     //         <FontAwesomeIcon icon={faBars} className="text-2xl" />
//     //       </button>
//     //       {loading ? (
//     //         <div>Loading...</div>
//     //       ) : (
//     //         <div className="text-lg font-bold">Hello, {greeting} {userName}</div>
//     //       )}
//     //     </div>
//     //     <div className="flex items-center space-x-6">
//     //       <img src={logo} alt="CDPLC Logo" className="h-10" />
//     //       <button
//     //         onClick={handleLogoutConfirmation}
//     //         className="text-red-600 hover:text-red-800 focus:outline-none flex items-center"
//     //       >
//     //         <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl mr-1" />
//     //       </button>
//     //     </div>
//     //   </header>
//     // </div>
//     <div
//       className={`flex w-full px-4 transition-all duration-300 ${
//         isSidebarOpen ? "lg:ml-64 ml-0" : "ml-0"
//       }`}
//     >
//       <header
//         className="flex items-center justify-between p-3 bg-white shadow-md border-b rounded-3xl w-full max-w-10xl"
//         style={{ backgroundColor: "#D2F5FA" }}
//       >
//         <div className="flex items-center space-x-2 sm:space-x-4">
//           <button
//             onClick={toggleSidebar}
//             className="text-blue-600 hover:text-blue-800 focus:outline-none border-2 border-blue-600 p-2 rounded-lg sm:p-3"
//             aria-label="Toggle Sidebar"
//           >
//             <FontAwesomeIcon icon={faBars} className="text-lg sm:text-2xl" />
//           </button>
//           {loading ? (
//             <div className="text-sm sm:text-lg">Loading...</div>
//           ) : (
//             <div className="text-sm sm:text-lg font-bold text-gray-800">
//               Hello, {greeting} {userName}
//             </div>
//           )}
//         </div>
//         <div className="flex items-center space-x-4 sm:space-x-6">
//           <img src={logo} alt="CDPLC Logo" className="h-8 sm:h-10 w-auto" />
//           {/* <button
//         onClick={handleLogoutConfirmation}
//         className="text-red-600 hover:text-red-800 focus:outline-none flex items-center"
//       >
//         <FontAwesomeIcon icon={faSignOutAlt} className="text-lg sm:text-2xl mr-1" />
//       </button> */}
//           <button
//             onClick={handleLogoutConfirmation}
//             className="text-red-600 hover:text-red-800 focus:outline-none flex items-center hidden md:flex"
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl mr-1" />
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };
// export default Header;



// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/images/cdplc_logo.png";
// import Swal from "sweetalert2";
// import { useAuth } from "../../src/Context/AuthContext";
// const Header = ({ toggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const { request_token } = useAuth();
//   const [userName, setUserName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [greeting, setGreeting] = useState("");
//   useEffect(() => {
//     const fetchUserName = async () => {
//       try {
//         // const response = await fetch(
//         //   "https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Login/GetUserDetails",
//         //   {
//         //     headers: {
//         //       request_token,
//         //     },
//         //   }
//         // );
//         const response = await fetch(
//           "http://localhost:57587/Login/GetUserDetails",
//           {
//             headers: {
//               request_token,
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.StatusCode === 200 && data.ResultSet) {
//           setUserName(data.ResultSet.ReportName);
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserName();
//   }, [request_token]); // Added request_token as a dependency
//   useEffect(() => {
//     const getGreeting = () => {
//       const hour = new Date().getHours();
//       if (hour >= 5 && hour < 12) {
//         return "Good Morning";
//       } else if (hour >= 12 && hour < 18) {
//         return "Good Afternoon";
//       } else if (hour >= 18 && hour < 22) {
//         return "Good Evening";
//       } else {
//         return "Good Night";
//       }
//     };
//     setGreeting(getGreeting());
//   }, []);
//   const handleLogout = () => {
//     navigate("/");
//   };
//   const handleLogoutConfirmation = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will be logged out!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085D6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, logout!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.clear();
//         handleLogout("/");
//         Swal.fire(
//           "Logged out!",
//           "You have been successfully logged out.",
//           "success"
//         );
//       }
//     });
//   };
//   return (
//     <div
//       className={`flex w-full px-4 transition-all duration-300 ${
//         isSidebarOpen ? "lg:ml-64 ml-0" : "ml-0"
//       }`}
//     >
//       <header
//         className="flex items-center justify-between p-3 bg-white shadow-md border-b rounded-3xl w-full max-w-10xl"
//         style={{ backgroundColor: "#D2F5FA" }}
//       >
//         <div className="flex items-center space-x-2 sm:space-x-4">
//           <button
//             onClick={toggleSidebar}
//             className="text-blue-600 hover:text-blue-800 focus:outline-none border-2 border-blue-600 p-2 rounded-lg sm:p-3"
//             aria-label="Toggle Sidebar"
//           >
//             <FontAwesomeIcon icon={faBars} className="text-lg sm:text-2xl" />
//           </button>
//           {loading ? (
//             <div className="text-sm sm:text-lg">Loading...</div>
//           ) : (
//             <div className="text-sm sm:text-lg font-bold text-gray-800">
//               Hello, {greeting} {userName}
//             </div>
//           )}
//         </div>
//         <div className="flex items-center space-x-4 sm:space-x-6">
//           <img src={logo} alt="CDPLC Logo" className="h-8 sm:h-10 w-auto" />
//           <button
//             onClick={handleLogoutConfirmation}
//             className="text-red-600 hover:text-red-800 focus:outline-none flex items-center hidden md:flex"
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl mr-1" />
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };
// export default Header;




import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/cdplc_logo.png";
import Swal from "sweetalert2";
import { useAuth } from "../../src/Context/AuthContext";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const { request_token } = useAuth();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // const response = await fetch(
        //   "https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Login/GetUserDetails",
        //   {
        //     headers: {
        //       request_token,
        //     },
        //   }
        // );
        const response = await fetch(
          "http://localhost:57587/Login/GetUserDetails",
          {
            headers: {
              request_token,
            },
          }
        );
        const data = await response.json();
        if (data.StatusCode === 200 && data.ResultSet) {
          setUserName(data.ResultSet.ReportName);
          const jobLevel = data.ResultSet.JobLevel;
          localStorage.setItem("JobLevel", jobLevel);

          // Determine user role based on JobLevel
          if (["03", "04", "04A", "04B"].includes(jobLevel)) {
            setUserRole("Department Head");
          } else if (["02A", "02"].includes(jobLevel)) {
            setUserRole("Division Head");
          } else if (["01A", "01"].includes(jobLevel)) {
            setUserRole("MD / Chairman");
          } else {
            setUserRole("Unknown Role");
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserName();
  }, [request_token]); // Added request_token as a dependency

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        return "Good Morning";
      } else if (hour >= 12 && hour < 18) {
        return "Good Afternoon";
      } else if (hour >= 18 && hour < 22) {
        return "Good Evening";
      } else {
        return "Good Night";
      }
    };
    setGreeting(getGreeting());
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const handleLogoutConfirmation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        handleLogout("/");
        Swal.fire(
          "Logged out!",
          "You have been successfully logged out.",
          "success"
        );
      }
    });
  };

  return (
    <div
      className={`flex w-full px-4 transition-all duration-300 ${
        isSidebarOpen ? "lg:ml-64 ml-0" : "ml-0"
      }`}
    >
      <header
        className="flex items-center justify-between p-3 bg-white shadow-md border-b rounded-3xl w-full max-w-10xl"
        style={{ backgroundColor: "#D2F5FA" }}
      >
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-blue-600 hover:text-blue-800 focus:outline-none border-2 border-blue-600 p-2 rounded-lg sm:p-3"
            aria-label="Toggle Sidebar"
          >
            <FontAwesomeIcon icon={faBars} className="text-lg sm:text-2xl" />
          </button>
          {loading ? (
            <div className="text-sm sm:text-lg">Loading...</div>
          ) : (
            <div className="text-sm sm:text-lg font-bold text-gray-800">
              {/* Hello, {greeting} {userName} ({userRole}) */}
              Hello, {greeting} {userName}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <img src={logo} alt="CDPLC Logo" className="h-8 sm:h-10 w-auto" />
          <button
            onClick={handleLogoutConfirmation}
            className="text-red-600 hover:text-red-800 focus:outline-none flex items-center hidden md:flex"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl mr-1" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;