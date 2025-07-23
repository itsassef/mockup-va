import React from 'react';

const StatCard = ({ icon: Icon, label, value, subtitle, color, gradient }) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-12 h-12 ${gradient} rounded-2xl flex items-center justify-center shadow-md`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-700">{label}</div>
    </div>
  );
};

export default StatCard; 