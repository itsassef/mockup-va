import React, { useState } from 'react';
import { Plus, Search, Filter, Download, Edit, Mail, Phone, Globe, Building } from 'lucide-react';
import ClientCard from '../ClientCard';

const ClientsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      email: 'john@techcorp.com',
      phone: '+1 (555) 123-4567',
      website: 'www.techcorp.com',
      industry: 'Technology',
      courses: 5,
      participants: 45,
      status: 'active',
      joinedDate: '2024-01-15',
      totalSpent: '$12,450'
    },
    {
      id: 2,
      name: 'Global Solutions',
      email: 'sarah@globalsolutions.com',
      phone: '+1 (555) 234-5678',
      website: 'www.globalsolutions.com',
      industry: 'Consulting',
      courses: 3,
      participants: 28,
      status: 'active',
      joinedDate: '2024-02-20',
      totalSpent: '$8,900'
    },
    {
      id: 3,
      name: 'Innovation Labs',
      email: 'mike@innovationlabs.com',
      phone: '+1 (555) 345-6789',
      website: 'www.innovationlabs.com',
      industry: 'Research',
      courses: 2,
      participants: 15,
      status: 'inactive',
      joinedDate: '2024-03-10',
      totalSpent: '$5,200'
    },
    {
      id: 4,
      name: 'Digital Dynamics',
      email: 'emma@digitaldynamics.com',
      phone: '+1 (555) 456-7890',
      website: 'www.digitaldynamics.com',
      industry: 'Marketing',
      courses: 7,
      participants: 62,
      status: 'active',
      joinedDate: '2024-01-05',
      totalSpent: '$18,750'
    },
    {
      id: 5,
      name: 'Future Systems',
      email: 'alex@futuresystems.com',
      phone: '+1 (555) 567-8901',
      website: 'www.futuresystems.com',
      industry: 'AI/ML',
      courses: 4,
      participants: 33,
      status: 'active',
      joinedDate: '2024-02-28',
      totalSpent: '$9,800'
    }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedClient) {
    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedClient(null)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedClient.name}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Edit className="w-4 h-4 mr-2" />
              Edit Client
            </button>
          </div>
        </div>

        {/* Client Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{selectedClient.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{selectedClient.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{selectedClient.website}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{selectedClient.industry}</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{selectedClient.courses}</div>
                <div className="text-sm text-gray-600">Active Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{selectedClient.participants}</div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{selectedClient.totalSpent}</div>
                <div className="text-sm text-gray-600">Total Spent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{selectedClient.joinedDate}</div>
                <div className="text-sm text-gray-600">Joined Date</div>
              </div>
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
          <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
          <p className="text-gray-600">Manage your client relationships</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Client</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search clients..."
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
          <div className="text-2xl font-bold text-blue-600">{clients.length}</div>
          <div className="text-sm text-gray-600">Total Clients</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-green-600">{clients.filter(c => c.status === 'active').length}</div>
          <div className="text-sm text-gray-600">Active Clients</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-purple-600">{clients.reduce((sum, c) => sum + c.participants, 0)}</div>
          <div className="text-sm text-gray-600">Total Participants</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-2xl font-bold text-orange-600">$54,100</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} onClick={() => setSelectedClient(client)} className="cursor-pointer">
            <ClientCard client={client} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsScreen; 