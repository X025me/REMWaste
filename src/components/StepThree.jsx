import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSkipSize, setCurrentStep } from '../store/features/formSlice';
import SkipImage from './SkipImage';

const skipSizes = [
  {
    size: '4 Yards',
    description: '14 day hire period',
    price: 211,
    suitable: 'Small renovation projects, garden clearance'
  },
  {
    size: '5 Yards',
    description: '14 day hire period',
    price: 241,
    suitable: 'Home improvements, small construction work'
  },
  {
    size: '6 Yards',
    description: '14 day hire period',
    price: 264,
    suitable: 'Medium renovation projects, office clearance'
  },
  {
    size: '8 Yards',
    description: '14 day hire period',
    price: 299,
    suitable: 'Large home renovations, construction sites'
  },
  {
    size: '10 Yards',
    description: '14 day hire period',
    price: 340,
    suitable: 'Commercial projects, large construction'
  },
  {
    size: '12 Yards',
    description: '14 day hire period',
    price: 380,
    suitable: 'Industrial use, major construction work'
  }
];

const StepThree = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { skipSize } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skipSize) {
      dispatch(setCurrentStep(3));
      navigate('/step-four');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto ">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Choose Your Skip Size</h1>
      <p className="text-gray-400 text-center text-lg mb-12">Select the skip size that best suits your needs</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 pb-36">
          {skipSizes.map((skip) => (
            <div
              key={skip.size}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${skipSize === skip.size
                  ? 'ring-2 ring-blue-500 transform scale-[1.02]'
                  : 'bg-[#1a1a1a] hover:bg-[#252525]'
                }`}
              onClick={() => dispatch(updateSkipSize(skip.size))}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {skip.size}
                </span>
              </div>

              <div className="aspect-[4/3] relative bg-gradient-to-b from-gray-800 to-black">
                <SkipImage size={skip.size} />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{skip.size} Skip</h3>
                <p className="text-gray-400 mb-2">{skip.description}</p>
                <p className="text-sm text-gray-500 mb-4">{skip.suitable}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 text-2xl font-bold">£{skip.price}</span>
                  <button
                    type="button"
                    className={`px-6 py-2 rounded-lg transition-colors ${skipSize === skip.size
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                  >
                    {skipSize === skip.size ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>

              <input
                type="radio"
                name="skipSize"
                value={skip.size}
                checked={skipSize === skip.size}
                onChange={(e) => dispatch(updateSkipSize(e.target.value))}
                className="hidden"
                required
              />
            </div>
          ))}
        </div>

        {skipSize && (
          <div className="fixed bottom-2 bg-[#2e2e2e] left-0 right-0 max-w-5xl mx-auto mt-12 py-4 px-4 md:px-10 z-10 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="text-left w-full md:w-auto">
                <p className="text-gray-400 font-light text-xs md:text-sm">
                  Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                </p>
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
                  disabled={!skipSize}
                  className={`flex-1 md:w-auto md:flex-none py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-lg font-medium ${
                    skipSize
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-700 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepThree; 