// import React, { useState } from "react";

// const CareerDevelopmentModal = ({ closePopup }) => {
//   const [scores, setScores] = useState({
//     "Professional Qualifications": 0,
//     "Higher Education": 0,
//     "Continuous Professional Development - CPD": 0,
//   });

//   const maxValues = {
//     "Professional Qualifications": 1,
//     "Higher Education": 1,
//     "Continuous Professional Development - CPD": 3,
//   };

  
//   const handleScoreChange = (area, value) => {
//     const numericValue = parseInt(value, 10) || 0;
//     const maxValue = maxValues[area];

//     if (numericValue >= 0 && numericValue <= maxValue) {
//       setScores({ ...scores, [area]: numericValue });
//     } else if (numericValue > maxValue) {
//       alert(`Maximum allowed score for "${area}" is ${maxValue}`);
//     }
//   };

//   // Calculate the total score dynamically
//   const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative bg-white p-6 rounded shadow-lg">
//         {/* Close Button */}
//         <button
//           className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
//           onClick={closePopup}
//         >
//           &times;
//         </button>
//         <h2 className="text-xl font-bold mb-4">Career Development Score</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300 text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2 text-left">Area</th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
//                 <th className="border border-gray-300 px-4 py-2 text-center">Score</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 {
//                   area: "Professional Qualifications",
//                   plan: (
//                     <>
//                       Become a chartered engineer by 2025 <br />
//                       Complete Lean Six Sigma Black Belt by 2025 <br />
//                       ECSL Registration
//                     </>
//                   ),
//                 },
//                 {
//                   area: "Higher Education",
//                   plan: "Complete a MSc or MBA by 2026",
//                 },
//                 {
//                   area: "Continuous Professional Development - CPD",
//                   plan: "Short course on Human Resource Development",
//                 },
//               ].map((item, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                 >
//                   <td className="border border-gray-300 px-4 py-2">{item.area}</td>
//                   <td
//                     className="border border-gray-300 px-4 py-2"
//                     style={{ backgroundColor: "#fdf2e9" }} 
//                   >
//                     {item.plan}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2 text-center">
//                     <input
//                       type="number"
//                       className="w-full text-center border border-gray-300 rounded"
//                       min="0"
//                       max={maxValues[item.area]}
//                       value={scores[item.area]}
//                       onChange={(e) =>
//                         handleScoreChange(item.area, e.target.value)
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))}
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={2}>
//                   Total
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-300 font-bold">
//                   {totalScore}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="flex mt-6">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
//             Save
//           </button>
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded"
//             onClick={closePopup}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerDevelopmentModal;









// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import debounce from "lodash.debounce";

// const CareerDevelopmentModal = ({ closePopup }) => {
//   const [scores, setScores] = useState({});
//   const [customPlans, setCustomPlans] = useState({});
//   const [maxValues, setMaxValues] = useState({});
//   const [areaPlans, setAreaPlans] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSaving, setIsSaving] = useState(false);
//   const [careIds, setCareIds] = useState({});
//   const [isUpdate, setIsUpdate] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo") || "0004536";
//         const userType = localStorage.getItem("userType") || "EX";
//         const requestToken = localStorage.getItem("request_token");
//         const year = localStorage.getItem("year");
//         const period = localStorage.getItem("period") || "defaultPeriod";

//         const mockData = [
//           { id: "1", area: "Professional Qualifications", maxScore: 1 },
//           { id: "2", area: "Higher Education", maxScore: 1 },
//           { id: "3", area: "Continuous Professional Development - CPD", maxScore: 3 },
//         ];

//         const response = await axios.get(`https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCareerDev`, {
//           params: { serviceNo, UserType: userType, year, period },
//           headers: { request_token: requestToken },
//         });

//         setAreaPlans(mockData);

//         const initialScores = {};
//         const initialMaxValues = {};
//         const initialCareIds = {};
//         const initialPlans = {};

//         mockData.forEach((item) => {
//           initialMaxValues[item.area] = item.maxScore;
//           initialScores[item.area] = 0;
//           initialCareIds[item.area] = "";
//           initialPlans[item.area] = item.plan;
//         });

//         let hasExistingData = false;
//         if (response.data.ResultSet && response.data.ResultSet.length > 0) {
//           response.data.ResultSet.forEach((item) => {
//             const matchingArea = mockData.find((area) => area.id === item.Care_area);
//             if (matchingArea) {
//               const score = parseInt(item.Care_Score, 10);
//               if (score > 0) {
//                 hasExistingData = true;
//                 initialScores[matchingArea.area] = score;
//                 initialCareIds[matchingArea.area] = item.Care_ID;
//                 initialPlans[matchingArea.area] = item.Care_Plan || matchingArea.plan;
//               }
//             }
//           });
//         }

//         setIsUpdate(hasExistingData);
//         setScores(initialScores);
//         setMaxValues(initialMaxValues);
//         setCareIds(initialCareIds);
//         setCustomPlans(initialPlans);
//       } catch (error) {
//         Swal.fire({ icon: "error", title: "Error", text: "Failed to load data. Please try again." });
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleScoreChange = (area, value) => {
//     const numericValue = parseInt(value, 10) || 0;
//     const maxValue = maxValues[area];

//     if (numericValue >= 0 && numericValue <= maxValue) {
//       setScores((prevScores) => ({ ...prevScores, [area]: numericValue }));
//     } else {
//       Swal.fire({ icon: "warning", title: "Invalid Score", text: `Maximum allowed score for "${area}" is ${maxValue}` });
//     }
//   };
//   const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
//   const totalMaxScore = Object.values(maxValues).reduce((acc, maxValue) => acc + maxValue, 0);
//   const debouncedHandleScoreChange = useCallback(debounce(handleScoreChange, 300), [maxValues]);

//   const handlePlanChange = (area, value) => {
//     setCustomPlans((prevPlans) => ({
//       ...prevPlans,
//       [area]: value,
//     }));
//   };


//   const handleSave = async () => {
//     setIsSaving(true);
//     const serviceNo = localStorage.getItem("serviceNo") ;
//     const userType = localStorage.getItem("userType") || "EX";
//     const requestToken = localStorage.getItem("request_token");
//     const year = localStorage.getItem("year");
//     const peroid = localStorage.getItem("period") || "defaultPeriod";

//     const requestData = areaPlans.map((item) => ({
//       Care_area: item.id,
//       Care_Plan: customPlans[item.area] || item.plan,
//       Care_Score: parseInt(scores[item.area] || 0, 10),
//     }));

//     try {
//       await axios.post(`https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/SaveCareerDev`, requestData, {
//         params: { UserType: userType, ServiceNo: serviceNo, year, peroid },
//         headers: { "Content-Type": "application/json", request_token: requestToken },
//       });

//       Swal.fire({ icon: "success", title: "Success!", text: `Scores ${isUpdate ? "updated" : "saved"} successfully!` })
//         .then(() => {
//           closePopup();
//           window.location.reload();
//         });
//     } catch (error) {
//       Swal.fire({ icon: "error", title: "Error", text: error.response?.data?.message || `Failed to ${isUpdate ? "update" : "save"} scores. Please try again.` });
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//         <div className="bg-white p-6 rounded-lg shadow-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
//         <button className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold" onClick={closePopup}>&times;</button>
//         <h2 className="text-2xl font-semibold mb-4">Career Development Score</h2>

//         <table className="w-full border-collapse border border-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2">Area</th>
//               <th className="border px-4 py-2">Plan</th>
//               <th className="border px-4 py-2">Score</th>
//               <th className="border px-4 py-2">Max</th>
//             </tr>
//           </thead>
//           <tbody>
//             {areaPlans.map((item) => (
//               <tr key={item.id}>
//                 <td className="border px-4 py-2">{item.area}</td>
//                 <td className="border px-4 py-2" >
//                   <input type="text" className="w-full p-2 border" value={customPlans[item.area]} onChange={(e) => handlePlanChange(item.area, e.target.value)} />
//                 </td> 
                
//                 <td className="border px-4 py-2 text-center">
//                   <input type="number" className="w-24 text-center border" value={scores[item.area]} onChange={(e) => debouncedHandleScoreChange(item.area, e.target.value)} />
//                 </td>
//                 <td className="border px-4 py-2 text-center bg-yellow-200">{maxValues[item.area]}</td>
//               </tr>
//             ))}
//             <tr>
//               <td className="border px-4 py-2 font-semibold " colSpan="2"  style={{ backgroundColor: "#fdf2e9" }}>Total</td>
//               <td className="border px-4 py-2 text-center font-semibold " style={{ backgroundColor: "#fdf2e9" }}>{totalScore}</td>
//               <td className="border px-4 py-2 text-center font-semibold bg-yellow-300">
//                 {Object.values(maxValues).reduce((acc, maxValue) => acc + maxValue, 0)}
//               </td>
//             </tr>
//           </tbody>
//         </table>
        
//         <div className="flex mt-6 justify-end space-x-1">
//         <button className="bg-blue-500 text-white px-3 py-2 rounded mt-4" onClick={handleSave} disabled={isSaving}>{isUpdate ? "Update" : "Save"}</button>
//         <button
//             className="bg-red-500  text-white px-3 py-2 rounded mt-4"
//             onClick={closePopup}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerDevelopmentModal;



import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import debounce from "lodash.debounce";
const CareerDevelopmentModal = ({ closePopup }) => {
  const [scores, setScores] = useState({});
  const [customPlans, setCustomPlans] = useState({});
  const [maxValues, setMaxValues] = useState({});
  const [areaPlans, setAreaPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [careIds, setCareIds] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo") || "0004536";
        const userType = localStorage.getItem("userType") || "EX";
        const requestToken = localStorage.getItem("request_token");
        const year = localStorage.getItem("year");
        const period = localStorage.getItem("period") || "defaultPeriod";
        const mockData = [
          { id: "1", area: "Professional Qualifications", maxScore: 5 },
          { id: "2", area: "Higher Education", maxScore: 5 },
          { id: "3", area: "Continuous Professional Development - CPD", maxScore: 5 },
        ];
        const response = await axios.get(`https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCareerDev`, {
          params: { serviceNo, UserType: userType, year, period },
          headers: { request_token: requestToken },
        });
        setAreaPlans(mockData);
        const initialScores = {};
        const initialMaxValues = {};
        const initialCareIds = {};
        const initialPlans = {};
        mockData.forEach((item) => {
          initialMaxValues[item.area] = item.maxScore;
          initialScores[item.area] = 0;
          initialCareIds[item.area] = "";
          initialPlans[item.area] = item.plan;
        });
        let hasExistingData = false;
        if (response.data.ResultSet && response.data.ResultSet.length > 0) {
          response.data.ResultSet.forEach((item) => {
            const matchingArea = mockData.find((area) => area.id === item.Care_area);
            if (matchingArea) {
              const score = parseInt(item.Care_Score, 10);
              if (score > 0) {
                hasExistingData = true;
                initialScores[matchingArea.area] = score;
                initialCareIds[matchingArea.area] = item.Care_ID;
                initialPlans[matchingArea.area] = item.Care_Plan || matchingArea.plan;
              }
            }
          });
        }
        setIsUpdate(hasExistingData);
        setScores(initialScores);
        setMaxValues(initialMaxValues);
        setCareIds(initialCareIds);
        setCustomPlans(initialPlans);
      } catch (error) {
        Swal.fire({ icon: "error", title: "Error", text: "Failed to load data. Please try again." });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleScoreChange = (area, value) => {
    const numericValue = parseInt(value, 10) || 0;
    const maxValue = maxValues[area];
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    if (numericValue >= 0 && numericValue <= maxValue) {
      if (totalScore - scores[area] + numericValue <= 5) {
        setScores((prevScores) => ({ ...prevScores, [area]: numericValue }));
      } else {
        Swal.fire({ icon: "warning", title: "Invalid Score", text: `Total score cannot exceed 5.` });
      }
    } else {
      Swal.fire({ icon: "warning", title: "Invalid Score", text: `Maximum allowed score for "${area}" is ${maxValue}` });
    }
  };
  const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
  const debouncedHandleScoreChange = useCallback(debounce(handleScoreChange, 300), [scores]);
  const handlePlanChange = (area, value) => {
    setCustomPlans((prevPlans) => ({
      ...prevPlans,
      [area]: value,
    }));
  };
  const handleSave = async () => {
    setIsSaving(true);
    const serviceNo = localStorage.getItem("serviceNo");
    const userType = localStorage.getItem("userType") || "EX";
    const requestToken = localStorage.getItem("request_token");
    const year = localStorage.getItem("year");
    const peroid = localStorage.getItem("period") || "defaultPeriod";
    const requestData = areaPlans.map((item) => ({
      Care_area: item.id,
      Care_Plan: customPlans[item.area] || item.plan,
      Care_Score: parseInt(scores[item.area] || 0, 10),
    }));
    try {
      await axios.post(`https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/SaveCareerDev`, requestData, {
        params: { UserType: userType, ServiceNo: serviceNo, year, peroid },
        headers: { "Content-Type": "application/json", request_token: requestToken },
      });
      Swal.fire({ icon: "success", title: "Success!", text: `Scores ${isUpdate ? "updated" : "saved"} successfully!` })
        .then(() => {
          closePopup();
          window.location.reload();
        });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Error", text: error.response?.data?.message || `Failed to ${isUpdate ? "update" : "save"} scores. Please try again.` });
    } finally {
      setIsSaving(false);
    }
  };
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold" onClick={closePopup}>&times;</button>
        <h2 className="text-2xl font-semibold mb-4">Career Development Score</h2>
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Area</th>
              <th className="border px-4 py-2">Plan</th>
              <th className="border px-4 py-2">Score</th>
              <th className="border px-4 py-2">Max</th>
            </tr>
          </thead>
          <tbody>
            {areaPlans.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.area}</td>
                <td className="border px-4 py-2">
                  <input type="text" className="w-full p-2 border" value={customPlans[item.area]} onChange={(e) => handlePlanChange(item.area, e.target.value)} />
                </td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="number"
                    className="w-24 text-center border"
                    value={scores[item.area]}
                    onChange={(e) => debouncedHandleScoreChange(item.area, e.target.value)}
                    disabled={totalScore >= 5 && scores[item.area] === 0} // Disable only if total score is 5 and this row's score is 0
                  />
                </td>
                <td className="border px-4 py-2 text-center bg-yellow-200">{maxValues[item.area]}</td>
              </tr>
            ))}
            <tr>
              <td className="border px-4 py-2 font-semibold" colSpan="2" style={{ backgroundColor: "#FDF2E9" }}>Total</td>
              <td className="border px-4 py-2 text-center font-semibold" style={{ backgroundColor: "#FDF2E9" }}>{totalScore}</td>
              <td className="border px-4 py-2 text-center font-semibold bg-yellow-300">
                5
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex mt-6 justify-end space-x-1">
          <button className="bg-blue-500 text-white px-3 py-2 rounded mt-4" onClick={handleSave} disabled={isSaving}>{isUpdate ? "Update" : "Save"}</button>
          <button className="bg-red-500 text-white px-3 py-2 rounded mt-4" onClick={closePopup}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CareerDevelopmentModal;