// import React from "react";

// const GoalPlanning = () => {
//   const goals = [
//     {
//       title: "Streamline and improve Learning and Development Process",
//       targetDate: "31/12/2024",
//       importance: "0",
//       mandatory: "Yes",
//       weightage: "20.00",
//     },
//     {
//       title: "Smooth functioning of Performance Management System",
//       targetDate: "31/12/2024",
//       importance: "0",
//       mandatory: "Yes",
//       weightage: "20.00",
//     },
//     {
//       title: "Ensure effectiveness of recruitment and onboarding process",
//       targetDate: "31/12/2024",
//       importance: "0",
//       mandatory: "Yes",
//       weightage: "20.00",
//     },
//     {
//       title: "Streamline onboarding process",
//       targetDate: "31/12/2024",
//       importance: "0",
//       mandatory: "Yes",
//       weightage: "20.00",
//     },
//     {
//       title: "Employee engagement, recognition and employee satisfaction survey",
//       targetDate: "31/12/2024",
//       importance: "0",
//       mandatory: "Yes",
//       weightage: "20.00",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 p-6 rounded-md shadow-lg max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold text-blue-700">
//           GOAL PLANNING - Setting goals to evaluate the performance throughout
//           the evaluation period.
//         </h2>
//         <button className="text-blue-500 underline">Help</button>
//       </div>

//       <div className="border border-gray-300 rounded-md">
//         <div className="bg-gray-200 p-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <span className="bg-yellow-400 w-3 h-3 rounded-full mr-2"></span>
//             <span className="text-gray-700 font-semibold">
//               Operational Goals (Weights: 100.00 %, Min & Max no. of Goals: 0 -
//               50)
//             </span>
//           </div>
//           <div className="flex items-center">
//             <span className="mr-2 font-semibold text-gray-700">5 Goals</span>
//             <span className="bg-green-500 text-white px-2 py-1 rounded">
//               Total Weightage: 100.00%
//             </span>
//           </div>
//         </div>

//         <div className="p-4">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
//             ADD GOAL
//           </button>

//           <table className="w-full border-collapse border border-gray-300 text-left">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 p-2">Goal Title</th>
//                 <th className="border border-gray-300 p-2">Target Date</th>
//                 <th className="border border-gray-300 p-2">Importance</th>
//                 <th className="border border-gray-300 p-2">Mandatory</th>
//                 <th className="border border-gray-300 p-2">Weightage (%)</th>
//                 <th className="border border-gray-300 p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {goals.map((goal, index) => (
//                 <tr key={index} className="hover:bg-gray-100">
//                   <td className="border border-gray-300 p-2">{goal.title}</td>
//                   <td className="border border-gray-300 p-2">
//                     {goal.targetDate}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {goal.importance}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {goal.mandatory}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {goal.weightage}
//                   </td>
//                   <td className="border border-gray-300 p-2 flex space-x-2">
//                     <button className="text-blue-500">✏️</button>
//                     <button className="text-red-500">🗑️</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="p-4">
//           <button className="text-blue-500 underline">Assessment Artifacts</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoalPlanning;


import React, { useState } from "react";

const GoalPlanning = () => {
  const [goals, setGoals] = useState([
    {
      title: "Streamline and improve Learning and Development Process",
      targetDate: "31/12/2024",
      importance: "0",
      mandatory: "Yes",
      weightage: "20.00",
    },
    {
      title: "Smooth functioning of Performance Management System",
      targetDate: "31/12/2024",
      importance: "0",
      mandatory: "Yes",
      weightage: "20.00",
    },
    {
      title: "Ensure effectiveness of recruitment and onboarding process",
      targetDate: "31/12/2024",
      importance: "0",
      mandatory: "Yes",
      weightage: "20.00",
    },
    {
      title: "Streamline onboarding process",
      targetDate: "31/12/2024",
      importance: "0",
      mandatory: "Yes",
      weightage: "20.00",
    },
    {
      title: "Employee engagement, recognition and employee satisfaction survey",
      targetDate: "31/12/2024",
      importance: "0",
      mandatory: "Yes",
      weightage: "20.00",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    targetDate: "",
    importance: "",
    mandatory: "",
    weightage: "",
  });

  const handleAddGoal = () => {
    setGoals([...goals, formData]);
    setFormData({
      title: "",
      targetDate: "",
      importance: "",
      mandatory: "",
      weightage: "",
    });
    setIsAddModalOpen(false);
  };

  const handleEditGoal = () => {
    const updatedGoals = goals.map((goal, index) =>
      index === currentGoal
        ? {
            ...formData,
          }
        : goal
    );
    setGoals(updatedGoals);
    setIsEditModalOpen(false);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (index) => {
    setCurrentGoal(index);
    setFormData(goals[index]);
    setIsEditModalOpen(true);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-lg max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-blue-700">
          GOAL PLANNING - Setting goals to evaluate the performance throughout
          the evaluation period.
        </h2>
        <button className="text-blue-500 underline">Help</button>
      </div>

      <div className="border border-gray-300 rounded-md">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="bg-yellow-400 w-3 h-3 rounded-full mr-2"></span>
            <span className="text-gray-700 font-semibold">
              Operational Goals (Weights: 100.00 %, Min & Max no. of Goals: 0 -
              50)
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-semibold text-gray-700">
              {goals.length} Goals
            </span>
            <span className="bg-green-500 text-white px-2 py-1 rounded">
              Total Weightage: 100.00%
            </span>
          </div>
        </div>

        <div className="p-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={openAddModal}
          >
            ADD GOAL
          </button>

          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Goal Title</th>
                <th className="border border-gray-300 p-2">Target Date</th>
                <th className="border border-gray-300 p-2">Importance</th>
                <th className="border border-gray-300 p-2">Mandatory</th>
                <th className="border border-gray-300 p-2">Weightage (%)</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{goal.title}</td>
                  <td className="border border-gray-300 p-2">
                    {goal.targetDate}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {goal.importance}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {goal.mandatory}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {goal.weightage}
                  </td>
                  <td className="border border-gray-300 p-2 flex space-x-2">
                    <button
                      className="text-blue-500"
                      onClick={() => openEditModal(index)}
                    >
                      ✏️
                    </button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4">
          <button className="text-blue-500 underline">
            Assessment Artifacts
          </button>
        </div>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-lg">
            <h3 className="text-lg font-bold mb-4">Add Goal</h3>
            <form>
              <input
                type="text"
                placeholder="Goal Title"
                className="border p-2 w-full mb-4"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
                          <input
                type="date"
                placeholder="Target Date"
                className="border p-2 w-full mb-4"
                value={formData.targetDate}
                onChange={(e) =>
                  setFormData({ ...formData, targetDate: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Importance"
                className="border p-2 w-full mb-4"
                value={formData.importance}
                onChange={(e) =>
                  setFormData({ ...formData, importance: e.target.value })
                }
              />
              <select
                className="border p-2 w-full mb-4"
                value={formData.mandatory}
                onChange={(e) =>
                  setFormData({ ...formData, mandatory: e.target.value })
                }
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="number"
                placeholder="Weightage (%)"
                className="border p-2 w-full mb-4"
                value={formData.weightage}
                onChange={(e) =>
                  setFormData({ ...formData, weightage: e.target.value })
                }
              />
            </form>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleAddGoal}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-lg">
            <h3 className="text-lg font-bold mb-4">Edit Goal</h3>
            <form>
              <input
                type="text"
                placeholder="Goal Title"
                className="border p-2 w-full mb-4"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="Target Date"
                className="border p-2 w-full mb-4"
                value={formData.targetDate}
                onChange={(e) =>
                  setFormData({ ...formData, targetDate: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Importance"
                className="border p-2 w-full mb-4"
                value={formData.importance}
                onChange={(e) =>
                  setFormData({ ...formData, importance: e.target.value })
                }
              />
              <select
                className="border p-2 w-full mb-4"
                value={formData.mandatory}
                onChange={(e) =>
                  setFormData({ ...formData, mandatory: e.target.value })
                }
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="number"
                placeholder="Weightage (%)"
                className="border p-2 w-full mb-4"
                value={formData.weightage}
                onChange={(e) =>
                  setFormData({ ...formData, weightage: e.target.value })
                }
              />
            </form>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleEditGoal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalPlanning;

