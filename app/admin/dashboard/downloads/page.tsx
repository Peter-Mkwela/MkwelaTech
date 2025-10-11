'use client';

import { motion } from 'framer-motion';
import { Search, Download, FileText, Image, Archive, Video, Upload } from 'lucide-react';

export default function AdminDownloads() {
  const files = [
    { id: 1, name: 'project-documentation.pdf', type: 'PDF', size: '2.4 MB', uploadDate: '2024-01-15', downloads: 42, client: 'John Doe' },
    { id: 2, name: 'website-design.psd', type: 'PSD', size: '15.7 MB', uploadDate: '2024-01-14', downloads: 18, client: 'Jane Smith' },
    { id: 3, name: 'software-build.zip', type: 'ZIP', size: '45.2 MB', uploadDate: '2024-01-13', downloads: 56, client: 'Mike Johnson' },
    { id: 4, name: 'presentation.mp4', type: 'Video', size: '120.5 MB', uploadDate: '2024-01-12', downloads: 23, client: 'Sarah Wilson' },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="w-5 h-5 text-red-400" />;
      // eslint-disable-next-line jsx-a11y/alt-text
      case 'PSD': return <Image className="w-5 h-5 text-blue-400" />;
      case 'ZIP': return <Archive className="w-5 h-5 text-yellow-400" />;
      case 'Video': return <Video className="w-5 h-5 text-purple-400" />;
      default: return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  const totalDownloads = files.reduce((sum, file) => sum + file.downloads, 0);
  const totalStorage = files.reduce((sum, file) => {
    const size = parseFloat(file.size);
    return sum + (file.size.includes('GB') ? size * 1024 : size);
  }, 0);

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">File Management</h1>
          <p className="text-gray-400">Manage downloadable files for clients</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{files.length}</p>
                <p className="text-sm text-gray-400">Total Files</p>
              </div>
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-400">{totalDownloads}</p>
                <p className="text-sm text-gray-400">Total Downloads</p>
              </div>
              <Download className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-400">
                  {Math.round(totalStorage / 1024)} GB
                </p>
                <p className="text-sm text-gray-400">Total Storage</p>
              </div>
              <Archive className="w-8 h-8 text-blue-400" />
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
                placeholder="Search files..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <select className="px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white">
              <option>All Types</option>
              <option>PDF</option>
              <option>PSD</option>
              <option>ZIP</option>
              <option>Video</option>
            </select>
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors">
              <Upload className="w-5 h-5" />
              Upload File
            </button>
          </div>
        </motion.div>

        {/* Files List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {files.map((file, index) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {getFileIcon(file.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{file.name}</h3>
                    <p className="text-sm text-gray-400">
                      {file.type} • {file.size} • {file.client}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-400">{file.downloads} downloads</span>
                    <span className="text-sm text-gray-400">{file.uploadDate}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="px-4 py-2 border border-gray-700 hover:bg-gray-800 rounded-lg transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}