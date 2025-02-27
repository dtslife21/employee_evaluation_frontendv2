import React, { useState } from 'react';
import KPIModal from './modals/KPIModalNonExec';
import CompetenciesModal from './modals/CompetenciesModalNonExec';
import CareerDevelopmentModal from './modals/CareerDevelopmentModalNonExec';
import HRAspectsModal from './modals/HRAspectsModalNonExec';

const CategoryTab = () => {
  const [activePopup, setActivePopup] = useState(null);

  const closePopup = () => setActivePopup(null);

  return (
    <div>
      {/* Button Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-orange-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('KPI')}
        >
          KPI
        </button>
        <button
          className="bg-green-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('Competencies')}
        >
          Competencies
        </button>
        <button
          className="bg-blue-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('CareerDevelopment')}
        >
          Career Development
        </button>
        <button
          className="bg-pink-300 px-4 py-2 rounded"
          onClick={() => setActivePopup('HRAspects')}
        >
          HR Aspects
        </button>
        
      </div>

      {/* Render Modals */}
      {activePopup === 'KPI' && <KPIModal closePopup={closePopup} />}
      {activePopup === 'Competencies' && <CompetenciesModal closePopup={closePopup} />}
      {activePopup === 'CareerDevelopment' && <CareerDevelopmentModal closePopup={closePopup} />}
      {activePopup === 'HRAspects' && <HRAspectsModal closePopup={closePopup} />}
    </div>
  );
};

export default CategoryTab;
