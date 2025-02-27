// import React from "react";

// const RecommendationModal = ({ closePopup }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
//         <button
//           className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
//           onClick={closePopup}
//         >
//           &times;
//         </button>
//         <h2 className="text-xl font-bold mb-6">Recommendation</h2>
//         <div className="space-y-6 p-6">
//       <div className="p-6 rounded-lg shadow-md">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold">
//             Evaluation discussed with the Employee:
//           </h2>
//           <div className="flex items-center space-x-4">
//             <label>
//               <input type="radio" name="evaluation" value="yes" className="mr-2" />
//               Yes
//             </label>
//             <label>
//               <input type="radio" name="evaluation" value="no" className="mr-2" />
//               No
//             </label>
//           </div>
//         </div>
//         <div className="mt-4">
//           <label className="block font-semibold mb-1">Recommended Increments:</label>
//           <input type="text" className="w-full border border-gray-300 rounded p-2" />
//         </div>
//       </div>

//       {/* Commendation and Recommendation Section */}
//       <div className="p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Commendation and Recommendation</h2>
//         <div className="space-y-6">
//           {/* Special Comments by Department Head */}
//           <div>
//             <label className="block font-semibold mb-1">
//               Special Comments by Department Head
//             </label>
//             <textarea rows="3" className="w-full border border-gray-300 rounded p-2"></textarea>
//             <div className="flex items-center space-x-4 mt-2">
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Departmental Head
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Promotion Recommended
//               </label>
//             </div>
//           </div>

//           {/* Recommendation by Division Head */}
//           <div>
//             <label className="block font-semibold mb-1">Recommendation by Division Head</label>
//             <textarea rows="3" className="w-full border border-gray-300 rounded p-2"></textarea>
//             <div className="flex items-center space-x-4 mt-2">
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Division Head
//               </label>
//               <label>
//                 <input type="checkbox" className="mr-2" />
//                 Promotion recommended and approved
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Special Evaluation Section */}
//       <div className="bg-gray-50 rounded-lg shadow-md p-6">
//         <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
//           Special Evaluation
//         </h2>

//         {/* Recommendation */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-1">
//             * Do you recommend the above employee to be granted "Special Additional" salary increments with regard to any exceptional performance/characteristics?
//           </label>
//           <div className="flex items-center space-x-4">
//             <label>
//               <input type="radio" name="special_increment" value="yes" className="mr-2" />
//               Yes
//             </label>
//             <label>
//               <input type="radio" name="special_increment" value="no" className="mr-2" />
//               No
//             </label>
//           </div>
//         </div>

//         {/* Number of increments */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-1">If yes, number of increments recommended:</label>
//           <div className="flex space-x-4">
//             <label>
//               <input type="radio" name="increment_number" value="1" className="mr-2" />
//               1
//             </label>
//             <label>
//               <input type="radio" name="increment_number" value="2" className="mr-2" />
//               2
//             </label>
//           </div>
//         </div>

//         {/* Justification */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-1">Justification</label>
//           <textarea
//             rows="3"
//             className="w-full border border-gray-300 rounded p-2"
//             placeholder="Please justify your recommendation"
//           ></textarea>
//         </div>

//         {/* Justification categories */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-2">Your justification mainly falls under:</label>
//           <div className="grid grid-cols-2 gap-4">
//             {["Great Commitment Work", "Outstanding Contribution", "Cost Saving", "Unique Feat", "Important Suggestion", "Customer Satisfaction", "Innovation"].map((item) => (
//               <label key={item}>
//                 <input type="checkbox" className="mr-2" />
//                 {item}
//               </label>
//             ))}
//             <label className="col-span-2">
//               <input type="checkbox" className="mr-2" />
//               Other (Please specify):
//               <textarea
//                 rows="2"
//                 className="w-full border border-gray-300 rounded mt-2 p-2"
//                 placeholder="Specify other reasons..."
//               ></textarea>
//             </label>
//           </div>
//         </div>

//         {/* Recommended By */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-1">Recommended By:</label>
//           <input
//             type="text"
//             className="w-full border border-gray-300 rounded p-2"
//             placeholder="Enter recommender's name"
//           />
//         </div>

