import React, { useState } from 'react';
import { TrendingUp, Users, BookOpen, Award, Clock, CheckCircle, XCircle, AlertCircle, Download, Calendar } from 'lucide-react';

const AnalyticsScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const participantProgress = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      stage: 'completed',
      coursesCompleted: 5,
      totalCourses: 5,
      progress: 100,
      lastActivity: '2024-03-20',
      timeSpent: 45,
      certificates: 3,
      achievements: 8
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      stage: 'in-progress',
      coursesCompleted: 3,
      totalCourses: 5,
      progress: 75,
      lastActivity: '2024-03-21',
      timeSpent: 32,
      certificates: 2,
      achievements: 5
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      stage: 'not-started',
      coursesCompleted: 0,
      totalCourses: 5,
      progress: 0,
      lastActivity: '2024-03-15',
      timeSpent: 0,
      certificates: 0,
      achievements: 0
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@email.com',
      stage: 'in-progress',
      coursesCompleted: 2,
      totalCourses: 5,
      progress: 45,
      lastActivity: '2024-03-19',
      timeSpent: 28,
      certificates: 1,
      achievements: 3
    },
    {
      id: 5,
      name: 'Lisa Wang',
      email: 'lisa.wang@email.com',
      stage: 'completed',
      coursesCompleted: 7,
      totalCourses: 7,
      progress: 100,
      lastActivity: '2024-03-21',
      timeSpent: 68,
      certificates: 5,
      achievements: 12
    }
  ];

  const stageStats = {
    completed: participantProgress.filter(p => p.stage === 'completed').length,
    inProgress: participantProgress.filter(p => p.stage === 'in-progress').length,
    notStarted: participantProgress.filter(p => p.stage === 'not-started').length,
    total: participantProgress.length
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'not-started': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStageIcon = (stage) => {
    switch (stage) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'not-started': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
          <p className="text-gray-600">Track learning progress and performance metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Participants</p>
              <p className="text-2xl font-bold text-gray-900">{stageStats.total}</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stageStats.completed}</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{stageStats.inProgress}</p>
              <p className="text-sm text-blue-600">+15% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">78%</p>
              <p className="text-sm text-green-600">+5% from last month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stage Distribution */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Distribution</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(stageStats.completed / stageStats.total) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{stageStats.completed}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(stageStats.inProgress / stageStats.total) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{stageStats.inProgress}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                <span className="text-gray-700">Not Started</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-500 h-2 rounded-full"
                    style={{ width: `${(stageStats.notStarted / stageStats.total) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{stageStats.notStarted}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Average Time to Complete</span>
              <span className="font-medium text-gray-900">32 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Certificates Earned</span>
              <span className="font-medium text-gray-900">11</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Average Score</span>
              <span className="font-medium text-gray-900">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Engagement Rate</span>
              <span className="font-medium text-gray-900">92%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Participant Progress Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Participant Progress</h3>
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            View All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Participant</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Stage</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Progress</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Courses</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Time Spent</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {participantProgress.map((participant) => (
                <tr key={participant.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{participant.name}</div>
                      <div className="text-sm text-gray-600">{participant.email}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStageColor(participant.stage)}`}>
                      {getStageIcon(participant.stage)}
                      <span className="capitalize">{participant.stage.replace('-', ' ')}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${participant.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{participant.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-gray-900">
                      {participant.coursesCompleted}/{participant.totalCourses}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{participant.timeSpent}h</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-gray-600">{participant.lastActivity}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen; 