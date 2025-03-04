// import React from 'react';

// const KPIModal = ({ closePopup }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="relative bg-white p-6 rounded shadow-lg"> {/* Added 'relative' */}
//       <button
//         className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
//         onClick={closePopup}
//       >
//         &times;
//       </button>
//       <h2 className="text-xl font-bold mb-4">KPI</h2>
//       <p>This is the content for the KPI Non Executive.</p>
//       <button
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//         onClick={closePopup}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// export default KPIModal;


import React, { useEffect, useState } from "react";
const KPIModal = ({ closePopup }) => {
  const [kpiData, setKpiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchKPIData = async () => {
      const serviceNo = localStorage.getItem("serviceNo");
      const year = localStorage.getItem("year");
      const period = localStorage.getItem("period") || "2";
      const userType = localStorage.getItem("userType") || "NonEx";
      const requestToken = localStorage.getItem("request_token");
      if (!serviceNo || !year || !requestToken) {
        setLoading(false);
        return;
      }
      try {
        const apiUrl = `https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Evaluation/GetKPIDetails?serviceNo=${serviceNo}&year=${year}&peroid=${period}&UserType=${userType}`;
        const response = await fetch(apiUrl, {
          headers: { request_token: requestToken },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.StatusCode === 200 && data.ResultSet) {
          setKpiData(data.ResultSet);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchKPIData();
  }, []);
  // Function to get category label
  const getCriteriaLabel = (criteria) => {
    switch (criteria) {
      case "1":
        return "Divisional Criteria";
      case "2":
        return "Departmental Criteria";
      case "3":
        return "Self Target Criteria";
      default:
        return "Unknown Criteria";
    }
  };
  // Sort data to ensure grouping
  const sortedData = [...kpiData].sort((a, b) =>
    a.KPI_Criteria.localeCompare(b.KPI_Criteria)
  );
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
          onClick={closePopup}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-6">KPI</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Criteria
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Goal Title
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Full Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.length > 0 ? (
                  sortedData.map((kpi, index, arr) => {
                    const showCategoryHeader =
                      index === 0 ||
                      kpi.KPI_Criteria !== arr[index - 1].KPI_Criteria;
                    return (
                      <React.Fragment key={index}>
                        {showCategoryHeader && (
                          <tr className="bg-gray-200 font-semibold">
                            <td
                              colSpan="3"
                              className="border border-gray-300 px-4 py-2 text-left"
                            >
                              {getCriteriaLabel(kpi.KPI_Criteria)}
                            </td>
                          </tr>
                        )}
                        <tr
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="border border-gray-300 px-4 py-2">
                            {getCriteriaLabel(kpi.KPI_Criteria)}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {kpi.KPI_GTitle}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {kpi.KPI_Score}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex mt-6 justify-end space-x-1">
          <button
            className="bg-red-500  text-white px-3 py-2 rounded mt-4"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default KPIModal;