//         {/* Total increments */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-1">Total Increments:</label>
//           <input
//             type="number"
//             className="w-full border border-gray-300 rounded p-2"
//             placeholder="Enter total increments"
//           />
//         </div>

//         {/* Department Head Recommendation */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-2">Recommendation of Departmental Head</label>
//           <div className="flex space-x-4">
//             <label>
//               <input type="radio" name="dept_head_recommendation" value="recommended" className="mr-2" />
//               Special Increments Recommended
//             </label>
//             <label>
//               <input type="radio" name="dept_head_recommendation" value="not_recommended" className="mr-2" />
//               Special Increments Not Recommended
//             </label>
//           </div>
//           <textarea rows="2" className="w-full border border-gray-300 rounded mt-2 p-2" placeholder="Add comments (if any)..."></textarea>
//         </div>

//         {/* Division Head Approval */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-2">Approval of Division Head</label>
//           <div className="flex space-x-4">
//             <label>
//               <input type="radio" name="division_head_approval" value="approved" className="mr-2" />
//               Special Increments Approved
//             </label>
//             <label>
//               <input type="radio" name="division_head_approval" value="not_approved" className="mr-2" />
//               Special Increments Not Approved
//             </label>
//           </div>
//           <textarea rows="2" className="w-full border border-gray-300 rounded mt-2 p-2" placeholder="Add comments (if any)..."></textarea>
//         </div>
//       </div>
//     </div>

//         {/* Close Button */}
//         <div className="flex justify-end mt-4">
//           <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={closePopup}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecommendationModal;

// import React, { useState, useEffect } from "react";

// const RecommendationModal = ({ closePopup }) => {
//   const [recommendationData, setRecommendationData] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchRecommendationData = async () => {
//       const serviceNo = localStorage.getItem("serviceNo");
//       const year = 2020; // Set year to 2020 as per your requirement
//       const periodType = localStorage.getItem("period");
//       const UserType = "Ex"; // Set UserType to Ex

//       const request_token = localStorage.getItem("request_token"); // Get request_token from localStorage

//       try {
//         const response = await fetch(
//           `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetRecommendationDetails?serviceNo=${serviceNo}&year=${year}&periodType=${periodType}&UserType=${UserType}`,
//           {
//             method: "GET",
//             headers: {
//               request_token: request_token,
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.StatusCode === 200) {
//           setRecommendationData(data.ResultSet);
//         } else {
//           console.error("Error fetching data:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching recommendation data:", error);
//       }
//     };

//     fetchRecommendationData();
//   }, []);

//   if (!recommendationData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
//         <button
//           className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
//           onClick={closePopup}
//         >
//           &times;
//         </button>
//         <h2 className="text-xl font-bold mb-6">Recommendation</h2>
//         <div className="space-y-6 p-6">
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
//                     checked={recommendationData.ComunicationStatus === "Y"}
//                     disabled
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="evaluation"
//                     value="no"
//                     className="mr-2"
//                     checked={recommendationData.ComunicationStatus === "N"}
//                     disabled
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
//                 value={recommendationData.RecommenedIncrements}
//                 readOnly
//               />
//             </div>
//           </div>

//           {/* Commendation and Recommendation Section */}
//           <div className="p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">
//               Commendation and Recommendation
//             </h2>
//             <div className="space-y-6">
//               {/* Special Comments by Department Head */}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Special Comments by Department Head
//                 </label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                   value={recommendationData.SpecialComments}
//                   readOnly
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={
//                         recommendationData.SpecialCommentsBy === "0002014"
//                       }
//                       disabled
//                     />
//                     Departmental Head
//                   </label>

//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.DphpromRecommened === "Y"}
//                       disabled
//                     />
//                     Promotion Recommended
//                   </label>
//                 </div>
//                 <div className="w-1/4">
//                   <input
//                     className="w-full border border-gray-300 rounded p-2"
//                     value={`${recommendationData.SpecialCommentsBy} - ${recommendationData.SpecialCommentsName}`}
//                     readOnly
//                   />
//                 </div>
//               </div>

//               {/* Recommendation by Division Head */}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Recommendation by Division Head
//                 </label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                   value={recommendationData.Recommendations}
//                   readOnly
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.RecommenedBy === ""}
//                       disabled
//                     />
//                     Division Head
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.PromotionRecommened === "Y"}
//                       disabled
//                     />
//                     Promotion recommended and approved
//                   </label>
//                 </div>
//                 <div className="w-1/4">
//                 <input
//                     className="w-full border border-gray-300 rounded p-2"
//                     value={`${recommendationData.RecommenedBy} - ${recommendationData.RecommenedName}`}
//                     readOnly
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Evaluated by Section */}
//           <div className="p-6 rounded-lg shadow-md">
//             <div className="space-y-6">
//               {/* Special Comments by Department Head */}
//               <div>
//                 <div className="flex space-x-4">
//                   <div className="w-1/4">
//                     <label className="block font-semibold mb-1">
//                       Evaluated by
//                     </label>
//                     <input
//                     className="w-full border border-gray-300 rounded p-2"
//                     value={`${recommendationData.SpecialCommentsBy}`}
//                     readOnly
//                   />
//                   </div>
//                   <div className="w-1/4">
//                     <label className="block font-semibold mb-1">
//                       Checked by
//                     </label>
//                     <input
//                       className="w-full border border-gray-300 rounded p-2"
//                       readOnly
//                     />
//                   </div>

//                   <div className="w-1/4">
//                     <label className="block font-semibold mb-1">
//                       Approved by
//                     </label>
//                     <input
//                       className="w-full border border-gray-300 rounded p-2"
//                       readOnly
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Recommendation by Division Head */}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Observation and approval of the Managing director
//                 </label>
//                 <label className="block font-semibold mb-1">Comment</label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                   value={recommendationData.ObservationRemarks}
//                   readOnly
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.RecommenedBy === ""}
//                       disabled
//                     />
//                     Managing Director
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.PromotionRecommened === "Y"}
//                       disabled
//                     />
//                     Promotion recommended and approved
//                   </label>
//                 </div>
//                 <div className="w-1/4">
//                   <input
//                     className="w-full border border-gray-300 rounded p-2"
//                     readOnly
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Special Evaluation Section */}
//           <div className="bg-gray-50 rounded-lg shadow-md p-6">
//             <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
//               Special Evaluation
//             </h2>

//             {/* Recommendation */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 * Do you recommend the above employee to be granted "Special
//                 Additional" salary increments with regard to any exceptional
//                 performance/characteristics?
//               </label>
//               <div className="flex items-center space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="special_increment"
//                     value="yes"
//                     className="mr-2"
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="special_increment"
//                     value="no"
//                     className="mr-2"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>

//             {/* Number of increments */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 If yes, number of increments recommended:
//               </label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="increment_number"
//                     value="1"
//                     className="mr-2"
//                   />
//                   1
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="increment_number"
//                     value="2"
//                     className="mr-2"
//                   />
//                   2
//                 </label>
//               </div>
//             </div>

//             {/* Justification */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">Justification</label>
//               <textarea
//                 rows="3"
//                 className="w-full border border-gray-300 rounded p-2"
//                 placeholder="Please justify your recommendation"
//               ></textarea>
//             </div>

//             {/* Justification categories */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">
//                 Your justification mainly falls under:
//               </label>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   "Great Commitment Work",
//                   "Outstanding Contribution",
//                   "Cost Saving",
//                   "Unique Feat",
//                   "Important Suggestion",
//                   "Customer Satisfaction",
//                   "Innovation",
//                 ].map((item) => (
//                   <label key={item}>
//                     <input type="checkbox" className="mr-2" />
//                     {item}
//                   </label>
//                 ))}
//                 <label className="col-span-2">
//                   <input type="checkbox" className="mr-2" />
//                   Other (Please specify):
//                   <textarea
//                     rows="2"
//                     className="w-full border border-gray-300 rounded mt-2 p-2"
//                     placeholder="Specify other reasons..."
//                   ></textarea>
//                 </label>
//               </div>
//             </div>

//             {/* Recommended By */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 Recommended By:
//               </label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded p-2"
//                 placeholder="Enter recommender's name"
//               />
//             </div>

