'use client';

import { motion } from 'framer-motion';
import { Search, Download, CheckCircle, XCircle, Clock,  DollarSign } from 'lucide-react';

export default function AdminPayments() {
  const payments = [
    { id: '#PAY-001', client: 'John Doe', amount: '$150', method: 'Credit Card', status: 'Completed', date: '2024-01-15', order: '#ORD-001' },
    { id: '#PAY-002', client: 'Jane Smith', amount: '$300', method: 'PayPal', status: 'Pending', date: '2024-01-14', order: '#ORD-002' },
    { id: '#PAY-003', client: 'Mike Johnson', amount: '$200', method: 'Bank Transfer', status: 'Failed', date: '2024-01-13', order: '#ORD-003' },
    { id: '#PAY-004', client: 'Sarah Wilson', amount: '$450', method: 'Credit Card', status: 'Completed', date: '2024-01-12', order: '#ORD-004' },
    { id: '#PAY-005', client: 'David Brown', amount: '$180', method: 'Stripe', status: 'Completed', date: '2024-01-11', order: '#ORD-005' },
    { id: '#PAY-006', client: 'Emily Davis', amount: '$600', method: 'PayPal', status: 'Pending', date: '2024-01-10', order: '#ORD-006' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return CheckCircle;
      case 'Pending': return Clock;
      default: return XCircle;
    }
  };

  const totalRevenue = payments
    .filter(p => p.status === 'Completed')
    .reduce((sum, payment) => sum + parseFloat(payment.amount.replace('$', '')), 0);

  const pendingAmount = payments
    .filter(p => p.status === 'Pending')
    .reduce((sum, payment) => sum + parseFloat(payment.amount.replace('$', '')), 0);

  const failedAmount = payments
    .filter(p => p.status === 'Failed')
    .reduce((sum, payment) => sum + parseFloat(payment.amount.replace('$', '')), 0);

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Payment Management</h1>
          <p className="text-gray-400">Manage and track all payment transactions</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-400">${totalRevenue}</p>
                <p className="text-sm text-gray-400">Total Revenue</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-yellow-400">${pendingAmount}</p>
                <p className="text-sm text-gray-400">Pending Payments</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-red-400">${failedAmount}</p>
                <p className="text-sm text-gray-400">Failed Payments</p>
              </div>
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
          </motion.div>
        </div>

        {/* Search and Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6"
        >
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search payments by client, ID, or amount..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <select className="px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>All Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <select className="px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>All Methods</option>
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
              <option>Stripe</option>
            </select>
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
        </motion.div>

        {/* Payments Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Payment ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Client</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Method</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => {
                  const StatusIcon = getStatusIcon(payment.status);
                  return (
                    <motion.tr
                      key={payment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-white">{payment.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-sm">
                            {payment.client.charAt(0)}
                          </div>
                          <span className="text-gray-300">{payment.client}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{payment.order}</td>
                      <td className="px-6 py-4 font-semibold text-green-400">{payment.amount}</td>
                      <td className="px-6 py-4 text-gray-300">{payment.method}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <StatusIcon className={`w-4 h-4 ${
                            payment.status === 'Completed' ? 'text-green-400' :
                            payment.status === 'Pending' ? 'text-yellow-400' :
                            'text-red-400'
                          }`} />
                          <span className={`text-sm font-medium ${
                            payment.status === 'Completed' ? 'text-green-400' :
                            payment.status === 'Pending' ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {payment.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{payment.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {payment.status === 'Pending' && (
                            <button className="px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded text-white text-sm transition-colors">
                              Approve
                            </button>
                          )}
                          <button className="px-3 py-1 border border-gray-600 hover:bg-gray-700 rounded text-gray-300 text-sm transition-colors">
                            Details
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400"
        >
          <div>Total Payments: {payments.length}</div>
          <div>Completed: {payments.filter(p => p.status === 'Completed').length}</div>
          <div>Pending: {payments.filter(p => p.status === 'Pending').length}</div>
          <div>Failed: {payments.filter(p => p.status === 'Failed').length}</div>
        </motion.div>
      </div>
    </div>
  );
}