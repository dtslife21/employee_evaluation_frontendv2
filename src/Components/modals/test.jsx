import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import debounce from "lodash.debounce"; // Install: npm install lodash.debounce
const CareerDevelopmentModal = ({ closePopup }) => {
  const [scores, setScores] = useState({}); // Scores are now dynamic based on areas
  const [maxValues, setMaxValues] = useState({});
  const [areaPlans, setAreaPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initially loading the data
  const [isSaving, setIsSaving] = useState(false); // Separate saving state
  // Mock API call to fetch area/plan data and max values
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
        const mockData = [
          { id: "1", area: "Professional Qualifications", plan: "Become a chartered engineer by 2025", maxScore: 1 },
          { id: "2", area: "Higher Education", plan: "Complete a MSc or MBA by 2026", maxScore: 1 },
          { id: "3", area: "Continuous Professional Development - CPD", plan: "Short course on Human Resource Development", maxScore: 3 },
        ];
        setAreaPlans(mockData);
        // Initialize scores and maxValues based on fetched data
        const initialScores = {};
        const initialMaxValues = {};
        mockData.forEach((item) => {
          initialScores[item.area] = 0;
          initialMaxValues[item.area] = item.maxScore;
        });
        setScores(initialScores);
        setMaxValues(initialMaxValues);
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load data. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleScoreChange = (area, value) => {
    const numericValue = parseInt(value, 10) || 0;
    const maxValue = maxValues[area];
    if (numericValue >= 0 && numericValue <= maxValue) {
      setScores((prevScores) => ({ ...prevScores, [area]: numericValue }));
    } else {
      Swal.fire({
        icon: "warning",
        title: "Invalid Score",
        text: `Maximum allowed score for "${area}" is ${maxValue}`,
      });
    }
  };
  // Debounce the handleScoreChange function
  const debouncedHandleScoreChange = useCallback(debounce(handleScoreChange, 300), [maxValues]);
  const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
  
  const handleSave = async () => {
    setIsSaving(true);
    const serviceNo = localStorage.getItem("serviceNo") || "0004536";
    const userType = localStorage.getItem("userType") || "EX";
    const requestToken = localStorage.getItem("request_token");
    const requestData = areaPlans.map((item) => ({
      Care_area: item.id, // Use the id from the areaPlans
      Care_Plan: item.id,
      Care_Score: parseInt(scores[item.area] || 0, 10), // Handle potentially missing scores
    }));
    try {
      await axios.post(`/Evaluation/SaveCareerDev`, requestData, {
        params: { UserType: userType, ServiceNo: serviceNo },
        headers: {
          "Content-Type": "application/json",
          "request_token": requestToken,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Scores saved successfully!",
      }).then(() => {
        closePopup();
        window.location.reload();
      });
    } catch (error) {
      console.error("Error saving scores:", error.response?.data?.message || error.message); // Log more specific error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to save scores. Please try again.", // Show more specific error
      });
    } finally {
      setIsSaving(false);
    }
  };
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl">Loading...</div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
        {/* Wider modal */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold focus:outline-none"
          onClick={closePopup}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Career Development Score</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Area</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              {areaPlans.map((item) => (
                <tr key={item.id} className="bg-white hover:bg-gray-50 transition-colors">
                  {/* Added hover effect */}
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">{item.area}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700" style={{ backgroundColor: "#FDF2E9" }}>
                    {item.plan}
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-center">
                    <input
                      type="number"
                      className="w-24 text-center border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block mx-auto"
                      min="0"
                      max={maxValues[item.area]}
                      value={scores[item.area] || 0}
                      onChange={(e) => debouncedHandleScoreChange(item.area, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-bold text-gray-700" colSpan={2}>
                  Total
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-yellow-100 font-bold text-gray-700">
                  {totalScore}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex mt-6 justify-end space-x-4">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSaving ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Saving...
              </>
            ) : (
              "Save"
            )}
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default CareerDevelopmentModal;