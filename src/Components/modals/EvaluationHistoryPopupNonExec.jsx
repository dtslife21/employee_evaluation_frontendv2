import React, { useState } from "react";
import Modal from "react-modal";

const EvaluationHistoryPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    evaluationHistory: "",
    specialIncrement: "",
    justification: "",
    justificationReasons: [],
    otherReason: "",
    recommendedBy: "",
    departmentalRecommendation: "",
    divisionalApproval: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        justificationReasons: checked
          ? [...prev.justificationReasons, value]
          : prev.justificationReasons.filter((reason) => reason !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Evaluation History Popup"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="font-bold text-xl mb-4">Evaluation History</h2>
        <div className="mb-4">
          <label className="font-semibold block mb-2">
            Please select the Evaluation History:
          </label>
          <select
            name="evaluationHistory"
            value={formData.evaluationHistory}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Please select the Evaluation History</option>
            <option value="History1">History 1</option>
            <option value="History2">History 2</option>
          </select>
        </div>
        <div className="mb-4">
          <p className="font-semibold">
            Do you recommend the above employee to be granted with "Special
            Additional" salary increments?
          </p>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="specialIncrement"
                value="Yes"
                checked={formData.specialIncrement === "Yes"}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="specialIncrement"
                value="No"
                checked={formData.specialIncrement === "No"}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="font-semibold block mb-2">Justification:</label>
          <textarea
            name="justification"
            value={formData.justification}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold block mb-2">
            Your justification mainly falls under:
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              "Great Commitment work",
              "Outstanding contribution",
              "Cost saving",
              "Unique feat",
              "Important Suggestion",
              "Customer satisfaction",
              "Innovation",
            ].map((reason, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 col-span-1"
              >
                <input
                  type="checkbox"
                  value={reason}
                  checked={formData.justificationReasons.includes(reason)}
                  onChange={handleChange}
                />
                <span>{reason}</span>
              </label>
            ))}
          </div>
          <textarea
            name="otherReason"
            value={formData.otherReason}
            onChange={handleChange}
            className="border p-2 rounded w-full mt-2"
            placeholder="Other (Please specify)"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold block mb-2">Recommended By:</label>
          <input
            type="text"
            name="recommendedBy"
            value={formData.recommendedBy}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold block mb-2">
            Recommendation of Departmental Head:
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="departmentalRecommendation"
                value="Recommended"
                checked={formData.departmentalRecommendation === "Recommended"}
                onChange={handleChange}
              />
              <span>Special Increments Recommended</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="departmentalRecommendation"
                value="Not Recommended"
                checked={
                  formData.departmentalRecommendation === "Not Recommended"
                }
                onChange={handleChange}
              />
              <span>Special Increments Not Recommended</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="font-semibold block mb-2">
            Approval of Division Head:
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="divisionalApproval"
                value="Approved"
                checked={formData.divisionalApproval === "Approved"}
                onChange={handleChange}
              />
              <span>Special Increments Approved</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="divisionalApproval"
                value="Not Approved"
                checked={formData.divisionalApproval === "Not Approved"}
                onChange={handleChange}
              />
              <span>Special Increments Not Approved</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EvaluationHistoryPopup;
