// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CourseDetailsModal = ({ isOpen, closePopup, workCategory = "", searchParam = "", selectedCourses, onCoursesSelected }) => {
//     const [trainingData, setTrainingData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
   
//     useEffect(() => {
//       const fetchCourseGrades = async () => {
//         try {
//           const userType = localStorage.getItem("userType") || "Ex";
//           const request_token = localStorage.getItem("request_token");
  
//           const response = await axios.get("/Evaluation/GetCourceGrade", {
//             params: {
//               workCategory: workCategory || "",
//               searchParam: searchParam || "",
//               UserType: userType,
//             },
//             headers: {
//               request_token,
//             },
//           });
  
//           if (response.status === 200 && response.data.StatusCode === 200) {
//             setTrainingData(response.data.ResultSet || []);
//           } else {
//             throw new Error(response.data.Message || "Failed to fetch course grades.");
//           }
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       if (isOpen) {
//         fetchCourseGrades();
//       }
//     }, [isOpen, workCategory, searchParam]);
    
//     const handleCheckboxChange = (course) => {
//       // Check if this course is already selected
//       const courseExists = selectedCourses.some(c => c.CourseName === course.CourseName);
      
//       if (courseExists) {
//         // Remove course if already selected
//         onCoursesSelected(selectedCourses.filter(c => c.CourseName !== course.CourseName));
//       } else {
//         // Add course if not already selected
//         onCoursesSelected([...selectedCourses, course]);
//       }
//     };
  
//     if (!isOpen) return null;
  
//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Courses</h2>
//           <button
//             className="text-red-500 text-2xl font-semibold"
//             onClick={closePopup}
//           >
//             &times;
//           </button>
//           </div>
          
          
//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p className="text-red-500">Error: {error}</p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-300 text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
//                     <th className="border border-gray-300 px-4 py-2 text-left">Course Name</th>
//                     <th className="border border-gray-300 px-4 py-2 text-left">Course Grade</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {trainingData.length > 0 ? (
//                     trainingData.map((course, index) => (
//                       <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                         <td className="border border-gray-300 px-4 py-2">
//                           <input 
//                             type="checkbox" 
//                             className="form-checkbox"
//                             checked={selectedCourses.some(c => c.CourseName === course.CourseName)} 
//                             onChange={() => handleCheckboxChange(course)}
//                           />
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">{course.CourseName}</td>
//                         <td className="border border-gray-300 px-4 py-2">{course.CourseGrade}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">
//                         No courses found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           )}
//           <div className="flex mt-6 justify-end space-x-3">
//             <button
//               className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
//               onClick={closePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   const Training = ({closePopup}) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [trainingData, setTrainingData] = useState([]);
//     const [selectedCourses, setSelectedCourses] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [error, setError] = useState("");
//     const [otherRequirement, setOtherRequirement] = useState("");
//     const [isDivisionHead, setIsDivisionHead] = useState(false);
//     const [divisionHeadDetails, setDivisionHeadDetails] = useState("");
//     const [saveStatus, setSaveStatus] = useState({ loading: false, message: "", error: false });
//     const [loadingCourses, setLoadingCourses] = useState(false);
  
//     useEffect(() => {
//       const fetchTrainingData = async () => {
//         try {
//           const serviceNo = localStorage.getItem("serviceNo");
//           const userType = localStorage.getItem("userType") || "Ex";
//           const response = await axios.get("/Evaluation/GetTrainingAttendData", {
//             params: {
//               serviceNo,
//               UserType: userType,
//             },
//             headers: {
//               request_token: localStorage.getItem("request_token"),
//             },
//           });
//           setTrainingData(response.data.ResultSet || []);
//         } catch (error) {
//           console.error("Error fetching training data:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
  
//       fetchTrainingData();
//       // Fetch selected courses immediately when component mounts
//       fetchSelectedCourses();
//     }, []);
    
//     // New function to fetch selected courses
//     const fetchSelectedCourses = async () => {
//       try {
//         setLoadingCourses(true);
//         const serviceNo = localStorage.getItem("serviceNo") || "";
//         const year = localStorage.getItem("year") || "";
//         const period = localStorage.getItem("period") || "";
//         const userType = localStorage.getItem("userType") || "Ex";
        
//         const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/Evaluation/GettrainingDetails", {
//           params: {
//             serviceNo,
//             year,
//             peroid: period, // Note: API seems to have a typo in parameter name "peroid" instead of "period"
//             UserType: userType
//           },
//           headers: {
//             request_token: localStorage.getItem("request_token"),
//           },
//         });
        
//         if (response.data && response.data.StatusCode === 200 && response.data.ResultSet) {
//           setSelectedCourses(response.data.ResultSet);
//         } else {
//           console.warn("No selected courses found or invalid response format");
//         }
//       } catch (error) {
//         console.error("Error fetching selected courses:", error);
//         setError("Failed to load selected courses. Please try again later.");
//       } finally {
//         setLoadingCourses(false);
//       }
//     };

//     const handleCoursesSelected = (courses) => {
//       setSelectedCourses(courses);
//     };

//     const toggleModal = () => {
//       setIsModalOpen(!isModalOpen);
//     };
    
//     const handleSave = async () => {
//       try {
//         setSaveStatus({ loading: true, message: "Saving...", error: false });
    
//         // Get required values from localStorage
//         const userType = localStorage.getItem("userType") || "Ex";
//         const year = localStorage.getItem("year") || "";
//         const period = localStorage.getItem("period") || "";
//         const serviceNo = localStorage.getItem("serviceNo") || "";
//         const divisionCode = localStorage.getItem("DivisionCode") || "";
//         const departmentCode = localStorage.getItem("DepartmentCode") || "";
//         const locationCode = localStorage.getItem("LocationCode") || "";
//         const request_token = localStorage.getItem("request_token");
    
//         // Construct params dynamically using URLSearchParams
//         let params = new URLSearchParams();
//         params.append("UserType", userType);
//         params.append("Year", year);
//         params.append("Period", period);
//         params.append("ServiceNo", serviceNo);
//         params.append("DivisionCode", divisionCode);
//         params.append("DepartmentCode", departmentCode);
//         params.append("LocationCode", locationCode);
    
//         // Append each course name separately in the request
//         selectedCourses.forEach(course => {
//           params.append("CourseCodeList", course.CourseName);
//         });
    
//         const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/Evaluation/SaveTrainingNeeds", {
//           params: params,
//           headers: {
//             request_token
//           }
//         });
    
//         if (response.data && response.data.StatusCode === 200) {
//           setSaveStatus({
//             loading: false,
//             message: "Training information saved successfully!",
//             error: false
//           });
    
//           // Refresh selected courses after saving
//           fetchSelectedCourses();
//         } else {
//           throw new Error(response.data?.Message || "Failed to save training information");
//         }
//       } catch (error) {
//         console.error("Error saving training data:", error);
//         setSaveStatus({
//           loading: false,
//           message: error.message,
//           error: true
//         });
//       }
//     };
    
    
    
    
    
//     // Function to remove a course
//     const handleRemoveCourse = async (courseCode) => {
//       try {
//         // Get the course code part before the dash
//         const code = courseCode.split(' - ')[0];
        
//         // Call API to remove course (you'll need to implement this API)
//         // For now, just update UI
//         setSelectedCourses(selectedCourses.filter(c => c.CourseName !== courseCode));
        
//         // Optionally call save API here to persist changes immediately
//         // await handleSave();
//       } catch (error) {
//         console.error("Error removing course:", error);
//         setError("Failed to remove course. Please try again.");
//       }
//     };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
//          <button
//           className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
//           onClick={closePopup}
//         >
//           &times;
//         </button>
//       <h2 className="text-xl font-bold mb-6">Training Attended</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full table-auto border-collapse border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">#</th>
//               <th className="border border-gray-300 px-4 py-2">Year</th>
//               <th className="border border-gray-300 px-4 py-2">Month</th>
//               <th className="border border-gray-300 px-4 py-2">Course Name</th>
//               <th className="border border-gray-300 px-4 py-2">Status</th>
//               <th className="border border-gray-300 px-4 py-2">Skill</th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading ? (
//               <tr>
//                 <td colSpan="6" className="text-center border border-gray-300 px-4 py-2">
//                   Loading...
//                 </td>
//               </tr>
//             ) : trainingData.length > 0 ? (
//               trainingData.map((course, index) => (
//                 <tr key={index} className={course.Status === "Not Completed" ? "bg-red-100" : ""}>
//                   <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.Year}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.Month}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.CourseName}</td>
//                   <td className="border border-gray-300 px-4 py-2 text-center">{course.Status}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.Skill}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center border border-gray-300 px-4 py-2">
//                   No data found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Training needs identification */}
//       <div className="mt-6">
//         <h3 className="font-semibold mb-2">Training Needs Identification</h3>
//         <p className="text-gray-600 mb-4">Please click the button to select courses</p>
//         <div className="flex space-x-2">
//           <button
//             onClick={toggleModal}
//             className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//           >
//             Course details
//           </button>
//         </div>
//         <CourseDetailsModal 
//           isOpen={isModalOpen}
//           closePopup={toggleModal}
//           selectedCourses={selectedCourses}
//           onCoursesSelected={handleCoursesSelected}
//         />
//       </div>

//       {/* Selected course table */}
//       <div className="mt-6">
//         <h3 className="font-semibold mb-2">Selected Courses</h3>
//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
//             {error}
//           </div>
//         )}
//         <table className="w-full table-auto border-collapse border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">#</th>
//               <th className="border border-gray-300 px-4 py-2">Course Name</th>
//               <th className="border border-gray-300 px-4 py-2">Course Grade</th>
//               <th className="border border-gray-300 px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loadingCourses ? (
//               <tr>
//                 <td colSpan="4" className="text-center border border-gray-300 px-4 py-2">
//                   Loading selected courses...
//                 </td>
//               </tr>
//             ) : selectedCourses.length > 0 ? (
//               selectedCourses.map((course, index) => (
//                 <tr key={index}>
//                   <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.CourseName}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.CourseGrade}</td>
//                   <td className="border border-gray-300 px-4 py-2 text-center">
//                     <button 
//                       onClick={() => handleRemoveCourse(course.CourseName)}
//                       className="bg-red-500 text-white py-1 px-3 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center border border-gray-300 px-4 py-2">
//                   No courses selected. Please use the "Course details" button to select courses.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Additional training requirement */}
//       <div className="mt-6">
//         <h3 className="font-semibold mb-2">Any other training requirement</h3>
//         <textarea
//           className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           rows="4"
//           placeholder="Enter details here..."
//           value={otherRequirement}
//           onChange={(e) => setOtherRequirement(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Additional input */}
//       <div className="mt-4 flex space-x-4">
//         <div>
//           <label className="inline-flex items-center">
//             <input 
//               type="checkbox" 
//               className="form-checkbox text-blue-600"
//               checked={isDivisionHead}
//               onChange={(e) => setIsDivisionHead(e.target.checked)}
//             />
//             <span className="ml-2">Division Head</span>
//           </label>
//         </div>
//         <div className="flex-grow">
//           <input
//             type="text"
//             className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             placeholder="Enter details"
//             value={divisionHeadDetails}
//             onChange={(e) => setDivisionHeadDetails(e.target.value)}
//             disabled={!isDivisionHead}
//           />
//         </div>
//       </div>

//       {/* Save status message */}
//       {saveStatus.message && (
//         <div className={`mt-4 p-3 rounded ${saveStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
//           {saveStatus.message}
//         </div>
//       )}

//       {/* Close and Save buttons */}
//       <div className="flex justify-end mt-4">
//         <button 
//           className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 ${saveStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//           onClick={handleSave}
//           disabled={saveStatus.loading}
//         >
//           {saveStatus.loading ? 'Saving...' : 'Save'}
//         </button>
//         <button
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           onClick={closePopup}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Training;





import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const CourseDetailsModal = ({ isOpen, closePopup, workCategory = "", searchParam = "", selectedCourses, onCoursesSelected }) => {
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
            throw new Error(response.data.Message || "Failed to fetch course grades.");
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      if (isOpen) {
        fetchCourseGrades();
      }
    }, [isOpen, workCategory, searchParam]);
    
    const handleCheckboxChange = (course) => {
      const courseExists = selectedCourses.some(c => c.CourseName === course.CourseName);
      
      if (courseExists) {
        onCoursesSelected(selectedCourses.filter(c => c.CourseName !== course.CourseName));
      } else {
        onCoursesSelected([...selectedCourses, course]);
      }
    };
  
    if (!isOpen) return null;
  
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Course Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Course Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingData.length > 0 ? (
                    trainingData.map((course, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-2">
                          <input 
                            type="checkbox" 
                            className="form-checkbox"
                            checked={selectedCourses.some(c => c.CourseName === course.CourseName)} 
                            onChange={() => handleCheckboxChange(course)}
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{course.CourseName}</td>
                        <td className="border border-gray-300 px-4 py-2">{course.CourseGrade}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">
                        No courses found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
          <div className="flex mt-6 justify-end space-x-3">
            <button
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const Training = ({closePopup}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [trainingData, setTrainingData] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState("");
    const [otherRequirement, setOtherRequirement] = useState("");
    const [isDivisionHead, setIsDivisionHead] = useState(false);
    const [divisionHeadDetails, setDivisionHeadDetails] = useState("");
    const [saveStatus, setSaveStatus] = useState({ loading: false, message: "", error: false });
    const [loadingCourses, setLoadingCourses] = useState(false);
  
    useEffect(() => {
      const fetchTrainingData = async () => {
        try {
          const serviceNo = localStorage.getItem("serviceNo");
          const userType = localStorage.getItem("userType") || "NonEx";
          const response = await axios.get("/Evaluation/GetTrainingAttendData", {
            params: {
              serviceNo,
              UserType: userType,
            },
            headers: {
              request_token: localStorage.getItem("request_token"),
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
      // Fetch selected courses immediately when component mounts
      fetchSelectedCourses();
    }, []);
    
    // New function to fetch selected courses
    const fetchSelectedCourses = async () => {
      try {
        setLoadingCourses(true);
        const serviceNo = localStorage.getItem("serviceNo") || "";
        const year = localStorage.getItem("year") || "";
        const period = localStorage.getItem("period") || "";
        const userType = localStorage.getItem("userType") || "NonEx";
        
        const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GettrainingDetails", {
          params: {
            serviceNo,
            year,
            peroid: period, // Note: API seems to have a typo in parameter name "peroid" instead of "period"
            UserType: userType
          },
          headers: {
            request_token: localStorage.getItem("request_token"),
          },
        });
        
        if (response.data && response.data.StatusCode === 200 && response.data.ResultSet) {
          setSelectedCourses(response.data.ResultSet);
        } else {
          console.warn("No selected courses found or invalid response format");
        }
      } catch (error) {
        console.error("Error fetching selected courses:", error);
        setError("Failed to load selected courses. Please try again later.");
      } finally {
        setLoadingCourses(false);
      }
    };

    const handleCoursesSelected = (courses) => {
      setSelectedCourses(courses);
    };

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    
    const handleSave = async () => {
      try {
        setSaveStatus({ loading: true, message: "Saving...", error: false });
    
        const userType = localStorage.getItem("userType") || "NonEx";
        const year = localStorage.getItem("year") || "";
        const period = localStorage.getItem("period") || "";
        const serviceNo = localStorage.getItem("serviceNo") || "";
        const divisionCode = localStorage.getItem("DivisionCode") || "";
        const departmentCode = localStorage.getItem("DepartmentCode") || "";
        const locationCode = localStorage.getItem("LocationCode") || "";
        const request_token = localStorage.getItem("request_token");
    
        let params = new URLSearchParams();
        params.append("UserType", userType);
        params.append("Year", year);
        params.append("Period", period);
        params.append("ServiceNo", serviceNo);
        params.append("DivisionCode", divisionCode);
        params.append("DepartmentCode", departmentCode);
        params.append("LocationCode", locationCode);
    
        selectedCourses.forEach(course => {
          params.append("CourseCodeList", course.CourseName);
        });
    
        const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/SaveTrainingNeeds", {
          params: params,
          headers: { request_token }
        });
    
        if (response.data && response.data.StatusCode === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Training information saved successfully!",
          });
    
          fetchSelectedCourses();
        } else {
          throw new Error(response.data?.Message || "Failed to save training information");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "An error occurred while saving",
        });
      } finally {
        setSaveStatus({ loading: false, message: "", error: false });
      }
    };
    
    
    
    
    
    
    // Function to remove a course
    const handleRemoveCourse = async (courseCode) => {
      try {
        // Get the course code part before the dash
        const code = courseCode.split(' - ')[0];
        
        // Call API to remove course (you'll need to implement this API)
        // For now, just update UI
        setSelectedCourses(selectedCourses.filter(c => c.CourseName !== courseCode));
        
        // Optionally call save API here to persist changes immediately
        // await handleSave();
      } catch (error) {
        console.error("Error removing course:", error);
        setError("Failed to remove course. Please try again.");
      }
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
         <button
          className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
          onClick={closePopup}
        >
          &times;
        </button>
      <h2 className="text-xl font-bold mb-6">Training Attended</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Year</th>
              <th className="border border-gray-300 px-4 py-2">Month</th>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Skill</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6" className="text-center border border-gray-300 px-4 py-2">
                  Loading...
                </td>
              </tr>
            ) : trainingData.length > 0 ? (
              trainingData.map((course, index) => (
                <tr key={index} className={course.Status === "Not Completed" ? "bg-red-100" : ""}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{course.Year}</td>
                  <td className="border border-gray-300 px-4 py-2">{course.Month}</td>
                  <td className="border border-gray-300 px-4 py-2">{course.CourseName}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{course.Status}</td>
                  <td className="border border-gray-300 px-4 py-2">{course.Skill}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center border border-gray-300 px-4 py-2">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Training needs identification */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Training Needs Identification</h3>
        <p className="text-gray-600 mb-4">Please click the button to select courses</p>
        <div className="flex space-x-2">
          <button
            onClick={toggleModal}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Course details
          </button>
        </div>
        <CourseDetailsModal 
          isOpen={isModalOpen}
          closePopup={toggleModal}
          selectedCourses={selectedCourses}
          onCoursesSelected={handleCoursesSelected}
        />
      </div>

      {/* Selected course table */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Selected Courses</h3>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
              <th className="border border-gray-300 px-4 py-2">Course Grade</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {loadingCourses ? (
              <tr>
                <td colSpan="4" className="text-center border border-gray-300 px-4 py-2">
                  Loading selected courses...
                </td>
              </tr>
            ) : selectedCourses.length > 0 ? (
              selectedCourses.map((course, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{course.CourseName}</td>
                  <td className="border border-gray-300 px-4 py-2">{course.CourseGrade}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button 
                      onClick={() => handleRemoveCourse(course.CourseName)}
                      className="bg-red-500 text-white py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center border border-gray-300 px-4 py-2">
                  No courses selected. Please use the "Course details" button to select courses.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Additional training requirement */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Any other training requirement</h3>
        <textarea
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows="4"
          placeholder="Enter details here..."
          value={otherRequirement}
          onChange={(e) => setOtherRequirement(e.target.value)}
        ></textarea>
      </div>

      {/* Additional input */}
      <div className="mt-4 flex space-x-4">
        <div>
          <label className="inline-flex items-center">
            <input 
              type="checkbox" 
              className="form-checkbox text-blue-600"
              checked={isDivisionHead}
              onChange={(e) => setIsDivisionHead(e.target.checked)}
            />
            <span className="ml-2">Division Head</span>
          </label>
        </div>
        <div className="flex-grow">
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter details"
            value={divisionHeadDetails}
            onChange={(e) => setDivisionHeadDetails(e.target.value)}
            disabled={!isDivisionHead}
          />
        </div>
      </div>

      {/* Save status message */}
      {saveStatus.message && (
        <div className={`mt-4 p-3 rounded ${saveStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {saveStatus.message}
        </div>
      )}

      {/* Close and Save buttons */}
      <div className="flex justify-end mt-4">
        <button 
          className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 ${saveStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSave}
          disabled={saveStatus.loading}
        >
          {saveStatus.loading ? 'Saving...' : 'Save'}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
    </div>
  );
};

export default Training;


