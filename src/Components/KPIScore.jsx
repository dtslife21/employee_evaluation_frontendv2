import React, { useEffect, useState } from "react";

const KPIScore = () => {
  const [kpiData, setKpiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const requestToken = localStorage.getItem("request_token");

  useEffect(() => {
    const fetchData = async () => {
      const serviceNo = localStorage.getItem("serviceNo");
      const year = localStorage.getItem("year");
      const period = localStorage.getItem("period");
      const userType = localStorage.getItem("userType") || "Ex";
      try {
        const response = await fetch(
          `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetKPIDetails?serviceNo=${serviceNo}&year=${year}&peroid=${period}&UserType=${userType}`,
          {
            headers: { request_token: requestToken },
          }
        );

        const data = await response.json();
        if (data.StatusCode === 200 && data.ResultSet) {
          processKPIData(data.ResultSet);
        } else {
          setKpiData(null);
        }
      } catch (error) {
        console.error("Error fetching KPI data:", error);
        setKpiData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const processKPIData = (resultSet) => {
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

    setKpiData({
      division: divisionTotal,
      department: departmentTotal,
      self: selfTotal,
    });
  };


  if (loading) return <p>Loading KPI data...</p>;
  if (!kpiData) return <p>No KPI data available.</p>;

  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h3 className="text-lg font-bold text-gray-700 mb-4">KPI Score</h3>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">KPIs</th>
            <th className="p-2 border">Scores (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border text-left">Division KPIs</td>
            <td className="p-2 border text-left">{kpiData.division}</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Departmental KPIs</td>
            <td className="p-2 border text-left">{kpiData.department}</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Self KPIs</td>
            <td className="p-2 border text-left">{kpiData.self}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 font-semibold">Total KPI Score = 100%</p>
    </div>
  );
};

export default KPIScore;