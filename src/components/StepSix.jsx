import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPaymentDetails, resetForm } from '../store/features/formSlice';

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
    dispatch(setPaymentDetails({ total, method: 'card' }));
    // Here you would typically integrate with a payment provider
    alert('Order placed successfully!');
    dispatch(resetForm());
    navigate('/');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Order Summary & Payment</h2>
 

 
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default StepSix; 