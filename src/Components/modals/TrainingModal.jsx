import React, { useState, useEffect } from "react";
import axios from "axios";


const CourseDetailsModal = ({ isOpen, closePopup, workCategory = "", searchParam = "" }) => {
    const [trainingData, setTrainingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCourseGrades = async () => {
        try {
          const userType = localStorage.getItem("userType") || "Ex";
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
                          <input type="checkbox" className="form-checkbox" />
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
          <div className="flex mt-6 justify-end space-x-1">
            <button
              className="bg-red-500 text-white px-3 py-2 rounded"
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
    const [trainingData1, setTrainingData1] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const serviceNo = localStorage.getItem("serviceNo");
          const year = parseInt(localStorage.getItem("year"));
          const periodType = localStorage.getItem("period") || "defaultPeriod";
          const userType = localStorage.getItem("userType") || "Ex";
  
          const response = await axios.get("/Evaluation/GetTrainingIdentificationData", {
            params: {
              serviceNo,
              year,
              periodType,
              UserType: userType,
            },
            headers: {
              request_token: localStorage.getItem("request_token"),
            },
          });
  
          if (response.status === 200 && response.data.StatusCode === 200) {
            setTrainingData1(response.data.ResultSet || []);
          } else {
            throw new Error("Failed to fetch course data.");
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
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
    }, []);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
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
        <button
          onClick={toggleModal}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Course details
          </button>
        <CourseDetailsModal 
          isOpen={isModalOpen}
          closePopup={toggleModal}
        />
      </div>

      {/* Course selection */}
      <div className="mt-6">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
            </tr>
          </thead>
          <tbody>
            {trainingData1.length > 0 ? (
              trainingData1.map((course, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{course.CourseName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center border border-gray-300 px-4 py-2">
                  No courses found.
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
        ></textarea>
      </div>

      {/* Additional input */}
      <div className="mt-4 flex space-x-4">
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
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

      {/* Close and Save buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
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

export default Training;
