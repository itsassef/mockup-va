import React from 'react';
import MobileApp from './MobileApp';

const MobileEmulator = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* iPhone Frame */}
      <div className="relative">
        {/* iPhone Body */}
        <div className="w-[420px] h-[812px] bg-black rounded-[3rem] p-3 shadow-2xl border border-gray-800">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-b-3xl z-10"></div>

            {/* App Content */}
            <div className="w-full h-full pt-10 overflow-hidden">
              <div className="w-full h-full overflow-y-auto">
                <MobileApp />
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default MobileEmulator; 