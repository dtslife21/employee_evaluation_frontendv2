import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import EXecutiveKPI from "../Components/EXecutiveKPI";

const EmployeeKPIEntry = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closePopup = () => {
    setIsModalOpen(false);
  };

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
          {/* <div className="flex flex-col flex-1 gap-4">
            {isModalOpen && <EXecutiveKPI closePopup={closePopup} />}
          </div> */}
          <div className="flex flex-col flex-1 gap-4">
            <EXecutiveKPI />
            {/* <EmployeeDetails /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeKPIEntry;
