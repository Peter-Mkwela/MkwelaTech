'use client';

import { motion } from 'framer-motion';
import { Search, Filter, MessageCircle, Clock, CheckCircle, AlertCircle, Mail } from 'lucide-react';

export default function AdminSupport() {
  const tickets = [
    { id: '#TICKET-001', client: 'John Doe', subject: 'Website not loading', status: 'Open', priority: 'High', lastUpdate: '2 hours ago', messages: 3 },
    { id: '#TICKET-002', client: 'Jane Smith', subject: 'Payment issue', status: 'In Progress', priority: 'Medium', lastUpdate: '1 day ago', messages: 5 },
    { id: '#TICKET-003', client: 'Mike Johnson', subject: 'Feature request', status: 'Resolved', priority: 'Low', lastUpdate: '3 days ago', messages: 2 },
    { id: '#TICKET-004', client: 'Sarah Wilson', subject: 'Account access problem', status: 'Open', priority: 'High', lastUpdate: '5 hours ago', messages: 1 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved': return CheckCircle;
      case 'In Progress': return Clock;
      default: return AlertCircle;
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Support Management</h1>
          <p className="text-gray-400">Manage customer support tickets and inquiries</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{tickets.length}</p>
                <p className="text-sm text-gray-400">Total Tickets</p>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-yellow-400">{tickets.filter(t => t.status === 'Open').length}</p>
                <p className="text-sm text-gray-400">Open Tickets</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-400">{tickets.filter(t => t.status === 'In Progress').length}</p>
                <p className="text-sm text-gray-400">In Progress</p>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-400">{tickets.filter(t => t.status === 'Resolved').length}</p>
                <p className="text-sm text-gray-400">Resolved</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6"
        >
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <select className="px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white">
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
            <select className="px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white">
              <option>All Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors">
              <Mail className="w-5 h-5" />
              New Ticket
            </button>
          </div>
        </motion.div>

        {/* Tickets List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {tickets.map((ticket, index) => {
            const StatusIcon = getStatusIcon(ticket.status);
            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      ticket.priority === 'High' ? 'bg-red-900' :
                      ticket.priority === 'Medium' ? 'bg-orange-900' :
                      'bg-gray-800'
                    }`}>
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{ticket.subject}</h3>
                      <p className="text-gray-400">{ticket.client} • {ticket.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      ticket.status === 'Resolved' ? 'bg-green-900 text-green-300' :
                      ticket.status === 'In Progress' ? 'bg-blue-900 text-blue-300' :
                      'bg-yellow-900 text-yellow-300'
                    }`}>
                      {ticket.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      ticket.priority === 'High' ? 'bg-red-900 text-red-300' :
                      ticket.priority === 'Medium' ? 'bg-orange-900 text-orange-300' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {ticket.priority}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <span>Last update: {ticket.lastUpdate}</span>
                    <span>{ticket.messages} messages</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors">
                      Respond
                    </button>
                    <button className="px-4 py-2 border border-gray-700 hover:bg-gray-800 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}