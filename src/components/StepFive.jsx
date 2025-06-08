import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDeliveryDate, setCurrentStep } from '../store/features/formSlice';

const StepFive = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deliveryDate } = useSelector((state) => state.form);

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 30 days from now as maximum date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentStep(5));
    navigate('/step-six');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Choose Delivery Date</h2>
      <div className="bg-white/10 p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <p className="text-white/90">
              Select your preferred delivery date (next day delivery available)
            </p>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => dispatch(setDeliveryDate(e.target.value))}
              min={minDate}
              max={maxDateStr}
              className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
              required
            />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/step-four')}
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

export default StepFive; 