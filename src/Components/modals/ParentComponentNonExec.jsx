import React, { useState } from "react";
import HRAspectsModalNonExec from "./HRAspectsModalNonExec";
import EvaluationScoreNonExec from "./EvaluationScoreNonExec";

const ParentComponent = () => {
  const [hrAspectsScore, setHrAspectsScore] = useState(0);

  const handleScoreUpdate = (score) => {
    setHrAspectsScore(score);
  };

  return (
    <div>
      <HRAspectsModalNonExec
        closePopup={() => {}}
        toggleModal={() => {}}
        onSave={() => {}}
        onScoreUpdate={handleScoreUpdate} // Pass the callback to HRAspectsModal
      />
      <EvaluationScoreNonExec hrAspectsScore={hrAspectsScore} /> {/* Pass the score to EvaluationScore */}
    </div>
  );
};

export default ParentComponent;