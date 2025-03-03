import React, { useState } from "react";
import HRAspectsModal from "./HRAspectsModal";
import EvaluationScore from "./EvaluationScore";

const ParentComponent = () => {
  const [hrAspectsScore, setHrAspectsScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveHrAspects = (score) => {
    console.log("HR Aspects Score Saved:", score); // Debugging
    setHrAspectsScore(score); // Update state
  };

  return (
    <>
      <EvaluationScore hrAspectsScore={hrAspectsScore} />
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <HRAspectsModal 
          onSave={handleSaveHrAspects} // Pass onSave prop
          closePopup={() => setIsModalOpen(false)} // Close modal
        />
      )}
    </>
  );
};

export default ParentComponent;