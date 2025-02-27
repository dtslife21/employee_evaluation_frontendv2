// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { useAuth } from "../../../src/Context/AuthContext";

// const EMPModal = ({ isModalOpen, toggleModal, onEmployeeSelect }) => {
//   const [divisions, setDivisions] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [statuses, setStatuses] = useState([]);
//   const [selectedDivision, setSelectedDivision] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");
//   const [tableData, setTableData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { request_token } = useAuth();
//   const serviceNo = localStorage.getItem("username");
//   const userType = "Ex";

//   useEffect(() => {
//     if (isModalOpen) {
//       loadDivisions();
//     }
//   }, [isModalOpen]);

//   useEffect(() => {
//     if (selectedDivision) {
//       loadLocations(selectedDivision);
//     } else {
//       setLocations([]);
//     }
//   }, [selectedDivision]);

//   const handleSelectEmployee = async (serviceNo, evaluationStatus) => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const response = await axios.get(`Evaluation/GetPersonalData`, {
//         params: {
//           serviceNo,
//           UserType: userType,
//         },
//         headers: {
//           request_token,
//         },
//       });

//       if (response.data.StatusCode === 200 && response.data.ResultSet) {
//         const employeeData = {
//           ...response.data.ResultSet,
//           ServiceNo: serviceNo,
//           EvaluationStatus: evaluationStatus,
//         };
//         onEmployeeSelect(employeeData); // This will pass the full employee data to the parent
//         toggleModal();
//         window.location.reload(); // Refresh the page after modal is toggled
//       } else {
//         setError("Failed to load employee details");
//       }
//     } catch (error) {
//       setError("An error occurred while loading employee details");
//       console.error(error);
//     }
//     setIsLoading(false);
//   };


//   const loadDivisions = async () => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const response = await axios.get(`Evaluation/GetDivisions`, {
//         params: {
//           serviceNo,
//           UserType: userType,
//         },
//         headers: {
//           request_token,
//         },
//       });
//       if (response.data.StatusCode === 200 && response.data.ResultSet) {
//         setDivisions(response.data.ResultSet);
//       } else {
//         setError("Failed to load divisions");
//       }
//     } catch (error) {
//       setError("An error occurred while loading divisions");
//       console.error(error);
//     }
//     setIsLoading(false);
//   };

//   const parseLocation = (locationString) => {
//     const matches = locationString.match(/^([A-Z]+)\s*-\s*(.*)$/);
//     if (matches) {
//       return {
//         Key: matches[1].trim(),
//         Value: matches[2].trim(),
//       };
//     }
//     return {
//       Key: locationString,
//       Value: locationString,
//     };
//   };

//   const loadAllLocations = async () => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const response = await axios.get(`Evaluation/GetLocations`, {
//         params: {
//           serviceNo,
//           UserType: userType,
//         },
//         headers: {
//           request_token,
//         },
//       });
//       if (response.data.StatusCode === 200 && response.data.ResultSet) {
//         const parsedLocations = response.data.ResultSet.map(parseLocation);
//         setLocations(parsedLocations);
//       } else {
//         setError("Failed to load locations");
//       }
//     } catch (error) {
//       setError("An error occurred while loading locations");
//       console.error(error);
//     }
//     setIsLoading(false);
//   };

//   const loadLocations = async (division) => {
//     setIsLoading(true);
//     setError("");
//     const selectedIndex = division.slice(0, 3);
//     try {
//       const response = await axios.get(`Evaluation/GetLocationsbyDiv`, {
//         params: {
//           UserType: userType,
//           selectedIndex,
//           serviceNo,
//         },
//         headers: {
//           request_token,
//         },
//       });

//       if (response.data.StatusCode === 200 && response.data.ResultSet) {
//         const parsedLocations = response.data.ResultSet.map(parseLocation);
//         setLocations(parsedLocations);
//       } else {
//         setError("Failed to load locations");
//       }
//     } catch (error) {
//       setError("An error occurred while loading locations");
//       console.error(error);
//     }
//     setIsLoading(false);
//   };

//   const loadStatuses = async () => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const response = await axios.get(`Evaluation/GetStatus`, {
//         params: {
//           serviceNo,
//           UserType: userType,
//         },
//         headers: {
//           request_token,
//         },
//       });
//       if (response.data.StatusCode === 404 && response.data.ResultSet) {
//         setStatuses(response.data.ResultSet);
//       } else {
//         setError("Failed to load statuses");
//       }
//     } catch (error) {
//       setError("An error occurred while loading statuses");
//       console.error(error);
//     }
//     setIsLoading(false);
//   };

//   const handleClear = () => {
//     setSelectedDivision("");
//     setSelectedLocation("");
//     setSelectedStatus("");
//     setTableData([]);
//     setError("");
//   };

//   const handleLoadData = async () => {
//     if (!selectedLocation) {
//       Swal.fire({
//         icon: "warning",
//         title: "Please select Location.",
//         confirmButtonText: "OK",
//       });
//       return;
//     }
//     setIsLoading(true);
//     setError("");
//     try {
//       const period = localStorage.getItem("period") || "defaultPeriod";
//       const year = localStorage.getItem("year") || "defaultYear";
//       const params = {
//         UserType: userType,
//         location: selectedLocation, // Ensure location is included
//         period,
//         year,
//       };
//       // Only include division in the params if it's selected
//       if (selectedDivision) {
//         params.division = selectedDivision;
//       }
//       if (selectedStatus) {
//         params.status = selectedStatus;
//       }
//       const response = await axios.get(`Evaluation/GetUserGridDetails`, {
//         params,
//         headers: {
//           request_token,
//         },
//       });
//       if (
//         response.data.StatusCode === 200 &&
//         response.data.ResultSet?.UserGridList
//       ) {
//         setTableData(response.data.ResultSet.UserGridList);
//       } else {
//         setTableData([]);
//         setError("No data available for the selected filters.");
//       }
//     } catch (error) {
//       setError("An error occurred while loading data.");
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isModalOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       onClick={toggleModal}
//     >
//       <div
//         className="bg-white rounded-lg p-6 max-w-7xl w-full relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-center pb-4 border-b">
//           <h2 className="text-2xl font-bold text-green-700">
//             Executive Employee Data
//           </h2>
//           <button
//             className="text-red-500 text-2xl font-bold"
//             onClick={toggleModal}
//           >
//             &times;
//           </button>
//         </div>
//         <div className="p-4 grid grid-cols-2 gap-6">
//           <div>
//             <label className="font-medium text-gray-700 block mb-1">
//               Division
//             </label>

//             <select
//               className="w-full p-2 border rounded shadow-sm"
//               onChange={(e) => {
//                 setSelectedDivision(e.target.value);
//                 if (e.target.value) {
//                   loadLocations(e.target.value);
//                 }
//               }}
//               value={selectedDivision}
//             >
//               <option value="">Select Division</option>
//               {divisions.map((division, index) => (
//                 <option key={index} value={division.Key}>
//                   {division.Value}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="font-medium text-gray-700 block mb-1">
//               Location
//             </label>
//             <select
//               className="w-full p-2 border rounded shadow-sm"
//               onFocus={() => {
//                 if (selectedDivision) {
//                   loadLocations(selectedDivision);
//                 } else {
//                   loadAllLocations();
//                 }
//               }}
//               onChange={(e) => setSelectedLocation(e.target.value)}
//               value={selectedLocation}
//             >
//               <option value="">Select Location</option>
//               {locations.map((location, index) => (
//                 <option key={index} value={location.Key}>
//                   {location.Value ? `${location.Value}` : location.Key}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             {/* <label className="font-medium text-gray-700 block mb-1">
//               Status
//             </label>
//             <select
//               className="w-full p-2 border rounded shadow-sm"
//               onFocus={loadStatuses}
//               onChange={(e) => setSelectedStatus(e.target.value)}
//               value={selectedStatus}
//             >
//               <option value="">Select Status</option>
//               {statuses.map((status, index) => (
//                 <option key={index} value={status.Key}>
//                   {status.Value}
//                 </option>
//               ))}
//             </select> */}
//           </div>
//           {/* <div>
//             <label className="font-medium text-gray-700 block mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               className="w-full p-2 border rounded shadow-sm"
//             />
//           </div> */}
//         </div>
//         <div className="mt-4 flex justify-end gap-2">
//           <button
//             className="bg-green-500 text-white px-3 py-3 rounded"
//             onClick={handleLoadData}
//           >
//             Load Data
//           </button>
//           <button
//             className="bg-red-500 text-white px-6 py-3 rounded"
//             onClick={handleClear}
//           >
//             Clear
//           </button>
//         </div>
//         <div className="mt-4 flex justify-start items-center space-x-6">
//           <span className="px-3 py-1 text-xs rounded bg-red-500 text-white">
//             Pending
//           </span>
//           <span className="px-3 py-1 text-xs rounded bg-yellow-500 text-white">
//             Incomplete/Preparation complete
//           </span>
//           <span
//             className="px-3 py-1 text-xs rounded text-white"
//             style={{ backgroundColor: "#17a2b8" }}
//           >
//             Checking complete
//           </span>
//           <span
//             className="px-3 py-1 text-xs rounded text-white"
//             style={{ backgroundColor: "rgb(158 243 158)" }}
//           >
//             Authorized
//           </span>
//           <span className="px-3 py-1 text-xs rounded bg-green-500 text-white">
//             Accept By HRD
//           </span>
//         </div>
//         <div className="mt-1 overflow-x-auto max-h-80">
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-[#1e90ff] text-white text-left text-xs font-semibold">
//                 <th className="border border-gray-300 px-4 py-2">SERVICE NO</th>
//                 <th className="border border-gray-300 px-4 py-2">NAME</th>
//                 <th className="border border-gray-300 px-4 py-2">
//                   EVALUATION STATUS
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2">MARKS</th>
//                 <th className="border border-gray-300 px-4 py-2">PROMOTION</th>
//                 <th className="border border-gray-300 px-4 py-2">INCRE.</th>
//                 <th className="border border-gray-300 px-4 py-2">SP. INCRE</th>
//                 <th className="border border-gray-300 px-4 py-2">EX. HRS</th>
//                 <th className="border border-gray-300 px-4 py-2">ANNUAL</th>
//                 <th className="border border-gray-300 px-4 py-2">CASUAL</th>
//                 <th className="border border-gray-300 px-4 py-2">SICK</th>
//                 <th className="border border-gray-300 px-4 py-2">
//                   SHORT LEAVE
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2">LATE</th>
//                 <th className="border border-gray-300 px-4 py-2">ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading && (
//                 <tr>
//                   <td colSpan="14" className="text-center py-4">
//                     Loading...
//                   </td>
//                 </tr>
//               )}
//               {error && (
//                 <tr>
//                   <td colSpan="14" className="text-center text-red-500 py-4">
//                     {error}
//                   </td>
//                 </tr>
//               )}
//               {tableData.length > 0
//                 ? tableData.map((row, index) => (
//                     <tr key={index} className="hover:bg-gray-100 text-sm">
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.ServiceNo}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.Name}
//                       </td>
//                       {/* <td className="border border-gray-300 px-4 py-2">
//               {row.EvaluationStatus}
//             </td>
//             <td className="border border-gray-300 px-4 py-2">{row.Marks}</td> */}
//                       <td
//                         className="border border-gray-300 px-4 py-2"
//                         style={{
//                           backgroundColor:
//                             row.EvaluationStatus === "Pending"
//                               ? "rgb(239 68 68 / var(--tw-bg-opacity, 1))"
//                               : row.EvaluationStatus === "Incomplete" ||
//                                 row.EvaluationStatus === "Preparation complete"
//                               ? "rgb(234 179 8 / var(--tw-bg-opacity, 1))"
//                               : row.EvaluationStatus === "Checking complete"
//                               ? "#17A2B8"
//                               : row.EvaluationStatus === "Authorized"
//                               ? "rgb(158, 243, 158)"
//                               : row.EvaluationStatus === "Accept By HRD"
//                               ? "rgb(34 197 94 / var(--tw-bg-opacity, 1))"
//                               : "transparent",
//                         }}
//                       >
//                         {row.EvaluationStatus}
//                       </td>
//                       {/* <td className="border border-gray-300 px-4 py-2">
//                         {row.Marks}
//                       </td> */}
//                       <td
//                         className="border border-gray-300 px-4 py-2"
//                         style={{ backgroundColor: "yellow" }}
//                       >
//                         {row.Marks}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.Promotion}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.Incr}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.SpIncr}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.ExHrs}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.Annual}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.Casual}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.Sick}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.ShortLeave}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         {row.Late}
//                       </td>
//                       <td className="border border-gray-300 px-4 py-2">
//                         <button
//                           className="bg-blue-500 text-white px-2 py-1 rounded"
//                           onClick={() =>
//                             handleSelectEmployee(
//                               row.ServiceNo,
//                               row.EvaluationStatus
//                             )
//                           }
//                         >
//                           Select
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 : !isLoading && (
//                     <tr>
//                       <td colSpan="14" className="text-center py-4">
//                         No data available
//                       </td>
//                     </tr>
//                   )}
//             </tbody>
//           </table>
//         </div>
//         ;
//       </div>
//     </div>
//   );
// };

// export default EMPModal;





import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../src/Context/AuthContext";

const EMPModal = ({ isModalOpen, toggleModal, onEmployeeSelect }) => {
  const [divisions, setDivisions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { request_token } = useAuth();
  const serviceNo = localStorage.getItem("username");
  const userType = "Ex";

  useEffect(() => {
    if (isModalOpen) {
      loadDivisions();
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (selectedDivision) {
      loadLocations(selectedDivision);
    } else {
      setLocations([]);
    }
  }, [selectedDivision]);

  const handleSelectEmployee = async (serviceNo, evaluationStatus) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(`Evaluation/GetPersonalData`, {
        params: {
          serviceNo,
          UserType: userType,
        },
        headers: {
          request_token,
        },
      });

      if (response.data.StatusCode === 200 && response.data.ResultSet) {
        const employeeData = {
          ...response.data.ResultSet,
          ServiceNo: serviceNo,
          EvaluationStatus: evaluationStatus,
        };
        onEmployeeSelect(employeeData); // This will pass the full employee data to the parent
        toggleModal();
        window.location.reload(); // Refresh the page after modal is toggled
      } else {
        setError("Failed to load employee details");
      }
    } catch (error) {
      setError("An error occurred while loading employee details");
      console.error(error);
    }
    setIsLoading(false);
  };


  const loadDivisions = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(`Evaluation/GetDivisions`, {
        params: {
          serviceNo,
          UserType: userType,
        },
        headers: {
          request_token,
        },
      });
      if (response.data.StatusCode === 200 && response.data.ResultSet) {
        setDivisions(response.data.ResultSet);
      } else {
        setError("Failed to load divisions");
      }
    } catch (error) {
      setError("An error occurred while loading divisions");
      console.error(error);
    }
    setIsLoading(false);
  };

  const parseLocation = (locationString) => {
    const matches = locationString.match(/^([A-Z]+)\s*-\s*(.*)$/);
    if (matches) {
      return {
        Key: matches[1].trim(),
        Value: matches[2].trim(),
      };
    }
    return {
      Key: locationString,
      Value: locationString,
    };
  };

  const loadAllLocations = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(`Evaluation/GetLocations`, {
        params: {
          serviceNo,
          UserType: userType,
        },
        headers: {
          request_token,
        },
      });
      if (response.data.StatusCode === 200 && response.data.ResultSet) {
        const parsedLocations = response.data.ResultSet.map(parseLocation);
        setLocations(parsedLocations);
      } else {
        setError("Failed to load locations");
      }
    } catch (error) {
      setError("An error occurred while loading locations");
      console.error(error);
    }
    setIsLoading(false);
  };

  const loadLocations = async (division) => {
    setIsLoading(true);
    setError("");
    const selectedIndex = division.slice(0, 3);
    try {
      const response = await axios.get(`Evaluation/GetLocationsbyDiv`, {
        params: {
          UserType: userType,
          selectedIndex,
          serviceNo,
        },
        headers: {
          request_token,
        },
      });

      if (response.data.StatusCode === 200 && response.data.ResultSet) {
        const parsedLocations = response.data.ResultSet.map(parseLocation);
        setLocations(parsedLocations);
      } else {
        setError("Failed to load locations");
      }
    } catch (error) {
      setError("An error occurred while loading locations");
      console.error(error);
    }
    setIsLoading(false);
  };

  const loadStatuses = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(`Evaluation/GetStatus`, {
        params: {
          serviceNo,
          UserType: userType,
        },
        headers: {
          request_token,
        },
      });
      if (response.data.StatusCode === 404 && response.data.ResultSet) {
        setStatuses(response.data.ResultSet);
      } else {
        setError("Failed to load statuses");
      }
    } catch (error) {
      setError("An error occurred while loading statuses");
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleClear = () => {
    setSelectedDivision("");
    setSelectedLocation("");
    setSelectedStatus("");
    setTableData([]);
    setError("");
  };

  const handleLoadData = async () => {
    if (!selectedLocation) {
      Swal.fire({
        icon: "warning",
        title: "Please select Location.",
        confirmButtonText: "OK",
      });
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const period = localStorage.getItem("period") || "defaultPeriod";
      const year = localStorage.getItem("year") || "defaultYear";
      const params = {
        UserType: userType,
        location: selectedLocation, // Ensure location is included
        period,
        year,
      };
      // Only include division in the params if it's selected
      if (selectedDivision) {
        params.division = selectedDivision;
      }
      if (selectedStatus) {
        params.status = selectedStatus;
      }
      const response = await axios.get(`Evaluation/GetUserGridDetails`, {
        params,
        headers: {
          request_token,
        },
      });
      if (
        response.data.StatusCode === 200 &&
        response.data.ResultSet?.UserGridList
      ) {
        setTableData(response.data.ResultSet.UserGridList);
      } else {
        setTableData([]);
        setError("No data available for the selected filters.");
      }
    } catch (error) {
      setError("An error occurred while loading data.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    // <div
    //   className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2"
      onClick={toggleModal}
    >
      {/* <div
        className="bg-white rounded-lg p-6 max-w-7xl w-full relative" */}
        <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-[95vw] md:max-w-7xl relative mx-2 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-2xl font-bold text-green-700">
            Executive Employee Data
          </h2>
          <button
            className="text-red-500 text-2xl font-bold"
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>
        {/* <div className="p-4 grid grid-cols-2 gap-6"> */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium text-gray-700 block mb-1">
              Division
            </label>

            <select
              className="w-full p-2 border rounded shadow-sm"
              onChange={(e) => {
                setSelectedDivision(e.target.value);
                if (e.target.value) {
                  loadLocations(e.target.value);
                }
              }}
              value={selectedDivision}
            >
              <option value="">Select Division</option>
              {divisions.map((division, index) => (
                <option key={index} value={division.Key}>
                  {division.Value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-1">
              Location
            </label>
            <select
              className="w-full p-2 border rounded shadow-sm"
              onFocus={() => {
                if (selectedDivision) {
                  loadLocations(selectedDivision);
                } else {
                  loadAllLocations();
                }
              }}
              onChange={(e) => setSelectedLocation(e.target.value)}
              value={selectedLocation}
            >
              <option value="">Select Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location.Key}>
                  {location.Value ? `${location.Value}` : location.Key}
                </option>
              ))}
            </select>
          </div>
          <div>
            {/* <label className="font-medium text-gray-700 block mb-1">
              Status
            </label>
            <select
              className="w-full p-2 border rounded shadow-sm"
              onFocus={loadStatuses}
              onChange={(e) => setSelectedStatus(e.target.value)}
              value={selectedStatus}
            >
              <option value="">Select Status</option>
              {statuses.map((status, index) => (
                <option key={index} value={status.Key}>
                  {status.Value}
                </option>
              ))}
            </select> */}
          </div>
          {/* <div>
            <label className="font-medium text-gray-700 block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-2 border rounded shadow-sm"
            />
          </div> */}
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-2 justify-end">
        <button className="w-full md:w-auto bg-green-500 text-white px-3 py-2 rounded"
            onClick={handleLoadData}
          >
            Load Data
          </button>
          <button className="w-full md:w-auto bg-red-500 text-white px-6 py-2 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        {/* <div className="mt-4 flex justify-start items-center space-x-6"> */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
          <span className="px-3 py-1 text-xs rounded bg-red-500 text-white">
            Pending
          </span>
          <span className="px-3 py-1 text-xs rounded bg-yellow-500 text-white">
            Incomplete/Preparation complete
          </span>
          <span
            className="px-3 py-1 text-xs rounded text-white"
            style={{ backgroundColor: "#17a2b8" }}
          >
            Checking complete
          </span>
          <span
            className="px-3 py-1 text-xs rounded text-white"
            style={{ backgroundColor: "rgb(158 243 158)" }}
          >
            Authorized
          </span>
          <span className="px-3 py-1 text-xs rounded bg-green-500 text-white">
            Accept By HRD
          </span>
        </div>
        <div className="mt-1 overflow-x-auto max-h-80">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#1e90ff] text-white text-left text-xs font-semibold">
                <th className="border border-gray-300 px-4 py-2">SERVICE NO</th>
                <th className="border border-gray-300 px-4 py-2">NAME</th>
                <th className="border border-gray-300 px-4 py-2">
                  EVALUATION STATUS
                </th>
                <th className="border border-gray-300 px-4 py-2">MARKS</th>
                <th className="border border-gray-300 px-4 py-2">PROMOTION</th>
                <th className="border border-gray-300 px-4 py-2">INCRE.</th>
                <th className="border border-gray-300 px-4 py-2">SP. INCRE</th>
                <th className="border border-gray-300 px-4 py-2">EX. HRS</th>
                <th className="border border-gray-300 px-4 py-2">ANNUAL</th>
                <th className="border border-gray-300 px-4 py-2">CASUAL</th>
                <th className="border border-gray-300 px-4 py-2">SICK</th>
                <th className="border border-gray-300 px-4 py-2">
                  SHORT LEAVE
                </th>
                <th className="border border-gray-300 px-4 py-2">LATE</th>
                <th className="border border-gray-300 px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan="14" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan="14" className="text-center text-red-500 py-4">
                    {error}
                  </td>
                </tr>
              )}
              {tableData.length > 0
                ? tableData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-100 text-sm">
                      <td className="border border-gray-300 px-4 py-2">
                        {row.ServiceNo}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Name}
                      </td>
                      {/* <td className="border border-gray-300 px-4 py-2">
              {row.EvaluationStatus}
            </td>
            <td className="border border-gray-300 px-4 py-2">{row.Marks}</td> */}
                      <td
                        className="border border-gray-300 px-4 py-2"
                        style={{
                          backgroundColor:
                            row.EvaluationStatus === "Pending"
                              ? "rgb(239 68 68 / var(--tw-bg-opacity, 1))"
                              : row.EvaluationStatus === "Incomplete" ||
                                row.EvaluationStatus === "Preparation complete"
                              ? "rgb(234 179 8 / var(--tw-bg-opacity, 1))"
                              : row.EvaluationStatus === "Checking complete"
                              ? "#17A2B8"
                              : row.EvaluationStatus === "Authorized"
                              ? "rgb(158, 243, 158)"
                              : row.EvaluationStatus === "Accept By HRD"
                              ? "rgb(34 197 94 / var(--tw-bg-opacity, 1))"
                              : "transparent",
                        }}
                      >
                        {row.EvaluationStatus}
                      </td>
                      {/* <td className="border border-gray-300 px-4 py-2">
                        {row.Marks}
                      </td> */}
                      <td
                        className="border border-gray-300 px-4 py-2"
                        style={{ backgroundColor: "yellow" }}
                      >
                        {row.Marks}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Promotion}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Incr}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.SpIncr}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.ExHrs}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Annual}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Casual}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Sick}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.ShortLeave}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.Late}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                          onClick={() =>
                            handleSelectEmployee(
                              row.ServiceNo,
                              row.EvaluationStatus
                            )
                          }
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))
                : !isLoading && (
                    <tr>
                      <td colSpan="14" className="text-center py-4">
                        No data available
                      </td>
                    </tr>
                  )}
            </tbody>
          </table>
        </div>
        ;
      </div>
    </div>
  );
};

export default EMPModal;