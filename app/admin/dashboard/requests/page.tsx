'use client';

import { useState } from 'react';
import { Search, Filter, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdminRequests() {
  const [statusFilter, setStatusFilter] = useState('all');
  
  const requests = [
    { id: '#001', client: 'John Doe', service: 'Data Recovery', status: 'In Progress', priority: 'High', date: '2024-01-15', deadline: '2024-01-20' },
    { id: '#002', client: 'Jane Smith', service: 'Website Design', status: 'Pending', priority: 'Medium', date: '2024-01-14', deadline: '2024-01-25' },
    { id: '#003', client: 'Mike Johnson', service: 'Software Development', status: 'Completed', priority: 'Low', date: '2024-01-13', deadline: '2024-01-18' },
    { id: '#004', client: 'Sarah Wilson', service: 'Graphics Design', status: 'In Progress', priority: 'High', date: '2024-01-12', deadline: '2024-01-17' },
  ];

  const filteredRequests = statusFilter === 'all' 
    ? requests 
    : requests.filter(req => req.status === statusFilter);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Service Requests</h1>
          <p className="text-gray-400">Manage and track all service requests</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-900 rounded-xl p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white"
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Requests Grid */}
      <div className="grid gap-4">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{request.service}</h3>
                <p className="text-gray-400">{request.client} • {request.id}</p>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  request.priority === 'High' ? 'bg-red-900 text-red-300' :
                  request.priority === 'Medium' ? 'bg-orange-900 text-orange-300' :
                  'bg-gray-700 text-gray-300'
                }`}>
                  {request.priority}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  request.status === 'Completed' ? 'bg-green-900 text-green-300' :
                  request.status === 'In Progress' ? 'bg-blue-900 text-blue-300' :
                  'bg-yellow-900 text-yellow-300'
                }`}>
                  {request.status}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <span>Created: {request.date}</span>
                <span>Deadline: {request.deadline}</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded-lg text-white">
                  View Details
                </button>
                <button className="px-3 py-1 border border-gray-700 hover:bg-gray-800 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}