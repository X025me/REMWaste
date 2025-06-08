// components/WasteSelectionBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WasteSelectionBar = ({ selectedTypes = [], wasteLabel = "Garden Waste and Commercial Waste" }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-2 bg-[#2e2e2e] left-0 right-0 max-w-5xl mx-auto mt-12 py-4 px-4 md:px-10 z-10 rounded-lg">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="text-left w-full md:w-auto">
          <h1 className="text-white font-bold text-base md:text-lg">Selected Waste Types</h1>
          <p className="text-gray-400 font-light text-xs md:text-sm">{wasteLabel}</p>
        </div>

        <div className="flex flex-row gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => navigate('/step-two')}
            className="flex-1 md:w-auto md:flex-none bg-gray-800 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-lg"
          >
            Back
          </button>

          <button
            type="submit"
            disabled={!selectedTypes.length}
            className={`flex-1 md:w-auto md:flex-none py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-lg font-medium ${
              selectedTypes.length
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-700 text-gray-300 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteSelectionBar;
