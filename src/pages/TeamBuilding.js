import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Zap, 
  Trophy, 
  Calendar, 
  Clock, 
  Star, 
  Award,
  MapPin,
  Camera,
  QrCode,
  MessageSquare,
  Heart,
  Share2,
  Plus,
  Filter,
  Search,
  ChevronDown,
  MoreHorizontal,
  Play,
  Users2,
  TrendingUp,
  Activity,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const TeamBuilding = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('activities');
  const [filter, setFilter] = useState('all');

  const activities = [
    {
      id: 1,
      title: "Office Adventure Hunt",
      type: "scavenger-hunt",
      description: "Interactive treasure hunts and location-based challenges for team collaboration",
      duration: "45 min",
      participants: 24,
      difficulty: "Easy",
      status: "active",
      startTime: "10:00 AM",
      endTime: "10:45 AM",
      location: "Office Building",
      rewards: 500,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
      tags: ['Teamwork', 'Problem Solving', 'Communication'],
      teams: [
        { name: "Marketing Mavericks", progress: 6, score: 420, members: 4 },
        { name: "Sales Superstars", progress: 5, score: 380, members: 3 },
        { name: "HR Heroes", progress: 4, score: 340, members: 5 },
        { name: "Tech Titans", progress: 7, score: 450, members: 6 }
      ]
    },
    {
      id: 2,
      title: "Company Knowledge Quiz",
      type: "quiz",
      description: "Fast-paced interactive quiz games with real-time competition",
      duration: "30 min",
      participants: 18,
      difficulty: "Medium",
      status: "upcoming",
      startTime: "2:00 PM",
      endTime: "2:30 PM",
      location: "Conference Room A",
      rewards: 300,
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=200&fit=crop",
      tags: ['Knowledge', 'Competition', 'Learning'],
      teams: [
        { name: "Marketing Mavericks", score: 750, streak: 3 },
        { name: "Tech Titans", score: 720, streak: 2 },
        { name: "Sales Superstars", score: 680, streak: 1 },
        { name: "HR Heroes", score: 650, streak: 0 }
      ]
    },
    {
      id: 3,
      title: "Escape Room Challenge",
      type: "escape-room",
      description: "Collaborative problem-solving in themed escape room scenarios",
      duration: "60 min",
      participants: 12,
      difficulty: "Hard",
      status: "completed",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
      location: "Escape Room Center",
      rewards: 800,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
      tags: ['Problem Solving', 'Teamwork', 'Critical Thinking'],
      winner: "Tech Titans",
      results: [
        { team: "Tech Titans", time: "45:23", score: 950 },
        { team: "Marketing Mavericks", time: "52:18", score: 880 },
        { team: "Sales Superstars", time: "58:45", score: 820 },
        { team: "HR Heroes", time: "DNF", score: 650 }
      ]
    },
    {
      id: 4,
      title: "Innovation Workshop",
      type: "workshop",
      description: "Creative brainstorming and innovation sessions for product development",
      duration: "90 min",
      participants: 16,
      difficulty: "Medium",
      status: "upcoming",
      startTime: "3:00 PM",
      endTime: "4:30 PM",
      location: "Innovation Lab",
      rewards: 400,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
      tags: ['Innovation', 'Creativity', 'Collaboration'],
      teams: [
        { name: "Product Team", members: 6, status: "registered" },
        { name: "Design Team", members: 4, status: "registered" },
        { name: "Engineering Team", members: 6, status: "registered" }
      ]
    }
  ];

  const leaderboard = [
    { rank: 1, team: "Tech Titans", score: 1580, members: 6, streak: 5, avatar: "TT" },
    { rank: 2, team: "Marketing Mavericks", score: 1240, members: 4, streak: 3, avatar: "MM" },
    { rank: 3, team: "Sales Superstars", score: 1120, members: 3, streak: 2, avatar: "SS" },
    { rank: 4, team: "HR Heroes", score: 980, members: 5, streak: 1, avatar: "HH" },
    { rank: 5, team: "Finance Wizards", score: 920, members: 4, streak: 0, avatar: "FW" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Team Building Retreat",
      date: "Oct 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Mountain Resort",
      participants: 32,
      type: "retreat"
    },
    {
      id: 2,
      title: "Holiday Party Planning",
      date: "Dec 20, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hotel",
      participants: 45,
      type: "party"
    }
  ];

  const getActivityIcon = (type) => {
    const icons = {
      'scavenger-hunt': Target,
      'quiz': Zap,
      'escape-room': Award,
      'workshop': Users2
    };
    return icons[type] || Users;
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      upcoming: 'bg-blue-100 text-blue-800',
      completed: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'bg-green-100 text-green-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      Hard: 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.status === filter);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Building Activities</h1>
          <p className="text-gray-600 mt-1">Foster collaboration and strengthen team bonds through interactive activities</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Create Activity</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-100">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'activities', label: 'Activities', count: activities.length },
              { id: 'leaderboard', label: 'Leaderboard', count: leaderboard.length },
              { id: 'events', label: 'Upcoming Events', count: upcomingEvents.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'activities' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Filter:</span>
                  </div>
                  {['all', 'active', 'upcoming', 'completed'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilter(status)}
                      className={`px-3 py-1 rounded-full text-sm font-medium capitalize transition-colors ${
                        filter === status
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search activities..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Activities Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredActivities.map((activity) => {
                  const Icon = getActivityIcon(activity.type);
                  return (
                    <div key={activity.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      {/* Activity Image */}
                      <div className="relative">
                        <img 
                          src={activity.image} 
                          alt={activity.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                          <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-colors">
                            <Heart className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-colors">
                            <Share2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <div className="flex items-center justify-between text-white">
                            <span className="text-sm font-medium">{activity.location}</span>
                            <span className="text-sm">{activity.rewards} pts</span>
                          </div>
                        </div>
                      </div>

                      {/* Activity Content */}
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                              <Icon className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                              <p className="text-sm text-gray-600">{activity.description}</p>
                            </div>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {activity.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{activity.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{activity.participants}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                              {activity.difficulty}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                            {activity.status}
                          </span>
                        </div>

                        {/* Time and Location */}
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{activity.startTime} - {activity.endTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{activity.location}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button 
                          onClick={() => {
                            if (activity.type === 'scavenger-hunt') setCurrentView('scavenger-hunt');
                            else if (activity.type === 'quiz') setCurrentView('team-quiz');
                            else setCurrentView('team-building');
                          }}
                          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <Play className="w-4 h-4" />
                          <span>
                            {activity.status === 'active' ? 'Join Now' : 
                             activity.status === 'upcoming' ? 'Register' : 'View Results'}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top 3 Podium */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Top Performers</h3>
                    <div className="flex justify-center items-end space-x-8">
                      {/* Second Place */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <span className="text-2xl font-bold text-gray-700">{leaderboard[1].avatar}</span>
                        </div>
                        <div className="bg-gray-300 rounded-t-lg p-6 h-24 flex flex-col justify-center">
                          <h4 className="font-bold text-gray-800">{leaderboard[1].team}</h4>
                          <p className="text-sm text-gray-600">{leaderboard[1].members} members</p>
                          <p className="text-lg font-bold text-gray-700">{leaderboard[1].score} pts</p>
                        </div>
                        <div className="bg-gray-400 text-white py-2 px-4 rounded-b-lg">
                          <span className="font-bold">2nd</span>
                        </div>
                      </div>

                      {/* First Place */}
                      <div className="text-center">
                        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto border-4 border-yellow-500">
                          <span className="text-3xl font-bold text-gray-800">{leaderboard[0].avatar}</span>
                        </div>
                        <div className="bg-yellow-400 rounded-t-lg p-6 h-32 flex flex-col justify-center">
                          <h4 className="font-bold text-gray-800">{leaderboard[0].team}</h4>
                          <p className="text-sm text-gray-700">{leaderboard[0].members} members</p>
                          <p className="text-xl font-bold text-gray-800">{leaderboard[0].score} pts</p>
                        </div>
                        <div className="bg-yellow-500 text-white py-2 px-4 rounded-b-lg">
                          <span className="font-bold">1st</span>
                        </div>
                      </div>

                      {/* Third Place */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-orange-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <span className="text-2xl font-bold text-gray-800">{leaderboard[2].avatar}</span>
                        </div>
                        <div className="bg-orange-300 rounded-t-lg p-6 h-20 flex flex-col justify-center">
                          <h4 className="font-bold text-gray-800">{leaderboard[2].team}</h4>
                          <p className="text-sm text-gray-600">{leaderboard[2].members} members</p>
                          <p className="text-lg font-bold text-gray-700">{leaderboard[2].score} pts</p>
                        </div>
                        <div className="bg-orange-400 text-white py-2 px-4 rounded-b-lg">
                          <span className="font-bold">3rd</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Rankings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Full Rankings</h3>
                  <div className="space-y-3">
                    {leaderboard.map((team, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-gray-300'
                          }`}>
                            {team.rank}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{team.team}</h4>
                            <p className="text-sm text-gray-600">{team.members} members</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">{team.score}</p>
                          {team.streak > 0 && (
                            <p className="text-sm text-orange-600">🔥 {team.streak} streak</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                      </div>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Register for Event
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamBuilding; 