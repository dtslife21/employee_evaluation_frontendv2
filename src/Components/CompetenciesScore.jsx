
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../src/Context/AuthContext";

// const CompetenciesScore = ({ selectedEmployee }) => {
//   const [attendanceSummary, setAttendanceSummary] = useState([]);
//   const [shortLeave, setShortLeave] = useState(0);
//   const [attendanceDetails, setAttendanceDetails] = useState([]);
//   const [lateOccasions, setLateOccasions] = useState(0);
//   const [extraHours, setExtraHours] = useState(0);
//   const [careerDevelopment, setCareerDevelopment] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [careerDevScores, setCareerDevScores] = useState({});
//   const { request_token } = useAuth();
//   const [competenciesDetails, setCompetenciesDetails] = useState([]);
//   const [careerDevPlans, setCareerDevPlans] = useState([]);
//   const [scores, setScores] = useState({
//     achievementOrientation: 0,
//     peopleOrientation: 0,
//     managerialOrientation: 0,
//     adaptiveOrientation: 0,
//   });



//   useEffect(() => {
//     const fetchAttendanceSummary = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = localStorage.getItem("year");
//         const periodType = localStorage.getItem("period") || "defaultPeriod";
//         const userType = localStorage.getItem("userType") || "Ex";

//         if (!serviceNo || !year) {
//           console.warn("Missing required data in local storage. Skipping API call.");
//           setIsLoading(false);
//           return;
//         }

//         const response = await axios.get("/Evaluation/GetAttendanceSummaryData", {
//           params: { serviceNo, year: parseInt(year, 10), periodType, UserType: userType },
//           headers: { request_token },
//         });

//         const result = response.data.ResultSet;
//         setShortLeave(parseInt(result.Short_leave, 10) || 0);
//         setAttendanceDetails(result.AttendanceSummaryDataGrid2);
//         setAttendanceSummary(result.AttendanceSummaryDataGrid1);
//         setLateOccasions(result.Late_occassions);
//         setExtraHours(result.Extra_Hours_Performed);
//       } catch (error) {
//         console.error("Error fetching attendance summary data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     const fetchCompetenciesDetails = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = localStorage.getItem("year");
//         const period = localStorage.getItem("period") || "2";
//         const userType = localStorage.getItem("userType") || "Ex";

//         if (!serviceNo || !year) {
//           console.warn("Missing required data in local storage. Skipping API call.");
//           setIsLoading(false);
//           return;
//         }

//         const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCompetenciesDetails", {
//           params: { serviceNo, UserType: userType, period, year },
//           headers: { request_token },
//         });

//         const result = response.data.ResultSet || [];
//         setCompetenciesDetails(result);

//         const achievementOrientation = result
//           .filter(item => item.Com_Code >= 1 && item.Com_Code <= 6)
//           .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

//         const peopleOrientation = result
//           .filter(item => item.Com_Code >= 7 && item.Com_Code <= 11)
//           .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

//         const managerialOrientation = result
//           .filter(item => item.Com_Code >= 12 && item.Com_Code <= 17)
//           .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

//         const adaptiveOrientation = result
//           .filter(item => item.Com_Code >= 18 && item.Com_Code <= 20)
//           .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

//         setScores({
//           achievementOrientation,
//           peopleOrientation,
//           managerialOrientation,
//           adaptiveOrientation,
//         });
//       } catch (error) {
//         console.error("Error fetching competencies details:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

    
  
//     const fetchCareerDevelopmentScores = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const userType = localStorage.getItem("userType") || "Ex";
//         const year = localStorage.getItem("year");
//         const period = localStorage.getItem("period") || "defaultPeriod";
        
//         if (!serviceNo) {
//           console.warn("Missing required data in local storage.");
//           return;
//         }

//         const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCareerDev", {
//           params: { serviceNo, UserType: userType, year, period },
//           headers: { request_token },
//         });

//         const result = response.data.ResultSet || [];

        
//         const scoresMap = {};
//         const plansArray = [];

//         result.forEach(item => {
//           scoresMap[item.Care_area] = item.Care_Score;
//           plansArray.push({
//             Care_ID: item.Care_area,
//             area: getCareAreaTitle(item.Care_area),
//             plan: item.Care_Plan
//           });
//         });

//         setCareerDevScores(scoresMap);
//         setCareerDevPlans(plansArray);
//       } catch (error) {
//         console.error("Error fetching career development data:", error);
//       }
//     };

    
//     const getCareAreaTitle = (careArea) => {
//       const titles = {
//         "1": "Professional Qualifications",
//         "2": "Higher Education",
//         "3": "Continuous Professional Development - CPD"
//       };
//       return titles[careArea] || `Area ${careArea}`;
//     };


//     fetchCareerDevelopmentScores();
//     fetchAttendanceSummary();

//     fetchCompetenciesDetails();
//   }, [selectedEmployee, request_token]);

  

//   return (
//     <div className="bg-white shadow p-4 rounded">
//       <h3 className="text-lg font-semibold text-gray-700 mb-4">Competencies Score</h3>
//       <table className="table-auto w-full border">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 border">Criteria</th>
//               <th className="p-2 border">Superior Appraisal</th>
//               <th className="p-2 border">Self Appraisal</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="p-2 border">Achievement Orientation</td>
//               <td className="p-2 border text-left">{scores.achievementOrientation}</td>
//               <td className="p-2 border text-left">0</td>
//             </tr>
//             <tr>
//               <td className="p-2 border">People Orientation</td>
//               <td className="p-2 border text-left">{scores.peopleOrientation}</td>
//               <td className="p-2 border text-left">0</td>
//             </tr>
//             <tr>
//               <td className="p-2 border">Managerial Orientation</td>
//               <td className="p-2 border text-left">{scores.managerialOrientation}</td>
//               <td className="p-2 border text-left">0</td>
//             </tr>
//             <tr>
//               <td className="p-2 border">Adaptive Orientation</td>
//               <td className="p-2 border text-left">{scores.adaptiveOrientation}</td>
//               <td className="p-2 border text-left">0</td>
//             </tr>
//           </tbody>
//         </table>

//       <div className="my-4 border-t border-gray-300" />

//       <h3 className="text-lg font-semibold text-gray-700 mb-4">Career Development Score</h3>
//       <table className="w-full border-collapse border border-gray-300 text-sm">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border border-gray-300 px-4 py-2 text-left">Area</th>
//             <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
//             <th className="border border-gray-300 px-4 py-2 text-center">Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {careerDevPlans.map((item, index) => (
//             <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//               <td className="border border-gray-300 px-4 py-2">{item.area}</td>
//               <td className="border border-gray-300 px-4 py-2" style={{ backgroundColor: "#fdf2e9" }}>
//                 {item.plan}
//               </td>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 {careerDevScores[item.Care_ID] ?? 0}
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td className="border border-gray-300 px-4 py-2 font-semibold" colSpan={2}>
//               Total
//             </td>
//             <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-300 font-semibold">
//               {Object.values(careerDevScores).reduce((sum, score) => sum + parseInt(score || 0, 10), 0)}
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="my-4 border-t border-gray-300" />

//       <h3 className="text-lg font-semibold text-gray-700 mb-4">HR Aspects Score</h3>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2 text-left">Description</th>
//             <th className="border px-4 py-2 text-center">Total</th>
//             <th className="border px-4 py-2 text-center">Taken</th>
//             <th className="border px-4 py-2 text-center"> (%)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceSummary.map((item, index) => {
//             const total = parseFloat(item.Total) || 0;
//             const taken = parseFloat(item.Taken) || 0;
//             const balancePercentage = total > 0 ? ((taken / total) * 100).toFixed(2) : "0.00";

//             return (
//               <tr key={index}>
//                 <td className="border px-4 py-2">{item.Description}</td>
//                 <td className="border px-4 py-2 text-center">{total}</td>
//                 <td className="border px-4 py-2 text-center">{taken}</td>
//                 <td className="border px-4 py-2 text-center">{balancePercentage}%</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <div className="my-4 border-t border-gray-300" />

//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2 text-left"></th>
//             <th className="border px-4 py-2 text-left">Total</th>
//             <th className="border px-4 py-2 text-center">Taken</th>
//             <th className="border px-4 py-2 text-center">%</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border px-4 py-2">Short Leave Taken</td>
//             <td className="border px-4 py-2 text-center">24</td>{" "}
//             {/* Replace with dynamic total */}
//             <td className="border px-4 py-2 text-center">{shortLeave}</td>
//             <td className="border px-4 py-2 text-center">
//               {24 > 0 ? ((shortLeave / 24) * 100).toFixed(2) : "0.00"}%
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="my-4 border-t border-gray-300" />

//       <div className="flex space-x-8">
//         <table className="table-auto w-1/3 border">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 border">Leave Type</th>
//               <th className="p-2 border">Days</th>
//             </tr>
//           </thead>
//           <tbody>
//             {attendanceDetails.map((item, index) => (
//               <tr key={index}>
//                 <td className="border px-4 py-2">{item.LeaveType}</td>
//                 <td className="border px-4 py-2 text-center">{item.Days || 0}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <table className="table-auto w-1/3 border">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 border"></th>
//               <th className="p-2 border">Days</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border px-4 py-2">Late Occasions</td>
//               <td className="border px-4 py-2 text-center">{lateOccasions}</td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table-auto w-1/3 border">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 border"></th>
//               <th className="p-2 border">%</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border px-4 py-2">Extra Hours Performed</td>
//               <td className="border px-4 py-2 text-center">
//                 {500 > 0 ? ((extraHours / 2080) * 100).toFixed(2) : "0.00"}%
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CompetenciesScore;







import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../src/Context/AuthContext";

const CompetenciesScore = ({ selectedEmployee }) => {
  const [attendanceSummary, setAttendanceSummary] = useState([]);
  const [shortLeave, setShortLeave] = useState(0);
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [lateOccasions, setLateOccasions] = useState(0);
  const [extraHours, setExtraHours] = useState(0);
  const [careerDevelopment, setCareerDevelopment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [careerDevScores, setCareerDevScores] = useState({});
  const { request_token } = useAuth();
  const [competenciesDetails, setCompetenciesDetails] = useState([]);
  const [careerDevPlans, setCareerDevPlans] = useState([]);
  const [scores, setScores] = useState({
    achievementOrientation: 0,
    peopleOrientation: 0,
    managerialOrientation: 0,
    adaptiveOrientation: 0,
  });

  useEffect(() => {
    const fetchAttendanceSummary = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = localStorage.getItem("year");
        const periodType = localStorage.getItem("period") || "defaultPeriod";
        const userType = localStorage.getItem("userType") || "Ex";

        if (!serviceNo || !year) {
          console.warn("Missing required data in local storage. Skipping API call.");
          setIsLoading(false);
          return;
        }

        const response = await axios.get("/Evaluation/GetAttendanceSummaryData", {
          params: { serviceNo, year: parseInt(year, 10), periodType, UserType: userType },
          headers: { request_token },
        });

        const result = response.data.ResultSet;
        setShortLeave(parseInt(result.Short_leave, 10) || 0);
        setAttendanceDetails(result.AttendanceSummaryDataGrid2);
        setAttendanceSummary(result.AttendanceSummaryDataGrid1);
        setLateOccasions(result.Late_occassions);
        setExtraHours(result.Extra_Hours_Performed);
      } catch (error) {
        console.error("Error fetching attendance summary data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCompetenciesDetails = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = localStorage.getItem("year");
        const period = localStorage.getItem("period") || "2";
        const userType = localStorage.getItem("userType") || "Ex";

        if (!serviceNo || !year) {
          console.warn("Missing required data in local storage. Skipping API call.");
          setIsLoading(false);
          return;
        }

        const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCompetenciesDetails", {
          params: { serviceNo, UserType: userType, period, year },
          headers: { request_token },
        });

        const result = response.data.ResultSet || [];
        setCompetenciesDetails(result);

        const achievementOrientation = result
          .filter(item => item.Com_Code >= 1 && item.Com_Code <= 6)
          .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

        const peopleOrientation = result
          .filter(item => item.Com_Code >= 7 && item.Com_Code <= 11)
          .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

        const managerialOrientation = result
          .filter(item => item.Com_Code >= 12 && item.Com_Code <= 17)
          .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

        const adaptiveOrientation = result
          .filter(item => item.Com_Code >= 18 && item.Com_Code <= 20)
          .reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);

        setScores({
          achievementOrientation,
          peopleOrientation,
          managerialOrientation,
          adaptiveOrientation,
        });
      } catch (error) {
        console.error("Error fetching competencies details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCareerDevelopmentScores = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const userType = localStorage.getItem("userType") || "Ex";
        const year = localStorage.getItem("year");
        const period = localStorage.getItem("period") || "defaultPeriod";

        if (!serviceNo) {
          console.warn("Missing required data in local storage.");
          return;
        }

        const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCareerDev", {
          params: { serviceNo, UserType: userType, year, period },
          headers: { request_token },
        });

        const result = response.data.ResultSet || [];

        const scoresMap = {};
        const plansArray = [];

        result.forEach(item => {
          scoresMap[item.Care_area] = item.Care_Score;
          plansArray.push({
            Care_ID: item.Care_area,
            area: getCareAreaTitle(item.Care_area),
            plan: item.Care_Plan
          });
        });

        setCareerDevScores(scoresMap);
        setCareerDevPlans(plansArray);
      } catch (error) {
        console.error("Error fetching career development data:", error);
      }
    };

    const getCareAreaTitle = (careArea) => {
      const titles = {
        "1": "Professional Qualifications",
        "2": "Higher Education",
        "3": "Continuous Professional Development - CPD"
      };
      return titles[careArea] || `Area ${careArea}`;
    };

    fetchCareerDevelopmentScores();
    fetchAttendanceSummary();
    fetchCompetenciesDetails();
  }, [selectedEmployee, request_token]);

  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Competencies Score</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Criteria</th>
              <th className="p-2 border">Superior Appraisal</th>
              <th className="p-2 border">Self Appraisal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Achievement Orientation</td>
              <td className="p-2 border text-left">{scores.achievementOrientation}</td>
              <td className="p-2 border text-left">0</td>
            </tr>
            <tr>
              <td className="p-2 border">People Orientation</td>
              <td className="p-2 border text-left">{scores.peopleOrientation}</td>
              <td className="p-2 border text-left">0</td>
            </tr>
            <tr>
              <td className="p-2 border">Managerial Orientation</td>
              <td className="p-2 border text-left">{scores.managerialOrientation}</td>
              <td className="p-2 border text-left">0</td>
            </tr>
            <tr>
              <td className="p-2 border">Adaptive Orientation</td>
              <td className="p-2 border text-left">{scores.adaptiveOrientation}</td>
              <td className="p-2 border text-left">0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 border-t border-gray-300" />

      <h3 className="text-lg font-semibold text-gray-700 mb-4">Career Development Score</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Area</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Score</th>
            </tr>
          </thead>
          <tbody>
            {careerDevPlans.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border border-gray-300 px-4 py-2">{item.area}</td>
                <td className="border border-gray-300 px-4 py-2" style={{ backgroundColor: "#fdf2e9" }}>
                  {item.plan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {careerDevScores[item.Care_ID] ?? 0}
                </td>
              </tr>
            ))}
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold" colSpan={2}>
                Total
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-300 font-semibold">
                {Object.values(careerDevScores).reduce((sum, score) => sum + parseInt(score || 0, 10), 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 border-t border-gray-300" />

      <h3 className="text-lg font-semibold text-gray-700 mb-4">HR Aspects Score</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
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
              const balancePercentage = total > 0 ? ((taken / total) * 100).toFixed(2) : "0.00";

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
      </div>

      <div className="my-4 border-t border-gray-300" />

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
              <td className="border px-4 py-2 text-center">{shortLeave}</td>
              <td className="border px-4 py-2 text-center">
                {24 > 0 ? ((shortLeave / 24) * 100).toFixed(2) : "0.00"}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 border-t border-gray-300" />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="overflow-x-auto w-full md:w-1/3">
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Leave Type</th>
                <th className="p-2 border">Days</th>
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
        </div>

        <div className="overflow-x-auto w-full md:w-1/3">
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border"></th>
                <th className="p-2 border">Days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Late Occasions</td>
                <td className="border px-4 py-2 text-center">{lateOccasions}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto w-full md:w-1/3">
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border"></th>
                <th className="p-2 border">%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Extra Hours Performed</td>
                <td className="border px-4 py-2 text-center">
                  {500 > 0 ? ((extraHours / 2080) * 100).toFixed(2) : "0.00"}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompetenciesScore;