import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CalendarIcon, CheckIcon, MapPinIcon, ShieldCheckIcon, TrashIcon, TruckIcon, UserIcon } from '@heroicons/react/24/solid';

const steps = [
  { name: 'Postcode', path: '/', icon: (isActive) => <MapPinIcon className={`w-5 h-5 ${isActive ? 'text-[blue]' : 'text-gray-600'}`} /> },
  { name: 'Waste Type', path: '/step-two', icon: (isActive) => <TrashIcon className={`w-5 h-5 ${isActive ? 'text-[blue]' : 'text-gray-600'}`} /> },
  { name: 'Select Skip', path: '/step-three', icon: (isActive) => <TruckIcon className={`w-5 h-5 ${isActive ? 'text-[blue]' : 'text-gray-600'}`} /> },
  { name: 'Permit Check', path: '/step-four', icon: (isActive) => <ShieldCheckIcon className={`w-5 h-5 ${isActive ? 'text-[blue]' : 'text-gray-600'}`} /> },
  { name: 'Choose Date', path: '/step-five', icon: (isActive) => <CalendarIcon className={`w-5 h-5 ${isActive ? 'text-[blue]' : 'text-gray-600'}`} /> },
  { name: 'Payment', path: '/step-six', icon: (isActive) => <CheckIcon className={`w-5 h-5 ${isActive ? 'text-[blue]' : 'text-gray-600'}`} /> },
];

const StepperNav = () => {
  const location = useLocation();
  
  const getCurrentStepIndex = () => {
    const currentPath = location.pathname;
    if (currentPath === '/') return 0;
    if (currentPath === '/step-two') return 1;
    if (currentPath === '/step-three') return 2;
    if (currentPath === '/step-four') return 3;
    if (currentPath === '/step-five') return 4;
    if (currentPath === '/step-six') return 5;
    return 0;
  };

  const currentStep = getCurrentStepIndex();

  // Hide stepper on the first step (root path)
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="w-full font-display max-w-7xl mx-auto">
      <div className="flex flex-row justify-between items-center px-4 md:px-8 lg:px-20 py-6 md:py-8 lg:py-10 overflow-x-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.name}>
            {index > 0 && (
              <div
                className={`hidden md:block flex-1 h-0.5 mx-2 ${
                  index <= currentStep ? 'bg-[blue]' : 'bg-gray-600'
                }`}
              />
            )}
            <Link
              to={step.path}
              className='flex flex-shrink-0 flex-row items-center group min-w-fit'
            >
              <div className={`flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full ${
                index <= currentStep ? 'bg-blue-600' : 'bg-gray-700'
              } transition-colors duration-200`}>
                {step.icon(index <= currentStep)}
              </div>
              <span className={`hidden md:inline text-sm md:text-md ml-2 font-medium whitespace-nowrap transition-colors duration-200 ${
                index <= currentStep ? 'text-white' : 'text-gray-400'
              } group-hover:text-white`}>
                {step.name}
              </span>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default StepperNav; 