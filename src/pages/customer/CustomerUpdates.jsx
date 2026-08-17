import { useState } from 'react'
import { 
  AlertTriangle, FileText, RefreshCw, Clock, ChevronDown, ChevronUp
} from 'lucide-react'
import { securityUpdates, currentCustomer } from '../../data/mockData'

const typeColors = {
  alert: { bg: 'bg-red-50', text: 'text-red-700', icon: AlertTriangle, border: 'border-red-200' },
  report: { bg: 'bg-blue-50', text: 'text-blue-700', icon: FileText, border: 'border-blue-200' },
  update: { bg: 'bg-green-50', text: 'text-green-700', icon: RefreshCw, border: 'border-green-200' },
}

const CustomerUpdates = () => {
  const [expandedId, setExpandedId] = useState(null)

  // Filter updates for current customer (published only)
  const customerUpdates = securityUpdates.filter(
    u => (u.clientId === currentCustomer.id || u.clientId === null) && u.status === 'published'
  )

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Security Updates</h2>
        <p className="text-sm text-gray-500 mt-1">Stay informed about your security status and important alerts</p>
      </div>

      {/* Updates Feed */}
      <div className="space-y-4">
        {customerUpdates.map((update) => {
          const typeStyle = typeColors[update.type] || typeColors.update
          const isExpanded = expandedId === update.id

          return (
            <div
              key={update.id}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-md ${
                update.priority === 'high' ? 'border-red-200' : 'border-gray-100'
              }`}
            >
              {/* Media Banner */}
              {update.media && isExpanded && (
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={update.media} 
                    alt={update.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-4 flex-1 min-w-0">
                    {/* Icon */}
                    <div className={`p-3 rounded-xl flex-shrink-0 ${typeStyle.bg}`}>
                      <typeStyle.icon className={`w-5 h-5 ${typeStyle.text}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${typeStyle.bg} ${typeStyle.text}`}>
                          {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                        </span>
                        {update.priority === 'high' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-red-100 text-red-700">
                            ⚠ High Priority
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{update.title}</h3>
                      <p className={`text-sm text-gray-600 leading-relaxed ${
                        isExpanded ? '' : 'line-clamp-2'
                      }`}>
                        {update.description}
                      </p>
                      <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {update.date} at {update.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleExpand(update.id)}
                    className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors flex-shrink-0"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {customerUpdates.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No updates yet</h3>
          <p className="text-sm text-gray-500">Security updates will appear here when available</p>
        </div>
      )}
    </div>
  )
}

export default CustomerUpdates
