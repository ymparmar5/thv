import { useState } from 'react'
import { 
  Search, Filter, Plus, Eye, Camera, Store,
  MapPin, Phone, Mail, ChevronDown, X, Users, ShieldCheck, ShieldAlert,
  Wifi, WifiOff, CheckCircle, FileText, UploadCloud, ChevronRight, ChevronLeft, Trash2, Edit2, File as FileIcon, Image as ImageIcon
} from 'lucide-react'
import { clients } from '../../data/mockData'
import { useIncidents } from '../../context/IncidentContext.jsx'

const AdminClients = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedClient, setSelectedClient] = useState(null)
  const [modalTab, setModalTab] = useState('overview')
  const [isAddingClient, setIsAddingClient] = useState(false)
  const [addClientStep, setAddClientStep] = useState(1)
  
  // File upload state for mock onboarding
  const [idImage, setIdImage] = useState(null)
  const [logoImage, setLogoImage] = useState(null)
  const [docFile, setDocFile] = useState(null)

  const { getStoresByClient, getCamerasByStore, getCamerasByClient, getRegulationsByClient, getEmployeesByClient } = useIncidents()

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const modalTabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'stores', label: 'Stores', icon: Store },
    { id: 'cameras', label: 'Cameras', icon: Camera },
    { id: 'regulations', label: 'Regulations', icon: FileText },
    { id: 'employees', label: 'Employees', icon: Users },
  ]

  const handleAddClient = (e) => {
    e.preventDefault();
    if (addClientStep < 4) {
      setAddClientStep(addClientStep + 1);
    } else {
      setIsAddingClient(false);
      setAddClientStep(1);
      setIdImage(null);
      setLogoImage(null);
      setDocFile(null);
      alert('Client onboarded successfully with all details! (Simulated for demo)');
    }
  }

  const handleFileUpload = (e, setFileFn) => {
    if (e.target.files && e.target.files[0]) {
      setFileFn(e.target.files[0]);
    }
  }

  const renderFileBox = (title, file, setFileFn, id, accept, IconComponent = ImageIcon) => {
    return (
      <div className={`relative border-2 ${file ? 'border-primary-900 bg-primary-50 dark:bg-primary-900/10' : 'border-dashed border-gray-300 dark:border-secondary-600'} rounded-xl p-4 text-center transition-all`}>
        {!file ? (
          <label htmlFor={id} className="cursor-pointer block">
            <UploadCloud className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-primary-900 transition-colors" />
            <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{title}</p>
            <input id={id} type="file" accept={accept} className="hidden" onChange={(e) => handleFileUpload(e, setFileFn)} />
          </label>
        ) : (
          <div className="flex flex-col items-center justify-center">
            {file.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(file)} alt="Preview" className="w-12 h-12 object-cover rounded-lg mb-2 shadow-sm border border-gray-200 dark:border-secondary-700" />
            ) : (
              <IconComponent className="w-6 h-6 mb-2 text-primary-900 dark:text-primary-400" />
            )}
            <p className="text-xs font-bold text-gray-900 dark:text-white truncate w-full px-2" title={file.name}>
              {file.name}
            </p>
            <p className="text-[10px] text-gray-500 mb-3">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            <div className="flex gap-2">
              <label htmlFor={`${id}-update`} className="p-1.5 bg-white dark:bg-secondary-800 rounded-lg border border-gray-200 dark:border-secondary-700 text-gray-500 hover:text-primary-900 cursor-pointer shadow-sm transition-colors">
                <Edit2 className="w-3.5 h-3.5" />
                <input id={`${id}-update`} type="file" accept={accept} className="hidden" onChange={(e) => handleFileUpload(e, setFileFn)} />
              </label>
              <button type="button" onClick={() => setFileFn(null)} className="p-1.5 bg-white dark:bg-secondary-800 rounded-lg border border-gray-200 dark:border-secondary-700 text-gray-500 hover:text-red-500 shadow-sm transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const renderAddClientStep = () => {
    switch (addClientStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Step 1: Business Details</h4>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Business Name <span className="text-red-500">*</span></label>
              <input required type="text" placeholder="e.g. Acme Retail Corp" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Business Registration Number <span className="text-red-500">*</span></label>
              <input required type="text" placeholder="e.g. BRN-123456789" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Primary Contact Name</label>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Contact Email</label>
                <input type="email" placeholder="email@company.com" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Headquarters Location <span className="text-red-500">*</span></label>
              <input required type="text" placeholder="e.g. 123 Main St, New York, NY" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Step 2: Documents & Plan</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {renderFileBox("Upload ID Image", idImage, setIdImage, "upload-id", "image/*")}
              {renderFileBox("Upload Logo", logoImage, setLogoImage, "upload-logo", "image/*")}
              {renderFileBox("Other Documents", docFile, setDocFile, "upload-doc", ".pdf,.doc,.docx", FileIcon)}
            </div>

            <div className="space-y-2 mt-4">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Plan Type <span className="text-red-500">*</span></label>
              <select required className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all">
                <option value="">Select Plan...</option>
                <option value="basic">Basic (10 Cameras)</option>
                <option value="pro">Pro (50 Cameras)</option>
                <option value="enterprise">Enterprise (Unlimited)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Contract Duration <span className="text-red-500">*</span></label>
              <select required className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all">
                <option value="">Select Duration...</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fade-in">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Step 3: Initial Setup</h4>
            
            <div className="p-4 bg-gray-50 dark:bg-secondary-900 rounded-xl border border-gray-200 dark:border-secondary-700 space-y-4">
              <p className="text-sm font-bold text-gray-900 dark:text-white flex items-center"><Store className="w-4 h-4 mr-2" /> Primary Store</p>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Store Name</label>
                <input type="text" placeholder="e.g. Downtown Flagship" className="w-full px-4 py-2.5 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Store Address</label>
                <input type="text" placeholder="Full Address" className="w-full px-4 py-2.5 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 transition-all" />
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-secondary-900 rounded-xl border border-gray-200 dark:border-secondary-700 space-y-4">
              <p className="text-sm font-bold text-gray-900 dark:text-white flex items-center"><Camera className="w-4 h-4 mr-2" /> Initial Camera</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Camera ID</label>
                  <input type="text" placeholder="e.g. CAM-001" className="w-full px-4 py-2.5 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Camera Name</label>
                  <input type="text" placeholder="e.g. Front Entrance" className="w-full px-4 py-2.5 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 transition-all" />
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 animate-fade-in">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Step 4: Regulations (Do's & Don'ts)</h4>
            
            <div className="space-y-4">
              <div className="p-4 border border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10 rounded-xl">
                <p className="text-sm font-bold text-green-700 dark:text-green-400 mb-2 flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> Core "Do's"</p>
                <textarea rows="2" placeholder="e.g. Greet customers within 30 seconds" className="w-full px-4 py-2.5 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 transition-all resize-y" />
              </div>

              <div className="p-4 border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 rounded-xl">
                <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-2 flex items-center"><ShieldAlert className="w-4 h-4 mr-2" /> Core "Don'ts"</p>
                <textarea rows="2" placeholder="e.g. Leaving the register unattended" className="w-full px-4 py-2.5 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 transition-all resize-y" />
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  }

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Client Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{clients.length} total clients registered</p>
        </div>
        <button 
          onClick={() => setIsAddingClient(true)}
          className="inline-flex items-center px-5 py-2.5 bg-primary-900 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-900/20"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-secondary-800 rounded-2xl border border-gray-100 dark:border-secondary-700 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients by name, ID, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
            />
          </div>
          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-10 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
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
            className="bg-white dark:bg-secondary-800 rounded-2xl border border-gray-100 dark:border-secondary-700 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{client.avatar}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-900 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{client.id}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                client.status === 'active' 
                  ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                  : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  client.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                {client.status === 'active' ? 'Active' : 'Inactive'}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {client.location}
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Camera className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {client.activeCameras}/{client.cameras} cameras active
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {client.email}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-secondary-700">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-50 text-primary-900 dark:bg-primary-900/20 dark:text-primary-300">
                  {client.plan}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{client.monthlyBill}/mo</span>
              </div>
              <button 
                onClick={() => { setSelectedClient(client); setModalTab('overview'); }}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-700 hover:text-primary-900 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-secondary-800 rounded-2xl border border-gray-100 dark:border-secondary-700">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No clients found</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Client Detail Modal — Expanded with Tabs */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedClient(null)}>
          <div 
            className="bg-white dark:bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-secondary-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{selectedClient.avatar}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedClient.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{selectedClient.id} · {selectedClient.plan} Plan</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedClient(null)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-700 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 px-6 pt-4 border-b border-gray-100 dark:border-secondary-700 overflow-x-auto">
              {modalTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setModalTab(tab.id)}
                  className={`flex items-center px-4 py-2.5 text-sm font-bold whitespace-nowrap border-b-2 transition-all ${
                    modalTab === tab.id
                      ? 'border-primary-900 text-primary-900 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Overview Tab */}
              {modalTab === 'overview' && (
                <div className="space-y-5 animate-fade-in">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Plan</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{selectedClient.plan}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Monthly Bill</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{selectedClient.monthlyBill}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Cameras</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{selectedClient.activeCameras}/{selectedClient.cameras}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Joined</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{selectedClient.joinedDate}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Contact Information</h5>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Mail className="w-4 h-4 mr-3 text-gray-400" />
                      {selectedClient.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Phone className="w-4 h-4 mr-3 text-gray-400" />
                      {selectedClient.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                      {selectedClient.location}
                    </div>
                  </div>
                </div>
              )}

              {/* Stores Tab */}
              {modalTab === 'stores' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {getStoresByClient(selectedClient.id).length} stores
                    </p>
                    <button className="text-xs font-bold text-primary-900 dark:text-primary-400 flex items-center hover:underline">
                      <Plus className="w-3 h-3 mr-1" /> Add Store
                    </button>
                  </div>
                  {getStoresByClient(selectedClient.id).map((store) => {
                    const storeCameras = getCamerasByStore(store.id)
                    const onlineCams = storeCameras.filter(c => c.status === 'online').length
                    return (
                      <div key={store.id} className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4 border border-gray-100 dark:border-secondary-700">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-900/10 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                              <Store className="w-5 h-5 text-primary-900 dark:text-primary-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{store.name}</h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{store.id}</p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-primary-900 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-lg">
                            {onlineCams}/{storeCameras.length} cams
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 ml-13">
                          <MapPin className="w-3 h-3 inline mr-1" />{store.address}
                        </p>
                        {/* Camera list for this store */}
                        {storeCameras.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-secondary-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {storeCameras.map((cam) => (
                              <div key={cam.id} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                                {cam.status === 'online' ? (
                                  <Wifi className="w-3 h-3 mr-1.5 text-green-500" />
                                ) : (
                                  <WifiOff className="w-3 h-3 mr-1.5 text-red-500" />
                                )}
                                <span className="font-medium">{cam.name}</span>
                                <span className="text-gray-400 ml-1">({cam.id})</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                  {getStoresByClient(selectedClient.id).length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm">No stores configured for this client</div>
                  )}
                </div>
              )}

              {/* Cameras Tab */}
              {modalTab === 'cameras' && (
                <div className="space-y-4 animate-fade-in">
                  {(() => {
                    const allCams = getCamerasByClient(selectedClient.id)
                    const online = allCams.filter(c => c.status === 'online').length
                    return (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{allCams.length} total cameras</span>
                            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded-full">{online} online</span>
                            <span className="text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 px-2 py-0.5 rounded-full">{allCams.length - online} offline</span>
                          </div>
                          <button className="text-xs font-bold text-primary-900 dark:text-primary-400 flex items-center hover:underline">
                            <Plus className="w-3 h-3 mr-1" /> Add Camera
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {allCams.map((cam) => (
                            <div key={cam.id} className={`p-3 rounded-xl border ${
                              cam.status === 'online' 
                                ? 'border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-900/10' 
                                : 'border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-900/10'
                            }`}>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Camera className={`w-4 h-4 ${cam.status === 'online' ? 'text-green-500' : 'text-red-500'}`} />
                                  <span className="font-semibold text-sm text-gray-900 dark:text-white">{cam.name}</span>
                                </div>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                  cam.status === 'online'
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                  {cam.status}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cam.id} · Store: {cam.storeId}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )
                  })()}
                </div>
              )}

              {/* Regulations Tab */}
              {modalTab === 'regulations' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {getRegulationsByClient(selectedClient.id).length} regulations configured
                    </p>
                    <button className="text-xs font-bold text-primary-900 dark:text-primary-400 flex items-center hover:underline">
                      <Plus className="w-3 h-3 mr-1" /> Add Regulation
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {getRegulationsByClient(selectedClient.id).map((reg) => (
                      <div key={reg.id} className={`p-4 rounded-xl border ${
                        reg.type === 'do'
                          ? 'border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-900/10'
                          : 'border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-900/10'
                      }`}>
                        <div className="flex items-start space-x-3">
                          {reg.type === 'do' ? (
                            <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                reg.type === 'do'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                              }`}>
                                {reg.type === 'do' ? 'DO' : "DON'T"}
                              </span>
                              <span className="text-xs text-gray-400">{reg.id}</span>
                            </div>
                            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{reg.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{reg.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {getRegulationsByClient(selectedClient.id).length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm">No regulations configured for this client</div>
                  )}
                </div>
              )}

              {/* Employees Tab */}
              {modalTab === 'employees' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {getEmployeesByClient(selectedClient.id).length} employees assigned
                    </p>
                    <button className="text-xs font-bold text-primary-900 dark:text-primary-400 flex items-center hover:underline">
                      <Plus className="w-3 h-3 mr-1" /> Assign Employee
                    </button>
                  </div>
                  <div className="space-y-3">
                    {getEmployeesByClient(selectedClient.id).map((emp) => (
                      <div key={emp.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-secondary-900 rounded-xl border border-gray-100 dark:border-secondary-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{emp.avatar}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{emp.name}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{emp.email}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-primary-50 text-primary-900 dark:bg-primary-900/20 dark:text-primary-300">
                            {emp.role}
                          </span>
                          <div className="flex items-center justify-end mt-1">
                            {emp.status === 'active' ? (
                              <span className="flex items-center text-xs text-green-600 dark:text-green-400 font-medium">
                                <CheckCircle className="w-3 h-3 mr-1" /> Active
                              </span>
                            ) : (
                              <span className="flex items-center text-xs text-gray-400 font-medium">
                                <WifiOff className="w-3 h-3 mr-1" /> Offline
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Client Modal */}
      {isAddingClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddingClient(false)} />
          <div className="relative w-full max-w-2xl bg-white dark:bg-secondary-800 rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-secondary-700 bg-gray-50 dark:bg-secondary-900/50">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Onboard New Client</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Step {addClientStep} of 4</p>
              </div>
              <button 
                onClick={() => { setIsAddingClient(false); setAddClientStep(1); }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-secondary-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 shadow-sm transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-secondary-700 h-1.5">
              <div 
                className="bg-primary-900 h-1.5 transition-all duration-300"
                style={{ width: `${(addClientStep / 4) * 100}%` }}
              ></div>
            </div>

            <form onSubmit={handleAddClient} className="p-6 space-y-4 overflow-y-auto">
              
              {renderAddClientStep()}
              
              <div className="pt-4 flex justify-between space-x-3 border-t border-gray-100 dark:border-secondary-700 mt-6">
                {addClientStep > 1 ? (
                  <button 
                    type="button" 
                    onClick={() => setAddClientStep(addClientStep - 1)}
                    className="flex items-center px-5 py-2.5 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-700 rounded-xl transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                ) : (
                  <div></div> // spacer
                )}
                
                <button 
                  type="submit"
                  className="btn-primary flex items-center"
                >
                  {addClientStep < 4 ? (
                    <>Next Step <ChevronRight className="w-4 h-4 ml-1" /></>
                  ) : (
                    <>Complete Onboarding</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminClients
