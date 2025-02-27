// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../../../src/Context/AuthContext";

// const EvaluationScore = () => {
//   const [attendanceData, setAttendanceData] = useState(null);
//   const [attendanceSummary, setAttendanceSummary] = useState([]);
//   const [attendanceDetails, setAttendanceDetails] = useState([]);
//   const [shortLeave, setShortLeave] = useState(0);
//   const [lateOccasions, setLateOccasions] = useState(0);
//   const [extraHours, setExtraHours] = useState(0);
//   const [hrAspectsScore, setHrAspectsScore] = useState(null);
//   const [careerDevScores, setCareerDevScores] = useState({});
//   const [careerDevPlans, setCareerDevPlans] = useState([]);
//   const { request_token } = useAuth();
//   const [competenciesScore, setCompetenciesScore] = useState(null);
//   useEffect(() => {
//     const fetchAttendanceData = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const year = parseInt(localStorage.getItem("year"));
//         const periodType = localStorage.getItem("period") || "defaultPeriod";
//         const userType = localStorage.getItem("userType") || "Ex";
//         const response = await axios.get(
//           "https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetAttendanceSummaryData",
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
//         if (response.data.StatusCode === 200 && response.data.ResultSet) {
//           const result = response.data.ResultSet;
//           setAttendanceData(result);
//           setAttendanceSummary(result.AttendanceSummaryDataGrid1 || []);
//           setAttendanceDetails(result.AttendanceSummaryDataGrid2 || []);
//           setShortLeave(parseInt(result.Short_leave, 10) || 0);
//           setLateOccasions(parseInt(result.Late_occassions, 10) || 0);
//           setExtraHours(parseFloat(result.Extra_Hours_Performed) || 0);
//           calculateTotalScore(result);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
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

//         const response = await axios.get("Evaluation/GetCareerDev", {
//           params: { serviceNo, UserType: userType, year, period },
//           headers: { request_token },
//         });

//         const result = response.data.ResultSet || [];

//         // Create a map for scores and plans
//         const scoresMap = {};
//         const plansArray = [];

//         result.forEach(item => {
//           scoresMap[item.Care_area] = item.Care_Score;
//           plansArray.push({
//             Care_ID: item.Care_area,
//             area: getCareAreaTitle(item.Care_area), // Helper function to get area title
//             plan: item.Care_Plan
//           });
//         });

//         setCareerDevScores(scoresMap);
//         setCareerDevPlans(plansArray);
//       } catch (error) {
//         console.error("Error fetching career development data:", error);
//       }
//     };

//     // Helper function to map Care_area to titles
//     const getCareAreaTitle = (careArea) => {
//       const titles = {
//         "1": "Professional Qualifications",
//         "2": "Higher Education",
//         "3": "Continuous Professional Development - CPD"
//       };
//       return titles[careArea] || `Area ${careArea}`;
//     };

//     const fetchCompetenciesScore = async () => {
//       try {
//         const serviceNo = localStorage.getItem("serviceNo");
//         const userType = localStorage.getItem("userType") || "Ex";
//         const year = localStorage.getItem("year");
//         const period = localStorage.getItem("period") ;

//         if (!serviceNo) {
//           console.warn("Missing required data in local storage.");
//           return;
//         }

//         const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCompetenciesDetails", {
//           params: { serviceNo, UserType: userType, period, year },
//           headers: { request_token },
//         });

//         const result = response.data.ResultSet || [];
//         const totalComScore = result.reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);
//         const calculatedScore = (totalComScore / 5) * 2;
//         setCompetenciesScore(calculatedScore);
//       } catch (error) {
//         console.error("Error fetching competencies data:", error);
//       }
//     };

//     fetchCompetenciesScore();
//     fetchAttendanceData();
//     fetchCareerDevelopmentScores();
//   }, [request_token]);

//   const calculateActualScore = (percentage, description) => {
//     const scoringCriteria = {
//       "Annual Leave": { "0-50%": 4, "50-75%": 3, "75-100%": 2 },
//       "Casual Leave": { "0-50%": 2, "50-75%": 1, "75-100%": 0 },
//       "Sick Leave": { "0-50%": 1, "50-75%": 0, "75-100%": 0 },
//       "No Pay": { "0-50%": 0, "50-75%": -1, "75-100%": -2 },
//       "Not Entered": { "0-50%": 0, "50-75%": -1, "75-100%": -2 },
//     };
//     if (percentage <= 50) {
//       return scoringCriteria[description]?.["0-50%"] ?? 0;
//     } else if (percentage <= 75) {
//       return scoringCriteria[description]?.["50-75%"] ?? 0;
//     } else {
//       return scoringCriteria[description]?.["75-100%"] ?? 0;
//     }
//   };

//   const calculateTotalScore = (data) => {
//     if (!data) return;
//     const attendanceScore = (data.AttendanceSummaryDataGrid1 || []).reduce((total, item) => {
//       const totalVal = parseFloat(item.Total) || 0;
//       const takenVal = parseFloat(item.Taken) || 0;
//       const balancePercentage = totalVal > 0 ? (takenVal / totalVal) * 100 : 0;
//       return total + calculateActualScore(balancePercentage, item.Description);
//     }, 0);
//     const detailsScore = (data.AttendanceSummaryDataGrid2 || []).reduce((total, item) => {
//       const maxScore = item.LeaveType === "Nopay" ? 2 : 1;
//       const actualScore = item.Days > 10 ? 0 : maxScore;
//       return total + actualScore;
//     }, 0);
//     const shortLeavePercentage = (parseInt(data.Short_leave, 10) || 0) / 24 * 100;
//     const shortLeaveScore = shortLeavePercentage <= 50 ? 2 : shortLeavePercentage <= 75 ? 1 : 0;
//     const lateOccasionsScore = (parseInt(data.Late_occassions, 10) || 0) <= 5 ? 1 : 0;
//     const extraHoursPercentage = ((parseFloat(data.Extra_Hours_Performed) || 0) / 2080) * 100;
//     const extraHoursScore = extraHoursPercentage <= 15 ? 0 : extraHoursPercentage <= 35 ? 2 : 1;
//     const finalScore = attendanceScore + detailsScore + shortLeaveScore + lateOccasionsScore + extraHoursScore;
//     setHrAspectsScore(finalScore);
//   };

//   const totalCareerDevScore = Object.values(careerDevScores).reduce((sum, score) => sum + parseInt(score || 0, 10), 0);

//   return (
//     <div>
//       <div className="bg-white shadow p-4 rounded mb-4">
//         <h3 className="text-lg font-bold text-gray-700 mb-4">Evaluation Score</h3>
//         <table className="table-auto w-full border">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 border"></th>
//               <th className="p-2 border">KPI</th>
//               <th className="p-2 border">Competencies</th>
//               <th className="p-2 border">HR Aspects</th>
//               <th className="p-2 border">Career Development</th>
//               <th className="p-2 border">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="p-2 border text-center">Allocations</td>
//               <td className="p-2 border text-center">40%</td>
//               <td className="p-2 border text-center">40%</td>
//               <td className="p-2 border text-center">15%</td>
//               <td className="p-2 border text-center">5%</td>
//               <td className="p-2 border text-center">100</td>
//             </tr>
//             <tr>
//               <td className="p-2 border text-center">Actual</td>
//               <td className="p-2 border text-center">24</td>
//               <td className="p-2 border text-center">
//                 {competenciesScore !== null ? competenciesScore : "Calculating..."}
//               </td>
//               <td className="p-2 border text-center">{hrAspectsScore !== null ? hrAspectsScore : "Calculating..."}</td>
//               <td className="p-2 border text-center">{totalCareerDevScore !== null ? totalCareerDevScore : "Calculating..."}</td>
//               <td className="p-2 border text-center">{24 + (hrAspectsScore || 0) + totalCareerDevScore + competenciesScore}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EvaluationScore;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../src/Context/AuthContext";

