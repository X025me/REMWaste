import React from 'react';
import '../styles/skip.css';
// Array of garbage can images
const garbageCans = [
  '/images/skip1.png',
  '/images/skip2.png', 
  '/images/skip3.png',
  '/images/skip4.png',
  '/images/skip5.png'
];

// CSS for background pattern
const backgroundStyle = {
  position: 'absolute',
  inset: 0,
  opacity: 0.1,
  backgroundImage: `url(${garbageCans[0]})`,
  backgroundSize: '60px',
  backgroundRepeat: 'repeat',
  mixBlendMode: 'multiply'
};


const SkipImage = ({ size }) => {
  return (
    <div className="w-full h-full relative">
      {/* Skip Container with floating animation */}
      <div className="absolute inset-0 flex items-center justify-center skip-container skip-shadow">
        <div className="w-full h-full relative">
          {/* Front face */}
          <div className="absolute inset-0 bg-[url('https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg')] bg-cover bg-center transform perspective-1000 rotate-x-10 rounded-lg shadow-xl">
            {/* Skip details */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center transform -rotate-x-10">
                <div className="text-blue-900 font-bold text-lg mb-1">WE</div>
                <div className="text-blue-900 font-bold text-lg">WANT</div>
                <div className="text-blue-900 font-bold text-lg">WASTE</div>
                <div className="mt-4 text-sm font-medium text-blue-900/70">{size}</div>
              </div>
            </div>
            {/* Stripes */}
            <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-red-500/20 transform -skew-x-45"></div>
          </div>
          {/* Side face */}
          {/* <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-r from-yellow-600 to-yellow-700 transform origin-right skew-y-6"></div> */}
          {/* Top edge */}
          {/* <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-yellow-400 to-yellow-500 transform origin-top -skew-x-45"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SkipImage; 