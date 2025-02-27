// import React, { useState } from 'react';
// import KPIModal from './modals/KPIModal';
// import CompetenciesModal from './modals/CompetenciesModal';
// import CareerDevelopmentModal from './modals/CareerDevelopmentModal';
// import HRAspectsModal from './modals/HRAspectsModal';
// import RecommendationModal from './modals/RecommendationModal'; 
// import TrainingModal from './modals/TrainingModal';

// const CategoryTab = () => {
//   const [activePopup, setActivePopup] = useState(null);

//   const closePopup = () => setActivePopup(null);

//   const categories = [
//     { id: 'KPI', label: 'KPI', color: 'bg-orange-300' },
//     { id: 'Competencies', label: 'Competencies', color: 'bg-green-300' },
//     { id: 'CareerDevelopment', label: 'Career Development', color: 'bg-blue-300' },
//     { id: 'HRAspects', label: 'HR Aspects', color: 'bg-pink-300' },
//     { id: 'Recommendation', label: 'Recommendation', color: 'bg-purple-400' },
//     { id: 'Training', label: 'TNI', color: 'bg-teal-400' },
//   ];

//   const modalComponents = {
//     KPI: KPIModal,
//     Competencies: CompetenciesModal,
//     CareerDevelopment: CareerDevelopmentModal,
//     HRAspects: HRAspectsModal,
//     Recommendation: RecommendationModal,
//     Training: TrainingModal,
//   };

//   return (
//     <div className="w-full px-4 py-2">
//       {/* Button Tabs */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className={`${category.color} px-4 py-2 rounded text-sm sm:text-base flex-grow sm:flex-grow-0 transition-all hover:opacity-80`}
//             onClick={() => setActivePopup(category.id)}
//           >
//             {category.label}
//           </button>
//         ))}
//       </div>

//       {/* Render Active Modal */}
//       {activePopup && modalComponents[activePopup] && 
//         React.createElement(modalComponents[activePopup], { closePopup })}
//     </div>
//   );
// };

// export default CategoryTab;


//--------------------------------------------------------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import KPIModal from './modals/KPIModal';
// import CompetenciesModal from './modals/CompetenciesModal';
// import CareerDevelopmentModal from './modals/CareerDevelopmentModal';
// import HRAspectsModal from './modals/HRAspectsModal';
// import RecommendationModal from './modals/RecommendationModal';
// import TrainingModal from './modals/TrainingModal';

// const CategoryTab = () => {
//   const [activePopup, setActivePopup] = useState(null);
//   const [isValidJobLevel, setIsValidJobLevel] = useState(true); // State to check if JobLevel is valid

//   // Function to close the active popup
//   const closePopup = () => setActivePopup(null);

//   // Function to check JobLevel and set validity
//   const checkJobLevel = () => {
//     const jobLevel = localStorage.getItem('JobLevel');

//     // Check if JobLevel belongs to the specified values
//     if (['03', '04', '04A', '04B', '02A', '02', '01A', '01'].includes(jobLevel)) {
//       setIsValidJobLevel(true); // JobLevel is valid
//     } else {
//       setIsValidJobLevel(false); // JobLevel is invalid
//     }
//   };

//   // Check JobLevel when the component mounts
//   useEffect(() => {
//     checkJobLevel();
//   }, []);

//   // Categories for the tabs
//   const categories = [
//     { id: 'KPI', label: 'KPI', color: 'bg-orange-300' },
//     { id: 'Competencies', label: 'Competencies', color: 'bg-green-300' },
//     { id: 'CareerDevelopment', label: 'Career Development', color: 'bg-blue-300' },
//     { id: 'HRAspects', label: 'HR Aspects', color: 'bg-pink-300' },
//     { id: 'Recommendation', label: 'Recommendation', color: 'bg-purple-400' },
//     { id: 'Training', label: 'TNI', color: 'bg-teal-400' },
//   ];

//   // Mapping of category IDs to modal components
//   const modalComponents = {
//     KPI: KPIModal,
//     Competencies: CompetenciesModal,
//     CareerDevelopment: CareerDevelopmentModal,
//     HRAspects: HRAspectsModal,
//     Recommendation: RecommendationModal,
//     Training: TrainingModal,
//   };

//   return (
//     <div className="w-full px-4 py-2">
//       {/* Button Tabs */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className={`${category.color} px-4 py-2 rounded text-sm sm:text-base flex-grow sm:flex-grow-0 transition-all hover:opacity-80 ${
//               // Disable all tabs except Competencies if JobLevel is invalid
//               !isValidJobLevel && category.id !== 'Competencies' ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//             onClick={() => {
//               // Only allow clicking if JobLevel is valid or the tab is Competencies
//               if (isValidJobLevel || category.id === 'Competencies') {
//                 setActivePopup(category.id);
//               }
//             }}
//             disabled={!isValidJobLevel && category.id !== 'Competencies'} // Disable button if JobLevel is invalid and tab is not Competencies
//           >
//             {category.label}
//           </button>
//         ))}
//       </div>

//       {/* Render Active Modal */}
//       {activePopup && modalComponents[activePopup] &&
//         React.createElement(modalComponents[activePopup], { closePopup })}
//     </div>
//   );
// };

// export default CategoryTab;


//-----------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import KPIModal from './modals/KPIModal';
// import CompetenciesModal from './modals/CompetenciesModal';
// import CareerDevelopmentModal from './modals/CareerDevelopmentModal';
// import HRAspectsModal from './modals/HRAspectsModal';
// import RecommendationModal from './modals/RecommendationModal';
// import TrainingModal from './modals/TrainingModal';
// import Swal from 'sweetalert2'; // Import SweetAlert

// const CategoryTab = () => {
//   const [activePopup, setActivePopup] = useState(null);
//   const [isValidJobLevel, setIsValidJobLevel] = useState(true); // State to check if JobLevel is valid

//   // Function to close the active popup
//   const closePopup = () => setActivePopup(null);

//   // Function to check JobLevel and set validity
//   const checkJobLevel = () => {
//     const jobLevel = localStorage.getItem('JobLevel');

//     // Check if JobLevel belongs to the specified values
//     if (['03', '04', '04A', '04B', '02A', '02', '01A', '01'].includes(jobLevel)) {
//       setIsValidJobLevel(true); // JobLevel is valid
//     } else {
//       setIsValidJobLevel(false); // JobLevel is invalid
//     }
//   };

//   // Check JobLevel when the component mounts
//   useEffect(() => {
//     checkJobLevel();
//   }, []);

//   // Categories for the tabs
//   const categories = [
//     { id: 'KPI', label: 'KPI', color: 'bg-orange-300' },
//     { id: 'Competencies', label: 'Competencies', color: 'bg-green-300' },
//     { id: 'CareerDevelopment', label: 'Career Development', color: 'bg-blue-300' },
//     { id: 'HRAspects', label: 'HR Aspects', color: 'bg-pink-300' },
//     { id: 'Recommendation', label: 'Recommendation', color: 'bg-purple-400' },
//     { id: 'Training', label: 'TNI', color: 'bg-teal-400' },
//   ];

//   // Mapping of category IDs to modal components
//   const modalComponents = {
//     KPI: KPIModal,
//     Competencies: CompetenciesModal,
//     CareerDevelopment: CareerDevelopmentModal,
//     HRAspects: HRAspectsModal,
//     Recommendation: RecommendationModal,
//     Training: TrainingModal,
//   };

//   // Function to check if Period and Year are selected
//   const checkPeriodAndYear = () => {
//     const period = localStorage.getItem('period');
//     const year = localStorage.getItem('year');
//     return period && year;
//   };

//   return (
//     <div className="w-full px-4 py-2">
//       {/* Button Tabs */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className={`${category.color} px-4 py-2 rounded text-sm sm:text-base flex-grow sm:flex-grow-0 transition-all hover:opacity-80 ${
//               // Disable all tabs except Competencies if JobLevel is invalid
//               !isValidJobLevel && category.id !== 'Competencies' ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//             onClick={() => {
//               // Only allow clicking if JobLevel is valid or the tab is Competencies
//               if (isValidJobLevel || category.id === 'Competencies') {
//                 if (category.id === 'Competencies' && !checkPeriodAndYear()) {
//                   Swal.fire({
//                     icon: 'warning',
//                     title: 'Missing Information',
//                     text: 'Please select the Period and Year.',
//                     confirmButtonColor: '#3085d6',
//                   });
//                 } else {
//                   setActivePopup(category.id);
//                 }
//               }
//             }}
//             disabled={!isValidJobLevel && category.id !== 'Competencies'} // Disable button if JobLevel is invalid and tab is not Competencies
//           >
//             {category.label}
//           </button>
//         ))}
//       </div>

//       {/* Render Active Modal */}
//       {activePopup && modalComponents[activePopup] &&
//         React.createElement(modalComponents[activePopup], { closePopup })}
//     </div>
//   );
// };

// export default CategoryTab;

//---------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import KPIModal from './modals/KPIModal';
// import CompetenciesModal from './modals/CompetenciesModal';
// import CareerDevelopmentModal from './modals/CareerDevelopmentModal';
// import HRAspectsModal from './modals/HRAspectsModal';
// import RecommendationModal from './modals/RecommendationModal';
// import TrainingModal from './modals/TrainingModal';
// import Swal from 'sweetalert2'; // Import SweetAlert2

// const CategoryTab = () => {
//   const [activePopup, setActivePopup] = useState(null);
//   const [isValidJobLevel, setIsValidJobLevel] = useState(true); // State to check if JobLevel is valid

//   // Function to close the active popup
//   const closePopup = () => setActivePopup(null);

//   // Function to check JobLevel and set validity
//   const checkJobLevel = () => {
//     const jobLevel = localStorage.getItem('JobLevel');

//     // Check if JobLevel belongs to the specified values
//     if (['03', '04', '04A', '04B', '02A', '02', '01A', '01'].includes(jobLevel)) {
//       setIsValidJobLevel(true); // JobLevel is valid
//     } else {
//       setIsValidJobLevel(false); // JobLevel is invalid
//     }
//   };

//   // Function to check if Period and Year are selected
//   const checkPeriodAndYear = () => {
//     const period = localStorage.getItem('period');
//     const year = localStorage.getItem('year');

//     if (!period || !year) {
//       Swal.fire({
//         icon: 'warning',
//         title: 'Missing Information',
//         text: 'Please select the Period and Year.',
//         confirmButtonColor: '#3085d6',
//       });
//       return false; // Period or Year is not selected
//     }
//     return true; // Period and Year are selected
//   };

//   // Check JobLevel when the component mounts
//   useEffect(() => {
//     checkJobLevel();
//   }, []);

//   // Categories for the tabs
//   const categories = [
//     { id: 'KPI', label: 'KPI', color: 'bg-orange-300' },
//     { id: 'Competencies', label: 'Competencies', color: 'bg-green-300' },
//     { id: 'CareerDevelopment', label: 'Career Development', color: 'bg-blue-300' },
//     { id: 'HRAspects', label: 'HR Aspects', color: 'bg-pink-300' },
//     { id: 'Recommendation', label: 'Recommendation', color: 'bg-purple-400' },
//     { id: 'Training', label: 'TNI', color: 'bg-teal-400' },
//   ];

//   // Mapping of category IDs to modal components
//   const modalComponents = {
//     KPI: KPIModal,
//     Competencies: CompetenciesModal,
//     CareerDevelopment: CareerDevelopmentModal,
//     HRAspects: HRAspectsModal,
//     Recommendation: RecommendationModal,
//     Training: TrainingModal,
//   };

//   return (
//     <div className="w-full px-4 py-2">
//       {/* Button Tabs */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className={`${category.color} px-4 py-2 rounded text-sm sm:text-base flex-grow sm:flex-grow-0 transition-all hover:opacity-80 ${
//               // Disable all tabs except Competencies if JobLevel is invalid
//               !isValidJobLevel && category.id !== 'Competencies' ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//             onClick={() => {
//               // Only allow clicking if JobLevel is valid or the tab is Competencies
//               if (isValidJobLevel || category.id === 'Competencies') {
//                 // For Competencies tab, check if Period and Year are selected
//                 if (category.id === 'Competencies' && !checkPeriodAndYear()) {
//                   return; // Stop execution if Period or Year is not selected
//                 }
//                 setActivePopup(category.id);
//               }
//             }}
//             disabled={!isValidJobLevel && category.id !== 'Competencies'} // Disable button if JobLevel is invalid and tab is not Competencies
//           >
//             {category.label}
//           </button>
//         ))}
//       </div>

//       {/* Render Active Modal */}
//       {activePopup && modalComponents[activePopup] &&
//         React.createElement(modalComponents[activePopup], { closePopup })}
//     </div>
//   );
// };

// export default CategoryTab;






import React, { useState, useEffect } from 'react';
import KPIModal from './modals/KPIModal';
import CompetenciesModal from './modals/CompetenciesModal';
import CareerDevelopmentModal from './modals/CareerDevelopmentModal';
import HRAspectsModal from './modals/HRAspectsModal';
import RecommendationModal from './modals/RecommendationModal';
import TrainingModal from './modals/TrainingModal';
import Swal from 'sweetalert2'; // Import SweetAlert2

const CategoryTab = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [isValidJobLevel, setIsValidJobLevel] = useState(false); // State to check if JobLevel is valid

  // Function to close the active popup
  const closePopup = () => setActivePopup(null);

  // Function to check JobLevel and set validity
  const checkJobLevel = () => {
    const jobLevel = localStorage.getItem('JobLevel');

    // Check if JobLevel belongs to the specified values
    if (['03', '04', '04A', '04B', '02A', '02', '01A', '01'].includes(jobLevel)) {
      setIsValidJobLevel(true); // JobLevel is valid
    } else {
      setIsValidJobLevel(false); // JobLevel is invalid
    }
  };

  // Function to check if Period and Year are selected
  const checkPeriodAndYear = () => {
    const period = localStorage.getItem('period');
    const year = localStorage.getItem('year');

    if (!period || !year) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please select the Period and Year.',
        confirmButtonColor: '#3085d6',
      });
      return false; // Period or Year is not selected
    }
    return true; // Period and Year are selected
  };

  // Check JobLevel when the component mounts
  useEffect(() => {
    checkJobLevel();
  }, []);

  // Categories for the tabs
  const categories = [
    { id: 'KPI', label: 'KPI', color: 'bg-orange-300' },
    { id: 'Competencies', label: 'Competencies', color: 'bg-green-300' },
    { id: 'CareerDevelopment', label: 'Career Development', color: 'bg-blue-300' },
    { id: 'HRAspects', label: 'HR Aspects', color: 'bg-pink-300' },
    { id: 'Recommendation', label: 'Recommendation', color: 'bg-purple-400' },
    { id: 'Training', label: 'TNI', color: 'bg-teal-400' },
  ];

  // Mapping of category IDs to modal components
  const modalComponents = {
    KPI: KPIModal,
    Competencies: CompetenciesModal,
    CareerDevelopment: CareerDevelopmentModal,
    HRAspects: HRAspectsModal,
    Recommendation: RecommendationModal,
    Training: TrainingModal,
  };

  return (
    <div className="w-full px-4 py-2">
      {/* Button Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${category.color} px-4 py-2 rounded text-sm sm:text-base flex-grow sm:flex-grow-0 transition-all hover:opacity-80 ${
              // Disable all tabs except Competencies if JobLevel is invalid
              !isValidJobLevel && category.id !== 'Competencies' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => {
              // Only allow clicking if JobLevel is valid or the tab is Competencies
              if (isValidJobLevel || category.id === 'Competencies') {
                // For Competencies tab, check if Period and Year are selected
                if (category.id === 'Competencies' && !checkPeriodAndYear()) {
                  return; // Stop execution if Period or Year is not selected
                }
                setActivePopup(category.id);
              }
            }}
            disabled={!isValidJobLevel && category.id !== 'Competencies'} // Disable button if JobLevel is invalid and tab is not Competencies
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Render Active Modal */}
      {activePopup && modalComponents[activePopup] &&
        React.createElement(modalComponents[activePopup], { closePopup })}
    </div>
  );
};

export default CategoryTab;