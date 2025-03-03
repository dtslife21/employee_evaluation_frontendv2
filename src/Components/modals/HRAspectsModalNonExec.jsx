// import React, { useState } from "react";
// import EvaluationHistoryPopup from "./EvaluationHistoryPopup";

// const trainingData = [
//   {
//     id: 14,
//     year: 2005,
//     month: "January",
//     course: "105042 - STRATEGIC MANAGEMENT & BUDGETARY CONTROL",
//     status: "Completed",
//     skill: "-",
//   },
//   {
//     id: 15,
//     year: 2005,
//     month: "January",
//     course: "105010 - LEADERSHIP SKILLS",
//     status: "Completed",
//     skill: "-",
//   },
//   {
//     id: 16,
//     year: 2004,
//     month: "April",
//     course: "107003 - FIRE FIGHTING & FIRE PREVENTION",
//     status: "Not Completed",
//     skill: "-",
//   },
//   {
//     id: 17,
//     year: 2004,
//     month: "April",
//     course: "105012 - MANAGEMENT DEVELOPMENT FOR ENGINEERS/MANAGERS",
//     status: "Completed",
//     skill: "-",
//   },
//   {
//     id: 18,
//     year: 2004,
//     month: "August",
//     course: "103001 - ADVANCED ENGLISH",
//     status: "Completed",
//     skill: "-",
//   },
//   {
//     id: 19,
//     year: 2004,
//     month: "January",
//     course: "105032 - INDUSTRIAL RELATIONS",
//     status: "Completed",
//     skill: "-",
//   },
//   {
//     id: 20,
//     year: 2002,
//     month: "August",
//     course: "202063 - BEATING STRESS, TENSION, AND THE BLUES",
//     status: "Completed",
//     skill: "-",
//   },
//   {
//     id: 21,
//     year: 2002,
//     month: "March",
//     course: "202004 - CHANGE OF ATTITUDES",
//     status: "Completed",
//     skill: "-",
//   },
//   {
//     id: 22,
//     year: 2002,
//     month: "January",
//     course: "202003 - ISO AWARENESS PROGRAMME",
//     status: "Completed",
//     skill: "-",
//   },
// ];
// const HRAspectsModal = ({ closePopup }) => {
//   // Define state inside the component
//   // State to store selected values for each section
//   const [selectedValues, setSelectedValues] = useState(
//     Array(7).fill(null) // For the first 7 criteria
//   );
//   const [hrSelectedValues, setHrSelectedValues] = useState(
//     Array(3).fill(null) // For Attendance, Punctuality, and Discipline
//   );
//   // Criteria Lists
//   const criteriaList = [
//     "WORK KNOWLEDGE",
//     "QUALITY OF WORK",
//     "APPLICATION AND EFFICIENCY",
//     "SAFETY CONSCIOUSNESS AND CARE AND USE OF COMPANY PROPERTY",
//     "INITIATIVE WILLINGNESS",
//     "CO-OPERATION AND TEAM WORK",
//     "SITUATIONAL FLEXIBILITY",
//   ];
//   const hrCriteriaList = ["ATTENDANCE", "PUNCTUALITY", "DISCIPLINE"];
//   // Update selected value for a specific criterion
//   const handleSelection = (index, value, isHr = false) => {
//     if (isHr) {
//       const newHrValues = [...hrSelectedValues];
//       newHrValues[index] = value;
//       setHrSelectedValues(newHrValues);
//     } else {
//       const newValues = [...selectedValues];
//       newValues[index] = value;
//       setSelectedValues(newValues);
//     }
//   };
//   // Calculate subtotals
//   const subtotal = selectedValues.reduce((sum, value) => sum + (value || 0), 0);
//   const hrSubtotal = hrSelectedValues.reduce(
//     (sum, value) => sum + (value || 0),
//     0
//   );
//   // Calculate grand total
//   const grandTotal = subtotal + hrSubtotal;
//   const [recommendations, setRecommendations] = useState({
//     engineer: false,
//     departmentalHead: false,
//     divisionHead: false,
//     evaluatedBy: "",
//     checkedBy: "",
//     approvedBy: "",
//     evaluationDiscussed: "",
//     engineerComments: "",
//     departmentalComments: "",
//     divisionRecommendations: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setRecommendations((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]"
//         style={{ width: "1250px", maxWidth: "100%" }}
//       >
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">HR Aspects Non Executive.</h2>
//           <button
//             className="text-red-500 text-2xl font-semibold"
//             onClick={closePopup}
//           >
//             &times;
//           </button>
//         </div>
//         {/* Attendance Summary Section */}
//         <div className="p-4 space-y-6">
//           {/* Attendance Summary Section */}
//           <div className="p-4">
//             {/* Attendance Summary */}
//             <div className="p-6 rounded-lg shadow-md space-y-4">
//               <h2 className="text-lg font-semibold">
//                 (B). ATTENDANCE SUMMARY (FROM: 2021-01-01 TO 2024-11-25)
//               </h2>
//               <div className="flex space-x-6">
//                 {/* Left Table */}
//                 <table className="table-auto border-collapse border border-gray-300 w-2/3">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border border-gray-300 px-4 py-2 text-left">
//                         Description
//                       </th>
//                       <th className="border border-gray-300 px-4 py-2 text-center">
//                         Total
//                       </th>
//                       <th className="border border-gray-300 px-4 py-2 text-center">
//                         Taken
//                       </th>
//                       <th className="border border-gray-300 px-4 py-2 text-center">
//                         Balance
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border border-gray-300 px-4 py-2">
//                         Annual Leave
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         14
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         13.5
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         0.5
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="border border-gray-300 px-4 py-2">
//                         Casual Leave
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         7
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         6.5
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         0.5
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="border border-gray-300 px-4 py-2">
//                         Sick Leave
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         21
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         20.5
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         0.5
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 {/* Right Summary */}
//                 <div className="w-1/3 space-y-4">
//                   <table className="table-auto border-collapse border border-gray-300 w-full">
//                     <thead>
//                       <tr className="bg-gray-200">
//                         <th className="border border-gray-300 px-4 py-2 text-left">
//                           Leave Type
//                         </th>
//                         <th className="border border-gray-300 px-4 py-2 text-center">
//                           Days
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="border border-gray-300 px-4 py-2">
//                           Nopay
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2 text-center"></td>
//                       </tr>
//                       <tr>
//                         <td className="border border-gray-300 px-4 py-2">
//                           Not Entered
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2 text-center"></td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="space-y-1">
//                     <p>
//                       <strong>Short leave Taken:</strong> 6
//                     </p>
//                     <p>
//                       <strong>Late Occasions:</strong> 0
//                     </p>
//                     <p>
//                       <strong>Extra Hours:</strong> 1181.00
//                     </p>
//                     <p>
//                       <strong>Years in present grade:</strong>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Disciplinary Actions Section */}
//           <div className="p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">
//               (C). DISCIPLINARY ACTIONS / COMMENDATIONS (FROM: 2021-01-01 TO
//               2024-11-22)
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
//                     <tr>
//                       <td
//                         colSpan="4"
//                         className="text-center border border-gray-300 px-4 py-2"
//                       >
//                         No data found.
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               {/* Offences */}
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
//                     <tr>
//                       <td
//                         colSpan="4"
//                         className="text-center border border-gray-300 px-4 py-2"
//                       >
//                         No data found.
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Critical Incidents Section */}
//           <div className="p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">
//               (D). CRITICAL INCIDENTS (FROM: 2021-01-01 TO 2024-11-22)
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
//                   <tr>
//                     <td
//                       colSpan="4"
//                       className="text-center border border-gray-300 px-4 py-2"
//                     >
//                       No data found.
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Evaluation Section */}
//         <div className="p-4">
//           <div className="p-6 rounded-lg shadow-md space-y-4">
//             {/* Main Header */}
//             <h2 className="text-lg font-semibold text-red-600">
//               * (E). EVALUATION - PERFORMANCE CRITERIA (To be evaluated by the
//               Section)
//             </h2>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md float-right hover:bg-blue-600">
//               Increment Allocation
//             </button>
//             <div className="clear-both"></div>

