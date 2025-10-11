'use client';

import { motion } from 'framer-motion';
import { Search, Filter, MoreVertical, Mail, Phone, UserPlus } from 'lucide-react';

export default function AdminClients() {
  const clients = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1-555-0123', joinDate: '2024-01-15', status: 'Active', orders: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1-555-0124', joinDate: '2024-01-10', status: 'Active', orders: 3 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+1-555-0125', joinDate: '2024-01-08', status: 'Inactive', orders: 1 },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', phone: '+1-555-0126', joinDate: '2024-01-05', status: 'Active', orders: 7 },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Client Management</h1>
          <p className="text-gray-400">Manage all client accounts and information</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{clients.length}</p>
                <p className="text-sm text-gray-400">Total Clients</p>
              </div>
              <UserPlus className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{clients.filter(c => c.status === 'Active').length}</p>
                <p className="text-sm text-gray-400">Active Clients</p>
              </div>
              <UserPlus className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{clients.reduce((sum, client) => sum + client.orders, 0)}</p>
                <p className="text-sm text-gray-400">Total Orders</p>
              </div>
              <UserPlus className="w-8 h-8 text-orange-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">$12,450</p>
                <p className="text-sm text-gray-400">Total Revenue</p>
              </div>
              <UserPlus className="w-8 h-8 text-purple-400" />
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
                placeholder="Search clients by name or email..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
              <Filter className="w-5 h-5" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors">
              <UserPlus className="w-5 h-5" />
              Add Client
            </button>
          </div>
        </motion.div>

        {/* Clients Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Client</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Join Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <motion.tr
                    key={client.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white">
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-white">{client.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-300">{client.email}</div>
                      <div className="text-xs text-gray-500">{client.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{client.joinDate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        client.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-gray-700 text-gray-300'
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{client.orders} orders</td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-gray-700 rounded transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}