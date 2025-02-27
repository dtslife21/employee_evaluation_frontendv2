import React from 'react';

const CompetenciesModal = ({ closePopup }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white p-6 rounded shadow-lg"> {/* Added 'relative' */}
      <button
        className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
        onClick={closePopup}
      >
        &times;
      </button>
      <h2 className="text-xl font-bold mb-4">Competencies</h2>
      <p>This is the content for the Competencies Non Executive.</p>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
);

export default CompetenciesModal;