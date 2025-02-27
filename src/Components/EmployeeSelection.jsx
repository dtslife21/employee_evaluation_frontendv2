// import React, { useEffect, useState } from "react";
// import EMPModal from "../Components/modals/EMPModal";
// import Swal from "sweetalert2";
// import image1 from "../assets/images/executive.914c1c1e735aaecabb8f.png";
// import axios from "axios";
// import { useAuth } from "../../src/Context/AuthContext";

// const EmployeeSelection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [employee, setEmployee] = useState(null);
//   const [period, setPeriod] = useState(localStorage.getItem("period") || "");
//   const [year, setYear] = useState(localStorage.getItem("year") || "");
//   const [employeeImage, setEmployeeImage] = useState(null);
//   const [imageError, setImageError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [statuses, setStatuses] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState("");
//   const { request_token } = useAuth();
//   const serviceNo = localStorage.getItem("username");
//   const userType = "Ex";
//   useEffect(() => {
//     const storedEmployee = localStorage.getItem("employeeData");
//     if (storedEmployee) {
//       setEmployee(JSON.parse(storedEmployee));
//     }
//   }, [])
//   const handleEmployeeSelect = (employeeData) => {
//     const transformedData = {
//       id: employeeData.ServiceNo,
//       estatus: employeeData?.EvaluationStatus || "No Status",
//       name: employeeData.ReportName,
//       designation: employeeData.Category,
//       division: employeeData.DivisionName,
//       department: employeeData.DepartmentName,
//       recruitmentDate: employeeData.RecruitmentDate,
//       basicSalary: employeeData.BasicSalary,
//       permanentDate: employeeData.PermanentDate,
//       presentGrade: employeeData.PresentGrade,
//       retirementDate: employeeData.RetirementDate,
//       basisOfEmployment: employeeData.BasicSalary,
//     };

//     setEmployee(transformedData);

//     localStorage.setItem("employeeData", JSON.stringify(transformedData));

//     localStorage.setItem("serviceNo", employeeData.ServiceNo);
//   };

//   const toggleModal = () => {
//     if (!period || !year || !selectedStatus) {
//       Swal.fire({
//         icon: "warning",
//         title: "Missing Information",
//         text: "Please select the  Period and Year.",
//         confirmButtonColor: "#3085d6",
//       });
//       return;
//     }
//     setIsModalOpen(!isModalOpen);
//   };
//   const handlePeriodChange = (e) => {
//     const value = e.target.value;
//     setPeriod(value);
//     localStorage.setItem("period", value);
//   };

//   const handleYearChange = (e) => {
//     const value = e.target.value;
//     setYear(value);
//     localStorage.setItem("year", value);
//   };
//   useEffect(() => {
//     if (period && year) {
//       loadStatuses();
//     }
//   }, [period, year]);

//   const loadStatuses = async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await axios.get("Evaluation/GetStatus", {
//         params: {
//           serviceNo,
//           UserType: userType,
//           period,
//           year,
//         },
//         headers: {
//           request_token,
//         },
//       });

//       if (response.status === 200 && response.data.ResultSet) {
//         const statuses = response.data.ResultSet;
//         setStatuses(statuses);


//         const inCompleteStatus = statuses.find(
//           (status) => status.Value.toLowerCase() === "in complete"
//         );
//         setSelectedStatus(inCompleteStatus ? inCompleteStatus.Key : statuses[0]?.Key || "");
//       } else {
//         setError("Failed to load statuses.");
//       }
//     } catch (error) {
//       setError("An error occurred while loading statuses.");
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };



//   const handleReset = () => {
//     setEmployee(null);
//     setPeriod("");
//     setYear("");
//     setSelectedStatus("");
//     setEmployeeImage(null);
//     setImageError(false);


//     localStorage.removeItem("employeeData");
//     localStorage.removeItem("serviceNo");
//     localStorage.removeItem("period");
//     localStorage.removeItem("year");

//     Swal.fire({
//       icon: "success",
//       title: "Data Reset",
//       text: "All data has been cleared successfully.",
//       confirmButtonColor: "#3085d6",
//     }).then((result) => {
//       if (result.isConfirmed) {

//         window.location.reload();
//       }
//     });
//   };


//   useEffect(() => {
//     if (employee && employee.id) {
//       const fetchImage = async () => {
//         try {
//           const response = await fetch(
//             `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetUserImg?serviceNo=${employee.id}`
//           );
//           if (response.ok) {

//             const blob = await response.blob();
//             const imageUrl = URL.createObjectURL(blob);
//             setEmployeeImage(imageUrl);
//             setImageError(false);
//           } else {
//             setImageError(true);
//           }
//         } catch (error) {
//           console.error("Error fetching image:", error);
//           setImageError(true);
//         }
//       };
//       fetchImage();
//       return () => {
//         if (employeeImage) {
//           URL.revokeObjectURL(employeeImage);
//         }
//       };
//     }
//   }, [employee]);
//   return (
//     <div className="bg-gray-50 shadow-md p-6 rounded-lg space-y-6">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
//         <div>
//           <h2 className="text-2xl font-bold text-blue-800 ">
//             Employee Evaluation
//           </h2>
//           <p className="text-sm text-gray-400">
//             Manage and evaluate employee performance effectively.
//           </p>
//         </div>
//         <button
//           onClick={toggleModal}
//           className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Select Employee
//         </button>
//       </div>
//       {/* Content Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left Section */}
//         <div className="col-span-2 space-y-4">
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h3 className="text-lg font-bold text-gray-700 mb-2">
//               Employee Details
//             </h3>
//             <p className="text-gray-600 text-sm">
//               {employee ? (
//                 <span>
//                   <strong className="text-green-600">ID:</strong>
//                   <span className="font-bold text-blue-600 mr-2">
//                     {employee.id || "N/A"}
//                   </span>
//                   | <strong className="text-green-600">Name:</strong>
//                   <span className="font-bold text-blue-600">
//                     {employee.name || "N/A"}
//                   </span>
//                 </span>
//               ) : (
//                 "No employee selected"
//               )}
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Evaluation Status
//               </label>
//               <select
//                 className="w-full p-2 border rounded shadow-sm"
//                 onFocus={loadStatuses}
//                 onChange={(e) => setSelectedStatus(e.target.value)}
//                 value={selectedStatus || "incomplete"}
//               >
//                 {statuses.length === 0 ? (
//                   <option value="incomplete">In Complete</option>
//                 ) : (
//                   statuses.map((status, index) => (
//                     <option key={index} value={status.Key}>
//                       {status.Value}
//                     </option>
//                   ))
//                 )}
//               </select>


//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Category
//               </label>
//               <select className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>Executive</option>
//                 <option>Non-Executive</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Period
//               </label>
//               <select
//                 className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={period}
//                 onChange={handlePeriodChange}
//               >
//                 <option value="">Select the Period</option>
//                 <option value="1">Mid year</option>
//                 <option value="2">Year end</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Year
//               </label>
//               <select
//                 className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={year}
//                 onChange={handleYearChange}
//               >
//                 <option value="">Select the Year</option>
//                 <option value="2021">2021</option>
//                 <option value="2022">2022</option>
//                 <option value="2023">2023</option>
//                 <option value="2024">2024</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="space-y-4">
//           <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//             {employeeImage && !imageError ? (
//               <img
//                 src={employeeImage}
//                 alt="Employee"
//                 className="w-55 h-40 object-cover border border-gray-300 shadow mb-5"
//               />
//             ) : (
//               <img
//                 src={image1}
//                 alt="Default Employee"
//                 className="w-32 h-32 object-cover border border-gray-300 shadow mb-4"
//               />
//             )}
//             <p className="text-gray-600 font-bold text-sm">
//               {employee?.name || "No Employee Selected"}
//             </p>
//           </div>
//           <div className="flex  justify-center ">
//             {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
//               Save Data
//             </button> */}
//             <button
//               onClick={handleReset}
//               className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Employee Details Section */}
//       <div className="bg-white shadow-xl p-3 rounded-x1 mt-6 max-w-5x1 mx-auto">
//         <h2 className="text-2xl font-bold text-blue-800 mb-3 border-b pb-2 center">
//           Employee Overview
//         </h2>
//         {employee ? (
//           <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
//             {/* Display employee details in a grid layout */}
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">Name :</p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.name ? employee.name : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">Designation :</p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.designation ? employee.designation : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">Division :</p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.division ? employee.division : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">Department :</p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.department ? employee.department : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">
//                 Recruitment Date :
//               </p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.recruitmentDate ? employee.recruitmentDate : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">Basic Salary :</p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.basicSalary ? employee.basicSalary : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">
//                 Permanent Date :
//               </p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.permanentDate ? employee.permanentDate : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">
//                 Present Grade :
//               </p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.presentGrade ? employee.presentGrade : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">
//                 Retirement Date :
//               </p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.retirementDate ? employee.retirementDate : "-"}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-1 rounded-lg shadow-md">
//               <p className="text-lg font-bold text-green-700">
//                 Basis of Employment :
//               </p>
//               <p className="text-l font-semibold text-blue-800">
//                 {employee.basisOfEmployment ? employee.basisOfEmployment : "-"}
//               </p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading employee data...</p>
//         )}
//       </div>
//       <EMPModal
//         isModalOpen={isModalOpen}
//         toggleModal={toggleModal}
//         onEmployeeSelect={handleEmployeeSelect}
//       />
//     </div>
//   );
// };

// export default EmployeeSelection;




import React, { useEffect, useState } from "react";
import EMPModal from "../Components/modals/EMPModal";
import Swal from "sweetalert2";
import image1 from "../assets/images/executive.914c1c1e735aaecabb8f.png";
import axios from "axios";
import { useAuth } from "../../src/Context/AuthContext";

const EmployeeSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [period, setPeriod] = useState(localStorage.getItem("period") || "");
  const [year, setYear] = useState(localStorage.getItem("year") || "");
  const [employeeImage, setEmployeeImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const { request_token } = useAuth();
  const serviceNo = localStorage.getItem("username");
  const userType = "Ex";
  useEffect(() => {
    const storedEmployee = localStorage.getItem("employeeData");
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee));
    }
  }, [])
  const handleEmployeeSelect = (employeeData) => {
    const transformedData = {
      id: employeeData.ServiceNo,
      estatus: employeeData?.EvaluationStatus || "No Status",
      name: employeeData.ReportName,
      designation: employeeData.Category,
      division: employeeData.DivisionName,
      department: employeeData.DepartmentName,
      recruitmentDate: employeeData.RecruitmentDate,
      basicSalary: employeeData.BasicSalary,
      permanentDate: employeeData.PermanentDate,
      presentGrade: employeeData.PresentGrade,
      retirementDate: employeeData.RetirementDate,
      basisOfEmployment: employeeData.BasicSalary,
    };

    setEmployee(transformedData);

    localStorage.setItem("employeeData", JSON.stringify(transformedData));

    localStorage.setItem("serviceNo", employeeData.ServiceNo);
  };

  const toggleModal = () => {
    if (!period || !year || !selectedStatus) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please select the  Period and Year.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }
    setIsModalOpen(!isModalOpen);
  };
  const handlePeriodChange = (e) => {
    const value = e.target.value;
    setPeriod(value);
    localStorage.setItem("period", value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);
    localStorage.setItem("year", value);
  };
  useEffect(() => {
    if (period && year) {
      loadStatuses();
    }
  }, [period, year]);

  const loadStatuses = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get("Evaluation/GetStatus", {
        params: {
          serviceNo,
          UserType: userType,
          period,
          year,
        },
        headers: {
          request_token,
        },
      });

      if (response.status === 200 && response.data.ResultSet) {
        const statuses = response.data.ResultSet;
        setStatuses(statuses);


        const inCompleteStatus = statuses.find(
          (status) => status.Value.toLowerCase() === "in complete"
        );
        setSelectedStatus(inCompleteStatus ? inCompleteStatus.Key : statuses[0]?.Key || "");
      } else {
        setError("Failed to load statuses.");
      }
    } catch (error) {
      setError("An error occurred while loading statuses.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };



  const handleReset = () => {
    setEmployee(null);
    setPeriod("");
    setYear("");
    setSelectedStatus("");
    setEmployeeImage(null);
    setImageError(false);


    localStorage.removeItem("employeeData");
    localStorage.removeItem("serviceNo");
    localStorage.removeItem("period");
    localStorage.removeItem("year");

    Swal.fire({
      icon: "success",
      title: "Data Reset",
      text: "All data has been cleared successfully.",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {

        window.location.reload();
      }
    });
  };


  useEffect(() => {
    if (employee && employee.id) {
      const fetchImage = async () => {
        try {
          const response = await fetch(
            `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetUserImg?serviceNo=${employee.id}`
          );
          if (response.ok) {

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setEmployeeImage(imageUrl);
            setImageError(false);
          } else {
            setImageError(true);
          }
        } catch (error) {
          console.error("Error fetching image:", error);
          setImageError(true);
        }
      };
      fetchImage();
      return () => {
        if (employeeImage) {
          URL.revokeObjectURL(employeeImage);
        }
      };
    }
  }, [employee]);
  return (
    <div className="bg-gray-50 shadow-md p-6 rounded-lg space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 ">
            Employee Evaluation
          </h2>
          <p className="text-sm text-gray-400">
            Manage and evaluate employee performance effectively.
          </p>
        </div>
        {/* <button
          onClick={toggleModal}
          className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          Select Employee
        </button>
        <button
      onClick={handleReset}
      className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
    >
      Reset
    </button> */}
      <div className="flex gap-2 md:gap-4 mt-4 md:mt-0">
    <button
      onClick={toggleModal}
      className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
    >
      Select Employee
    </button>
    <button
      onClick={handleReset}
      className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
    >
      Reset
    </button>
  </div>
      </div>
      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Employee Details
            </h3>
            <p className="text-gray-600 text-sm">
              {employee ? (
                <span>
                  <strong className="text-green-600">ID:</strong>
                  <span className="font-bold text-blue-600 mr-2">
                    {employee.id || "N/A"}
                  </span>
                  | <strong className="text-green-600">Name:</strong>
                  <span className="font-bold text-blue-600">
                    {employee.name || "N/A"}
                  </span>
                </span>
              ) : (
                "No employee selected"
              )}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Evaluation Status
              </label>
              <select
                className="w-full p-2 border rounded shadow-sm"
                onFocus={loadStatuses}
                onChange={(e) => setSelectedStatus(e.target.value)}
                value={selectedStatus || "incomplete"}
              >
                {statuses.length === 0 ? (
                  <option value="incomplete">In Complete</option>
                ) : (
                  statuses.map((status, index) => (
                    <option key={index} value={status.Key}>
                      {status.Value}
                    </option>
                  ))
                )}
              </select>


            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Category
              </label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Executive</option>
                <option>Non-Executive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Period
              </label>
              <select
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={period}
                onChange={handlePeriodChange}
              >
                <option value="">Select the Period</option>
                <option value="1">Mid year</option>
                <option value="2">Year end</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Year
              </label>
              <select
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={year}
                onChange={handleYearChange}
              >
                <option value="">Select the Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="space-y-2 mt-6"> {/* Add margin-top to move it lower */}
  <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            {employeeImage && !imageError ? (
              <img
                src={employeeImage}
                alt="Employee"
                className="w-55 h-40 object-cover border border-gray-300 shadow mb-5"
              />
            ) : (
              <img
                src={image1}
                alt="Default Employee"
                className="w-32 h-32 object-cover border border-gray-300 shadow mb-4"
              />
            )}
            <p className="text-gray-600 font-bold text-sm">
              {employee?.name || "No Employee Selected"}
            </p>
          </div>
        </div>
      </div>
      {/* Employee Details Section */}
      <div className="bg-white shadow-xl p-3 rounded-x1 mt-6 max-w-5x1 mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-3 border-b pb-2 center">
          Employee Overview
        </h2>
        {employee ? (
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {/* Display employee details in a grid layout */}
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">Name :</p>
              <p className="text-l font-semibold text-blue-800">
                {employee.name ? employee.name : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">Designation :</p>
              <p className="text-l font-semibold text-blue-800">
                {employee.designation ? employee.designation : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">Division :</p>
              <p className="text-l font-semibold text-blue-800">
                {employee.division ? employee.division : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">Department :</p>
              <p className="text-l font-semibold text-blue-800">
                {employee.department ? employee.department : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">
                Recruitment Date :
              </p>
              <p className="text-l font-semibold text-blue-800">
                {employee.recruitmentDate ? employee.recruitmentDate : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">Basic Salary :</p>
              <p className="text-l font-semibold text-blue-800">
                {employee.basicSalary ? employee.basicSalary : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">
                Permanent Date :
              </p>
              <p className="text-l font-semibold text-blue-800">
                {employee.permanentDate ? employee.permanentDate : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">
                Present Grade :
              </p>
              <p className="text-l font-semibold text-blue-800">
                {employee.presentGrade ? employee.presentGrade : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">
                Retirement Date :
              </p>
              <p className="text-l font-semibold text-blue-800">
                {employee.retirementDate ? employee.retirementDate : "-"}
              </p>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg shadow-md">
              <p className="text-lg font-bold text-green-700">
                Basis of Employment :
              </p>
              <p className="text-l font-semibold text-blue-800">
                {employee.basisOfEmployment ? employee.basisOfEmployment : "-"}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading employee data...</p>
        )}
      </div>
      <EMPModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        onEmployeeSelect={handleEmployeeSelect}
      />
    </div>
  );
};

export default EmployeeSelection;