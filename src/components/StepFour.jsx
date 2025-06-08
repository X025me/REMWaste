import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPermitRequired, setCurrentStep } from '../store/features/formSlice';

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
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Permit Check</h2>

        {/* </form> */}
      {/* </div> */}
    </div>
  );
};

export default StepFour; 