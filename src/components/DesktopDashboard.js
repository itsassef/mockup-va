import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Target, 
  BarChart3, 
  Settings,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

// Import all the new screen components
import ClientsScreen from './desktop/screens/ClientsScreen';
import ParticipantsScreen from './desktop/screens/ParticipantsScreen';
import QuizScreen from './desktop/screens/QuizScreen';
import ActivitiesScreen from './desktop/screens/ActivitiesScreen';
import AnalyticsScreen from './desktop/screens/AnalyticsScreen';
import SettingsScreen from './desktop/screens/SettingsScreen';

const DesktopDashboard = ({ currentView, setCurrentView }) => {
  const stats = [
    {
      title: 'Total Courses',
      value: '24',
      change: '+12%',
      icon: BookOpen,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8%',
      icon: Users,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100'
    },
    {
      title: 'Completed Quizzes',
      value: '456',
      change: '+15%',
      icon: Award,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      title: 'Team Activities',
      value: '89',
      change: '+5%',
      icon: Target,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100'
    }
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'Digital Marketing Basics',
      instructor: 'Sarah Johnson',
      students: 234,
      rating: 4.8,
      status: 'active'
    },
    {
      id: 2,
      title: 'Leadership Skills',
      instructor: 'Mike Chen',
      students: 189,
      rating: 4.9,
      status: 'active'
    },
    {
      id: 3,
      title: 'Customer Service Excellence',
      instructor: 'Emma Davis',
      students: 156,
      rating: 4.7,
      status: 'active'
    }
  ];

  const recentClients = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      email: 'john@techcorp.com',
      courses: 5,
      participants: 45
    },
    {
      id: 2,
      name: 'Global Solutions',
      email: 'sarah@globalsolutions.com',
      courses: 3,
      participants: 28
    },
    {
      id: 3,
      name: 'Innovation Labs',
      email: 'mike@innovationlabs.com',
      courses: 2,
      participants: 15
    }
  ];

  const renderDashboard = () => (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Courses and Clients */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Courses */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Courses</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600">by {course.instructor}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{course.students} students</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Clients */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Clients</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentClients.map((client) => (
              <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{client.name}</h4>
                    <p className="text-sm text-gray-600">{client.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{client.courses} courses</p>
                  <p className="text-sm text-gray-600">{client.participants} participants</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return renderDashboard();
      case 'clients':
        return <ClientsScreen />;
      case 'participants':
        return <ParticipantsScreen />;
      case 'quiz':
        return <QuizScreen />;
      case 'activities':
        return <ActivitiesScreen />;
      case 'analytics':
        return <AnalyticsScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-full">
      {renderContent()}
    </div>
  );
};

export default DesktopDashboard; 