import React from 'react';

const TeamActivityCard = ({ icon: Icon, title, description, buttonText, gradient, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center space-x-4">
        <div className={`w-14 h-14 ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className={`${gradient} text-white py-2 px-4 rounded-xl text-sm font-semibold inline-block shadow-md`}>
            {buttonText}
          </div>
        </div>
      </div>
    </button>
  );
};

export default TeamActivityCard; 