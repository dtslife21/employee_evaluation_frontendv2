import React, { useState } from "react";
import EvaluationHistoryPopup from "./EvaluationHistoryPopup";

const trainingData = [
  {
    id: 14,
    year: 2005,
    month: "January",
    course: "105042 - STRATEGIC MANAGEMENT & BUDGETARY CONTROL",
    status: "Completed",
    skill: "-",
  },
  {
    id: 15,
    year: 2005,
    month: "January",
    course: "105010 - LEADERSHIP SKILLS",
    status: "Completed",
    skill: "-",
  },
  {
    id: 16,
    year: 2004,
    month: "April",
    course: "107003 - FIRE FIGHTING & FIRE PREVENTION",
    status: "Not Completed",
    skill: "-",
  },
  {
    id: 17,
    year: 2004,
    month: "April",
    course: "105012 - MANAGEMENT DEVELOPMENT FOR ENGINEERS/MANAGERS",
    status: "Completed",
    skill: "-",
  },
  {
    id: 18,
    year: 2004,
    month: "August",
    course: "103001 - ADVANCED ENGLISH",
    status: "Completed",
    skill: "-",
  },
  {
    id: 19,
    year: 2004,
    month: "January",
    course: "105032 - INDUSTRIAL RELATIONS",
    status: "Completed",
    skill: "-",
  },
  {
    id: 20,
    year: 2002,
    month: "August",
    course: "202063 - BEATING STRESS, TENSION, AND THE BLUES",
    status: "Completed",
    skill: "-",
  },
  {
    id: 21,
    year: 2002,
    month: "March",
    course: "202004 - CHANGE OF ATTITUDES",
    status: "Completed",
    skill: "-",
  },
  {
    id: 22,
    year: 2002,
    month: "January",
    course: "202003 - ISO AWARENESS PROGRAMME",
    status: "Completed",
    skill: "-",
  },
];
const HRAspectsModal = ({ closePopup }) => {
  // Define state inside the component
  // State to store selected values for each section
  const [selectedValues, setSelectedValues] = useState(
    Array(7).fill(null) // For the first 7 criteria
  );
  const [hrSelectedValues, setHrSelectedValues] = useState(
    Array(3).fill(null) // For Attendance, Punctuality, and Discipline
  );
  // Criteria Lists
  const criteriaList = [
    "WORK KNOWLEDGE",
    "QUALITY OF WORK",
    "APPLICATION AND EFFICIENCY",
    "SAFETY CONSCIOUSNESS AND CARE AND USE OF COMPANY PROPERTY",
    "INITIATIVE WILLINGNESS",
    "CO-OPERATION AND TEAM WORK",
    "SITUATIONAL FLEXIBILITY",
  ];
  const hrCriteriaList = ["ATTENDANCE", "PUNCTUALITY", "DISCIPLINE"];
  // Update selected value for a specific criterion
  const handleSelection = (index, value, isHr = false) => {
    if (isHr) {
      const newHrValues = [...hrSelectedValues];
      newHrValues[index] = value;
      setHrSelectedValues(newHrValues);
    } else {
      const newValues = [...selectedValues];
      newValues[index] = value;
      setSelectedValues(newValues);
    }
  };
  // Calculate subtotals
  const subtotal = selectedValues.reduce((sum, value) => sum + (value || 0), 0);
  const hrSubtotal = hrSelectedValues.reduce(
    (sum, value) => sum + (value || 0),
    0
  );
  // Calculate grand total
  const grandTotal = subtotal + hrSubtotal;
  const [recommendations, setRecommendations] = useState({
    engineer: false,
    departmentalHead: false,
    divisionHead: false,
    evaluatedBy: "",
    checkedBy: "",
    approvedBy: "",
    evaluationDiscussed: "",
    engineerComments: "",
    departmentalComments: "",
    divisionRecommendations: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRecommendations((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]"
        style={{ width: "1250px", maxWidth: "100%" }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">HR Aspects Non Executive.</h2>
          <button
            className="text-red-500 text-2xl font-semibold"
            onClick={closePopup}
          >
            &times;
          </button>
        </div>
        {/* Attendance Summary Section */}
        <div className="p-4 space-y-6">
          {/* Attendance Summary Section */}
          <div className="p-4">
            {/* Attendance Summary */}
            <div className="p-6 rounded-lg shadow-md space-y-4">
              <h2 className="text-lg font-semibold">
                (B). ATTENDANCE SUMMARY (FROM: 2021-01-01 TO 2024-11-25)
              </h2>
              <div className="flex space-x-6">
                {/* Left Table */}
                <table className="table-auto border-collapse border border-gray-300 w-2/3">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Description
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center">
                        Total
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center">
                        Taken
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center">
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Annual Leave
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        14
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        13.5
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        0.5
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Casual Leave
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        7
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        6.5
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        0.5
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Sick Leave
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        21
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        20.5
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        0.5
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* Right Summary */}
                <div className="w-1/3 space-y-4">
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Leave Type
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center">
                          Days
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Nopay
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Not Entered
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center"></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="space-y-1">
                    <p>
                      <strong>Short leave Taken:</strong> 6
                    </p>
                    <p>
                      <strong>Late Occasions:</strong> 0
                    </p>
                    <p>
                      <strong>Extra Hours:</strong> 1181.00
                    </p>
                    <p>
                      <strong>Years in present grade:</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disciplinary Actions Section */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              (C). DISCIPLINARY ACTIONS / COMMENDATIONS (FROM: 2021-01-01 TO
              2024-11-22)
            </h2>
            <div className="space-y-6">
              {/* Commendations */}
              <div>
                <h3 className="font-semibold mb-2">Commendations</h3>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Incident
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        No data found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Offences */}
              <div>
                <h3 className="font-semibold mb-2">Offences</h3>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Incident
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        No data found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Critical Incidents Section */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              (D). CRITICAL INCIDENTS (FROM: 2021-01-01 TO 2024-11-22)
            </h2>
            <div>
              {/* Critical Incidents Table */}
              <h3 className="font-semibold mb-2">Commendations</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Evaluation
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center border border-gray-300 px-4 py-2"
                    >
                      No data found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Evaluation Section */}
        <div className="p-4">
          <div className="p-6 rounded-lg shadow-md space-y-4">
            {/* Main Header */}
            <h2 className="text-lg font-semibold text-red-600">
              * (E). EVALUATION - PERFORMANCE CRITERIA (To be evaluated by the
              Section)
            </h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md float-right hover:bg-blue-600">
              Increment Allocation
            </button>
            <div className="clear-both"></div>

            {/* Section Evaluation Criteria */}
            {criteriaList.map((criteria, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semisemibold">{`${
                  index + 1
                }. ${criteria}`}</h3>
                <p className="text-gray-500 text-sm">
                  Please select an Employee
                </p>
                <div className="flex space-x-1 justify-center">
                  {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((value) => (
                    <button
                      key={value}
                      className={`w-12 h-12 flex items-center justify-center rounded ${
                        selectedValues[index] === value
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                      onClick={() => handleSelection(index, value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-blue-600">
                  Selected Value for {criteria}:{" "}
                  <span className="text-red-500">
                    {selectedValues[index] !== null
                      ? selectedValues[index]
                      : "No value selected."}
                  </span>
                </p>
              </div>
            ))}

            {/* HR Division Criteria */}
            <h2 className="text-lg font-semibold text-red-600">
              (F). EVALUATION - PERFORMANCE CRITERIA - To be evaluated by HR
              Division
            </h2>
            {hrCriteriaList.map((criteria, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semisemibold">{`${
                  index + 8
                }. ${criteria}`}</h3>
                <div className="flex space-x-1 justify-center">
                  {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((value) => (
                    <button
                      key={value}
                      className={`w-12 h-12 flex items-center justify-center rounded ${
                        hrSelectedValues[index] === value
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                      onClick={() => handleSelection(index, value, true)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-blue-600">
                  Selected Value for {criteria}:{" "}
                  <span className="text-red-500">
                    {hrSelectedValues[index] !== null
                      ? hrSelectedValues[index]
                      : "No value selected."}
                  </span>
                </p>
              </div>
            ))}

            {/* Subtotal and Grand Total */}
            <div className="pt-4 text-right">
              <p className="font-semibold text-lg">
                Subtotal (Out of 70):{" "}
                <span className="text-blue-600">{subtotal}</span>
              </p>
              <p className="font-semibold text-lg">
                GRAND TOTAL (Out of 100):{" "}
                <span className="text-blue-600">{grandTotal}</span>
              </p>
            </div>
          </div>
        </div>

        <br />
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-6">
          <h3 className="font-semibold text-lg mb-4">
            RECOMMENDATION FOR GRADE PROMOTION (Please tick if recommended)
          </h3>
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* Checkboxes */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="engineer"
                checked={recommendations.engineer}
                onChange={handleChange}
              />
              <span>Engineer / Executive In-charge</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="departmentalHead"
                checked={recommendations.departmentalHead}
                onChange={handleChange}
              />
              <span>Departmental Head</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="divisionHead"
                checked={recommendations.divisionHead}
                onChange={handleChange}
              />
              <span>Division Head</span>
            </label>

            {/* Input fields */}
            <input
              type="text"
              name="evaluatedBy"
              value={recommendations.evaluatedBy}
              onChange={handleChange}
              placeholder="Evaluated by"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="checkedBy"
              value={recommendations.checkedBy}
              onChange={handleChange}
              placeholder="Checked by"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="approvedBy"
              value={recommendations.approvedBy}
              onChange={handleChange}
              placeholder="Approved by"
              className="border p-2 rounded"
            />
          </div>

          {/* Radio buttons for evaluation discussion */}
          <div className="mt-4">
            <label className="font-semisemibold text-red-600">
              * Evaluation discussed with the Employee:
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="evaluationDiscussed"
                  value="Yes"
                  checked={recommendations.evaluationDiscussed === "Yes"}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="evaluationDiscussed"
                  value="No"
                  checked={recommendations.evaluationDiscussed === "No"}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </div>
          {/* Textareas */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="font-semisemibold">
                Comments by Engineer / Executive In-charge
              </label>
              <textarea
                name="engineerComments"
                value={recommendations.engineerComments}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                rows="3"
              />
            </div>
            <div>
              <label className="font-semisemibold">
                Special Comments by Departmental Head
              </label>
              <textarea
                name="departmentalComments"
                value={recommendations.departmentalComments}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                rows="3"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="font-semisemibold">
              Recommendations by Divisional Head
            </label>
            <textarea
              name="divisionRecommendations"
              value={recommendations.divisionRecommendations}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              rows="3"
            />
          </div>
        </div>
        <br />
        {/* Special Evaluation Section */}
        <div className="bg-gray-50  rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
            Special Evaluation
          </h2>
          {/* Recommendation */}
          <div className="mb-4">
            <label className="font-semisemibold block mb-2">
              Evaluation History:
            </label>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Click Here
            </button>
            <EvaluationHistoryPopup
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
            />
            <label className="block font-semibold mb-1">
              * Do you recommend the above employee to be granted with "Special
              Additional" salary increments with regard to any exceptional
              performance/characteristics demonstrated by him/her?
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
              If yes, Number of special additional increments recommended:
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
              <label>
                <input type="checkbox" className="mr-2" />
                Great Commitment Work
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Outstanding Contribution
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Cost Saving
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Unique Feat
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Important Suggestion
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Customer Satisfaction
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Innovation
              </label>
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
          {/* Recommended by */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Recommended By:</label>
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
        <div className="p-6 rounded-lg shadow-md">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Training Attended</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Year</th>
                    <th className="border border-gray-300 px-4 py-2">Month</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Course Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                    <th className="border border-gray-300 px-4 py-2">Skill</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingData.map((row) => (
                    <tr
                      key={row.id}
                      className={`${
                        row.status === "Not Completed" ? "bg-red-100" : ""
                      }`}
                    >
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.id}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.year}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.month}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.course}
                      </td>
                      <td
                        className={`border border-gray-300 px-4 py-2 text-center ${
                          row.status === "Not Completed"
                            ? "text-red-600 font-semibold"
                            : "text-green-600 font-semibold"
                        }`}
                      >
                        {row.status}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.skill}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Training needs identification */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Training needs Identification
              </h3>
              <p className="text-gray-600 mb-4">
                Please click the button to select courses
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Course details
              </button>
            </div>
            {/* Course selection */}
            <div className="mt-6">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Course Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2 text-center"
                      colSpan="2"
                    >
                      Please select courses
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Additional training requirement */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Any other training requirement
              </h3>
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
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
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
          </div>
        </div>
        {/* Close Button */}
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HRAspectsModal;
