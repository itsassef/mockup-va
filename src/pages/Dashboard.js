import React from 'react';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award, 
  Clock, 
  Star, 
  ChevronDown,
  ArrowRight,
  Play,
  Calendar,
  CheckCircle,
  MoreHorizontal,
  Search,
  Bell,
  MessageSquare,
  Video
} from 'lucide-react';

const Dashboard = ({ setCurrentView }) => {
  const stats = [
    { 
      label: 'Total Courses', 
      value: '24', 
      icon: BookOpen, 
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
      change: '+12%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    { 
      label: 'Active Users', 
      value: '1,234', 
      icon: Users, 
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      change: '+8%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    { 
      label: 'Completed Quizzes', 
      value: '456', 
      icon: Award, 
      gradient: 'bg-gradient-to-br from-pink-500 to-pink-600',
      change: '+15%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100'
    },
    { 
      label: 'Team Activities', 
      value: '89', 
      icon: TrendingUp, 
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
      change: '+5%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Digital Marketing Basics",
      instructor: "Sarah Johnson",
      students: "234 students",
      rating: 4.8,
      icon: "🎯",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      id: 2,
      title: "Leadership Skills",
      instructor: "Mike Chen",
      students: "189 students",
      rating: 4.9,
      icon: "🎨",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 3,
      title: "Customer Service Excellence",
      instructor: "Emma Davis",
      students: "156 students",
      rating: 4.7,
      icon: "🌟",
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    }
  ];

  const clients = [
    {
      id: 1,
      name: "TechCorp Inc.",
      email: "john@techcorp.com",
      courses: "5 courses",
      participants: "45 participants",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      id: 2,
      name: "Global Solutions",
      email: "sarah@globalsolutions.com",
      courses: "3 courses",
      participants: "28 participants",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      id: 3,
      name: "Innovation Labs",
      email: "mike@innovationlabs.com",
      courses: "2 courses",
      participants: "15 participants",
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    }
  ];

  const activities = [
    { month: 'Jan', value: 65, gradient: 'bg-gradient-to-br from-purple-400 to-purple-500' },
    { month: 'Feb', value: 45, gradient: 'bg-gradient-to-br from-blue-400 to-blue-500' },
    { month: 'Mar', value: 80, gradient: 'bg-gradient-to-br from-pink-400 to-pink-500' },
    { month: 'Apr', value: 55, gradient: 'bg-gradient-to-br from-orange-400 to-orange-500' },
    { month: 'May', value: 70, gradient: 'bg-gradient-to-br from-purple-400 to-purple-500' },
    { month: 'Jun', value: 60, gradient: 'bg-gradient-to-br from-blue-400 to-blue-500' },
    { month: 'Jul', value: 85, gradient: 'bg-gradient-to-br from-pink-400 to-pink-500' },
    { month: 'Aug', value: 90, gradient: 'bg-gradient-to-br from-purple-400 to-purple-500', active: true },
  ];

  const schedule = [
    {
      time: "09:30 - 12:30",
      title: "Routine with Tim Reddish",
      subtitle: "Main Course Workout",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      completed: true
    },
    {
      time: "17:30 - 21:30",
      title: "Team Building Session",
      subtitle: "Collaborative Workshop",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-purple-600">Learning Partner</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                />
              </div>
              <button className="px-4 py-2 border border-purple-200 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors flex items-center space-x-2">
                <span>Ask AI</span>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Video className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                AI
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Platform Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="flex items-center space-x-8">
          <button className="text-gray-600 hover:text-gray-900 py-2 px-1 border-b-2 border-transparent hover:border-gray-300 transition-colors">
            Home
          </button>
          <button className="text-purple-600 py-2 px-1 border-b-2 border-purple-600 font-medium">
            Dashboard
          </button>
          <button className="text-gray-600 hover:text-gray-900 py-2 px-1 border-b-2 border-transparent hover:border-gray-300 transition-colors">
            Courses
          </button>
          <button className="text-gray-600 hover:text-gray-900 py-2 px-1 border-b-2 border-transparent hover:border-gray-300 transition-colors">
            Analytics
          </button>
          <button className="text-gray-600 hover:text-gray-900 py-2 px-1 border-b-2 border-transparent hover:border-gray-300 transition-colors relative">
            Settings
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gray-300 rounded-full text-xs flex items-center justify-center text-white">1</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage your learning platform with ease</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Desktop
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                Mobile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.changeColor} font-medium`}>{stat.change}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.gradient} rounded-xl flex items-center justify-center shadow-sm`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Courses */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg border border-purple-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Recent Courses</h3>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-xl text-sm font-medium hover:bg-opacity-30 transition-all duration-300">
                    <span>View All</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className={`flex items-center space-x-4 p-4 ${course.bgColor} rounded-xl hover:shadow-md transition-all duration-300 border border-white/50`}>
                      <div className={`w-12 h-12 ${course.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                        <span className="text-lg">{course.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{course.title}</h4>
                        <p className="text-sm text-gray-600">{course.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{course.students}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Clients */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg border border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Recent Clients</h3>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-xl text-sm font-medium hover:bg-opacity-30 transition-all duration-300">
                    <span>View All</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {clients.map((client) => (
                    <div key={client.id} className={`flex items-center space-x-4 p-4 ${client.bgColor} rounded-xl hover:shadow-md transition-all duration-300 border border-white/50`}>
                      <div className={`w-12 h-12 ${client.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{client.name}</h4>
                        <p className="text-sm text-gray-600">{client.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{client.courses}</p>
                        <p className="text-sm text-gray-600">{client.participants}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Activity */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl shadow-lg border border-pink-200 p-6">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 -m-6 mb-6 p-6 rounded-t-xl text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Activity</h3>
                  <button className="flex items-center space-x-2 px-3 py-1 bg-white bg-opacity-20 rounded-lg text-sm hover:bg-opacity-30 transition-all duration-300">
                    <span>Year</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">3.5h</div>
                <div className="flex items-center justify-center space-x-1 text-green-600">
                  <span className="text-sm font-medium">Great result!</span>
                  <span>👍</span>
                </div>
              </div>
              
              <div className="flex items-end justify-between h-32">
                {activities.map((activity, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <div 
                        className={`w-8 ${activity.gradient} rounded-t-xl transition-all duration-300 ${
                          activity.active ? 'ring-2 ring-gray-900 shadow-lg' : ''
                        }`}
                        style={{height: `${(activity.value / 100) * 80}px`}}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{activity.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg border border-orange-200 p-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 -m-6 mb-6 p-6 rounded-t-xl text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Today's Schedule</h3>
                  <button className="flex items-center space-x-2 px-3 py-1 bg-white bg-opacity-20 rounded-lg text-sm hover:bg-opacity-30 transition-all duration-300">
                    <span>Year</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className={`${item.gradient} rounded-xl p-4 text-white relative shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium">{item.time}</span>
                          {item.completed && <CheckCircle className="w-4 h-4" />}
                        </div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm opacity-90">{item.subtitle}</p>
                      </div>
                      <button className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 