//             {/* Section Evaluation Criteria */}
//             {criteriaList.map((criteria, index) => (
//               <div key={index} className="space-y-2">
//                 <h3 className="font-semisemibold">{`${
//                   index + 1
//                 }. ${criteria}`}</h3>
//                 <p className="text-gray-500 text-sm">
//                   Please select an Employee
//                 </p>
//                 <div className="flex space-x-1 justify-center">
//                   {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((value) => (
//                     <button
//                       key={value}
//                       className={`w-12 h-12 flex items-center justify-center rounded ${
//                         selectedValues[index] === value
//                           ? "bg-orange-500 text-white"
//                           : "bg-blue-500 text-white hover:bg-blue-600"
//                       }`}
//                       onClick={() => handleSelection(index, value)}
//                     >
//                       {value}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="text-sm text-blue-600">
//                   Selected Value for {criteria}:{" "}
//                   <span className="text-red-500">
//                     {selectedValues[index] !== null
//                       ? selectedValues[index]
//                       : "No value selected."}
//                   </span>
//                 </p>
//               </div>
//             ))}

//             {/* HR Division Criteria */}
//             <h2 className="text-lg font-semibold text-red-600">
//               (F). EVALUATION - PERFORMANCE CRITERIA - To be evaluated by HR
//               Division
//             </h2>
//             {hrCriteriaList.map((criteria, index) => (
//               <div key={index} className="space-y-2">
//                 <h3 className="font-semisemibold">{`${
//                   index + 8
//                 }. ${criteria}`}</h3>
//                 <div className="flex space-x-1 justify-center">
//                   {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((value) => (
//                     <button
//                       key={value}
//                       className={`w-12 h-12 flex items-center justify-center rounded ${
//                         hrSelectedValues[index] === value
//                           ? "bg-orange-500 text-white"
//                           : "bg-blue-500 text-white hover:bg-blue-600"
//                       }`}
//                       onClick={() => handleSelection(index, value, true)}
//                     >
//                       {value}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="text-sm text-blue-600">
//                   Selected Value for {criteria}:{" "}
//                   <span className="text-red-500">
//                     {hrSelectedValues[index] !== null
//                       ? hrSelectedValues[index]
//                       : "No value selected."}
//                   </span>
//                 </p>
//               </div>
//             ))}

//             {/* Subtotal and Grand Total */}
//             <div className="pt-4 text-right">
//               <p className="font-semibold text-lg">
//                 Subtotal (Out of 70):{" "}
//                 <span className="text-blue-600">{subtotal}</span>
//               </p>
//               <p className="font-semibold text-lg">
//                 GRAND TOTAL (Out of 100):{" "}
//                 <span className="text-blue-600">{grandTotal}</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         <br />
//         <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-6">
//           <h3 className="font-semibold text-lg mb-4">
//             RECOMMENDATION FOR GRADE PROMOTION (Please tick if recommended)
//           </h3>
//           <div className="grid grid-cols-3 gap-4 items-center">
//             {/* Checkboxes */}
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name="engineer"
//                 checked={recommendations.engineer}
//                 onChange={handleChange}
//               />
//               <span>Engineer / Executive In-charge</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name="departmentalHead"
//                 checked={recommendations.departmentalHead}
//                 onChange={handleChange}
//               />
//               <span>Departmental Head</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name="divisionHead"
//                 checked={recommendations.divisionHead}
//                 onChange={handleChange}
//               />
//               <span>Division Head</span>
//             </label>

//             {/* Input fields */}
//             <input
//               type="text"
//               name="evaluatedBy"
//               value={recommendations.evaluatedBy}
//               onChange={handleChange}
//               placeholder="Evaluated by"
//               className="border p-2 rounded"
//             />
//             <input
//               type="text"
//               name="checkedBy"
//               value={recommendations.checkedBy}
//               onChange={handleChange}
//               placeholder="Checked by"
//               className="border p-2 rounded"
//             />
//             <input
//               type="text"
//               name="approvedBy"
//               value={recommendations.approvedBy}
//               onChange={handleChange}
//               placeholder="Approved by"
//               className="border p-2 rounded"
//             />
//           </div>

//           {/* Radio buttons for evaluation discussion */}
//           <div className="mt-4">
//             <label className="font-semisemibold text-red-600">
//               * Evaluation discussed with the Employee:
//             </label>
//             <div className="flex space-x-4 mt-2">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="evaluationDiscussed"
//                   value="Yes"
//                   checked={recommendations.evaluationDiscussed === "Yes"}
//                   onChange={handleChange}
//                 />
//                 <span>Yes</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="evaluationDiscussed"
//                   value="No"
//                   checked={recommendations.evaluationDiscussed === "No"}
//                   onChange={handleChange}
//                 />
//                 <span>No</span>
//               </label>
//             </div>
//           </div>
//           {/* Textareas */}
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             <div>
//               <label className="font-semisemibold">
//                 Comments by Engineer / Executive In-charge
//               </label>
//               <textarea
//                 name="engineerComments"
//                 value={recommendations.engineerComments}
//                 onChange={handleChange}
//                 className="border p-2 rounded w-full"
//                 rows="3"
//               />
//             </div>
//             <div>
//               <label className="font-semisemibold">
//                 Special Comments by Departmental Head
//               </label>
//               <textarea
//                 name="departmentalComments"
//                 value={recommendations.departmentalComments}
//                 onChange={handleChange}
//                 className="border p-2 rounded w-full"
//                 rows="3"
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label className="font-semisemibold">
//               Recommendations by Divisional Head
//             </label>
//             <textarea
//               name="divisionRecommendations"
//               value={recommendations.divisionRecommendations}
//               onChange={handleChange}
//               className="border p-2 rounded w-full"
//               rows="3"
//             />
//           </div>
//         </div>
//         <br />
//         {/* Special Evaluation Section */}
//         <div className="bg-gray-50  rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
//             Special Evaluation
//           </h2>
//           {/* Recommendation */}
//           <div className="mb-4">
//             <label className="font-semisemibold block mb-2">
//               Evaluation History:
//             </label>
//             <button
//               onClick={() => setIsPopupOpen(true)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Click Here
//             </button>
//             <EvaluationHistoryPopup
//               isOpen={isPopupOpen}
//               onClose={() => setIsPopupOpen(false)}
//             />
//             <label className="block font-semibold mb-1">
//               * Do you recommend the above employee to be granted with "Special
//               Additional" salary increments with regard to any exceptional
//               performance/characteristics demonstrated by him/her?
//             </label>
//             <div className="flex items-center space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="special_increment"
//                   value="yes"
//                   className="mr-2"
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="special_increment"
//                   value="no"
//                   className="mr-2"
//                 />
//                 No
//               </label>
//             </div>
//           </div>
//           {/* Number of increments */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               If yes, Number of special additional increments recommended:
//             </label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="increment_number"
//                   value="1"
//                   className="mr-2"
//                 />
//                 1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="increment_number"
//                   value="2"
//                   className="mr-2"
//                 />
//                 2
//               </label>
//             </div>
//           </div>
//           {/* Justification */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Justification</label>
//             <textarea
//               rows="3"
//               className="w-full border border-gray-300 rounded p-2"
//               placeholder="Please justify your recommendation"
//             ></textarea>
//           </div>
//           {/* Justification categories */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">
//               Your justification mainly falls under:
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Great Commitment Work
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Outstanding Contribution
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Cost Saving
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Unique Feat
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Important Suggestion
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Customer Satisfaction
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Innovation
//               </label>
//               <label className="col-span-2">
//                 <input type="checkbox" className="mr-2" />
//                 Other (Please specify):
//                 <textarea
//                   rows="2"
//                   className="w-full border border-gray-300 rounded mt-2 p-2"
//                   placeholder="Specify other reasons..."
//                 ></textarea>
//               </label>
//             </div>
//           </div>
//           {/* Recommended by */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Recommended By:</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded p-2"
//               placeholder="Enter recommender's name"
//             />
//           </div>
//           {/* Total increments */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               Total Increments:
//             </label>
//             <input
//               type="number"
//               className="w-full border border-gray-300 rounded p-2"
//               placeholder="Enter total increments"
//             />
//           </div>
//           {/* Department Head Recommendation */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">
//               Recommendation of Departmental Head
//             </label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="dept_head_recommendation"
//                   value="recommended"
//                   className="mr-2"
//                 />
//                 Special Increments Recommended
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="dept_head_recommendation"
//                   value="not_recommended"
//                   className="mr-2"
//                 />
//                 Special Increments Not Recommended
//               </label>
//             </div>
//             <textarea
//               rows="2"
//               className="w-full border border-gray-300 rounded mt-2 p-2"
//               placeholder="Add comments (if any)..."
//             ></textarea>
//           </div>
//           {/* Division Head Approval */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">
//               Approval of Division Head
//             </label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="division_head_approval"
//                   value="approved"
//                   className="mr-2"
//                 />
//                 Special Increments Approved
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="division_head_approval"
//                   value="not_approved"
//                   className="mr-2"
//                 />
//                 Special Increments Not Approved
//               </label>
//             </div>
//             <textarea
//               rows="2"
//               className="w-full border border-gray-300 rounded mt-2 p-2"
//               placeholder="Add comments (if any)..."
//             ></textarea>
//           </div>
//         </div>
//         <div className="p-6 rounded-lg shadow-md">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">Training Attended</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full table-auto border-collapse border border-gray-300">
//                 <thead className="bg-gray-200">
//                   <tr>
//                     <th className="border border-gray-300 px-4 py-2">#</th>
//                     <th className="border border-gray-300 px-4 py-2">Year</th>
//                     <th className="border border-gray-300 px-4 py-2">Month</th>
//                     <th className="border border-gray-300 px-4 py-2">
//                       Course Name
//                     </th>
//                     <th className="border border-gray-300 px-4 py-2">Status</th>
//                     <th className="border border-gray-300 px-4 py-2">Skill</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {trainingData.map((row) => (
//                     <tr
//                       key={row.id}
//                       className={`${
//                         row.status === "Not Completed" ? "bg-red-100" : ""
//                       }`}
//                     >
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         {row.id}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         {row.year}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         {row.month}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.course}
//                       </td>
//                       <td
//                         className={`border border-gray-300 px-4 py-2 text-center ${
//                           row.status === "Not Completed"
//                             ? "text-red-600 font-semibold"
//                             : "text-green-600 font-semibold"
//                         }`}
//                       >
//                         {row.status}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2 text-center">
//                         {row.skill}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             {/* Training needs identification */}
//             <div className="mt-6">
//               <h3 className="font-semibold mb-2">
//                 Training needs Identification
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 Please click the button to select courses
//               </p>
//               <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
//                 Course details
//               </button>
//             </div>
//             {/* Course selection */}
//             <div className="mt-6">
//               <table className="w-full table-auto border-collapse border border-gray-300">
//                 <thead className="bg-gray-200">
//                   <tr>
//                     <th className="border border-gray-300 px-4 py-2">#</th>
//                     <th className="border border-gray-300 px-4 py-2">
//                       Course Name
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td
//                       className="border border-gray-300 px-4 py-2 text-center"
//                       colSpan="2"
//                     >
//                       Please select courses
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             {/* Additional training requirement */}
//             <div className="mt-6">
//               <h3 className="font-semibold mb-2">
//                 Any other training requirement
//               </h3>
//               <textarea
//                 className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 rows="4"
//                 placeholder="Enter details here..."
//               ></textarea>
//             </div>
//             {/* Additional input */}
//             <div className="mt-4 flex space-x-4">
//               <div>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox text-blue-600"
//                   />
//                   <span className="ml-2">Division Head</span>
//                 </label>
//               </div>
//               <div className="flex-grow">
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="Enter details"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Close Button */}
//         <button
//           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           onClick={closePopup}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HRAspectsModal;


// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../../src/Context/AuthContext";
// import { useNavigate } from "react-router-dom";


// const CourseDetailsModal = ({ closePopup, workCategory = "", searchParam = "" }) => {
//   const [trainingData, setTrainingData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourseGrades = async () => {
//       try {
//         const userType = localStorage.getItem("userType") || "Ex";
//         const request_token = localStorage.getItem("request_token");

//         const response = await axios.get("/Evaluation/GetCourceGrade", {
//           params: {
//             workCategory: workCategory || "",
//             searchParam: searchParam || "",
//             UserType: userType,
//           },
//           headers: {
//             request_token,
//           },
//         });

//         if (response.status === 200 && response.data.StatusCode === 200) {
//           setTrainingData(response.data.ResultSet || []);
//         } else {
//           throw new Error(
//             response.data.Message || "Failed to fetch course grades."
//           );
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseGrades();
//   }, [workCategory, searchParam]);




//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Courses</h2>
//           <button
//             className="text-red-500 text-2xl font-semibold"
//             onClick={closePopup}
//           >
//             &times;
//           </button>
//         </div>
//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">Error: {error}</p>
//         ) : (
//           <table className="w-full table-auto border-collapse border border-gray-300">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2">Action</th>
//                 <th className="border border-gray-300 px-4 py-2">Course Name</th>
//                 <th className="border border-gray-300 px-4 py-2">Course Grade</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trainingData.length > 0 ? (
//                 trainingData.map((course, index) => (
//                   <tr key={index}>
//                     <td className="border border-gray-300 px-4 py-2">
//                       <input type="checkbox" />
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2">
//                       {course.CourseName}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2 text-center">
//                       {course.CourseGrade}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="3"
//                     className="text-center border border-gray-300 px-4 py-2"
//                   >
//                     No courses found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         )}
//         <div className="flex justify-end mt-4">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={closePopup}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


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
//           "/Evaluation/GetAttendanceSummaryData",
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
//         setShortLeave(parseInt(result.Short_leave, 10) || 0);
//         setAttendanceDetails(result.AttendanceSummaryDataGrid2);
//         setAttendanceSummary(result.AttendanceSummaryDataGrid1);
//         setLateOccasions(result.Late_occassions);
//         setExtraHours(result.Extra_Hours_Performed);
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



//         {/*****************************************************************  New Sections *******************************************/}
//         <div className="space-y-6">
//           {/* Evaluation - Performance Criteria Section */}
//           {/* Evaluation - Performance Criteria Section */}
//           {/* <div className="p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-semibold">
//                 (E). EVALUATION - PERFORMANCE CRITERIA <br />
//                 (To be evaluated by the Section)
//               </h2>
//               <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
//                 Increment Allocation
//               </button>
//             </div>
//             <div className="space-y-4 mt-4">


              
//               <ul className="list-disc pl-6 space-y-2">
//                 <li className="bg-gray-200 p-2 rounded">
//                   A. ACHIEVEMENT ORIENTATION
//                 </li>
//                 <li className="bg-gray-200 p-2 rounded">
//                   B. PEOPLE ORIENTATION
//                 </li>
//                 <li className="bg-gray-200 p-2 rounded">
//                   C. MANAGERIAL ORIENTATION
//                 </li>
//                 <li className="bg-gray-200 p-2 rounded">
//                   D. ADAPTIVE ORIENTATION
//                 </li>
//               </ul>

              
//               <div className="grid grid-cols-2 gap-4 items-center">
//                 <div>
//                   <label className="block font-semibold mb-1">
//                     Achievements Orientation
//                   </label>
//                   <input
//                     type="number"
//                     name="achievements"
//                     value={marks.achievements}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-semibold mb-1">
//                     People Orientation
//                   </label>
//                   <input
//                     type="number"
//                     name="people"
//                     value={marks.people}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-semibold mb-1">
//                     Managerial Orientation
//                   </label>
//                   <input
//                     type="number"
//                     name="managerial"
//                     value={marks.managerial}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-semibold mb-1">
//                     Adaptive Orientation
//                   </label>
//                   <input
//                     type="number"
//                     name="adaptive"
//                     value={marks.adaptive}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div className="text-right font-semibold text-blue-600 mt-4">
//                 Total Marks (Out of 100): {calculateTotal()}
//               </div>
//             </div>
//           </div> */}


