







// import React, { useEffect, useState } from "react";
// import Sidebar from "../Components/Sidebar";
// import Header from "../Components/Header";
// import EmployeeDetails from "../Components/EmployeeDetails";
// import EvaluationScore from "../Components/modals/EvaluationScore";
// import KPIScore from "../Components/KPIScore";
// import CompetenciesScore from "../Components/CompetenciesScore";
// import EmployeeSelection from "../Components/EmployeeSelection";
// import CategoryTabs from "../Components/CategoryTab";

// const ExecutivePage = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Fetching data...");
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="h-screen flex">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Content Container */}
//         <div className="flex flex-row p-1 gap-4 h-full">
//           {/* Left Section - Fixed */}
//           <div className="flex-1 h-10">
//             <div className="flex flex-col gap-4">
//               <EmployeeSelection />
//             </div>
//           </div>

//           {/* Right Section - Scrollable */}
//           <div className="flex-1 h-full">
//             <div className="h-full overflow-y-auto pr-4">
//               <div className="flex flex-col gap-4">
//                 <EvaluationScore />
//                 <CategoryTabs />
//                 <KPIScore />
//                 <CompetenciesScore />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExecutivePage;






import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import EmployeeDetails from "../Components/EmployeeDetails";
import EvaluationScore from "../Components/modals/EvaluationScore";
import KPIScore from "../Components/KPIScore";
import CompetenciesScore from "../Components/CompetenciesScore";
import EmployeeSelection from "../Components/EmployeeSelection";
import CategoryTabs from "../Components/CategoryTab";
const ExecutivePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row p-1 gap-4 h-full">
          {/* Left Section - Fixed */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-4">
              <EmployeeSelection />
            </div>
          </div>
          {/* Right Section - Scrollable */}
          <div className="w-full md:w-1/2 h-full">
            <div className="h-full overflow-y-auto pr-4">
              <div className="flex flex-col gap-4">
                <EvaluationScore />
                <CategoryTabs />
                <KPIScore />
                <CompetenciesScore />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExecutivePage;