import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import DesktopDashboard from './components/DesktopDashboard';
import MobileEmulator from './components/MobileEmulator';

function App() {
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'mobile'
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* View Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-1">
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'desktop'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'mobile'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Render appropriate view */}
      {viewMode === 'desktop' ? (
        <MainLayout currentView={currentView} setCurrentView={setCurrentView}>
          <DesktopDashboard currentView={currentView} setCurrentView={setCurrentView} />
        </MainLayout>
      ) : (
        <MobileEmulator />
      )}
    </div>
  );
}

export default App; 