//             {/* Total increments */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 Total Increments:
//               </label>
//               <input
//                 type="number"
//                 className="w-full border border-gray-300 rounded p-2"
//                 placeholder="Enter total increments"
//               />
//             </div>

//             {/* Department Head Recommendation */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">
//                 Recommendation of Departmental Head
//               </label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="dept_head_recommendation"
//                     value="recommended"
//                     className="mr-2"
//                   />
//                   Special Increments Recommended
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="dept_head_recommendation"
//                     value="not_recommended"
//                     className="mr-2"
//                   />
//                   Special Increments Not Recommended
//                 </label>
//               </div>
//               <textarea
//                 rows="2"
//                 className="w-full border border-gray-300 rounded mt-2 p-2"
//                 placeholder="Add comments (if any)..."
//               ></textarea>
//             </div>

//             {/* Division Head Approval */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">
//                 Approval of Division Head
//               </label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="division_head_approval"
//                     value="approved"
//                     className="mr-2"
//                   />
//                   Special Increments Approved
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="division_head_approval"
//                     value="not_approved"
//                     className="mr-2"
//                   />
//                   Special Increments Not Approved
//                 </label>
//               </div>
//               <textarea
//                 rows="2"
//                 className="w-full border border-gray-300 rounded mt-2 p-2"
//                 placeholder="Add comments (if any)..."
//               ></textarea>
//             </div>
//           </div>
//         </div>
//         {/* Close Button */}
//         <div className="flex justify-end mt-4">
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

// export default RecommendationModal;

// import React, { useState, useEffect } from "react";

// const RecommendationModal = ({ closePopup }) => {
//   // Initialize recommendationData with default values
//   const [recommendationData, setRecommendationData] = useState({
//     ComunicationStatus: "",
//     RecommenedIncrements: "",
//     SpecialComments: "",
//     SpecialCommentsBy: "",
//     SpecialCommentsName: "",
//     DphpromRecommened: "",
//     RecommenedBy: "",
//     RecommenedName: "",
//     Recommendations: "",
//     ObservationRemarks: "",
//     PromotionRecommened: "",
//   });

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchRecommendationData = async () => {
//       const serviceNo = localStorage.getItem("serviceNo");
//       const year = 2020; // Set year to 2020 as per your requirement
//       const periodType = localStorage.getItem("period");
//       const UserType = "Ex"; // Set UserType to Ex

//       const request_token = localStorage.getItem("request_token"); // Get request_token from localStorage

//       try {
//         const response = await fetch(
//           `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetRecommendationDetails?serviceNo=${serviceNo}&year=${year}&periodType=${periodType}&UserType=${UserType}`,
//           {
//             method: "GET",
//             headers: {
//               request_token: request_token,
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.StatusCode === 200) {
//           setRecommendationData(data.ResultSet); // Update state with fetched data
//         } else {
//           console.error("Error fetching data:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching recommendation data:", error);
//       }
//     };

//     fetchRecommendationData();
//   }, []);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
//         <button
//           className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
//           onClick={closePopup}
//         >
//           &times;
//         </button>
//         <h2 className="text-xl font-bold mb-6">Recommendation</h2>
//         <div className="space-y-6 p-6">
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
//                     checked={recommendationData.ComunicationStatus === "Y"}
//                     disabled
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="evaluation"
//                     value="no"
//                     className="mr-2"
//                     checked={recommendationData.ComunicationStatus === "N"}
//                     disabled
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
//                 value={recommendationData.RecommenedIncrements}
//                 readOnly
//               />
//             </div>
//           </div>

//           {/* Commendation and Recommendation Section */}
//           <div className="p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">
//               Commendation and Recommendation
//             </h2>
//             <div className="space-y-6">
//               {/* Special Comments by Department Head */}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Special Comments by Department Head
//                 </label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                   value={recommendationData.SpecialComments}
//                   readOnly
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={
//                         recommendationData.SpecialCommentsBy === "0002014"
//                       }
//                       disabled
//                     />
//                     Departmental Head
//                   </label>

//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.DphpromRecommened === "Y"}
//                       disabled
//                     />
//                     Promotion Recommended
//                   </label>
//                 </div>
//                 <div className="w-1/4">
//                   <input
//                     className="w-full border border-gray-300 rounded p-2"
//                     value={`${recommendationData.SpecialCommentsBy} - ${recommendationData.SpecialCommentsName}`}
//                     readOnly
//                   />
//                 </div>
//               </div>

//               {/* Recommendation by Division Head */}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Recommendation by Division Head
//                 </label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                   value={recommendationData.Recommendations}
//                   readOnly
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.RecommenedBy === ""}
//                       disabled
//                     />
//                     Division Head
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.PromotionRecommened === "Y"}
//                       disabled
//                     />
//                     Promotion recommended and approved
//                   </label>
//                 </div>
//                 <div className="w-1/4">
//                   <input
//                     className="w-full border border-gray-300 rounded p-2"
//                     value={`${recommendationData.RecommenedBy} - ${recommendationData.RecommenedName}`}
//                     readOnly
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Evaluated by Section */}
//           <div className="p-6 rounded-lg shadow-md">
//             <div className="space-y-6">
//               {/* Special Comments by Department Head */}
//               <div>
//                 <div className="flex space-x-4">
//                   <div className="w-1/4">
//                     <label className="block font-semibold mb-1">
//                       Evaluated by
//                     </label>
//                     <input
//                       className="w-full border border-gray-300 rounded p-2"
//                       value={`${recommendationData.SpecialCommentsBy}`}
//                       readOnly
//                     />
//                   </div>
//                   <div className="w-1/4">
//                     <label className="block font-semibold mb-1">
//                       Checked by
//                     </label>
//                     <input
//                       className="w-full border border-gray-300 rounded p-2"
//                       readOnly
//                     />
//                   </div>

//                   <div className="w-1/4">
//                     <label className="block font-semibold mb-1">
//                       Approved by
//                     </label>
//                     <input
//                       className="w-full border border-gray-300 rounded p-2"
//                       readOnly
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Recommendation by Division Head */}
//               <div>
//                 <label className="block font-semibold mb-1">
//                   Observation and approval of the Managing director
//                 </label>
//                 <label className="block font-semibold mb-1">Comment</label>
//                 <textarea
//                   rows="3"
//                   className="w-full border border-gray-300 rounded p-2"
//                   value={recommendationData.ObservationRemarks}
//                   readOnly
//                 ></textarea>
//                 <div className="flex items-center space-x-4 mt-2">
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.RecommenedBy === ""}
//                       disabled
//                     />
//                     Managing Director
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={recommendationData.PromotionRecommened === "Y"}
//                       disabled
//                     />
//                     Promotion recommended and approved
//                   </label>
//                 </div>
//                 <div className="w-1/4">
//                   <input
//                     className="w-full border border-gray-300 rounded p-2"
//                     readOnly
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Special Evaluation Section */}
//           <div className="bg-gray-50 rounded-lg shadow-md p-6">
//             <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
//               Special Evaluation
//             </h2>

//             {/* Recommendation */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 * Do you recommend the above employee to be granted "Special
//                 Additional" salary increments with regard to any exceptional
//                 performance/characteristics?
//               </label>
//               <div className="flex items-center space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="special_increment"
//                     value="yes"
//                     className="mr-2"
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="special_increment"
//                     value="no"
//                     className="mr-2"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>

//             {/* Number of increments */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 If yes, number of increments recommended:
//               </label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="increment_number"
//                     value="1"
//                     className="mr-2"
//                   />
//                   1
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="increment_number"
//                     value="2"
//                     className="mr-2"
//                   />
//                   2
//                 </label>
//               </div>
//             </div>

//             {/* Justification */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">Justification</label>
//               <textarea
//                 rows="3"
//                 className="w-full border border-gray-300 rounded p-2"
//                 placeholder="Please justify your recommendation"
//               ></textarea>
//             </div>

//             {/* Justification categories */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">
//                 Your justification mainly falls under:
//               </label>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   "Great Commitment Work",
//                   "Outstanding Contribution",
//                   "Cost Saving",
//                   "Unique Feat",
//                   "Important Suggestion",
//                   "Customer Satisfaction",
//                   "Innovation",
//                 ].map((item) => (
//                   <label key={item}>
//                     <input type="checkbox" className="mr-2" />
//                     {item}
//                   </label>
//                 ))}
//                 <label className="col-span-2">
//                   <input type="checkbox" className="mr-2" />
//                   Other (Please specify):
//                   <textarea
//                     rows="2"
//                     className="w-full border border-gray-300 rounded mt-2 p-2"
//                     placeholder="Specify other reasons..."
//                   ></textarea>
//                 </label>
//               </div>
//             </div>

//             {/* Recommended By */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 Recommended By:
//               </label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded p-2"
//                 placeholder="Enter recommender's name"
//               />
//             </div>

//             {/* Total increments */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 Total Increments:
//               </label>
//               <input
//                 type="number"
//                 className="w-full border border-gray-300 rounded p-2"
//                 placeholder="Enter total increments"
//               />
//             </div>

//             {/* Department Head Recommendation */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">
//                 Recommendation of Departmental Head
//               </label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="dept_head_recommendation"
//                     value="recommended"
//                     className="mr-2"
//                   />
//                   Special Increments Recommended
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="dept_head_recommendation"
//                     value="not_recommended"
//                     className="mr-2"
//                   />
//                   Special Increments Not Recommended
//                 </label>
//               </div>
//               <textarea
//                 rows="2"
//                 className="w-full border border-gray-300 rounded mt-2 p-2"
//                 placeholder="Add comments (if any)..."
//               ></textarea>
//             </div>

//             {/* Division Head Approval */}
//             <div className="mb-4">
//               <label className="block font-semibold mb-2">
//                 Approval of Division Head
//               </label>
//               <div className="flex space-x-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="division_head_approval"
//                     value="approved"
//                     className="mr-2"
//                   />
//                   Special Increments Approved
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="division_head_approval"
//                     value="not_approved"
//                     className="mr-2"
//                   />
//                   Special Increments Not Approved
//                 </label>
//               </div>
//               <textarea
//                 rows="2"
//                 className="w-full border border-gray-300 rounded mt-2 p-2"
//                 placeholder="Add comments (if any)..."
//               ></textarea>
//             </div>
//           </div>
//         </div>
//         {/* Close Button */}
//         <div className="flex justify-end mt-4">
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

// export default RecommendationModal;

import React, { useState, useEffect } from "react";

const RecommendationModal = ({ closePopup }) => {
  // Initialize recommendationData with default values
  const [recommendationData, setRecommendationData] = useState({
    ComunicationStatus: "",
    RecommenedIncrements: "",
    SpecialComments: "",
    SpecialCommentsBy: "",
    SpecialCommentsName: "",
    DphpromRecommened: "",
    RecommenedBy: "",
    RecommenedName: "",
    Recommendations: "",
    ObservationRemarks: "",
    PromotionRecommened: "",
  });

  useEffect(() => {
    // Fetch data from the API
    const fetchRecommendationData = async () => {
      const serviceNo = localStorage.getItem("serviceNo");
      const year = 2020; // Set year to 2020 as per your requirement
      const periodType = localStorage.getItem("period");
      const UserType = "Ex"; // Set UserType to Ex

      const request_token = localStorage.getItem("request_token"); // Get request_token from localStorage

      try {
        const response = await fetch(
          `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetRecommendationDetails?serviceNo=${serviceNo}&year=${year}&periodType=${periodType}&UserType=${UserType}`,
          {
            method: "GET",
            headers: {
              request_token: request_token,
            },
          }
        );
        const data = await response.json();
        if (data.StatusCode === 200) {
          setRecommendationData(data.ResultSet); // Update state with fetched data
        } else {
          console.error("Error fetching data:", data);
        }
      } catch (error) {
        console.error("Error fetching recommendation data:", error);
      }
    };

    fetchRecommendationData();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
          onClick={closePopup}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-6">Recommendation</h2>
        <div className="space-y-6 p-6">
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
                    checked={recommendationData.ComunicationStatus === "Y"}
                    disabled
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="evaluation"
                    value="no"
                    className="mr-2"
                    checked={recommendationData.ComunicationStatus === "N"}
                    disabled
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
                value={recommendationData.RecommenedIncrements}
                readOnly
              />
            </div>
          </div>

          {/* Commendation and Recommendation Section */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              Commendation and Recommendation
            </h2>
            <div className="space-y-6">
              {/* Special Comments by Department Head */}
              <div>
                <label className="block font-semibold mb-1">
                  Special Comments by Department Head
                </label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded p-2"
                  value={recommendationData.SpecialComments}
                  readOnly
                ></textarea>
                {/* <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={
                        recommendationData.SpecialCommentsBy === "0002014"
                      }
                      disabled
                    />
                    Departmental Head
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={recommendationData.DphpromRecommened === "Y"}
                      disabled
                    />
                    Promotion Recommended
                  </label>
                </div> */}
                <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      // checked={
                      //   recommendationData.SpecialCommentsBy ===
                      //   recommendationData.SpecialCommentsBy // Dynamically check based on API value
                      // }
                      disabled
                    />
                    Departmental Head
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={recommendationData.DphpromRecommened === "Y"} // Check if DphpromRecommened is "Y"
                      disabled
                    />
                    Promotion Recommended
                  </label>
                </div>
                <div className="w-1/4">
                  <input
                    className="w-full border border-gray-300 rounded p-2"
                    // value={`${recommendationData.SpecialCommentsBy} - ${recommendationData.SpecialCommentsName}`}
                    readOnly
                  />
                </div>
              </div>

              {/* Recommendation by Division Head */}
              <div>
                <label className="block font-semibold mb-1">
                  Recommendation by Division Head
                </label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded p-2"
                  value={recommendationData.Recommendations}
                  readOnly
                ></textarea>
                <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      // checked={recommendationData.RecommenedBy === ""}
                      disabled
                    />
                    Division Head
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={recommendationData.DihpromotionRecommened === "Y"}
                      disabled
                    />
                    Promotion recommended and approved
                  </label>
                </div>
                <div className="w-1/4">
                  <input
                    className="w-full border border-gray-300 rounded p-2"
                    value={`${recommendationData.RecommenedBy} - ${recommendationData.RecommenedName}`}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Evaluated by Section */}
          <div className="p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              {/* Special Comments by Department Head */}
              <div>
                <div className="flex space-x-4">
                  <div className="w-1/4">
                    <label className="block font-semibold mb-1">
                      Evaluated by
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded p-2"
                      value={`${recommendationData.SpecialCommentsBy}`}
                      readOnly
                    />
                  </div>
                  <div className="w-1/4">
                    <label className="block font-semibold mb-1">
                      Checked by
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded p-2"
                      readOnly
                    />
                  </div>

                  <div className="w-1/4">
                    <label className="block font-semibold mb-1">
                      Approved by
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded p-2"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Recommendation by Division Head */}
              <div>
                <label className="block font-semibold mb-1">
                  Observation and approval of the Managing director
                </label>
                <label className="block font-semibold mb-1">Comment</label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded p-2"
                  value={recommendationData.ObservationRemarks}
                  readOnly
                ></textarea>
                <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      // checked={recommendationData.RecommenedBy === ""}
                      disabled
                    />
                    Managing Director
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={recommendationData.MdpromotionRecommened === "Y"}
                      disabled
                    />
                    Promotion recommended and approved
                  </label>
                </div>
                <div className="w-1/4">
                  <input
                    className="w-full border border-gray-300 rounded p-2"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Special Evaluation Section */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
              Special Evaluation
            </h2>

            {/* Recommendation */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                * Do you recommend the above employee to be granted "Special
                Additional" salary increments with regard to any exceptional
                performance/characteristics?
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
                If yes, number of increments recommended:
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
                {[
                  "Great Commitment Work",
                  "Outstanding Contribution",
                  "Cost Saving",
                  "Unique Feat",
                  "Important Suggestion",
                  "Customer Satisfaction",
                  "Innovation",
                ].map((item) => (
                  <label key={item}>
                    <input type="checkbox" className="mr-2" />
                    {item}
                  </label>
                ))}
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

            {/* Recommended By */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Recommended By:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter recommender's name"
              />
            </div>

            {/* Total increments */}
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

            {/* Department Head Recommendation */}
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

            {/* Division Head Approval */}
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
        </div>
        {/* Close Button */}
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

export default RecommendationModal;
