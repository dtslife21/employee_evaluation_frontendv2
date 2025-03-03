import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import EmployeeDetailsNonExc from "../Components/EmployeeDetailsNonExc";
import EvaluationScoreNonExec from "../Components/modals/EvaluationScoreNonExec";
import KPIScoreNonExc from "../Components/KPIScoreNonExc";
import CompetenciesScoreNonExc from "../Components/CompetenciesScoreNonExc";
import EmployeeSelectionNonExc from "../Components/EmployeeSelectionNonExc";
import CategoryTabsNonExc from "../Components/CategoryTabNonExc";
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
              <EmployeeSelectionNonExc />
            </div>
          </div>
          {/* Right Section - Scrollable */}
          <div className="w-full md:w-1/2 h-full">
            <div className="h-full overflow-y-auto pr-4">
              <div className="flex flex-col gap-4">
                <EvaluationScoreNonExec />
                <CategoryTabsNonExc />
                <KPIScoreNonExc />
                <CompetenciesScoreNonExc />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExecutivePage;