import React from 'react';
import { Users, Mail, BookOpen, ChevronRight } from 'lucide-react';

const ClientCard = ({ client }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold text-sm">{client.name.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{client.name}</h3>
            <p className="text-sm text-gray-600 flex items-center">
              <Mail className="w-3 h-3 mr-1" />
              {client.email}
            </p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center space-x-2 text-sm">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span className="text-gray-600">{client.courses} courses</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Users className="w-4 h-4 text-green-600" />
          <span className="text-gray-600">{client.participants} participants</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard; 