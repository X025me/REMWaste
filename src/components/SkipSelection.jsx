import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSkip, updateSkipFilters } from '../store/features/formSlice';
import { filterSkips, calculatePriceWithVAT, getSkipSizeLabel, formatPrice } from '../utils/skipFilters';
import skipData from '../testData.json';
import { TruckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const SkipSelection = () => {
  const dispatch = useDispatch();
  const { selectedSkipId, skipFilters, selectedWasteTypes, postcode } = useSelector((state) => state.form);
  const [filteredSkips, setFilteredSkips] = useState([]);

  useEffect(() => {
    // Update postcode in filters whenever it changes
    if (postcode) {
      dispatch(updateSkipFilters({ postcode }));
    }
  }, [postcode, dispatch]);

  useEffect(() => {
    // Filter skips based on current filters
    const filtered = filterSkips(skipData, skipFilters);
    setFilteredSkips(filtered);
  }, [skipFilters]);

  const handleSkipSelect = (skipId) => {
    dispatch(setSelectedSkip(skipId));
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

      {selectedWasteTypes.length > 0 && (
        <div className="mb-6 p-4 bg-blue-900/30 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Selected Waste Types
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedWasteTypes.map((type) => (
              <span
                key={type}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkips.map((skip) => {
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
                onClick={() => handleSkipSelect(skip.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {getSkipSizeLabel(skip.size)}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {skip.hire_period_days} day hire
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(priceWithVAT)}
                    </div>
                    <p className="text-sm text-gray-400">Inc. VAT</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TruckIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">
                      {skip.allowed_on_road ? 'Road placement available' : 'Off-road placement only'}
                    </span>
                  </div>

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

      {filteredSkips.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">
            No skips available matching your criteria. Please adjust your filters or contact us for custom solutions.
          </p>
        </div>
      )}
    </div>
  );
};

export default SkipSelection; 