import React, { useState } from 'react';
import KPIModalNonExec from './modals/KPIModalNonExec';
import CompetenciesModalNonExec from './modals/CompetenciesModalNonExec';
import CareerDevelopmentModalNonExec from './modals/CareerDevelopmentModalNonExec';
import HRAspectsModalNonExec from './modals/HRAspectsModalNonExec';

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
      {activePopup === 'KPI' && <KPIModalNonExec closePopup={closePopup} />}
      {activePopup === 'Competencies' && <CompetenciesModalNonExec closePopup={closePopup} />}
      {activePopup === 'CareerDevelopment' && <CareerDevelopmentModalNonExec closePopup={closePopup} />}
      {activePopup === 'HRAspects' && <HRAspectsModalNonExec closePopup={closePopup} />}
    </div>
  );
};

export default CategoryTab;
