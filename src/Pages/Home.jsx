import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import EmployeeDetailsNonExc from '../Components/EmployeeDetailsNonExc';
import EvaluationScoreNonExec from '../Components/modals/EvaluationScoreNonExec';
import KPIScoreNonExc from '../Components/KPIScoreNonExc';
import CompetenciesScoreNonExc from '../Components/CompetenciesScoreNonExc';
import EmployeeSelectionNonExc from '../Components/EmployeeSelectionNonExc';
import CategoryTabsNonExc from '../Components/CategoryTabNonExc';

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
            <EmployeeSelectionNonExc />
            <EmployeeDetailsNonExc />
          </div>

          {/* Right Section */}
          <div className="flex flex-col flex-1 gap-4">
            <EvaluationScoreNonExec />
            <CategoryTabsNonExc />
            <KPIScoreNonExc />
            <CompetenciesScoreNonExc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutivePage;