const EvaluationScore = () => {
  const [attendanceData, setAttendanceData] = useState(null);
  const [attendanceSummary, setAttendanceSummary] = useState([]);
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [shortLeave, setShortLeave] = useState(0);
  const [lateOccasions, setLateOccasions] = useState(0);
  const [extraHours, setExtraHours] = useState(0);
  const [hrAspectsScore, setHrAspectsScore] = useState(null);
  const [careerDevScores, setCareerDevScores] = useState({});
  const [careerDevPlans, setCareerDevPlans] = useState([]);
  const { request_token } = useAuth();
  const [competenciesScore, setCompetenciesScore] = useState(null);
  const [kpiScore, setKpiScore] = useState(null);
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = parseInt(localStorage.getItem("year"));
        const periodType = localStorage.getItem("period") || "defaultPeriod";
        const userType = localStorage.getItem("userType") || "Ex";
        
        if (!serviceNo || !year) {
          setHrAspectsScore(0);
          return;
        }
        
        const response = await axios.get(
          "https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetAttendanceSummaryData",
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
        
        if (response.data.StatusCode === 200) {
          // Check if ResultSet exists but contains empty values
          const result = response.data.ResultSet;
          
          if (!result || 
              (result.Short_leave === "" && 
               result.Late_occassions === "" && 
               result.Extra_Hours_Performed === "" && 
               (!result.AttendanceSummaryDataGrid1 || result.AttendanceSummaryDataGrid1.length === 0) &&
               (!result.AttendanceSummaryDataGrid2 || result.AttendanceSummaryDataGrid2.every(item => item.Days === "")))) {
            // Return 0 for empty response
            setAttendanceData({});
            setAttendanceSummary([]);
            setAttendanceDetails([]);
            setShortLeave(0);
            setLateOccasions(0);
            setExtraHours(0);
            setHrAspectsScore(0);
            return;
          }
          
          // Process valid data
          setAttendanceData(result);
          setAttendanceSummary(result.AttendanceSummaryDataGrid1 || []);
          setAttendanceDetails(result.AttendanceSummaryDataGrid2 || []);
          setShortLeave(parseInt(result.Short_leave, 10) || 0);
          setLateOccasions(parseInt(result.Late_occassions, 10) || 0);
          setExtraHours(parseFloat(result.Extra_Hours_Performed) || 0);
          calculateTotalScore(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Set default values on error
        setHrAspectsScore(0);
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

        const response = await axios.get("Evaluation/GetCareerDev", {
          params: { serviceNo, UserType: userType, year, period },
          headers: { request_token },
        });

        const result = response.data.ResultSet || [];

        // Create a map for scores and plans
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

    // Helper function to map Care_area to titles
    const getCareAreaTitle = (careArea) => {
      const titles = {
        "1": "Professional Qualifications",
        "2": "Higher Education",
        "3": "Continuous Professional Development - CPD"
      };
      return titles[careArea] || `Area ${careArea}`;
    };


    const fetchCompetenciesScore = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const userType = localStorage.getItem("userType") || "Ex";
        const year = localStorage.getItem("year");
        const period = localStorage.getItem("period") ;

        if (!serviceNo || !year) {
          setHrAspectsScore(0);
          return;
        }

        const response = await axios.get("https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetCompetenciesDetails", {
          params: { serviceNo, UserType: userType, period, year },
          headers: { request_token },
        });

        const result = response.data.ResultSet || [];
        const totalComScore = result.reduce((sum, item) => sum + parseInt(item.Com_Score, 10), 0);
        const calculatedScore = (totalComScore / 5) * 2;
        setCompetenciesScore(calculatedScore);
      } catch (error) {
        console.error("Error fetching competencies data:", error);
      }
    };

    const fetchKPIData = async () => {
      try {
        const serviceNo = localStorage.getItem("serviceNo");
        const year = localStorage.getItem("year");
        const period = localStorage.getItem("period");
        const userType = localStorage.getItem("userType") || "Ex";
        if (!serviceNo || !year) {
          setHrAspectsScore(0);
          return;
        }
        
        const response = await axios.get(
          "https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetKPIDetails",
          {
            params: { 
              serviceNo, 
              year, 
              peroid: period,
              UserType: userType 
            },
            headers: { request_token },
          }
        );

        if (response.data.StatusCode === 200 && response.data.ResultSet) {
          calculateKPIScore(response.data.ResultSet);
        }
      } catch (error) {
        console.error("Error fetching KPI data:", error);
      }
    };

    const calculateKPIScore = (resultSet) => {
      let divisionTotal = 0,
          departmentTotal = 0,
          selfTotal = 0;
    
      resultSet.forEach((kpi) => {
        const score = parseFloat(kpi.KPI_Score) || 0;
    
        if (kpi.KPI_Criteria === "1") {
          divisionTotal += score;
        } else if (kpi.KPI_Criteria === "2") {
          departmentTotal += score;
        } else if (kpi.KPI_Criteria === "3") {
          selfTotal += score;
        }
      });
    
      // New calculation logic
      const divisionScore = (divisionTotal / 5) * 2;
      const departmentScore = (departmentTotal / 5) * 2;
      const selfScore = selfTotal / 5;
    
      // Calculate final KPI score based on new requirements
      //const finalKpiScore = ((divisionScore + departmentScore + selfScore) / 3) * 2;
      
      // Calculate final KPI score
      const finalKpiScore = ((divisionScore + departmentScore + selfScore) / 5) * 2;
      
      setKpiScore(finalKpiScore);
    };

    fetchCompetenciesScore();
    fetchAttendanceData();
    fetchCareerDevelopmentScores();
    fetchKPIData();
  }, [request_token]);



  const calculateActualScore = (percentage, description) => {
    const scoringCriteria = {
      "Annual Leave": { "0-50%": 4, "50-75%": 3, "75-100%": 2 },
      "Casual Leave": { "0-50%": 2, "50-75%": 1, "75-100%": 0 },
      "Sick Leave": { "0-50%": 1, "50-75%": 0, "75-100%": 0 },
      "No Pay": { "0-50%": 0, "50-75%": -1, "75-100%": -2 },
      "Not Entered": { "0-50%": 0, "50-75%": -1, "75-100%": -2 },
    };
    if (percentage <= 50) {
      return scoringCriteria[description]?.["0-50%"] ?? 0;
    } else if (percentage <= 75) {
      return scoringCriteria[description]?.["50-75%"] ?? 0;
    } else {
      return scoringCriteria[description]?.["75-100%"] ?? 0;
    }
  };

  const calculateTotalScore = (data) => {
    if (!data) return;
    const attendanceScore = (data.AttendanceSummaryDataGrid1 || []).reduce((total, item) => {
      const totalVal = parseFloat(item.Total) || 0;
      const takenVal = parseFloat(item.Taken) || 0;
      const balancePercentage = totalVal > 0 ? (takenVal / totalVal) * 100 : 0;
      return total + calculateActualScore(balancePercentage, item.Description);
    }, 0);
    const detailsScore = (data.AttendanceSummaryDataGrid2 || []).reduce((total, item) => {
      const maxScore = item.LeaveType === "Nopay" ? 2 : 1;
      const actualScore = item.Days > 10 ? 0 : maxScore;
      return total + actualScore;
    }, 0);
    const shortLeavePercentage = (parseInt(data.Short_leave, 10) || 0) / 24 * 100;
    const shortLeaveScore = shortLeavePercentage <= 50 ? 2 : shortLeavePercentage <= 75 ? 1 : 0;
    const lateOccasionsScore = (parseInt(data.Late_occassions, 10) || 0) <= 5 ? 1 : 0;
    const extraHoursPercentage = ((parseFloat(data.Extra_Hours_Performed) || 0) / 2080) * 100;
    const extraHoursScore = extraHoursPercentage <= 15 ? 0 : extraHoursPercentage <= 35 ? 2 : 1;
    const finalScore = attendanceScore + detailsScore + shortLeaveScore + lateOccasionsScore + extraHoursScore;
    setHrAspectsScore(finalScore);
  };

  const totalCareerDevScore = Object.values(careerDevScores).reduce((sum, score) => sum + parseInt(score || 0, 10), 0);


  const calculatedTotal = (kpiScore || 0) + (competenciesScore || 0) + (hrAspectsScore || 0) + (totalCareerDevScore || 0);

  const ScoreItem = ({ label, allocation, actual }) => (
    <div className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{allocation}%</span>
      </div>
      <div className="text-right text-lg font-semibold">
        {actual !== null ? actual.toFixed(2) : "0.00"}
      </div>
    </div>
  );

  return (
    <div className="w-full p-2">
    <div className="bg-white shadow rounded-lg p-3 sm:p-4">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Evaluation Score</h3>
      
      {/* Responsive table with horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-3 py-2 text-xs sm:text-sm text-left text-gray-700 whitespace-nowrap"></th>
                  <th className="px-3 py-2 text-xs sm:text-sm text-center text-gray-700 whitespace-nowrap">KPI</th>
                  <th className="px-3 py-2 text-xs sm:text-sm text-center text-gray-700 whitespace-nowrap">Competencies</th>
                  <th className="px-3 py-2 text-xs sm:text-sm text-center text-gray-700 whitespace-nowrap">HR Aspects</th>
                  <th className="px-3 py-2 text-xs sm:text-sm text-center text-gray-700 whitespace-nowrap">Career Development</th>
                  <th className="px-3 py-2 text-xs sm:text-sm text-center text-gray-700 whitespace-nowrap bg-yellow-300">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap bg-gray-50">Allocations</td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-600 whitespace-nowrap">40%</td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-600 whitespace-nowrap">40%</td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-600 whitespace-nowrap">15%</td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-600 whitespace-nowrap">5%</td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-600 whitespace-nowrap bg-yellow-300">100%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap bg-gray-50">Actual</td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-800 whitespace-nowrap font-medium">
                    {kpiScore !== null ? kpiScore.toFixed(2) : "0.00"}
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-800 whitespace-nowrap font-medium">
                    {competenciesScore !== null ? competenciesScore.toFixed(2) : "0.00"}
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-800 whitespace-nowrap font-medium">
                    {hrAspectsScore !== null ? hrAspectsScore.toFixed(2) : "0.00"}
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-800 whitespace-nowrap font-medium">
                    {totalCareerDevScore !== null ? totalCareerDevScore.toFixed(2) : "0.00"}
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm text-center text-gray-800 whitespace-nowrap font-medium bg-yellow-300">
                    {calculatedTotal.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Summary Cards - Shown below table */}
      
    </div>
  </div>
  );
};

export default EvaluationScore;