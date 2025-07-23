import React from 'react';
import { ArrowRight } from 'lucide-react';

const ActionCard = ({ icon: Icon, title, subtitle, gradient, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full bg-white rounded-3xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <div className="flex items-center space-x-4">
        <div className={`w-14 h-14 ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </button>
  );
};

export default ActionCard; 