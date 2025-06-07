// components/WasteSelectionBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WasteSelectionBar = ({ selectedTypes = [], wasteLabel = "Garden Waste and Commercial Waste" }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-2 bg-[#2e2e2e] left-0 right-0 max-w-5xl mx-auto mt-12 py-4 px-10 z-10 rounded-lg">
      <div className="flex flex-row gap-4 justify-between">
        <div className="text-left w-full">
          <h1 className="text-white font-bold text-lg">Selected Waste Types</h1>
          <p className="text-gray-400 font-light text-sm">{wasteLabel}</p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/step-two')}
          className="w-1/5 bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors text-lg"
        >
          Back
        </button>

        <button
          type="submit"
          disabled={!selectedTypes.length}
          className={`w-1/5 py-3 px-6 rounded-lg transition-colors text-lg font-medium ${
            selectedTypes.length
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-700 text-gray-300 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WasteSelectionBar;
