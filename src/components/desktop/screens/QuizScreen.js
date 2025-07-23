import React, { useState } from 'react';
import { Plus, Search, Filter, Download, HelpCircle, Users, Clock, BarChart3, Edit, Play, Eye, Plus as PlusIcon, Trash2, Save, X } from 'lucide-react';
import QuizCard from '../QuizCard';

const QuizScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    description: '',
    difficulty: 'medium',
    duration: 30,
    questions: []
  });

  const quizzes = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of JavaScript basics',
      difficulty: 'easy',
      questions: 20,
      duration: 30,
      participants: 45,
      averageScore: 85,
      completionRate: 92
    },
    {
      id: 2,
      title: 'React Advanced Concepts',
      description: 'Advanced React patterns and best practices',
      difficulty: 'hard',
      questions: 25,
      duration: 45,
      participants: 28,
      averageScore: 72,
      completionRate: 78
    },
    {
      id: 3,
      title: 'CSS Grid & Flexbox',
      description: 'Modern CSS layout techniques',
      difficulty: 'medium',
      questions: 15,
      duration: 25,
      participants: 62,
      averageScore: 88,
      completionRate: 95
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      description: 'Server-side JavaScript with Node.js',
      difficulty: 'medium',
      questions: 30,
      duration: 60,
      participants: 35,
      averageScore: 79,
      completionRate: 85
    },
    {
      id: 5,
      title: 'Database Design Principles',
      description: 'SQL and database design fundamentals',
      difficulty: 'hard',
      questions: 22,
      duration: 40,
      participants: 18,
      averageScore: 68,
      completionRate: 72
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quiz.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateQuiz = () => {
    // Here you would typically save the quiz to your backend
    console.log('Creating quiz:', newQuiz);
    setIsCreatingQuiz(false);
    setNewQuiz({
      title: '',
      description: '',
      difficulty: 'medium',
      duration: 30,
      questions: []
    });
  };

  if (isCreatingQuiz) {
    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsCreatingQuiz(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold text-gray-900">Create New Quiz</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setIsCreatingQuiz(false)}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateQuiz}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Quiz
            </button>
          </div>
        </div>

        {/* Quiz Creation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quiz Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Title</label>
                <input
                  type="text"
                  value={newQuiz.title}
                  onChange={(e) => setNewQuiz({...newQuiz, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter quiz title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newQuiz.description}
                  onChange={(e) => setNewQuiz({...newQuiz, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter quiz description"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={newQuiz.difficulty}
                    onChange={(e) => setNewQuiz({...newQuiz, difficulty: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                  <input
                    type="number"
                    value={newQuiz.duration}
                    onChange={(e) => setNewQuiz({...newQuiz, duration: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="5"
                    max="120"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Questions Preview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Questions</h3>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                <PlusIcon className="w-4 h-4 mr-1" />
                Add Question
              </button>
            </div>
            <div className="space-y-3">
              {newQuiz.questions.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <HelpCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                  <p>No questions added yet</p>
                  <p className="text-sm">Click "Add Question" to get started</p>
                </div>
              ) : (
                newQuiz.questions.map((question, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Question {index + 1}</span>
                      <button className="text-red-500 hover:text-red-700">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedQuiz) {
    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedQuiz(null)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedQuiz.title}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Play className="w-4 h-4 mr-2" />
              Start Quiz
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </button>
          </div>
        </div>

        {/* Quiz Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quiz Information</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-600">Description</span>
                <p className="text-gray-900">{selectedQuiz.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Difficulty</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedQuiz.difficulty)}`}>
                  {selectedQuiz.difficulty}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Questions</span>
                <span className="font-medium text-gray-900">{selectedQuiz.questions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Duration</span>
                <span className="font-medium text-gray-900">{selectedQuiz.duration} minutes</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{selectedQuiz.participants}</div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{selectedQuiz.averageScore}%</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{selectedQuiz.completionRate}%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
            </div>
          </div>

          {/* Recent Results */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Results</h3>
            <div className="space-y-3">
              {selectedQuiz.recentResults ? (
                selectedQuiz.recentResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{result.participant}</div>
                      <div className="text-sm text-gray-600">{result.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{result.score}%</div>
                      <div className="text-sm text-gray-600">{result.time} min</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  <p>No results yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quizzes</h2>
          <p className="text-gray-600">Create and manage assessment quizzes</p>
        </div>
        <button 
          onClick={() => setIsCreatingQuiz(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create Quiz</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-blue-600">{quizzes.length}</div>
          <div className="text-sm text-gray-600">Total Quizzes</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-green-600">{quizzes.reduce((sum, q) => sum + q.participants, 0)}</div>
          <div className="text-sm text-gray-600">Total Participants</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-purple-600">{Math.round(quizzes.reduce((sum, q) => sum + q.averageScore, 0) / quizzes.length)}%</div>
          <div className="text-sm text-gray-600">Avg Score</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-orange-600">{quizzes.reduce((sum, q) => sum + q.questions, 0)}</div>
          <div className="text-sm text-gray-600">Total Questions</div>
        </div>
      </div>

      {/* Quizzes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <div key={quiz.id} onClick={() => setSelectedQuiz(quiz)} className="cursor-pointer">
            <QuizCard quiz={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen; 