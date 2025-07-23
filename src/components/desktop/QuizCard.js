import React from 'react';
import { HelpCircle, Users, Clock, BarChart3, Edit, Play, Eye } from 'lucide-react';

const QuizCard = ({ quiz }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
            <p className="text-sm text-gray-600">{quiz.description}</p>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
          {quiz.difficulty}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
        <div className="flex items-center space-x-1 text-gray-600">
          <HelpCircle className="w-4 h-4" />
          <span>{quiz.questions} questions</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{quiz.duration} min</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <Users className="w-4 h-4" />
          <span>{quiz.participants} taken</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm">
          <BarChart3 className="w-4 h-4 text-blue-600" />
          <span className="text-gray-600">Avg: {quiz.averageScore}%</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
            <Play className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard; 