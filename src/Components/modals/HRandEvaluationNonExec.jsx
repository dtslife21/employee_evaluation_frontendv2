import React, { useState } from "react";
import HRAspectsModalNonExec from "./HRAspectsModalNonExec";
import EvaluationScoreNonExec from "./EvaluationScoreNonExec";

const ParentComponent = () => {
  const [hrAspectsScore, setHrAspectsScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveHrAspects = (score) => {
    console.log("HR Aspects Score Saved:", score); // Debugging
    setHrAspectsScore(score); // Update state
  };

  return (
    <>
      <EvaluationScoreNonExec hrAspectsScore={hrAspectsScore} />
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <HRAspectsModalNonExec 
          onSave={handleSaveHrAspects} // Pass onSave prop
          closePopup={() => setIsModalOpen(false)} // Close modal
        />
      )}
    </>
  );
};

export default ParentComponent;