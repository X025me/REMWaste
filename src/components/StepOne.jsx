import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePostcode, setCurrentStep } from '../store/features/formSlice';

const StepOne = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postcode } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentStep(1));
    navigate('/step-two');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Skip Hire Made Simple
        </h1>
        <p className="text-xl text-gray-400 font-normal leading-relaxed">
          Enter your postcode to find available skips in your area
        </p>
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={postcode}
              onChange={(e) => dispatch(updatePostcode(e.target.value.toUpperCase()))}
              className="w-full px-4 py-2 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white text-lg uppercase placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors font-medium tracking-wide"
              placeholder="Enter your postcode"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-4 px-6 rounded-xl text-lg font-medium hover:bg-blue-800 transition-colors shadow-lg tracking-wide"
          >
            Find Available Skips
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 font-medium">
            Fast, reliable skip hire service in your area
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-2 max-w-lg mx-auto">
        {['24/7 Support', 'Next Day Delivery', 'Best Price Match'].map((feature) => (
          <div key={feature} className="text-center">
            <p className="text-sm font-medium text-gray-400">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOne; 