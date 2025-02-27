import React, { useState } from "react";
import HRAspectsModal from "./HRAspectsModal";
import EvaluationScore from "./EvaluationScore";

const ParentComponent = () => {
  const [hrAspectsScore, setHrAspectsScore] = useState(0);

  const handleScoreUpdate = (score) => {
    setHrAspectsScore(score);
  };

  return (
    <div>
      <HRAspectsModal
        closePopup={() => {}}
        toggleModal={() => {}}
        onSave={() => {}}
        onScoreUpdate={handleScoreUpdate} // Pass the callback to HRAspectsModal
      />
      <EvaluationScore hrAspectsScore={hrAspectsScore} /> {/* Pass the score to EvaluationScore */}
    </div>
  );
};

export default ParentComponent;