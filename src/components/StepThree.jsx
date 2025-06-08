import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedSkip, setCurrentStep } from '../store/features/formSlice';
import { TruckIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import skipData from '../../testData.json';

const StepThree = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { 
    selectedSkipId, 
    hasHeavyWaste, 
    heavyWasteTypes,
    selectedWasteTypes,
    postcode 
  } = useSelector((state) => state.form);

  // Filter available skips based on requirements
  const availableSkips = skipData.filter(skip => {
    // Filter by postcode if specified
    if (postcode && skip.postcode !== postcode) {
      return false;
    }

    // Filter by heavy waste requirement
    if (hasHeavyWaste && !skip.allows_heavy_waste) {
      return false;
    }

    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSkipId) {
      dispatch(setCurrentStep(3));
      navigate('/step-four');
    }
  };

  // Helper function to format price with VAT
  const calculatePriceWithVAT = (price, vat) => {
    return price + (price * (vat / 100));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400">
          Select the most suitable skip size for your needs
        </p>
      </div>

      {/* Selected Waste Types Display */}
      <div className="mb-8">
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Your Waste Requirements</h3>
          
          <div className="space-y-4">
            {/* General Waste Types */}
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Selected Waste Types:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedWasteTypes.map(type => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Heavy Waste Types */}
            {hasHeavyWaste && (
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Heavy Waste Types:</h4>
                <div className="flex flex-wrap gap-2">
                  {heavyWasteTypes.map(type => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {availableSkips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-36">
          {availableSkips.map((skip) => {
            const priceWithVAT = calculatePriceWithVAT(skip.price_before_vat, skip.vat);
            
            return (
              <div
                key={skip.id}
                className={`relative rounded-xl overflow-hidden transition-all duration-200 ${
                  selectedSkipId === skip.id
                    ? 'ring-2 ring-blue-400 bg-blue-900/40'
                    : 'bg-gray-800/50 hover:bg-gray-800'
                }`}
              >
                <button
                  onClick={() => dispatch(setSelectedSkip(skip.id))}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className='border-b border-gray-700 pb-4'>
                      <img src={skip.imageUrl} alt={`${skip.size} Yard Skip`} className="w-20 h-20 rounded-md mb-5 object-cover" />
                      <h3 className="text-xl font-display font-bold text-white">
                        {skip.size} Yard Skip
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {skip.hire_period_days} day hire
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        £{priceWithVAT.toFixed(2)}
                      </div>
                      <p className="text-sm text-gray-400">Inc. VAT</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Road Placement */}
                    <div className="flex items-center gap-2 text-sm">
                      <TruckIcon className="w-5 h-5 text-gray-400" />
                      <span className={`${skip.allowed_on_road ? 'text-green-400' : 'text-gray-400'}`}>
                        {skip.allowed_on_road ? 'Road placement available' : 'Off-road placement only'}
                      </span>
                    </div>

                    {/* Heavy Waste Indicator */}
                    {skip.allows_heavy_waste && (
                      <div className="flex items-center gap-2 text-sm">
                        <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
                        <span className="text-yellow-400">
                          Suitable for heavy waste
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 px-4">
          <div className="bg-gray-800/50 rounded-xl p-8 max-w-2xl mx-auto">
            <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              No Suitable Skips Available
            </h3>
            <p className="text-gray-400 mb-6">
              {hasHeavyWaste 
                ? "We couldn't find any skips suitable for heavy waste in your area. Please contact us for specialized solutions."
                : "We couldn't find any available skips matching your requirements. Please try adjusting your selections or contact us for assistance."
              }
            </p>
            <button
              onClick={() => navigate('/step-two')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Modify Waste Types
            </button>
          </div>
        </div>
      )}

      {selectedSkipId && (
        <div className="fixed bottom-2 bg-gray-900 left-0 right-0 max-w-5xl mx-auto mt-12 py-4 px-4 md:px-10 z-10 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="text-left w-full md:w-auto">
              <p className="text-gray-400 font-light text-xs md:text-sm">
                Skip sizes and availability may vary. Please ensure your selected skip size meets your requirements.
              </p>
            </div>
            <div className="flex flex-row gap-3 md:gap-4">
              <button
                type="button"
                onClick={() => navigate('/step-two')}
                className="flex-1 md:w-auto md:flex-none bg-gray-800 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-base"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!selectedSkipId}
                className={`flex-1 md:w-auto md:flex-none py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base font-medium ${
                  selectedSkipId
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepThree; 