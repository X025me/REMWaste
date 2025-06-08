import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  toggleWasteType, 
  setCurrentStep, 
  setHasHeavyWaste,
  addHeavyWasteType,
  removeHeavyWasteType
} from '../store/features/formSlice';
import { TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import WasteSelectionBar from './SelectionButton';

const wasteTypes = [
  {
    id: 'HOUSEHOLD',
    name: 'Household Waste',
    description: 'General domestic waste, furniture, appliances',
    icon: <TrashIcon className="w-6 h-6 text-white" />
  },
  {
    id: 'GARDEN',
    name: 'Garden Waste',
    description: 'Plants, soil, branches, lawn clippings',
    icon: <TrashIcon className="w-6 h-6 text-white" />
  },
  {
    id: 'CONSTRUCTION',
    name: 'Construction',
    description: 'Building materials, wood, metal',
    icon: <TrashIcon className="w-6 h-6 text-white" />
  },
  {
    id: 'SOIL',
    name: 'Soil & Rubble',
    description: 'Earth, concrete, bricks, stones',
    icon: <TrashIcon className="w-6 h-6 text-white" />
  },
  {
    id: 'COMMERCIAL',
    name: 'Commercial',
    description: 'Office waste, retail waste, packaging',
    icon: <TrashIcon className="w-6 h-6 text-white" />
  },
  {
    id: 'METAL',
    name: 'Metal & Appliances',
    description: 'Scrap metal, white goods, electronics',
    icon: <TrashIcon className="w-6 h-6 text-white" />
  }
];

const heavyWasteTypes = ['Soil', 'Rubble', 'Concrete', 'Bricks'];

const StepTwo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedWasteTypes, hasHeavyWaste, heavyWasteTypes: selectedHeavyWasteTypes } = useSelector((state) => state.form);
  const [showHeavyWasteModal, setShowHeavyWasteModal] = useState(false);
  const [showHeavyWasteTypes, setShowHeavyWasteTypes] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedWasteTypes.length > 0) {
      // Show heavy waste modal if not already answered
      if (!hasHeavyWaste && !showHeavyWasteModal) {
        setShowHeavyWasteModal(true);
        return;
      }
      dispatch(setCurrentStep(2));
      navigate('/step-three');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
          What type of waste do you have?
        </h2>
        <p className="text-gray-400">
          Select all that apply - this helps us recommend the right skip size
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-36">
          {wasteTypes.map((type) => (
            <label
              key={type.id}
              className={`relative flex flex-col p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                selectedWasteTypes.includes(type.id)
                  ? 'bg-blue-600 ring-2 ring-blue-400'
                  : 'bg-gray-800/50 hover:bg-gray-800'
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={selectedWasteTypes.includes(type.id)}
                onChange={() => dispatch(toggleWasteType(type.id))}
              />

              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  selectedWasteTypes.includes(type.id) ? 'bg-blue-500' : 'bg-gray-700'
                }`}>
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-white mb-1">
                    {type.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {type.description}
                  </p>
                </div>
                {selectedWasteTypes.includes(type.id) && (
                  <XCircleIcon className="w-6 h-6 text-blue-300" />
                )}
              </div>
            </label>
          ))}
        </div>

        {selectedWasteTypes.length > 0 && (
          <WasteSelectionBar selectedTypes={selectedWasteTypes} />
        )}
      </form>

      {/* Heavy Waste Modal */}
      {showHeavyWasteModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-lg w-full mx-4">
            <h3 className="text-2xl font-bold text-white mb-4">Heavy Waste Check</h3>
            
            <p className="text-gray-300 mb-6">
              Do you have any heavy waste materials like soil, rubble, concrete or bricks?
            </p>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowHeavyWasteTypes(true);
                }}
                className="w-full p-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Yes, I have heavy waste
              </button>

              <button
                onClick={() => {
                  dispatch(setHasHeavyWaste(false));
                  setShowHeavyWasteModal(false);
                  dispatch(setCurrentStep(2));
                  navigate('/step-three');
                }}
                className="w-full p-4 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
              >
                No heavy waste
              </button>
            </div>

            {showHeavyWasteTypes && (
              <div className="mt-6 border-t border-gray-800 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Select Heavy Waste Types</h4>
                
                <div className="space-y-3">
                  {heavyWasteTypes.map(type => (
                    <label key={type} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedHeavyWasteTypes.includes(type)}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-700 bg-gray-800 focus:ring-blue-500"
                        onChange={(e) => {
                          if(e.target.checked) {
                            dispatch(addHeavyWasteType(type));
                          } else {
                            dispatch(removeHeavyWasteType(type));
                          }
                        }}
                      />
                      <span className="text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => {
                      dispatch(setHasHeavyWaste(true));
                      setShowHeavyWasteModal(false);
                      dispatch(setCurrentStep(2));
                      navigate('/step-three');
                    }}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Confirm Selection
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StepTwo; 