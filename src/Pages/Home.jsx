import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import EmployeeDetails from '../Components/EmployeeDetails';
import EvaluationScore from '../Components/modals/EvaluationScore';
import KPIScore from '../Components/KPIScore';
import CompetenciesScore from '../Components/CompetenciesScore';
import EmployeeSelection from '../Components/EmployeeSelection';
import CategoryTabs from '../Components/CategoryTab';

const ExecutivePage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {/* <Header /> */}

        {/* Body Content */}
        <div className="flex flex-row p-4 gap-4">
          {/* Left Section */}
          <div className="flex flex-col flex-1 gap-4">
            <EmployeeSelection />
            <EmployeeDetails />
          </div>

          {/* Right Section */}
          <div className="flex flex-col flex-1 gap-4">
            <EvaluationScore />
            <CategoryTabs />
            <KPIScore />
            <CompetenciesScore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutivePage;
