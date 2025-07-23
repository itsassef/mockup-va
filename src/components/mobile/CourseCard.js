import React from 'react';

const CourseCard = ({ course, onClick }) => {
  const { title, duration, progress, icon: Icon, lessons, gradient } = course;
  
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className={`h-32 ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <Icon className="w-16 h-16 text-white relative z-10" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span>Duration: {duration}</span>
          <span>{lessons} lessons</span>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span className="font-semibold">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`${gradient.replace('bg-gradient-to-br', 'bg-gradient-to-r')} h-3 rounded-full transition-all duration-500`}
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </div>
        
        <button 
          onClick={onClick}
          className={`w-full ${gradient} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
        >
          {progress === 0 ? 'Start Course' : progress === 100 ? 'Review' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard; 