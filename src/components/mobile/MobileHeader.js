import React from 'react';
import { BookOpen, Bell, User, Sparkles } from 'lucide-react';

const MobileHeader = ({ title, subtitle, showBackButton, onBack }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with softer gradient */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-6 shadow-lg">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-white bg-opacity-5 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white bg-opacity-5 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Smaller logo with subtle effects */}
              <div className="relative">
                <div className="w-10 h-10 bg-white bg-opacity-15 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md border border-white border-opacity-20 hover:scale-105 transition-all duration-300 group">
                  <BookOpen className="w-5 h-5 text-white group-hover:rotate-6 transition-transform duration-300" />
                </div>
                {/* Small sparkle effect */}
                <div className="absolute -top-0.5 -right-0.5">
                  <Sparkles className="w-3 h-3 text-yellow-200 animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-0.5">
                <h1 className="text-lg font-semibold text-white">{title}</h1>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></div>
                  <p className="text-xs text-white text-opacity-85">{subtitle}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Smaller notification bell */}
              <div className="relative group">
                <div className="w-9 h-9 bg-white bg-opacity-15 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md border border-white border-opacity-20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Bell className="w-4 h-4 text-white group-hover:animate-bounce transition-all duration-300" />
                </div>
                {/* Smaller notification badge */}
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-400 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Smaller user profile */}
              <div className="relative group">
                <div className="w-9 h-9 bg-white bg-opacity-15 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md border border-white border-opacity-20 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                  <User className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Smaller status indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-300 rounded-full border border-white shadow-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Subtle bottom border */}
          <div className="mt-4 pt-3 border-t border-white border-opacity-15">
            <div className="flex items-center justify-between text-white text-opacity-70 text-xs">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="text-xs">Online</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-white bg-opacity-50 rounded-full"></div>
                  <span className="text-xs">Premium</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                <span className="text-xs">Level 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader; 