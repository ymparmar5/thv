import { useState } from 'react'
import { 
  Search, Filter, Plus, Eye, MoreVertical, Camera,
  MapPin, Phone, Mail, ChevronDown, X
} from 'lucide-react'
import { clients } from '../../data/mockData'

const AdminClients = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedClient, setSelectedClient] = useState(null)

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
          <p className="text-sm text-gray-500 mt-1">{clients.length} total clients registered</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-primary-900 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-900/20">
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients by name, ID, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
            />
          </div>
          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Client Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{client.avatar}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-900 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-gray-500">{client.id}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                client.status === 'active' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-red-50 text-red-700'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  client.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                {client.status === 'active' ? 'Active' : 'Inactive'}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {client.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Camera className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {client.activeCameras}/{client.cameras} cameras active
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {client.email}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-50 text-primary-900">
                  {client.plan}
                </span>
                <span className="text-xs text-gray-500">{client.monthlyBill}/mo</span>
              </div>
              <button 
                onClick={() => setSelectedClient(client)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-primary-900 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No clients found</h3>
          <p className="text-sm text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedClient(null)}>
          <div 
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Client Details</h3>
              <button 
                onClick={() => setSelectedClient(null)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              {/* Client Header */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary-900 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{selectedClient.avatar}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{selectedClient.name}</h4>
                  <p className="text-sm text-gray-500">{selectedClient.id}</p>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mt-1 ${
                    selectedClient.status === 'active' 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {selectedClient.status === 'active' ? '● Active' : '● Inactive'}
                  </span>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Plan</p>
                  <p className="font-semibold text-gray-900">{selectedClient.plan}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Monthly Bill</p>
                  <p className="font-semibold text-gray-900">{selectedClient.monthlyBill}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Cameras</p>
                  <p className="font-semibold text-gray-900">{selectedClient.activeCameras}/{selectedClient.cameras}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Joined</p>
                  <p className="font-semibold text-gray-900">{selectedClient.joinedDate}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-900">Contact Information</h5>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  {selectedClient.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  {selectedClient.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  {selectedClient.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminClients
