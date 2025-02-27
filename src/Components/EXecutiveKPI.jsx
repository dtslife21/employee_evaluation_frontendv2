// import React, { useState } from 'react';

// const EXecutiveKPI = () => {
//   // Goal Titles for each Criteria
//   const goals = {
//     "Divisional Criteria": [
//       "Adherence to the cumulative Overnight Budget",
//       "Adherence to the expected Normal Hours: OT Hours Ratio",
//       "Achievement of the targeted Value Addition",
//     ],
//     "Departmental Criteria": [
//       "ISO functional objectives achievement",
//       "Variance of the project estimated budget (SR, NC, HE)",
//       "Adherence to the expected Normal Hours: OT Hours Ratio",
//       "Achievement of the SR Performance factor",
//       "Contractual delivery of NC vessel on time",
//       "Average customer feedback score",
//       "Adherence to the tomorrow planning process",
//       "Accident occurrence rate (No of Accidents/No of Employees)",
//       "No of near misses reported",
//       "No of cases reported tarnishing industrial harmony",
//       "Number of new clients or markets entered",
//     ],
//     "Self Target Criteria": [
//       "Execution of a project to reduce wastage and unnecessary expenditure",
//       "Process improvements or innovations",
//       "Engage in employee training or development activity",
//       "Learning of a new skill or engage with job enriching activity",
//     ],
//   };

//   // State to store Full Score values for each row
//   const [fullScores, setFullScores] = useState({});

//   // Function to handle input change for Full Score
//   const handleFullScoreChange = (key, value) => {
//     setFullScores((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   // Function to reset the form (reset Full Scores to empty)
//   const handleReset = () => {
//     setFullScores({});
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="bg-white shadow-lg p-6 rounded-lg mb-4">
//           {/* Top Section - Modal Title */}
//           <h2 className="text-xl font-bold mb-6">KPI Entry</h2>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-300 text-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border border-gray-300 px-14 py-4 text-left">
//                     Criteria
//                   </th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">
//                     Goal Title
//                   </th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">
//                     Target Date
//                   </th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">
//                     Importance
//                   </th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">
//                     Mandatory
//                   </th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">
//                     Weightage (%)
//                   </th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">
//                     Full Score
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.entries(goals).map(([criteria, goalTitles]) => (
//                   <React.Fragment key={criteria}>
//                     {/* Single Row for Criteria without Goal Rows */}
//                     <tr className="bg-gray-100">
//                       <td
//                         colSpan="7"
//                         className="border border-gray-300 px-4 py-2 font-bold"
//                       >
//                         {criteria}
//                       </td>
//                     </tr>
//                     {/* Goal Rows */}
//                     {goalTitles.map((goal, index) => {
//                       const rowKey = `${criteria}-${index}`; // Unique key for each row
//                       return (
//                         <tr
//                           key={rowKey}
//                           className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                         >
//                           <td className="border border-gray-300 px-4 py-2"></td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             {goal}
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             31/12/2024
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">0</td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             Yes
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">20</td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             <input
//                               type="number"
//                               className="w-full px-2 py-1 border rounded"
//                               value={fullScores[rowKey] || ""}
//                               onChange={(e) =>
//                                 handleFullScoreChange(rowKey, e.target.value)
//                               }
//                               placeholder="Enter Score"
//                             />
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Bottom Buttons */}
//           <div className="flex justify-end mt-6 space-x-2">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Save
//             </button>
//             <button
//               className="bg-gray-500 text-white px-4 py-2 rounded"
//               onClick={handleReset}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EXecutiveKPI;




// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Swal from "sweetalert2";

// const ExecutiveKPI = () => {
//   const criteriaTypes = {
//     1: "Divisional Criteria",
//     2: "Departmental Criteria",
//     3: "Self Target Criteria",
//   };

//   const [rows, setRows] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const requestToken = localStorage.getItem("request_token");

//   useEffect(() => {
//     fetchExistingData();
//   }, []);

//   const fetchExistingData = async () => {
//     const serviceNo = localStorage.getItem("serviceNo");
//     const userType = localStorage.getItem("userType") || "EX";
//     const year = localStorage.getItem("year");
//     const period = localStorage.getItem("period");

//     try {
//       const response = await fetch(
//         `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetKPIDetails?serviceNo=${serviceNo}&year=${year}&peroid=${period}&UserType=${userType}`,
//         {
//           headers: {
//             request_token: requestToken,
//           },
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();

//         if (data.ResultSet && Array.isArray(data.ResultSet)) {
//           const formattedRows = data.ResultSet.map((item) => ({
//             kpiCode: item.KPI_Code, // Added KPI_Code field
//             criteria: item.KPI_Criteria,
//             goalTitle: item.KPI_GTitle,
//             targetDate: new Date(item.KPI_TDate),
//             weightage: item.KPI_Weight,
//             fullScore: item.KPI_Score,
//           }));

//           setRows(formattedRows);
//         } else {
//           throw new Error("Invalid data format received");
//         }
//       } else {
//         throw new Error("Failed to fetch KPI details");
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to fetch KPI details",
//         icon: "error",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddRow = (criteriaKey) => {
//     const newRow = {
//       kpiCode: "", // Empty for new rows
//       criteria: criteriaKey,
//       goalTitle: "",
//       targetDate: new Date(),
//       weightage: "",
//       fullScore: "",
//     };

//     // Calculate the total weightage and full score for the criteria
//     const totalWeightage = rows
//       .filter((row) => row.criteria === criteriaKey)
//       .reduce((sum, row) => sum + parseFloat(row.weightage || 0), 0);

//     const totalFullScore = rows
//       .filter((row) => row.criteria === criteriaKey)
//       .reduce((sum, row) => sum + parseFloat(row.fullScore || 0), 0);

//     // Check if adding this row would exceed 100
//     if (totalWeightage + parseFloat(newRow.weightage || 0) > 100) {
//       Swal.fire({
//         title: "Error!",
//         text: "Total Weightage Cannot Exceed 100",
//         icon: "error",
//       });
//       return; // Prevent adding the row if total weightage exceeds 100
//     }

//     if (totalFullScore + parseFloat(newRow.fullScore || 0) > 100) {
//       Swal.fire({
//         title: "Error!",
//         text: "Total Full Score Cannot Exceed 100",
//         icon: "error",
//       });
//       return; // Prevent adding the row if total full score exceeds 100
//     }

//     setRows((prevRows) => [...prevRows, newRow]);
//   };

//   const handleDeleteRow = (index) => {
//     setRows(rows.filter((_, i) => i !== index));
//   };

//   const handleInputChange = (index, field, value) => {
//     const newRows = [...rows];

//     if (field === "fullScore") {
//       // Check if Full Score is less than or equal to Weightage
//       if (parseFloat(value) > parseFloat(newRows[index].weightage)) {
//         Swal.fire({
//           title: "Error!",
//           text: "Full Score Cannot Be Greater Than Weightage",
//           icon: "error",
//         });
//         return; // Prevent the change if Full Score exceeds Weightage
//       }
//     }

//     newRows[index][field] = value;

//     // Calculate the total weightage and full score for the selected criteria
//     const totalWeightage = newRows
//       .filter((row) => row.criteria === newRows[index].criteria)
//       .reduce((sum, row) => sum + parseFloat(row.weightage || 0), 0);

//     const totalFullScore = newRows
//       .filter((row) => row.criteria === newRows[index].criteria)
//       .reduce((sum, row) => sum + parseFloat(row.fullScore || 0), 0);

//     // Check if the totals exceed 100
//     if (totalWeightage > 100) {
//       Swal.fire({
//         title: "Error!",
//         text: "Total Weightage Cannot Exceed 100",
//         icon: "error",
//       });
//       return; // Prevent the change if total weightage exceeds 100
//     }

//     if (totalFullScore > 100) {
//       Swal.fire({
//         title: "Error!",
//         text: "Total Full Score Cannot Exceed 100",
//         icon: "error",
//       });
//       return; // Prevent the change if total full score exceeds 100
//     }

//     setRows(newRows);
//   };

//   const formatDate = (date) => {
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     return `${year}/${month}/${day}`;
//   };

//   const handleSave = async () => {
//     const serviceNo = localStorage.getItem("serviceNo");
//     const userType = localStorage.getItem("userType") || "EX";
//     const year = localStorage.getItem("year");
//     const period = localStorage.getItem("period");

//     try {
//       const formattedData = rows.map((row) => ({
//         KPI_Code: row.kpiCode || "", // Include KPI_Code in save data
//         KPI_Criteria: row.criteria,
//         KPI_GTitle: row.goalTitle,
//         KPI_TDate: formatDate(row.targetDate),
//         KPI_Weight: row.weightage.toString(),
//         KPI_Score: row.fullScore.toString(),
//       }));

//       const response = await fetch(
//         `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/SaveKPIDetails?serviceNo=${serviceNo}&UserType=${userType}&peroid=${period}&year=${year}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             request_token: requestToken,
//           },
//           body: JSON.stringify(formattedData),
//         }
//       );

//       if (response.ok) {
//         Swal.fire({
//           title: "Success!",
//           text: "KPI details saved successfully",
//           icon: "success",
//         });
//         fetchExistingData(); // Refresh data after successful save
//       } else {
//         throw new Error("Failed to save KPI details");
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to save KPI details",
//         icon: "error",
//       });
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="container flex justify-center items-center min-h-[200px]">
//         <div className="text-gray-600">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <div className="bg-white shadow-lg p-6 rounded-lg mb-4">
//         <h2 className="text-xl font-bold mb-6">KPI Entry</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300 text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border border-gray-300 px-14 py-4 text-left">
//                   Criteria
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">
//                   Goal Title
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">
//                   Target Date
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">
//                   Weightage (%)
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">
//                   Full Score / 100
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(criteriaTypes).map(([key, criteria]) => (
//                 <React.Fragment key={key}>
//                   <tr className="bg-gray-100">
//                     <td
//                       colSpan="6"
//                       className="border border-gray-300 px-4 py-2 font-bold"
//                     >
//                       {criteria}
//                       <button
//                         className="bg-blue-500 text-white ml-4 py-1 px-3 rounded"
//                         onClick={() => handleAddRow(key)}
//                       >
//                         Add Row
//                       </button>
//                     </td>
//                   </tr>
//                   {rows
//                     .filter((row) => row.criteria === key)
//                     .map((row, index) => (
//                       <tr
//                         key={index}
//                         className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                       >
//                         <td className="border border-gray-300 px-4 py-2"></td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           <input
//                             type="text"
//                             className="w-full px-2 py-1 border rounded"
//                             value={row.goalTitle}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 rows.indexOf(row),
//                                 "goalTitle",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="Enter Goal Title"
//                           />
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           <DatePicker
//                             selected={row.targetDate}
//                             onChange={(date) =>
//                               handleInputChange(
//                                 rows.indexOf(row),
//                                 "targetDate",
//                                 date
//                               )
//                             }
//                             className="w-full px-2 py-1 border rounded"
//                           />
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           <input
//                             type="number"
//                             className="w-full px-2 py-1 border rounded"
//                             value={row.weightage}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 rows.indexOf(row),
//                                 "weightage",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="Enter Weightage"
//                           />
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           <input
//                             type="number"
//                             className="w-full px-2 py-1 border rounded"
//                             value={row.fullScore}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 rows.indexOf(row),
//                                 "fullScore",
//                                 e.target.value
//                               )
//                             }
//                             placeholder="Enter Full Score"
//                           />
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2 text-center">
//                           <button
//                             className="bg-red-500 text-white py-1 px-3 rounded"
//                             onClick={() => handleDeleteRow(rows.indexOf(row))}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="flex justify-end mt-6 space-x-2">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//           {/* <button
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//             onClick={() => setRows([])}
//           >
//             Reset
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExecutiveKPI;


//----------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const ExecutiveKPI = () => {
  const criteriaTypes = {
    1: "Divisional Criteria",
    2: "Departmental Criteria",
    3: "Self Target Criteria",
  };

  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const requestToken = localStorage.getItem("request_token");

  useEffect(() => {
    fetchExistingData();
    checkJobLevel(); // Check JobLevel and set user role
  }, []);

  // Function to check JobLevel and set user role
  const checkJobLevel = () => {
    const jobLevel = localStorage.getItem("JobLevel");

    if (["03", "04", "04A", "04B"].includes(jobLevel)) {
      setUserRole("Department Head");
    } else if (["02A", "02"].includes(jobLevel)) {
      setUserRole("Division Head");
    } else if (["01A", "01"].includes(jobLevel)) {
      setUserRole("MD / Chairman");
    } else {
      setUserRole("Unknown Role");
    }
  };

  // Function to determine if a criteria should be disabled
  const isCriteriaDisabled = (criteriaKey) => {
    if (userRole === "Department Head") {
      return criteriaKey === "1"; // Disable Divisional Criteria
    } else if (userRole === "Unknown Role") {
      return criteriaKey === "1" || criteriaKey === "2"; // Disable Divisional and Departmental Criteria
    }
    return false; // Enable all criteria for Division Head and MD/Chairman
  };

  const fetchExistingData = async () => {
    const serviceNo = localStorage.getItem("serviceNo");
    const userType = localStorage.getItem("userType") || "Ex";
    const year = localStorage.getItem("year");
    const period = localStorage.getItem("period");

    try {
      const response = await fetch(
        `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetKPIDetails?serviceNo=${serviceNo}&year=${year}&peroid=${period}&UserType=${userType}`,
        {
          headers: {
            request_token: requestToken,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.ResultSet && Array.isArray(data.ResultSet)) {
          const formattedRows = data.ResultSet.map((item) => ({
            kpiCode: item.KPI_Code, // Added KPI_Code field
            criteria: item.KPI_Criteria,
            goalTitle: item.KPI_GTitle,
            targetDate: new Date(item.KPI_TDate),
            weightage: item.KPI_Weight,
            fullScore: item.KPI_Score,
          }));

          setRows(formattedRows);
        } else {
          throw new Error("Invalid data format received");
        }
      } else {
        throw new Error("Failed to fetch KPI details");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to fetch KPI details",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddRow = (criteriaKey) => {
    const newRow = {
      kpiCode: "", // Empty for new rows
      criteria: criteriaKey,
      goalTitle: "",
      targetDate: new Date(),
      weightage: "",
      fullScore: "",
    };

    // Calculate the total weightage and full score for the criteria
    const totalWeightage = rows
      .filter((row) => row.criteria === criteriaKey)
      .reduce((sum, row) => sum + parseFloat(row.weightage || 0), 0);

    const totalFullScore = rows
      .filter((row) => row.criteria === criteriaKey)
      .reduce((sum, row) => sum + parseFloat(row.fullScore || 0), 0);

    // Check if adding this row would exceed 100
    if (totalWeightage + parseFloat(newRow.weightage || 0) > 100) {
      Swal.fire({
        title: "Error!",
        text: "Total Weightage Cannot Exceed 100",
        icon: "error",
      });
      return; // Prevent adding the row if total weightage exceeds 100
    }

    if (totalFullScore + parseFloat(newRow.fullScore || 0) > 100) {
      Swal.fire({
        title: "Error!",
        text: "Total Full Score Cannot Exceed 100",
        icon: "error",
      });
      return; // Prevent adding the row if total full score exceeds 100
    }

    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleDeleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];

    if (field === "fullScore") {
      // Check if Full Score is less than or equal to Weightage
      if (parseFloat(value) > parseFloat(newRows[index].weightage)) {
        Swal.fire({
          title: "Error!",
          text: "Full Score Cannot Be Greater Than Weightage",
          icon: "error",
        });
        return; // Prevent the change if Full Score exceeds Weightage
      }
    }

    newRows[index][field] = value;

    // Calculate the total weightage and full score for the selected criteria
    const totalWeightage = newRows
      .filter((row) => row.criteria === newRows[index].criteria)
      .reduce((sum, row) => sum + parseFloat(row.weightage || 0), 0);

    const totalFullScore = newRows
      .filter((row) => row.criteria === newRows[index].criteria)
      .reduce((sum, row) => sum + parseFloat(row.fullScore || 0), 0);

    // Check if the totals exceed 100
    if (totalWeightage > 100) {
      Swal.fire({
        title: "Error!",
        text: "Total Weightage Cannot Exceed 100",
        icon: "error",
      });
      return; // Prevent the change if total weightage exceeds 100
    }

    if (totalFullScore > 100) {
      Swal.fire({
        title: "Error!",
        text: "Total Full Score Cannot Exceed 100",
        icon: "error",
      });
      return; // Prevent the change if total full score exceeds 100
    }

    setRows(newRows);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const handleSave = async () => {
    const serviceNo = localStorage.getItem("serviceNo");
    const userType = localStorage.getItem("userType") || "EX";
    const year = localStorage.getItem("year");
    const period = localStorage.getItem("period");

    try {
      const formattedData = rows.map((row) => ({
        KPI_Code: row.kpiCode || "", // Include KPI_Code in save data
        KPI_Criteria: row.criteria,
        KPI_GTitle: row.goalTitle,
        KPI_TDate: formatDate(row.targetDate),
        KPI_Weight: row.weightage.toString(),
        KPI_Score: row.fullScore.toString(),
      }));

      const response = await fetch(
        `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/SaveKPIDetails?serviceNo=${serviceNo}&UserType=${userType}&peroid=${period}&year=${year}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            request_token: requestToken,
          },
          body: JSON.stringify(formattedData),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "KPI details saved successfully",
          icon: "success",
        });
        fetchExistingData(); // Refresh data after successful save
      } else {
        throw new Error("Failed to save KPI details");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to save KPI details",
        icon: "error",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container flex justify-center items-center min-h-[200px]">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="bg-white shadow-lg p-6 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-6">KPI Entry</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-14 py-4 text-left">
                  Criteria
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Goal Title
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Target Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Weightage (%)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Score
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(criteriaTypes).map(([key, criteria]) => (
                <React.Fragment key={key}>
                  <tr className="bg-gray-100">
                    <td
                      colSpan="6"
                      className="border border-gray-300 px-4 py-2 font-bold"
                    >
                      {criteria}
                      {!isCriteriaDisabled(key) && (
                        <button
                          className="bg-blue-500 text-white ml-4 py-1 px-3 rounded"
                          onClick={() => handleAddRow(key)}
                        >
                          Add Row
                        </button>
                      )}
                    </td>
                  </tr>
                  {rows
                    .filter((row) => row.criteria === key)
                    .map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            className="w-full px-2 py-1 border rounded"
                            value={row.goalTitle}
                            onChange={(e) =>
                              handleInputChange(
                                rows.indexOf(row),
                                "goalTitle",
                                e.target.value
                              )
                            }
                            placeholder="Enter Goal Title"
                            disabled={isCriteriaDisabled(key)}
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <DatePicker
                            selected={row.targetDate}
                            onChange={(date) =>
                              handleInputChange(
                                rows.indexOf(row),
                                "targetDate",
                                date
                              )
                            }
                            className="w-full px-2 py-1 border rounded"
                            disabled={isCriteriaDisabled(key)}
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded"
                            value={row.weightage}
                            onChange={(e) =>
                              handleInputChange(
                                rows.indexOf(row),
                                "weightage",
                                e.target.value
                              )
                            }
                            placeholder="Enter Weightage"
                            disabled={isCriteriaDisabled(key)}
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded"
                            value={row.fullScore}
                            onChange={(e) =>
                              handleInputChange(
                                rows.indexOf(row),
                                "fullScore",
                                e.target.value
                              )
                            }
                            placeholder="Enter Full Score"
                            disabled={isCriteriaDisabled(key)}
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <button
                            className="bg-red-500 text-white py-1 px-3 rounded"
                            onClick={() => handleDeleteRow(rows.indexOf(row))}
                            disabled={isCriteriaDisabled(key)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-6 space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveKPI;