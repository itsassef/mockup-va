import React, { useState } from 'react';
import { Plus, Search, Download, BookOpen, Award, Clock, CheckCircle, Mail, Phone, Calendar } from 'lucide-react';
import ParticipantCard from '../ParticipantCard';

const ParticipantsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const participants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      status: 'completed',
      progress: 100,
      coursesCompleted: 5,
      certificates: 3,
      joinDate: '2024-01-15',
      lastActive: '2024-03-20',
      currentCourse: 'Advanced JavaScript',
      totalHours: 45,
      achievements: ['First Course Completed', 'Perfect Score', 'Team Player']
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      phone: '+1 (555) 234-5678',
      status: 'in-progress',
      progress: 75,
      coursesCompleted: 3,
      certificates: 2,
      joinDate: '2024-02-10',
      lastActive: '2024-03-21',
      currentCourse: 'Digital Marketing',
      totalHours: 32,
      achievements: ['Consistent Learner', 'Helpful Contributor']
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+1 (555) 345-6789',
      status: 'not-started',
      progress: 0,
      coursesCompleted: 0,
      certificates: 0,
      joinDate: '2024-03-15',
      lastActive: '2024-03-15',
      currentCourse: 'Introduction to Programming',
      totalHours: 0,
      achievements: []
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@email.com',
      phone: '+1 (555) 456-7890',
      status: 'in-progress',
      progress: 45,
      coursesCompleted: 2,
      certificates: 1,
      joinDate: '2024-01-25',
      lastActive: '2024-03-19',
      currentCourse: 'Data Science Fundamentals',
      totalHours: 28,
      achievements: ['Quick Learner', 'Problem Solver']
    },
    {
      id: 5,
      name: 'Lisa Wang',
      email: 'lisa.wang@email.com',
      phone: '+1 (555) 567-8901',
      status: 'completed',
      progress: 100,
      coursesCompleted: 7,
      certificates: 5,
      joinDate: '2024-01-05',
      lastActive: '2024-03-21',
      currentCourse: 'Leadership Skills',
      totalHours: 68,
      achievements: ['Course Master', 'Perfect Score', 'Team Leader', 'Mentor']
    }
  ];

  const filteredParticipants = participants.filter(participant => {
    const matchesSearch = participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         participant.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || participant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (selectedParticipant) {
    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedParticipant(null)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedParticipant.name}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </button>
          </div>
        </div>

        {/* Participant Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{selectedParticipant.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{selectedParticipant.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Joined: {selectedParticipant.joinDate}</span>
              </div>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-medium text-gray-900">{selectedParticipant.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${selectedParticipant.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{selectedParticipant.coursesCompleted}</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{selectedParticipant.certificates}</div>
                  <div className="text-sm text-gray-600">Certificates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Course */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Course</h3>
            <div className="space-y-3">
              <div className="text-lg font-medium text-gray-900">{selectedParticipant.currentCourse}</div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{selectedParticipant.totalHours} hours completed</span>
              </div>
              <div className="text-sm text-gray-600">
                Last active: {selectedParticipant.lastActive}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
          <div className="flex flex-wrap gap-2">
            {selectedParticipant.achievements.length > 0 ? (
              selectedParticipant.achievements.map((achievement, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {achievement}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No achievements yet</span>
            )}
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
          <h2 className="text-2xl font-bold text-gray-900">Participants</h2>
          <p className="text-gray-600">Track learning progress and engagement</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Participant</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search participants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
          <option value="not-started">Not Started</option>
        </select>
        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-blue-600">{participants.length}</div>
          <div className="text-sm text-gray-600">Total Participants</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-green-600">{participants.filter(p => p.status === 'completed').length}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-purple-600">{participants.filter(p => p.status === 'in-progress').length}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-orange-600">{participants.reduce((sum, p) => sum + p.certificates, 0)}</div>
          <div className="text-sm text-gray-600">Certificates</div>
        </div>
      </div>

      {/* Participants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParticipants.map((participant) => (
          <div key={participant.id} onClick={() => setSelectedParticipant(participant)} className="cursor-pointer">
            <ParticipantCard participant={participant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantsScreen; 