import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Search, 
  Bell, 
  Settings, 
  Plus,
  Moon,
  Sun,
  Award,
  Target,
  BarChart3
} from 'lucide-react';

const MainLayout = ({ children, currentView, setCurrentView }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'participants', label: 'Participants', icon: Users },
    { id: 'quiz', label: 'Quiz', icon: Award },
    { id: 'activities', label: 'Activities', icon: Target },
    { id: 'grading', label: 'Grading', icon: Award },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const friends = [
    { id: 1, name: 'Alfonso Siphron', avatar: 'AS', color: 'bg-gradient-to-br from-pink-500 to-pink-600' },
    { id: 2, name: 'Kierra Lipshutz', avatar: 'KL', color: 'bg-gradient-to-br from-green-500 to-emerald-600' },
    { id: 3, name: 'Charlie Vaccaro', avatar: 'CV', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Left Sidebar */}
      <div className="w-64 bg-white/95 backdrop-blur-sm shadow-xl border-r border-gray-100">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Learning Partner</h1>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Admin Dashboard
            </h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-gray-900 hover:shadow-md'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Friends */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Friends
            </h3>
            <div className="space-y-3">
              {friends.map((friend) => (
                <div key={friend.id} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                  <div className={`w-10 h-10 ${friend.color} rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {friend.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{friend.name}</p>
                    <p className="text-xs text-gray-500">Friend</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your course....."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setIsDarkMode(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    !isDarkMode
                      ? 'bg-white text-gray-900 shadow-md transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsDarkMode(true)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-800 text-white shadow-md transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>

              {/* Notifications */}
              <button className="relative p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-300 group">
                <Bell className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
              </button>

              {/* Settings */}
              <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-300 group">
                <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Add New Board */}
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                <Plus className="w-4 h-4" />
                <span className="text-sm">Add new board</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout; 