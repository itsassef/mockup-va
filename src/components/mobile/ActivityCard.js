import React from 'react';

const ActivityCard = ({ icon: Icon, title, time, status, gradient, statusIcon: StatusIcon }) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 ${gradient} rounded-2xl flex items-center justify-center shadow-md`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900 mb-1">{title}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
        <div className={`w-10 h-10 ${status} rounded-2xl flex items-center justify-center shadow-sm`}>
          <StatusIcon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard; 