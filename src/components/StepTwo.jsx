import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleWasteType, setCurrentStep } from '../store/features/formSlice';
import { TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import WasteSelectionBar from './SelectionButton';

const wasteTypes = [
  {
    id: 'household',
    name: 'Household Waste',
    description: 'General domestic waste, furniture, appliances',
    icon: <TrashIcon className="w-6 h-6" />
  },
  {
    id: 'garden',
    name: 'Garden Waste',
    description: 'Plant matter, soil, branches, lawn clippings',
    icon: <TrashIcon className="w-6 h-6" />
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Building materials, rubble, concrete',
    icon: <TrashIcon className="w-6 h-6" />
  },
  {
    id: 'soil',
    name: 'Soil & Rubble',
    description: 'Earth, stones, concrete, bricks',
    icon: <TrashIcon className="w-6 h-6" />
  },
  {
    id: 'commercial',
    name: 'Commercial',
    description: 'Office waste, retail waste, packaging',
    icon: <TrashIcon className="w-6 h-6" />
  },
  {
    id: 'metal',
    name: 'Metal & Appliances',
    description: 'Scrap metal, white goods, electronics',
    icon: <TrashIcon className="w-6 h-6" />
  }
];

const StepTwo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wasteTypes: selectedTypes } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTypes.length > 0) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wasteTypes.map((type) => (
            <label
              key={type.id}
              className={`relative flex flex-col p-4 rounded-xl cursor-pointer transition-all duration-200 ${selectedTypes.includes(type.id)
                ? 'bg-blue-600 ring-2 ring-blue-400'
                : 'bg-gray-800/50 hover:bg-gray-800'
                }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={selectedTypes.includes(type.id)}
                onChange={() => dispatch(toggleWasteType(type.id))}
              />

              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${selectedTypes.includes(type.id) ? 'bg-blue-500' : 'bg-gray-700'
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
                {selectedTypes.includes(type.id) && (
                  <XCircleIcon className="w-6 h-6 text-blue-300" />
                )}
              </div>
            </label>
          ))}
        </div>
        {/* 
        <div className="flex items-center justify-between pt-6 border-t border-gray-800 mt-10">
          <div className="text-gray-400">
            {selectedTypes.length} {selectedTypes.length === 1 ? 'type' : 'types'} selected
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={selectedTypes.length === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedTypes.length > 0
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div> */}
        {selectedTypes.length > 0 && (
          <WasteSelectionBar selectedTypes={selectedTypes} />
        )}
      </form>
    </div>
  );
};

export default StepTwo; 