import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardList, Search, ChevronDown, AlertTriangle,
  Clock, ArrowRight, CheckCircle, MessageSquare, Eye
} from 'lucide-react'
import { useIncidents } from '../../context/IncidentContext.jsx'
import { currentCustomer } from '../../data/mockData'

const statusConfig = {
  sent_to_customer: { label: 'Needs Review', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', dot: 'bg-amber-500', action: 'Review & Acknowledge' },
  acknowledged: { label: 'Acknowledged', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', dot: 'bg-cyan-500', action: 'Add Feedback' },
  resolved: { label: 'Resolved', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', dot: 'bg-green-500', action: 'View' },
}

const severityConfig = {
  low: { label: 'Low', color: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' },
  medium: { label: 'Medium', color: 'text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/20' },
  high: { label: 'High', color: 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20' },
  critical: { label: 'Critical', color: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20' },
}

const CustomerIncidents = () => {
  const { getClientIncidents, getStoreById, getCameraById } = useIncidents()
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Customer only sees incidents that have been sent to them or beyond
  const allIncidents = getClientIncidents(currentCustomer.id).filter(
    (i) => ['sent_to_customer', 'acknowledged', 'resolved'].includes(i.status)
  )

  const filteredIncidents = allIncidents.filter((inc) => {
    const matchesSearch =
      inc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inc.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || inc.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const needsAction = allIncidents.filter((i) => i.status === 'sent_to_customer').length

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white flex items-center">
            <ClipboardList className="w-8 h-8 mr-3 text-primary-900" />
            Incident Reports
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {allIncidents.length} incidents reported for your locations
            {needsAction > 0 && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                {needsAction} needs action
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-4 text-center">
          <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{allIncidents.filter(i => i.status === 'sent_to_customer').length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">Needs Review</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{allIncidents.filter(i => i.status === 'acknowledged').length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">In Progress</p>
        </div>
        <div className="card p-4 text-center">
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{allIncidents.filter(i => i.status === 'resolved').length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">Resolved</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-secondary-800 rounded-2xl border border-gray-100 dark:border-secondary-700 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search incidents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-4 pr-10 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
            >
              <option value="all">All Status</option>
              {Object.entries(statusConfig).map(([key, val]) => (
                <option key={key} value={key}>{val.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Incident Cards */}
      <div className="space-y-4">
        {filteredIncidents.map((inc) => {
          const store = getStoreById(inc.storeId)
          const sCfg = statusConfig[inc.status] || statusConfig.sent_to_customer
          const svCfg = severityConfig[inc.severity] || severityConfig.medium
          return (
            <Link
              key={inc.id}
              to={`/customer/incidents/${inc.id}`}
              className="card p-5 block hover:border-primary-900 dark:hover:border-primary-400 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${sCfg.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${sCfg.dot}`} />
                      {sCfg.label}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${svCfg.color}`}>
                      {inc.severity === 'critical' && <AlertTriangle className="w-3 h-3 mr-1" />}
                      {svCfg.label}
                    </span>
                    <span className="text-xs text-gray-400">{inc.id}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-900 dark:group-hover:text-primary-400 transition-colors text-lg mb-1">{inc.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{inc.story.substring(0, 150)}...</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {new Date(inc.createdAt).toLocaleDateString()}</span>
                    <span>{store?.name || '—'}</span>
                    <span>{inc.category}</span>
                    {inc.customerFeedback?.length > 0 && (
                      <span className="flex items-center"><MessageSquare className="w-3 h-3 mr-1" /> {inc.customerFeedback.length} feedback</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-primary-900 dark:text-primary-400 text-sm font-bold flex-shrink-0">
                  {sCfg.action} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {filteredIncidents.length === 0 && (
        <div className="text-center py-16 card">
          <CheckCircle className="w-12 h-12 text-green-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">All Clear!</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">No incidents match your filters. Your security team is monitoring diligently.</p>
        </div>
      )}
    </div>
  )
}

export default CustomerIncidents
