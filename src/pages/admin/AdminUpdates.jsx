import { useState } from 'react'
import { 
  Plus, Search, Filter, AlertTriangle, FileText, RefreshCw, 
  Clock, ChevronDown, Eye, Trash2, Edit, X, Send
} from 'lucide-react'
import { securityUpdates } from '../../data/mockData'

const typeColors = {
  alert: { bg: 'bg-red-50', text: 'text-red-700', icon: AlertTriangle, dot: 'bg-red-500' },
  report: { bg: 'bg-blue-50', text: 'text-blue-700', icon: FileText, dot: 'bg-blue-500' },
  update: { bg: 'bg-green-50', text: 'text-green-700', icon: RefreshCw, dot: 'bg-green-500' },
}

const priorityColors = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-green-100 text-green-700',
}

const AdminUpdates = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [selectedUpdate, setSelectedUpdate] = useState(null)

  const filteredUpdates = securityUpdates.filter(update => {
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === 'all' || update.type === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Security Updates</h2>
          <p className="text-sm text-gray-500 mt-1">Manage security updates, alerts, and stories for clients</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="inline-flex items-center px-5 py-2.5 bg-primary-900 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-900/20"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Update
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
            >
              <option value="all">All Types</option>
              <option value="alert">Alerts</option>
              <option value="report">Reports</option>
              <option value="update">Updates</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Updates List */}
      <div className="space-y-4">
        {filteredUpdates.map((update) => {
          const typeStyle = typeColors[update.type] || typeColors.update
          return (
            <div
              key={update.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Media Thumbnail */}
                {update.media && (
                  <div className="w-full sm:w-32 h-32 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={update.media} 
                      alt={update.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${typeStyle.bg} ${typeStyle.text}`}>
                      <typeStyle.icon className="w-3 h-3 mr-1" />
                      {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${priorityColors[update.priority]}`}>
                      {update.priority.charAt(0).toUpperCase() + update.priority.slice(1)}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${
                      update.status === 'published' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {update.status === 'published' ? '● Published' : '● Draft'}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-primary-900 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{update.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {update.date} at {update.time}
                    </span>
                    <span>Client: {update.clientName}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center gap-2 flex-shrink-0">
                  <button 
                    onClick={() => setSelectedUpdate(update)}
                    className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-primary-900 transition-colors"
                    title="View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-amber-500 transition-colors" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-red-500 transition-colors" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredUpdates.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No updates found</h3>
          <p className="text-sm text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Create Update Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowCreateForm(false)}>
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Create Security Update</h3>
              <button 
                onClick={() => setShowCreateForm(false)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter update title..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 appearance-none">
                    <option>Alert</option>
                    <option>Report</option>
                    <option>Update</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 appearance-none">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 appearance-none">
                  <option>All Clients</option>
                  <option>Sunrise Mall</option>
                  <option>Green Valley Hospital</option>
                  <option>TechPark Industries</option>
                  <option>Heritage School</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Enter update description..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Media</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-primary-900 transition-colors cursor-pointer">
                  <div className="text-gray-400 mb-2">
                    <FileText className="w-8 h-8 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-500">Click to upload image or video</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, MP4 up to 10MB</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setShowCreateForm(false)}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button className="inline-flex items-center px-5 py-2.5 bg-primary-900 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  Publish Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Update Modal */}
      {selectedUpdate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedUpdate(null)}>
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Update Details</h3>
              <button 
                onClick={() => setSelectedUpdate(null)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {selectedUpdate.media && (
              <div className="w-full h-48 overflow-hidden">
                <img src={selectedUpdate.media} alt={selectedUpdate.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {(() => {
                  const typeStyle = typeColors[selectedUpdate.type] || typeColors.update
                  return (
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${typeStyle.bg} ${typeStyle.text}`}>
                      {selectedUpdate.type.charAt(0).toUpperCase() + selectedUpdate.type.slice(1)}
                    </span>
                  )
                })()}
                <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${priorityColors[selectedUpdate.priority]}`}>
                  {selectedUpdate.priority.charAt(0).toUpperCase() + selectedUpdate.priority.slice(1)} Priority
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">{selectedUpdate.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{selectedUpdate.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                <span>{selectedUpdate.date} at {selectedUpdate.time}</span>
                <span>•</span>
                <span>Client: {selectedUpdate.clientName}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminUpdates
