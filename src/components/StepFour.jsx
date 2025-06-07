import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePermit, setCurrentStep } from '../store/features/formSlice';

const StepFour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { permitRequired } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentStep(4));
    navigate('/step-five');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Permit Check</h2>
      <div className="bg-white/10 p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <p className="text-white/90">
              Will you need a permit to place the skip on a public road?
            </p>
            <div className="flex gap-4">
              <label className={`flex-1 flex items-center p-4 rounded cursor-pointer ${
                permitRequired ? 'bg-blue-600' : 'bg-white/5'
              }`}>
                <input
                  type="radio"
                  name="permit"
                  checked={permitRequired === true}
                  onChange={() => dispatch(updatePermit(true))}
                  className="hidden"
                  required
                />
                <span className="text-white">Yes, I need a permit (+£30)</span>
              </label>
              <label className={`flex-1 flex items-center p-4 rounded cursor-pointer ${
                permitRequired === false ? 'bg-blue-600' : 'bg-white/5'
              }`}>
                <input
                  type="radio"
                  name="permit"
                  checked={permitRequired === false}
                  onChange={() => dispatch(updatePermit(false))}
                  className="hidden"
                  required
                />
                <span className="text-white">No, skip will be on private property</span>
              </label>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/step-three')}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepFour; 