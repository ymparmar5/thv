import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardList, Search, Filter, ChevronDown, Eye, AlertTriangle,
  Clock, CheckCircle, Send, MessageSquare, XCircle, ArrowRight,
  Plus
} from 'lucide-react'
import { useIncidents } from '../../context/IncidentContext.jsx'

const statusConfig = {
  internal_review: { label: 'Internal Review', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', dot: 'bg-amber-500' },
  approved: { label: 'Approved', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', dot: 'bg-blue-500' },
  sent_to_customer: { label: 'Sent to Customer', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', dot: 'bg-purple-500' },
  acknowledged: { label: 'Acknowledged', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', dot: 'bg-cyan-500' },
  resolved: { label: 'Resolved', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', dot: 'bg-green-500' },
}

const severityConfig = {
  low: { label: 'Low', color: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' },
  medium: { label: 'Medium', color: 'text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/20' },
  high: { label: 'High', color: 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20' },
  critical: { label: 'Critical', color: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20' },
}

const pipelineStages = [
  { status: 'internal_review', label: 'Internal Review', icon: Clock },
  { status: 'approved', label: 'Approved', icon: CheckCircle },
  { status: 'sent_to_customer', label: 'Sent to Customer', icon: Send },
  { status: 'acknowledged', label: 'Acknowledged', icon: MessageSquare },
  { status: 'resolved', label: 'Resolved', icon: CheckCircle },
]

const AdminIncidents = () => {
  const { incidents, getClientById, getStoreById, getEmployeeById } = useIncidents()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [severityFilter, setSeverityFilter] = useState('all')
  const [viewMode, setViewMode] = useState('table')

  const filteredIncidents = incidents.filter((inc) => {
    const matchesSearch =
      inc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inc.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || inc.status === statusFilter
    const matchesSeverity = severityFilter === 'all' || inc.severity === severityFilter
    return matchesSearch && matchesStatus && matchesSeverity
  })

  // Stats
  const statCounts = {
    total: incidents.length,
    internal_review: incidents.filter((i) => i.status === 'internal_review').length,
    approved: incidents.filter((i) => i.status === 'approved').length,
    sent_to_customer: incidents.filter((i) => i.status === 'sent_to_customer').length,
    acknowledged: incidents.filter((i) => i.status === 'acknowledged').length,
    resolved: incidents.filter((i) => i.status === 'resolved').length,
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white flex items-center">
            <ClipboardList className="w-8 h-8 mr-3 text-primary-900" />
            Incident Management
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{incidents.length} total incidents tracked</p>
        </div>
        <Link to="/admin/report-incident" className="btn-primary">
          <Plus className="w-4 h-4 mr-2" /> New Incident
        </Link>
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {pipelineStages.map((stage) => {
          const stCfg = statusConfig[stage.status]
          return (
            <button
              key={stage.status}
              onClick={() => setStatusFilter(statusFilter === stage.status ? 'all' : stage.status)}
              className={`card p-4 text-left cursor-pointer transition-all ${
                statusFilter === stage.status ? 'ring-2 ring-primary-900 dark:ring-primary-400' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <stage.icon className="w-5 h-5 text-gray-400" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{statCounts[stage.status]}</span>
              </div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{stage.label}</p>
            </button>
          )
        })}
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-secondary-800 rounded-2xl border border-gray-100 dark:border-secondary-700 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search incidents by title, ID, or category..."
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
          <div className="relative">
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="pl-4 pr-10 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary-900 transition-all"
            >
              <option value="all">All Severity</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Incidents Table */}
      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-secondary-900/50 dark:text-gray-300">
              <tr>
                <th className="px-6 py-4">Incident</th>
                <th className="px-6 py-4">Client / Store</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-secondary-700">
              {filteredIncidents.map((inc) => {
                const client = getClientById(inc.clientId)
                const store = getStoreById(inc.storeId)
                const sCfg = statusConfig[inc.status] || statusConfig.internal_review
                const svCfg = severityConfig[inc.severity] || severityConfig.medium
                return (
                  <tr key={inc.id} className="hover:bg-gray-50 dark:hover:bg-secondary-700/30 transition-colors bg-white dark:bg-secondary-800">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white truncate max-w-[250px]">{inc.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{inc.id}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{client?.name || '—'}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{store?.name || '—'}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{inc.category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${svCfg.color}`}>
                        {inc.severity === 'critical' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {svCfg.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${sCfg.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${sCfg.dot}`} />
                        {sCfg.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(inc.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Link
                        to={`/admin/incidents/${inc.id}`}
                        className="inline-flex items-center text-primary-900 dark:text-primary-400 hover:text-primary-700 font-semibold text-sm transition-colors"
                      >
                        View <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {filteredIncidents.length === 0 && (
          <div className="text-center py-16">
            <ClipboardList className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No incidents found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Try adjusting your filters or create a new incident.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminIncidents
