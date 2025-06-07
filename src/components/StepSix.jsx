import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePaymentDetails, resetForm } from '../store/features/formSlice';

const StepSix = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form);

  const skipPrices = {
    '4 Yard': 200,
    '6 Yard': 250,
    '8 Yard': 300,
    '12 Yard': 400,
  };

  const permitCost = formData.permitRequired ? 30 : 0;
  const skipCost = skipPrices[formData.skipSize] || 0;
  const total = skipCost + permitCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePaymentDetails({ total, method: 'card' }));
    // Here you would typically integrate with a payment provider
    alert('Order placed successfully!');
    dispatch(resetForm());
    navigate('/');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Order Summary & Payment</h2>
      <div className="bg-white/10 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Order Details</h3>
            <div className="space-y-2 text-white/90">
              <p>Delivery Postcode: {formData.postcode}</p>
              <p>Waste Type: {formData.wasteType}</p>
              <p>Skip Size: {formData.skipSize}</p>
              <p>Delivery Date: {formData.deliveryDate}</p>
              {formData.permitRequired && (
                <p>Permit Required: Yes (+£30)</p>
              )}
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between text-white">
              <span className="font-bold">Skip Hire:</span>
              <span>£{skipCost}</span>
            </div>
            {permitCost > 0 && (
              <div className="flex justify-between text-white mt-2">
                <span className="font-bold">Permit Fee:</span>
                <span>£{permitCost}</span>
              </div>
            )}
            <div className="flex justify-between text-white text-lg font-bold mt-4 pt-4 border-t border-white/10">
              <span>Total:</span>
              <span>£{total}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Payment Details</h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-3 rounded bg-white/5 border border-white/20 text-white"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate('/step-five')}
                className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepSix; 