//           {/************************************************  Evaluation discussed with the Employee Section *********************************/}
//           <div className="p-6 rounded-lg shadow-md">
//             <div className="flex items-center justify-between">
//               <h2 className="text-lg font-semibold">
//                 Evaluation discussed with the Employee:
//               </h2>
//               <div className="flex items-center space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="evaluation"
//                     value="yes"
//                     className="mr-2"
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="evaluation"
//                     value="no"
//                     className="mr-2"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>
//             <div className="mt-4">
//               <label className="block font-semibold mb-1">
//                 Recommended Increments:
//               </label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded p-2"
//               />
//             </div>
//           </div>


//           {/********************************************* Commendation and Recommendation Section **********************************/}
//           <div className="p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">
//               Commendation and Recommendation
//             </h2>
//             <div className="space-y-6">


//               {/*********************************************  Special Comments by Department Head ***********************************/}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Special Comments by Department Head
//                 </label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     Departmental Head
//                   </label>
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     Promotion Recommended
//                   </label>
//                 </div>
//               </div>


//               {/***************************************** Recommendation by Division Head *****************************************/}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Recommendation by Division Head
//                 </label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     Division Head
//                   </label>
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     Promotion recommended and approved
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <br />


//         {/***************************************** Special Evaluation Section *****************************************/}
//         <div className="bg-gray-50  rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
//             Special Evaluation
//           </h2>


//           {/***************************************** Recommendation *****************************************/}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               * Do you recommend the above employee to be granted with "Special
//               Additional" salary increments with regard to any exceptional
//               performance/characteristics demonstrated by him/her?
//             </label>
//             <div className="flex items-center space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="special_increment"
//                   value="yes"
//                   className="mr-2"
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="special_increment"
//                   value="no"
//                   className="mr-2"
//                 />
//                 No
//               </label>
//             </div>
//           </div>


//           {/* Number of increments */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               If yes, Number of special additional increments recommended:
//             </label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="increment_number"
//                   value="1"
//                   className="mr-2"
//                 />
//                 1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="increment_number"
//                   value="2"
//                   className="mr-2"
//                 />
//                 2
//               </label>
//             </div>
//           </div>


//           {/* Justification */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Justification</label>
//             <textarea
//               rows="3"
//               className="w-full border border-gray-300 rounded p-2"
//               placeholder="Please justify your recommendation"
//             ></textarea>
//           </div>


//           {/* Justification categories */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">
//               Your justification mainly falls under:
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Great Commitment Work
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Outstanding Contribution
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Cost Saving
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Unique Feat
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Important Suggestion
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Customer Satisfaction
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Innovation
//               </label>
//               <label className="col-span-2">
//                 <input type="checkbox" className="mr-2" />
//                 Other (Please specify):
//                 <textarea
//                   rows="2"
//                   className="w-full border border-gray-300 rounded mt-2 p-2"
//                   placeholder="Specify other reasons..."
//                 ></textarea>
//               </label>
//             </div>
//           </div>


//           {/* Recommended by */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Recommended By:</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded p-2"
//               placeholder="Enter recommender's name"
//             />
//           </div>


//           {/***************************************** Total increments *****************************************/}
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               Total Increments:
//             </label>
//             <input
//               type="number"
//               className="w-full border border-gray-300 rounded p-2"
//               placeholder="Enter total increments"
//             />
//           </div>


//           {/***************************************** Department Head Recommendation *****************************************/}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">
//               Recommendation of Departmental Head
//             </label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="dept_head_recommendation"
//                   value="recommended"
//                   className="mr-2"
//                 />
//                 Special Increments Recommended
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="dept_head_recommendation"
//                   value="not_recommended"
//                   className="mr-2"
//                 />
//                 Special Increments Not Recommended
//               </label>
//             </div>
//             <textarea
//               rows="2"
//               className="w-full border border-gray-300 rounded mt-2 p-2"
//               placeholder="Add comments (if any)..."
//             ></textarea>
//           </div>


//           {/***************************************** Division Head Approval *****************************************/}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">
//               Approval of Division Head
//             </label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="division_head_approval"
//                   value="approved"
//                   className="mr-2"
//                 />
//                 Special Increments Approved
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="division_head_approval"
//                   value="not_approved"
//                   className="mr-2"
//                 />
//                 Special Increments Not Approved
//               </label>
//             </div>
//             <textarea
//               rows="2"
//               className="w-full border border-gray-300 rounded mt-2 p-2"
//               placeholder="Add comments (if any)..."
//             ></textarea>
//           </div>
//         </div>
//         <div className="p-6 rounded-lg shadow-md">
//           <div className="bg-white p-6 rounded-lg shadow-md">


//             {/***************************************** {raining Attended} *****************************************/}

//             <h2 className="text-lg font-semibold mb-4">Training Attended</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full table-auto border-collapse border border-gray-300">
//                 <thead className="bg-gray-200">
//                   <tr>
//                     <th className="border border-gray-300 px-4 py-2">#</th>
//                     <th className="border border-gray-300 px-4 py-2">Year</th>
//                     <th className="border border-gray-300 px-4 py-2">Month</th>
//                     <th className="border border-gray-300 px-4 py-2">
//                       Course Name
//                     </th>
//                     <th className="border border-gray-300 px-4 py-2">Status</th>
//                     <th className="border border-gray-300 px-4 py-2">Skill</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {isLoading ? (
//                     <tr>
//                       <td
//                         colSpan="3"
//                         className="text-center border border-gray-300 px-4 py-2"
//                       >
//                         Loading...
//                       </td>
//                     </tr>
//                   ) : trainingData.length > 0 ? (
//                     trainingData.map((course, index) => (
//                       <tr
//                         key={index}
//                         className={`${course.Status === "Not Completed" ? "bg-red-100" : ""
//                           }`}
//                       >
//                         <td className="border border-gray-300 px-4 py-2 text-center">
//                           {index + 1}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {course.Year}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {course.Month}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {course.CourseName}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2 text-center">
//                           {course.Status}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {course.Skill}
//                         </td>
//                       </tr>

//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="3"
//                         className="text-center border border-gray-300 px-4 py-2"
//                       >
//                         No data found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/***************************************** Training needs identification *****************************************/}


//             <div className="mt-6">
//               <h3 className="font-semibold mb-2">
//                 Training needs Identification
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 Please click the button to select courses
//               </p>
//               <button
//                 onClick={CourcetoggleModal}
//                 className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//               >Course details
//               </button>
//               {isModalOpen && <CourseDetailsModal closePopup={CourcetoggleModal} />}
//             </div>

//             {/***************************************** Course selection *****************************************/}




//             <div className="mt-6">
//               <table className="w-full table-auto border-collapse border border-gray-300">
//                 <thead className="bg-gray-200">
//                   <tr>
//                     <th className="border border-gray-300 px-4 py-2">#</th>
//                     <th className="border border-gray-300 px-4 py-2">Course Name</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {trainingData1.length > 0 ? (
//                     trainingData1.map((course, index) => (
//                       <tr key={index}>
//                         <td className="border border-gray-300 px-4 py-2 text-center">
//                           {index + 1}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {course.CourseName}
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="2"
//                         className="text-center border border-gray-300 px-4 py-2"
//                       >
//                         No courses found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>




//             {/***************************************** Additional training requirement *****************************************/}
//             <div className="mt-6">
//               <h3 className="font-semibold mb-2">
//                 Any other training requirement
//               </h3>
//               <textarea
//                 className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 rows="4"
//                 placeholder="Enter details here..."
//               ></textarea>
//             </div>

//             {/***************************************** Additional input *****************************************/}
//             <div className="mt-4 flex space-x-4">
//               <div>
//                 <label className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox text-blue-600"
//                   />
//                   <span className="ml-2">Division Head</span>
//                 </label>
//               </div>
//               <div className="flex-grow">
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="Enter details"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>


//         {/***************************************** Close Button *****************************************/}
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


// export default HRAspectsModal;



//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../src/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const CourseDetailsModal = ({
  closePopup,
  workCategory = "",
  searchParam = "",
}) => {
  const [trainingData, setTrainingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseGrades = async () => {
      try {
        const userType = localStorage.getItem("userType") || "NonEx";
        const request_token = localStorage.getItem("request_token");

        const response = await axios.get("/Evaluation/GetCourceGrade", {
          params: {
            workCategory: workCategory || "",
            searchParam: searchParam || "",
            UserType: userType,
          },
          headers: {
            request_token,
          },
        });

        if (response.status === 200 && response.data.StatusCode === 200) {
          setTrainingData(response.data.ResultSet || []);
        } else {
          throw new Error(
            response.data.Message || "Failed to fetch course grades."
          );
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseGrades();
  }, [workCategory, searchParam]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Courses</h2>
          <button
            className="text-red-500 text-2xl font-semibold"
            onClick={closePopup}
          >
            &times;
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Action</th>
                <th className="border border-gray-300 px-4 py-2">
                  Course Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Course Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {trainingData.length > 0 ? (
                trainingData.map((course, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      <input type="checkbox" />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {course.CourseName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {course.CourseGrade}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center border border-gray-300 px-4 py-2"
                  >
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const HRAspectsModal = ({ closePopup, toggleModal, onSave }) => {
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
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, "0");
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
        const response = await axios.get("/Evaluation/GetTrainingAttendData", {
          params: {
            serviceNo,
            UserType: userType,
          },
          headers: {
            request_token,
          },
        });
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

        const response = await axios.get("/Evaluation/GetCriticalIncident", {
          params: {
            serviceNo,
            year,
            periodType,
            UserType: userType,
          },
          headers: {
            request_token,
          },
        });

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

        const response = await axios.get("Evaluation/GetCommendationData", {
          params: {
            serviceNo,
            year,
            periodType,
            UserType: userType,
          },
          headers: {
            request_token,
          },
        });

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
        const response = await axios.get("/Evaluation/GetCommendationData", {
          params: {
            serviceNo,
            year,
            periodType,
            UserType: userType,
          },
          headers: {
            request_token,
          },
        });

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
          "/Evaluation/GetAttendanceSummaryData",
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
        setShortLeave(parseInt(result.Short_leave, 10) || 0);
        setAttendanceDetails(result.AttendanceSummaryDataGrid2);
        setAttendanceSummary(result.AttendanceSummaryDataGrid1);
        setLateOccasions(result.Late_occassions);
        setExtraHours(result.Extra_Hours_Performed);
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
    extraHoursPercentage <= 15 ? 0 : extraHoursPercentage <= 35 ? 2 : 1;

  const totalActualScore = attendanceSummary.reduce((total, item) => {
    const totalVal = parseFloat(item.Total) || 0;
    const takenVal = parseFloat(item.Taken) || 0;

    const balancePercentage =
      totalVal > 0 ? ((takenVal / totalVal) * 100).toFixed(2) : "0.00";
    const actualScore = calculateActualScore(
      parseFloat(balancePercentage),
      item.Description
    );
    return total + actualScore;
  }, 0);

  const tActualScore = attendanceSummary.reduce((total, item) => {
    const totalVal = parseFloat(item.Total) || 0;
    const takenVal = parseFloat(item.Taken) || 0;

    const balancePercentage =
      totalVal > 0 ? ((takenVal / totalVal) * 100).toFixed(2) : "0.00";
    const actualScore = calculateActualScore(
      parseFloat(balancePercentage),
      item.Description
    );
    return total + actualScore;
  }, 0);

  const calculateTotalScore = () => {
    const totalActualScore =
      attendanceDetails.reduce((total, item) => {
        const maxScore = item.LeaveType === "Nopay" ? 2 : 1;
        const aScore = item.Days > 10 ? 0 : maxScore;
        return total + aScore;
      }, 0) +
      tActualScore +
      calculatedScore +
      calculationResult +
      calculatedValue;

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
          <div className="p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-semibold">
              (B). ATTENDANCE SUMMARY {year}.01.01
            </h2>
            {/* <div className="grid grid-cols-2 gap-4"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/********************************************* Left Side Tables ***************************************/}
              <div className="space-y-4">
                {/* Table 1 */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left">
                          Description
                        </th>
                        <th className="border px-4 py-2 text-center">Total</th>
                        <th className="border px-4 py-2 text-center">Taken</th>
                        <th className="border px-4 py-2 text-center"> (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceSummary.map((item, index) => {
                        const total = parseFloat(item.Total) || 0;
                        const taken = parseFloat(item.Taken) || 0;
                        const balance = parseFloat(item.Balance) || 0;
                        const balancePercentage =
                          total > 0
                            ? ((taken / total) * 100).toFixed(2)
                            : "0.00";

                        return (
                          <tr key={index}>
                            <td className="border px-4 py-2">
                              {item.Description}
                            </td>
                            <td className="border px-4 py-2 text-center">
                              {total}
                            </td>
                            <td className="border px-4 py-2 text-center">
                              {taken}
                            </td>
                            <td className="border px-4 py-2 text-center">
                              {balancePercentage}%
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* Table 2 */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left">
                          Leave Type
                        </th>
                        <th className="border px-4 py-2 text-center">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceDetails.map((item, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">{item.LeaveType}</td>
                          <td className="border px-4 py-2 text-center">
                            {item.Days || 0}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Table 3 */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left"></th>
                        <th className="border px-4 py-2 text-left">Total</th>
                        <th className="border px-4 py-2 text-center">Taken</th>
                        <th className="border px-4 py-2 text-center">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Short Leave Taken</td>
                        <td className="border px-4 py-2 text-center">24</td>
                        <td className="border px-4 py-2 text-center">
                          {shortLeave}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {24 > 0
                            ? ((shortLeave / 24) * 100).toFixed(2)
                            : "0.00"}
                          %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Table 4 */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left"></th>
                        <th className="border px-4 py-2 text-center">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Late Occasions</td>
                        <td className="border px-4 py-2 text-center">
                          {lateOccasions}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Table 5 */}
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left"></th>
                        <th className="border px-4 py-2 text-center">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          Extra Hours Performed
                        </td>

                        <td className="border px-4 py-2 text-center">
                          {extraHoursPercentage.toFixed(2)}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/************************************************* Right Side Tables ***************************************/}
              <div className="space-y-4">
                {/* Table 6 */}
                <div className="overflow-x-auto">
                  {/* <table className="table-auto w-5/8 border-collapse border border-gray-300"> */}
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2 text-left">
                          Actual Score
                        </th>
                        <th className="border px-4 py-2 text-left">
                          Allocated Max
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceSummary.map((item, index) => {
                        const total = parseFloat(item.Total) || 0;
                        const taken = parseFloat(item.Taken) || 0;
                        //const balance = total - taken;
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
                            <td className="border px-4 py-2 text-center">
                              {allocatedMaxScore}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* Table 7 */}
                {/* <div className="relative pt-8"> */}
                <div className="relative pt-10">
                  {/* <table className="table-auto w-1/2 border-collapse border border-gray-300"> */}
                  <table className="table-auto w-full border-collapse border border-gray-300">
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
                            <td className="border px-4 py-2 text-center">
                              {maxScore}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="relative pt-10">
                  {/* Table 8 */}
                  {/* <table className="table-auto w-1/2 border-collapse border border-gray-300"> */}
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
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
                </div>
                {/* Table 9 */}
                {/* <div className="relative pt-10">
                  <table className="table-auto w-1/2 border-collapse border border-gray-300"> */}
                <div className="relative pt-10">
                  <table className="table-auto w-full border-collapse border border-gray-300">
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
                {/* <div className="relative pt-10">
                  <table className="table-auto w-1/2 border-collapse border border-gray-300"> */}
                <div className="relative pt-10">
                  <table className="table-auto w-full border-collapse border border-gray-300">
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
          {/************************************  Disciplinary Actions Section ******************************************/}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              (C). DISCIPLINARY ACTIONS / COMMENDATIONS {year}.01.01
            </h2>
            <div className="space-y-6">
              {/* Commendations */}
              <div>
                <h3 className="font-semibold mb-2">Commendations</h3>
                {/* <table className="table-auto border-collapse border border-gray-300 w-full"> */}
                <div className="overflow-x-auto">
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">
                          Date
                        </th>
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
        {/*****************************************************************  New Sections *******************************************/}
        <div className="space-y-6">
          {/* Evaluation - Performance Criteria Section */}
          {/* Evaluation - Performance Criteria Section */}
          {/* <div className="p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                (E). EVALUATION - PERFORMANCE CRITERIA <br />
                (To be evaluated by the Section)
              </h2>
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Increment Allocation
              </button>
            </div>
            <div className="space-y-4 mt-4">


              
              <ul className="list-disc pl-6 space-y-2">
                <li className="bg-gray-200 p-2 rounded">
                  A. ACHIEVEMENT ORIENTATION
                </li>
                <li className="bg-gray-200 p-2 rounded">
                  B. PEOPLE ORIENTATION
                </li>
                <li className="bg-gray-200 p-2 rounded">
                  C. MANAGERIAL ORIENTATION
                </li>
                <li className="bg-gray-200 p-2 rounded">
                  D. ADAPTIVE ORIENTATION
                </li>
              </ul>           
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block font-semibold mb-1">
                    Achievements Orientation
                  </label>
                  <input
                    type="number"
                    name="achievements"
                    value={marks.achievements}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    People Orientation
                  </label>
                  <input
                    type="number"
                    name="people"
                    value={marks.people}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Managerial Orientation
                  </label>
                  <input
                    type="number"
                    name="managerial"
                    value={marks.managerial}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Adaptive Orientation
                  </label>
                  <input
                    type="number"
                    name="adaptive"
                    value={marks.adaptive}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="text-right font-semibold text-blue-600 mt-4">
                Total Marks (Out of 100): {calculateTotal()}
              </div>
            </div>
          </div> */}
          {/************************************************  Evaluation discussed with the Employee Section *********************************/}
          <div className="p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Evaluation discussed with the Employee:
              </h2>
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="radio"
                    name="evaluation"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="evaluation"
                    value="no"
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-semibold mb-1">
                Recommended Increments:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>
          {/********************************************* Commendation and Recommendation Section **********************************/}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              Commendation and Recommendation
            </h2>
            <div className="space-y-6">
              {/*********************************************  Special Comments by Department Head ***********************************/}
              <div>
                <label className="block font-semibold mb-1">
                  Special Comments by Department Head
                </label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
                <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Departmental Head
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Promotion Recommended
                  </label>
                </div>
              </div>
              {/***************************************** Recommendation by Division Head *****************************************/}
              <div>
                <label className="block font-semibold mb-1">
                  Recommendation by Division Head
                </label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
                <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Division Head
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Promotion recommended and approved
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/***************************************** Special Evaluation Section *****************************************/}
        <div className="bg-gray-50  rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
            Special Evaluation
          </h2>
          {/***************************************** Recommendation *****************************************/}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              * Do you recommend the above employee to be granted with "Special
              Additional" salary increments with regard to any exceptional
              performance/characteristics demonstrated by him/her?
            </label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="special_increment"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="special_increment"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          {/* Number of increments */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              If yes, Number of special additional increments recommended:
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="increment_number"
                  value="1"
                  className="mr-2"
                />
                1
              </label>
              <label>
                <input
                  type="radio"
                  name="increment_number"
                  value="2"
                  className="mr-2"
                />
                2
              </label>
            </div>
          </div>
          {/* Justification */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Justification</label>
            <textarea
              rows="3"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Please justify your recommendation"
            ></textarea>
          </div>
          {/* Justification categories */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Your justification mainly falls under:
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label>
                <input type="checkbox" className="mr-2" />
                Great Commitment Work
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Outstanding Contribution
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Cost Saving
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Unique Feat
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Important Suggestion
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Customer Satisfaction
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Innovation
              </label>
              <label className="col-span-2">
                <input type="checkbox" className="mr-2" />
                Other (Please specify):
                <textarea
                  rows="2"
                  className="w-full border border-gray-300 rounded mt-2 p-2"
                  placeholder="Specify other reasons..."
                ></textarea>
              </label>
            </div>
          </div>
          {/* Recommended by */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Recommended By:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter recommender's name"
            />
          </div>
          {/***************************************** Total increments *****************************************/}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Total Increments:
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter total increments"
            />
          </div>
          {/***************************************** Department Head Recommendation *****************************************/}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Recommendation of Departmental Head
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="dept_head_recommendation"
                  value="recommended"
                  className="mr-2"
                />
                Special Increments Recommended
              </label>
              <label>
                <input
                  type="radio"
                  name="dept_head_recommendation"
                  value="not_recommended"
                  className="mr-2"
                />
                Special Increments Not Recommended
              </label>
            </div>
            <textarea
              rows="2"
              className="w-full border border-gray-300 rounded mt-2 p-2"
              placeholder="Add comments (if any)..."
            ></textarea>
          </div>
          {/***************************************** Division Head Approval *****************************************/}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Approval of Division Head
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="division_head_approval"
                  value="approved"
                  className="mr-2"
                />
                Special Increments Approved
              </label>
              <label>
                <input
                  type="radio"
                  name="division_head_approval"
                  value="not_approved"
                  className="mr-2"
                />
                Special Increments Not Approved
              </label>
            </div>
            <textarea
              rows="2"
              className="w-full border border-gray-300 rounded mt-2 p-2"
              placeholder="Add comments (if any)..."
            ></textarea>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow-md">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/***************************************** {raining Attended} *****************************************/}
            <h2 className="text-lg font-semibold mb-4">Training Attended</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Year</th>
                    <th className="border border-gray-300 px-4 py-2">Month</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Course Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                    <th className="border border-gray-300 px-4 py-2">Skill</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td
                        colSpan="3"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : trainingData.length > 0 ? (
                    trainingData.map((course, index) => (
                      <tr
                        key={index}
                        className={`${
                          course.Status === "Not Completed" ? "bg-red-100" : ""
                        }`}
                      >
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.Year}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.Month}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.CourseName}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {course.Status}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.Skill}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        No data found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/***************************************** Training needs identification *****************************************/}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Training needs Identification
              </h3>
              <p className="text-gray-600 mb-4">
                Please click the button to select courses
              </p>
              <button
                onClick={CourcetoggleModal}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              >
                Course details
              </button>
              {isModalOpen && (
                <CourseDetailsModal closePopup={CourcetoggleModal} />
              )}
            </div>

            {/***************************************** Course selection *****************************************/}
            <div className="mt-6">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Course Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trainingData1.length > 0 ? (
                    trainingData1.map((course, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.CourseName}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="2"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        No courses found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/***************************************** Additional training requirement *****************************************/}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Any other training requirement
              </h3>
              <textarea
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Enter details here..."
              ></textarea>
            </div>

            {/***************************************** Additional input *****************************************/}
            <div className="mt-4 flex space-x-4">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2">Division Head</span>
                </label>
              </div>
              <div className="flex-grow">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter details"
                />
              </div>
            </div>
          </div>
        </div>
        {/***************************************** Close Button *****************************************/}
        <div className="flex mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
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

