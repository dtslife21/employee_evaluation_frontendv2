
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../../src/Context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const HRAspectsModal = ({ closePopup, toggleModal,onSave }) => {
//   const [trainingData, setTrainingData] = useState([]);
//   const [trainingData1, setTrainingData1] = useState([]);
//   const [criticalIncidents, setCriticalIncidents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const [marks, setMarks] = useState({
//     achievements: 0,
//     people: 0,
//     managerial: 0,
//     adaptive: 0,
//   });

//   const calculateTotal = () => {
//     return (
//       marks.achievements + marks.people + marks.managerial + marks.adaptive
//     );
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setMarks((prev) => ({
//       ...prev,
//       [name]: parseInt(value) || 0,
//     }));
//   };
//   const [attendanceSummary, setAttendanceSummary] = useState([]);
//   const [attendanceDetails, setAttendanceDetails] = useState([]);
//   const { request_token } = useAuth();
//   const [shortLeave, setShortLeave] = useState(0);
//   const [Short_leave, setShort_leave] = useState(0);
//   const [employee, setEmployee] = useState(null);
//   const [lateOccasions, setLateOccasions] = useState(0);
//   const [extraHours, setExtraHours] = useState(0);
//   const [offences, setOffences] = useState([]);
//   const [commendations, setCommendations] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   //const [trainingData, setTrainingData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getCurrentDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
//     const day = String(today.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = parseInt(localStorage.getItem("year"));
//         const periodType = localStorage.getItem("period") || "defaultPeriod";
//         const userType = localStorage.getItem("userType") || "Ex";
//         const response = await axios.get(
//           "/Evaluation/GetTrainingIdentificationData",
//           {
//             params: {
//               serviceNo,
//               year,
//               periodType,
//               UserType: userType,
//             },
//             headers: {
//               request_token,
//             },
//           }
//         );

//         if (response.status === 200 && response.data.StatusCode === 200) {
//           setTrainingData1(response.data.ResultSet || []);
//         } else {
//           throw new Error("Failed to fetch course data.");
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     const fetchTrainingData = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const userType = localStorage.getItem("userType") || "Ex";
//         const response = await axios.get(
//           "/Evaluation/GetTrainingAttendData",
//           {
//             params: {
//               serviceNo,
//               UserType: userType,
//             },
//             headers: {
//               request_token,
//             },
//           }
//         );
//         setTrainingData(response.data.ResultSet || []);
//       } catch (error) {
//         console.error("Error fetching training data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTrainingData();
//   }, []);

//   useEffect(() => {
//     const fetchCriticalIncidents = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = parseInt(localStorage.getItem("year"));
//         const periodType = localStorage.getItem("period") || "defaultPeriod";
//         const userType = localStorage.getItem("userType") || "Ex";

//         const response = await axios.get(
//           "/Evaluation/GetCriticalIncident",
//           {
//             params: {
//               serviceNo,
//               year,
//               periodType,
//               UserType: userType,
//             },
//             headers: {
//               request_token,
//             },
//           }
//         );

//         const result = response.data.ResultSet;
//         setCriticalIncidents(result || []);
//       } catch (error) {
//         console.error("Error fetching critical incidents data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCriticalIncidents();
//   }, []);

//   useEffect(() => {
//     const fetchOffencesData = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = parseInt(localStorage.getItem("year"));
//         const periodType = localStorage.getItem("period") || "defaultPeriod";
//         const userType = localStorage.getItem("userType") || "Ex";

//         const response = await axios.get(
//           "Evaluation/GetCommendationData",
//           {
//             params: {
//               serviceNo,
//               year,
//               periodType,
//               UserType: userType,
//             },
//             headers: {
//               request_token,
//             },
//           }
//         );

//         const result = response.data.ResultSet;
//         setOffences(result.CommendationDataGrid2 || []);
//       } catch (error) {
//         console.error("Error fetching offences data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOffencesData();
//   }, []);

//   useEffect(() => {
//     const fetchCommendationData = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = parseInt(localStorage.getItem("year"));
//         const periodType = localStorage.getItem("period") || "defaultPeriod";
//         const userType = localStorage.getItem("userType") || "Ex";
//         const response = await axios.get(
//           "/Evaluation/GetCommendationData",
//           {
//             params: {
//               serviceNo,
//               year,
//               periodType,
//               UserType: userType,
//             },
//             headers: {
//               request_token,
//             },
//           }
//         );

//         const result = response.data.ResultSet;
//         const combinedCommendations = [
//           ...(result.CommendationDataGrid1 || []),
//           ...(result.CommendationDataGrid2 || []),
//         ];
//         setCommendations(combinedCommendations);
//       } catch (error) {
//         console.error("Error fetching commendation data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCommendationData();
//   }, []);

//   useEffect(() => {
//     const fetchAttendanceSummary = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = parseInt(localStorage.getItem("year"));
//         const periodType = localStorage.getItem("period") || "defaultPeriod";
//         const userType = localStorage.getItem("userType") || "Ex";
  
//         const response = await axios.get(
//           "http://localhost:57587/Evaluation/GetAttendanceSummaryData",
//           {
//             params: {
//               serviceNo,
//               year,
//               periodType,
//               UserType: userType,
//             },
//             headers: {
//               request_token,
//             },
//           }
//         );
  
//         const result = response.data.ResultSet;
  
//         if (result && result.AttendanceSummaryDataGrid1.length === 0 && result.AttendanceSummaryDataGrid2.length === 0) {
//           // Clear localStorage if the response is empty
//           localStorage.removeItem("serviceNo");
//           localStorage.removeItem("year");
//           localStorage.removeItem("period");
//           localStorage.removeItem("userType");
  
//           setAttendanceDetails([]);
//           setAttendanceSummary([]);
          
//         } else {
//           // If there's data, set the state as usual
//           setShortLeave(parseInt(result.Short_leave, 10) || 0);
//           setAttendanceDetails(result.AttendanceSummaryDataGrid2);
//           setAttendanceSummary(result.AttendanceSummaryDataGrid1);
//           setLateOccasions(result.Late_occassions);
//           setExtraHours(result.Extra_Hours_Performed);
//         }
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching attendance summary data:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchAttendanceSummary();
//   }, []);
  
//   const CourcetoggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
//   // Calculate the percentage of short leave taken
//   const totalShortLeave = 24;
//   const shortLeavePercentage =
//     totalShortLeave > 0 ? (shortLeave / totalShortLeave) * 100 : 0;

//   // Categorize the percentage into ranges
//   const shortLeaveRanges = {
//     "0-50%": shortLeavePercentage <= 50 ? 1 : 0,
//     "50-75%": shortLeavePercentage > 50 && shortLeavePercentage <= 75 ? 1 : 0,
//     "75-100%": shortLeavePercentage > 75 ? 1 : 0,
//   };
//   const leaveDescription = "Casual Leave";
//   const calculateActualScore = (percentage, description) => {
//     const scoringCriteria = {
//       "Annual Leave": { "0-50%": 4, "50-75%": 3, "75-100%": 2 },
//       "Casual Leave": { "0-50%": 2, "50-75%": 1, "75-100%": 0 },
//       "Sick Leave": { "0-50%": 1, "50-75%": 0, "75-100%": 0 },
//     };

//     if (percentage <= 50) {
//       return scoringCriteria[description]["0-50%"];
//     } else if (percentage <= 75) {
//       return scoringCriteria[description]["50-75%"];
//     } else {
//       return scoringCriteria[description]["75-100%"];
//     }
//   };
//   const calculatedScore = calculateActualScore(
//     shortLeavePercentage,
//     leaveDescription
//   );

//   const calculationResult = lateOccasions <= 5 ? 1 : 0;
//   const allocatedMaxScores = {
//     "Annual Leave": 4,
//     "Casual Leave": 2,
//     "Sick Leave": 1,
//   };

//   const extraHoursPercentage = 500 > 0 ? (extraHours / 2080) * 100 : 0;
//   const calculatedValue =
//     extraHoursPercentage <= 15
//       ? 0
//       : extraHoursPercentage <= 35
//         ? 2
//         : 1;

//   const totalActualScore = attendanceSummary.reduce((total, item) => {
//     const totalVal = parseFloat(item.Total) || 0;
//     const takenVal = parseFloat(item.Taken) || 0;
    
//     const balancePercentage = totalVal > 0 ? ((takenVal / totalVal) * 100).toFixed(2) : "0.00";
//     const actualScore = calculateActualScore(parseFloat(balancePercentage), item.Description);
//     return total + actualScore;
//   }, 0);

//   const tActualScore = attendanceSummary.reduce((total, item) => {
//     const totalVal = parseFloat(item.Total) || 0;
//     const takenVal = parseFloat(item.Taken) || 0;

//     const balancePercentage = totalVal > 0 ? ((takenVal / totalVal) * 100).toFixed(2) : "0.00";
//     const actualScore = calculateActualScore(parseFloat(balancePercentage), item.Description);
//     return total + actualScore;
//   }, 0);

//   const calculateTotalScore = () => {
//     const totalActualScore = attendanceDetails.reduce((total, item) => {
//       const maxScore = item.LeaveType === "Nopay" ? 2 : 1;
//       const aScore = item.Days > 10 ? 0 : maxScore;
//       return total + aScore;
//     }, 0) + tActualScore + calculatedScore + calculationResult + calculatedValue;

//     return totalActualScore;
//   };
//   const year = localStorage.getItem("year");

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]"
//         style={{ width: "1250px", maxWidth: "100%" }}
//         onClick={toggleModal}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">HR Aspects Score</h2>
//           <button
//             className="text-red-500 text-2xl font-semibold"
//             onClick={closePopup}
//           >
//             &times;
//           </button>
//         </div>
//         {/********************************************* Attendance Summary Section ****************************************************/}
//         <div className="p-4 space-y-6">
//           {/* Attendance Summary Section */}
//           {/* Attendance Summary Section */}
//           {/* Attendance Summary */}
//           {(shortLeave || lateOccasions || extraHoursPercentage) ? (
//           <div className="p-6 rounded-lg shadow-md space-y-4">
//             <h2 className="text-lg font-semibold">
//               (B). ATTENDANCE SUMMARY {year}.01.01
//             </h2>
//             <div className="grid grid-cols-2 gap-4">
//               {/********************************************* Left Side Tables ***************************************/}
//               <div className="space-y-4">
//                 {/* Table 1 */}
//                 <table className="table-auto w-full border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border px-4 py-2 text-left">Description</th>
//                       <th className="border px-4 py-2 text-center">Total</th>
//                       <th className="border px-4 py-2 text-center">Taken</th>
//                       <th className="border px-4 py-2 text-center"> (%)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {attendanceSummary.map((item, index) => {
//                       const total = parseFloat(item.Total) || 0;
//                       const taken = parseFloat(item.Taken) || 0;
//                       const balance = parseFloat(item.Balance) || 0;
//                       const balancePercentage = total > 0 ? ((taken / total) * 100).toFixed(2) : "0.00";

//                       return (
//                         <tr key={index}>
//                           <td className="border px-4 py-2">{item.Description}</td>
//                           <td className="border px-4 py-2 text-center">{total}</td>
//                           <td className="border px-4 py-2 text-center">{taken}</td>
//                           <td className="border px-4 py-2 text-center">{balancePercentage}%</td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//                 {/* Table 2 */}
//                 <table className="table-auto border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border px-4 py-2 text-left">Leave Type</th>
//                       <th className="border px-4 py-2 text-center">Days</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {attendanceDetails.map((item, index) => (
//                       <tr key={index}>
//                         <td className="border px-4 py-2">{item.LeaveType}</td>
//                         <td className="border px-4 py-2 text-center">{item.Days || 0}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 {/* Table 3 */}
//                 <table className="table-auto border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border px-4 py-2 text-left"></th>
//                       <th className="border px-4 py-2 text-left">Total</th>
//                       <th className="border px-4 py-2 text-center">Taken</th>
//                       <th className="border px-4 py-2 text-center">%</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border px-4 py-2">Short Leave Taken</td>
//                       <td className="border px-4 py-2 text-center">24</td>
//                       <td className="border px-4 py-2 text-center">{shortLeave}</td>
//                       <td className="border px-4 py-2 text-center">
//                         {24 > 0 ? ((shortLeave / 24) * 100).toFixed(2) : "0.00"}%
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 {/* Table 4 */}
//                 <table className="table-auto border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border px-4 py-2 text-left"></th>
//                       <th className="border px-4 py-2 text-center">Days</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border px-4 py-2">Late Occasions</td>
//                       <td className="border px-4 py-2 text-center">{lateOccasions}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 {/* Table 5 */}
//                 <table className="table-auto border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border px-4 py-2 text-left"></th>
//                       <th className="border px-4 py-2 text-center">%</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border px-4 py-2">Extra Hours Performed</td>                   
//                       <td className="border px-4 py-2 text-center">
//                         {extraHoursPercentage.toFixed(2)}%
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               {/************************************************* Right Side Tables ***************************************/}
//               <div className="space-y-4">
//                 {/* Table 6 */}
//                 <table className="table-auto w-5/8 border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border px-4 py-2 text-left">Actual Score</th>
//                       <th className="border px-4 py-2 text-left">Allocated Max</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {attendanceSummary.map((item, index) => {
//                       const total = parseFloat(item.Total) || 0;
//                       const taken = parseFloat(item.Taken) || 0;
//                       //const balance = total - taken;
//                       const balancePercentage = total > 0 ? ((taken / total) * 100).toFixed(2) : "0.00";
//                       const actualScore = calculateActualScore(parseFloat(balancePercentage), item.Description);
//                       const allocatedMaxScore = allocatedMaxScores[item.Description] || 0;

//                       return (
//                         <tr key={index}>

//                           <td className="border px-4 py-2 text-center"
//                             style={{ backgroundColor: "rgb(253, 242, 233)" }}
//                           >{actualScore}</td>
//                           <td className="border px-4 py-2 text-center">{allocatedMaxScore}</td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>

//                 {/* Table 7 */}
//                 <div className="relative pt-8">
//                   <table className="table-auto w-1/2 border-collapse border border-gray-300">
//                     <tbody>
//                       {attendanceDetails.map((item, index) => {
//                         const maxScore = item.LeaveType === "Nopay" ? 2 : 1;
//                         const aScore = item.Days > 10 ? 0 : maxScore;
//                         return (
//                           <tr key={index}>
//                             <td
//                               className="border px-4 py-2 text-center"
//                               style={{ backgroundColor: "rgb(253, 242, 233)" }}
//                             >
//                               {aScore}
//                             </td>
//                             <td className="border px-4 py-2 text-center">{maxScore}</td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className="relative pt-10">
//                   {/* Table 8 */}
//                   <table className="table-auto w-1/2 border-collapse border border-gray-300">
//                     <thead>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td
//                           style={{ backgroundColor: "rgb(253, 242, 233)" }}
//                           className="border px-4 py-2 text-center">{calculatedScore}</td>
//                         <td className="border px-4 py-2 text-center">2</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//                 {/* Table 9 */}
//                 <div className="relative pt-10">
//                   <table className="table-auto w-1/2 border-collapse border border-gray-300">
//                     <thead>

//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td
//                           style={{ backgroundColor: "rgb(253, 242, 233)" }}
//                           className="border px-4 py-2 text-center">{calculationResult}</td>
//                         <td
//                           className="border px-4 py-2 text-center"
//                         >
//                           1
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Table 10 */}
//                 <div className="relative pt-10">
//                   <table className="table-auto w-1/2 border-collapse border border-gray-300">
//                     <thead>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="border px-4 py-2 text-center"
//                           style={{ backgroundColor: "rgb(253, 242, 233)" }}
//                         >{calculatedValue}</td>
//                         <td
//                           className="border px-4 py-2 text-center"
//                         >
//                           2
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className="text-right" >
//                   <strong style={{ color: 'rgb(13, 170, 26)' }}>Total Actual Score: <span>{calculateTotalScore()}</span></strong>
//                   <br />
//                   <strong style={{ color: 'rgb(64, 23, 214)' }}>Total Allocated Max Score: 15</strong>
                 
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null}       
//           {/************************************  Disciplinary Actions Section ******************************************/}
//           <div className="p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">
//               (C). DISCIPLINARY ACTIONS / COMMENDATIONS {year}.01.01
//             </h2>
//             <div className="space-y-6">
//               {/* Commendations */}
//               <div>
//                 <h3 className="font-semibold mb-2">Commendations</h3>
//                 <table className="table-auto border-collapse border border-gray-300 w-full">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="border border-gray-300 px-4 py-2">#</th>
//                       <th className="border border-gray-300 px-4 py-2">Date</th>
//                       <th className="border border-gray-300 px-4 py-2">
//                         Incident
//                       </th>
//                       <th className="border border-gray-300 px-4 py-2">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {isLoading ? (
//                       <tr>
//                         <td
//                           colSpan="4"
//                           className="text-center border border-gray-300 px-4 py-2"
//                         >
//                           Loading...
//                         </td>
//                       </tr>
//                     ) : commendations.length > 0 ? (
//                       commendations.map((item, index) => (
//                         <tr key={index}>
//                           <td className="border border-gray-300 px-4 py-2 text-center">
//                             {index + 1}
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             {new Date(item.Date).toLocaleDateString()}
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             {item.Incident}
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             {item.Action}
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="4"
//                           className="text-center border border-gray-300 px-4 py-2"
//                         >
//                           No data found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               {/***************************************************  Offences ****************************************************/}
//               <div>
//                 <h3 className="font-semibold mb-2">Offences</h3>
//                 <table className="table-auto border-collapse border border-gray-300 w-full">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="border border-gray-300 px-4 py-2">#</th>
//                       <th className="border border-gray-300 px-4 py-2">Date</th>
//                       <th className="border border-gray-300 px-4 py-2">
//                         Incident
//                       </th>
//                       <th className="border border-gray-300 px-4 py-2">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {isLoading ? (
//                       <tr>
//                         <td
//                           colSpan="4"
//                           className="text-center border border-gray-300 px-4 py-2"
//                         >
//                           Loading...
//                         </td>
//                       </tr>
//                     ) : offences.length > 0 ? (
//                       offences.map((item, index) => (
//                         <tr key={index}>
//                           <td className="border border-gray-300 px-4 py-2 text-center">
//                             {index + 1}
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             {new Date(item.Date).toLocaleDateString()}
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             {item.Incident}
//                           </td>
//                           <td className="border border-gray-300 px-4 py-2">
//                             {item.Action}
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="4"
//                           className="text-center border border-gray-300 px-4 py-2"
//                         >
//                           No data found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/************************************************  Critical Incidents Section ********************************/}
//           <div className="p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">
//               (D). CRITICAL INCIDENTS {year}.01.01
//             </h2>
//             <div>
//               {/* Critical Incidents Table */}
//               <h3 className="font-semibold mb-2">Commendations</h3>
//               <table className="table-auto border-collapse border border-gray-300 w-full">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border border-gray-300 px-4 py-2">#</th>
//                     <th className="border border-gray-300 px-4 py-2">Date</th>
//                     <th className="border border-gray-300 px-4 py-2">
//                       Evaluation
//                     </th>
//                     <th className="border border-gray-300 px-4 py-2">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {isLoading ? (
//                     <tr>
//                       <td
//                         colSpan="4"
//                         className="text-center border border-gray-300 px-4 py-2"
//                       >
//                         Loading...
//                       </td>
//                     </tr>
//                   ) : criticalIncidents.length > 0 ? (
//                     criticalIncidents.map((item, index) => (
//                       <tr key={index}>
//                         <td className="border border-gray-300 px-4 py-2 text-center">
//                           {index + 1}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {new Date(item.Date).toLocaleDateString()}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {item.Evaluation}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {item.Status}
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="4"
//                         className="text-center border border-gray-300 px-4 py-2"
//                       >
//                         No data found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-end mt-4">
//         <button
//             className="bg-red-500 text-white px-4 py-2 rounded"
//             onClick={closePopup}
//           >
//             Close
//           </button>
//           </div>
//       </div>
//     </div>
//   );
// };


// export default HRAspectsModal;



import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../src/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const HRAspectsModal = ({ closePopup, toggleModal,onSave }) => {
  const [trainingData, setTrainingData] = useState([]);
  const [trainingData1, setTrainingData1] = useState([]);
  const [criticalIncidents, setCriticalIncidents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [marks, setMarks] = useState({
    achievements: 0,
    people: 0,
    managerial: 0,
    adaptive: 0,
  });

  const calculateTotal = () => {
    return (
      marks.achievements + marks.people + marks.managerial + marks.adaptive
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks((prev) => ({
      ...prev,
      [name]: parseInt(value) || 0,
    }));
  };
  const [attendanceSummary, setAttendanceSummary] = useState([]);
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const { request_token } = useAuth();
  const [shortLeave, setShortLeave] = useState(0);
  const [Short_leave, setShort_leave] = useState(0);
  const [employee, setEmployee] = useState(null);
  const [lateOccasions, setLateOccasions] = useState(0);
  const [extraHours, setExtraHours] = useState(0);
  const [offences, setOffences] = useState([]);
  const [commendations, setCommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [trainingData, setTrainingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = parseInt(localStorage.getItem("year"));
        const periodType = localStorage.getItem("period") || "defaultPeriod";
        const userType = localStorage.getItem("userType") || "Ex";
        const response = await axios.get(
          "/Evaluation/GetTrainingIdentificationData",
          {
            params: {
              serviceNo,
              year,
              periodType,
              UserType: userType,
            },
            headers: {
              request_token,
            },
          }
        );

        if (response.status === 200 && response.data.StatusCode === 200) {
          setTrainingData1(response.data.ResultSet || []);
        } else {
          throw new Error("Failed to fetch course data.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchTrainingData = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const userType = localStorage.getItem("userType") || "Ex";
        const response = await axios.get(
          "/Evaluation/GetTrainingAttendData",
          {
            params: {
              serviceNo,
              UserType: userType,
            },
            headers: {
              request_token,
            },
          }
        );
        setTrainingData(response.data.ResultSet || []);
      } catch (error) {
        console.error("Error fetching training data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrainingData();
  }, []);

  useEffect(() => {
    const fetchCriticalIncidents = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = parseInt(localStorage.getItem("year"));
        const periodType = localStorage.getItem("period") || "defaultPeriod";
        const userType = localStorage.getItem("userType") || "Ex";

        const response = await axios.get(
          "/Evaluation/GetCriticalIncident",
          {
            params: {
              serviceNo,
              year,
              periodType,
              UserType: userType,
            },
            headers: {
              request_token,
            },
          }
        );

        const result = response.data.ResultSet;
        setCriticalIncidents(result || []);
      } catch (error) {
        console.error("Error fetching critical incidents data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCriticalIncidents();
  }, []);

  useEffect(() => {
    const fetchOffencesData = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = parseInt(localStorage.getItem("year"));
        const periodType = localStorage.getItem("period") || "defaultPeriod";
        const userType = localStorage.getItem("userType") || "Ex";

        const response = await axios.get(
          "Evaluation/GetCommendationData",
          {
            params: {
              serviceNo,
              year,
              periodType,
              UserType: userType,
            },
            headers: {
              request_token,
            },
          }
        );

        const result = response.data.ResultSet;
        setOffences(result.CommendationDataGrid2 || []);
      } catch (error) {
        console.error("Error fetching offences data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffencesData();
  }, []);

  useEffect(() => {
    const fetchCommendationData = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = parseInt(localStorage.getItem("year"));
        const periodType = localStorage.getItem("period") || "defaultPeriod";
        const userType = localStorage.getItem("userType") || "Ex";
        const response = await axios.get(
          "/Evaluation/GetCommendationData",
          {
            params: {
              serviceNo,
              year,
              periodType,
              UserType: userType,
            },
            headers: {
              request_token,
            },
          }
        );

        const result = response.data.ResultSet;
        const combinedCommendations = [
          ...(result.CommendationDataGrid1 || []),
          ...(result.CommendationDataGrid2 || []),
        ];
        setCommendations(combinedCommendations);
      } catch (error) {
        console.error("Error fetching commendation data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommendationData();
  }, []);

  useEffect(() => {
    const fetchAttendanceSummary = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = parseInt(localStorage.getItem("year"));
        const periodType = localStorage.getItem("period") || "defaultPeriod";
        const userType = localStorage.getItem("userType") || "Ex";
  
        const response = await axios.get(
          "http://localhost:57587/Evaluation/GetAttendanceSummaryData",
          {
            params: {
              serviceNo,
              year,
              periodType,
              UserType: userType,
            },
            headers: {
              request_token,
            },
          }
        );
  
        const result = response.data.ResultSet;
  
        if (result && result.AttendanceSummaryDataGrid1.length === 0 && result.AttendanceSummaryDataGrid2.length === 0) {
          // Clear localStorage if the response is empty
          localStorage.removeItem("serviceNo");
          localStorage.removeItem("year");
          localStorage.removeItem("period");
          localStorage.removeItem("userType");
  
          setAttendanceDetails([]);
          setAttendanceSummary([]);
          
        } else {
          // If there's data, set the state as usual
          setShortLeave(parseInt(result.Short_leave, 10) || 0);
          setAttendanceDetails(result.AttendanceSummaryDataGrid2);
          setAttendanceSummary(result.AttendanceSummaryDataGrid1);
          setLateOccasions(result.Late_occassions);
          setExtraHours(result.Extra_Hours_Performed);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching attendance summary data:", error);
        setIsLoading(false);
      }
    };
    fetchAttendanceSummary();
  }, []);
  
  const CourcetoggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // Calculate the percentage of short leave taken
  const totalShortLeave = 24;
  const shortLeavePercentage =
    totalShortLeave > 0 ? (shortLeave / totalShortLeave) * 100 : 0;

  // Categorize the percentage into ranges
  const shortLeaveRanges = {
    "0-50%": shortLeavePercentage <= 50 ? 1 : 0,
    "50-75%": shortLeavePercentage > 50 && shortLeavePercentage <= 75 ? 1 : 0,
    "75-100%": shortLeavePercentage > 75 ? 1 : 0,
  };
  const leaveDescription = "Casual Leave";
  const calculateActualScore = (percentage, description) => {
    const scoringCriteria = {
      "Annual Leave": { "0-50%": 4, "50-75%": 3, "75-100%": 2 },
      "Casual Leave": { "0-50%": 2, "50-75%": 1, "75-100%": 0 },
      "Sick Leave": { "0-50%": 1, "50-75%": 0, "75-100%": 0 },
    };

    if (percentage <= 50) {
      return scoringCriteria[description]["0-50%"];
    } else if (percentage <= 75) {
      return scoringCriteria[description]["50-75%"];
    } else {
      return scoringCriteria[description]["75-100%"];
    }
  };
  const calculatedScore = calculateActualScore(
    shortLeavePercentage,
    leaveDescription
  );

  const calculationResult = lateOccasions <= 5 ? 1 : 0;
  const allocatedMaxScores = {
    "Annual Leave": 4,
    "Casual Leave": 2,
    "Sick Leave": 1,
  };

  const extraHoursPercentage = 500 > 0 ? (extraHours / 2080) * 100 : 0;
  const calculatedValue =
    extraHoursPercentage <= 15
      ? 0
      : extraHoursPercentage <= 35
        ? 2
        : 1;

  const totalActualScore = attendanceSummary.reduce((total, item) => {
    const totalVal = parseFloat(item.Total) || 0;
    const takenVal = parseFloat(item.Taken) || 0;
    
    const balancePercentage = totalVal > 0 ? ((takenVal / totalVal) * 100).toFixed(2) : "0.00";
    const actualScore = calculateActualScore(parseFloat(balancePercentage), item.Description);
    return total + actualScore;
  }, 0);

  const tActualScore = attendanceSummary.reduce((total, item) => {
    const totalVal = parseFloat(item.Total) || 0;
    const takenVal = parseFloat(item.Taken) || 0;

    const balancePercentage = totalVal > 0 ? ((takenVal / totalVal) * 100).toFixed(2) : "0.00";
    const actualScore = calculateActualScore(parseFloat(balancePercentage), item.Description);
    return total + actualScore;
  }, 0);

  const calculateTotalScore = () => {
    const totalActualScore = attendanceDetails.reduce((total, item) => {
      const maxScore = item.LeaveType === "Nopay" ? 2 : 1;
      const aScore = item.Days > 10 ? 0 : maxScore;
      return total + aScore;
    }, 0) + tActualScore + calculatedScore + calculationResult + calculatedValue;

    return totalActualScore;
  };
  const year = localStorage.getItem("year");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]"
        style={{ width: "1250px", maxWidth: "100%" }}
        onClick={toggleModal}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">HR Aspects Score</h2>
          <button
            className="text-red-500 text-2xl font-semibold"
            onClick={closePopup}
          >
            &times;
          </button>
        </div>
        {/********************************************* Attendance Summary Section ****************************************************/}
        <div className="p-4 space-y-6">
          {/* Attendance Summary Section */}
          {/* Attendance Summary Section */}
          {/* Attendance Summary */}
          {(shortLeave || lateOccasions || extraHoursPercentage) ? (
          <div className="p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-semibold">
              (B). ATTENDANCE SUMMARY {year}.01.01
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/********************************************* Left Side Tables ***************************************/}
                <div className="space-y-4 overflow-x-auto">
                  {/* Table 1 */}
                  <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left">Description</th>
                        <th className="border px-4 py-2 text-center">Total</th>
                        <th className="border px-4 py-2 text-center">Taken</th>
                        <th className="border px-4 py-2 text-center"> (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceSummary.map((item, index) => {
                        const total = parseFloat(item.Total) || 0;
                        const taken = parseFloat(item.Taken) || 0;
                        const balancePercentage =
                          total > 0
                            ? ((taken / total) * 100).toFixed(2)
                            : "0.00";

                        return (
                          <tr key={index}>
                            <td className="border px-4 py-2">{item.Description}</td>
                            <td className="border px-4 py-2 text-center">{total}</td>
                            <td className="border px-4 py-2 text-center">{taken}</td>
                            <td className="border px-4 py-2 text-center">{balancePercentage}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* Table 2 */}
                  <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left">Leave Type</th>
                        <th className="border px-4 py-2 text-center">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceDetails.map((item, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">{item.LeaveType}</td>
                          <td className="border px-4 py-2 text-center">{item.Days || 0}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Table 3 */}
                  <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left"></th>
                        <th className="border px-4 py-2 text-center">Total</th>
                        <th className="border px-4 py-2 text-center">Taken</th>
                        <th className="border px-4 py-2 text-center">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Short Leave Taken</td>
                        <td className="border px-4 py-2 text-center">24</td>
                        <td className="border px-4 py-2 text-center">{shortLeave}</td>
                        <td className="border px-4 py-2 text-center">
                          {24 > 0 ? ((shortLeave / 24) * 100).toFixed(2) : "0.00"}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Table 4 */}
                  <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left"></th>
                        <th className="border px-4 py-2 text-center">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Late Occasions</td>
                        <td className="border px-4 py-2 text-center">{lateOccasions}</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Table 5 */}
                  <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left"></th>
                        <th className="border px-4 py-2 text-center">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Extra Hours Performed</td>
                        <td className="border px-4 py-2 text-center">{extraHoursPercentage.toFixed(2)}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/************************************************* Right Side Tables ***************************************/}
                <div className="space-y-4 overflow-x-auto">
                  {/* Table 6 */}
                  <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left">Actual Score</th>
                        <th className="border px-4 py-2 text-left">Allocated Max</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceSummary.map((item, index) => {
                        const total = parseFloat(item.Total) || 0;
                        const taken = parseFloat(item.Taken) || 0;
                        const balancePercentage =
                          total > 0
                            ? ((taken / total) * 100).toFixed(2)
                            : "0.00";
                        const actualScore = calculateActualScore(
                          parseFloat(balancePercentage),
                          item.Description
                        );
                        const allocatedMaxScore =
                          allocatedMaxScores[item.Description] || 0;
                        return (
                          <tr key={index}>
                            <td
                              className="border px-4 py-2 text-center"
                              style={{ backgroundColor: "rgb(253, 242, 233)" }}
                            >
                              {actualScore}
                            </td>
                            <td className="border px-4 py-2 text-center">{allocatedMaxScore}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* Table 7 */}
                  <div className="relative pt-10">
                    <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                      <tbody>
                        {attendanceDetails.map((item, index) => {
                          const maxScore = item.LeaveType === "Nopay" ? 2 : 1;
                          const aScore = item.Days > 10 ? 0 : maxScore;
                          return (
                            <tr key={index}>
                              <td
                                className="border px-4 py-2 text-center"
                                style={{ backgroundColor: "rgb(253, 242, 233)" }}
                              >
                                {aScore}
                              </td>
                              <td className="border px-4 py-2 text-center">{maxScore}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="relative pt-10">
                    {/* Table 8 */}
                    <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td
                            style={{ backgroundColor: "rgb(253, 242, 233)" }}
                            className="border px-4 py-2 text-center"
                          >
                            {calculatedScore}
                          </td>
                          <td className="border px-4 py-2 text-center">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Table 9 */}
                  <div className="relative pt-10">
                    <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td
                            style={{ backgroundColor: "rgb(253, 242, 233)" }}
                            className="border px-4 py-2 text-center"
                          >
                            {calculationResult}
                          </td>
                          <td className="border px-4 py-2 text-center">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Table 10 */}
                  <div className="relative pt-10">
                    <table className="w-full min-w-[600px] md:min-w-0 border-collapse border border-gray-300">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td
                            className="border px-4 py-2 text-center"
                            style={{ backgroundColor: "rgb(253, 242, 233)" }}
                          >
                            {calculatedValue}
                          </td>
                          <td className="border px-4 py-2 text-center">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-right">
                    <strong style={{ color: "rgb(13, 170, 26)" }}>
                      Total Actual Score: <span>{calculateTotalScore()}</span>
                    </strong>
                    <br />
                    <strong style={{ color: "rgb(64, 23, 214)" }}>
                      Total Allocated Max Score: 15
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/************************************  Disciplinary Actions Section ******************************************/}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              (C). DISCIPLINARY ACTIONS / COMMENDATIONS {year}.01.01
            </h2>
            <div className="space-y-6">
              {/* Commendations */}
              <div>
                <h3 className="font-semibold mb-2">Commendations</h3>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Incident
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center border border-gray-300 px-4 py-2"
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : commendations.length > 0 ? (
                      commendations.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {index + 1}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {new Date(item.Date).toLocaleDateString()}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.Incident}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.Action}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center border border-gray-300 px-4 py-2"
                        >
                          No data found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/***************************************************  Offences ****************************************************/}
              <div>
                <h3 className="font-semibold mb-2">Offences</h3>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Incident
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center border border-gray-300 px-4 py-2"
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : offences.length > 0 ? (
                      offences.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {index + 1}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {new Date(item.Date).toLocaleDateString()}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.Incident}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.Action}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center border border-gray-300 px-4 py-2"
                        >
                          No data found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/************************************************  Critical Incidents Section ********************************/}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              (D). CRITICAL INCIDENTS {year}.01.01
            </h2>
            <div>
              {/* Critical Incidents Table */}
              <h3 className="font-semibold mb-2">Commendations</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Evaluation
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : criticalIncidents.length > 0 ? (
                    criticalIncidents.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {new Date(item.Date).toLocaleDateString()}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.Evaluation}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.Status}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        No data found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
        <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={closePopup}
          >
            Close
          </button>
          </div>
      </div>
    </div>
  );
};


export default HRAspectsModal;
