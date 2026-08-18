import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  AlertOctagon, UploadCloud, Image as ImageIcon, Video, 
  Send, CheckCircle, MapPin, FileText, AlertTriangle,
  ChevronRight, ChevronLeft, Store, Camera, ShieldAlert, ShieldCheck, Eye, Trash2, Edit2
} from 'lucide-react'
import { clients } from '../../data/mockData'
import { useIncidents } from '../../context/IncidentContext.jsx'

const priorities = [
  { id: 'low', label: 'Low', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
  { id: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', border: 'border-yellow-200 dark:border-yellow-800' },
  { id: 'high', label: 'High', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
  { id: 'critical', label: 'Critical', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
]

const categories = [
  'Theft / Shoplifting',
  'Sweethearting',
  'Vandalism',
  'Safety Violation',
  'Suspicious Activity',
  'Policy Violation',
  'Technical Failure',
  'Other'
]

const steps = [
  { id: 1, label: 'Select Context', icon: MapPin },
  { id: 2, label: 'Violation Details', icon: ShieldAlert },
  { id: 3, label: 'Write Story', icon: FileText },
  { id: 4, label: 'Attach Evidence', icon: UploadCloud },
  { id: 5, label: 'Review & Submit', icon: Eye },
]

const AdminReportIncident = () => {
  const navigate = useNavigate()
  const { getStoresByClient, getCamerasByStore, getRegulationsByClient, getEmployeesByClient, getClientById, getStoreById, getCameraById, getRegulationById, getEmployeeById, dispatch } = useIncidents()

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Form state
  const [selectedClientId, setSelectedClientId] = useState('')
  const [selectedStoreId, setSelectedStoreId] = useState('')
  const [selectedCameraId, setSelectedCameraId] = useState('')
  const [selectedRegulationId, setSelectedRegulationId] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('medium')
  const [incidentTitle, setIncidentTitle] = useState('')
  const [incidentStory, setIncidentStory] = useState('')
  const [incidentReason, setIncidentReason] = useState('')
  const [assignedEmployeeId, setAssignedEmployeeId] = useState('')
  const [files, setFiles] = useState([])

  const clientStores = selectedClientId ? getStoresByClient(selectedClientId) : []
  const storeCameras = selectedStoreId ? getCamerasByStore(selectedStoreId) : []
  const clientRegulations = selectedClientId ? getRegulationsByClient(selectedClientId) : []
  const clientEmployees = selectedClientId ? getEmployeesByClient(selectedClientId) : []

  const canNext = () => {
    switch (currentStep) {
      case 1: return selectedClientId && selectedStoreId && selectedCameraId
      case 2: return selectedCategory && selectedPriority
      case 3: return incidentTitle.trim() && incidentStory.trim()
      case 4: return true // Evidence is optional
      default: return true
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    const employee = assignedEmployeeId ? getEmployeeById(assignedEmployeeId) : null

    setTimeout(() => {
      dispatch({
        type: 'CREATE_INCIDENT',
        payload: {
          title: incidentTitle,
          story: incidentStory,
          reason: incidentReason,
          severity: selectedPriority,
          category: selectedCategory,
          clientId: selectedClientId,
          storeId: selectedStoreId,
          cameraId: selectedCameraId,
          regulationId: selectedRegulationId || null,
          assignedEmployeeId: assignedEmployeeId || null,
          createdByName: employee?.name || 'Admin',
          evidenceClips: files.filter(f => f.type === 'video').map((f, i) => ({
            id: `EV-NEW-${i}`, type: 'video', name: f.name, url: '/1.mp4', thumbnail: '/street-horizon-security-camera.jpg', duration: '0:30',
          })),
          evidenceImages: files.filter(f => f.type === 'image').map((f, i) => ({
            id: `EV-NEW-IMG-${i}`, type: 'image', name: f.name, url: '/cyber-security.jpg',
          })),
          internalReviewNotes: '',
          internalReviewBy: null,
          internalReviewDate: null,
        },
      })
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  // Mock file upload handler
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: `${(f.size / 1024 / 1024).toFixed(1)} MB`,
        type: f.type.includes('video') ? 'video' : 'image',
        fileObj: f,
      }))
      setFiles([...files, ...newFiles])
    }
  }

  const handleUpdateFile = (e, idx) => {
    if (e.target.files && e.target.files[0]) {
      const f = e.target.files[0]
      const updatedFiles = [...files]
      updatedFiles[idx] = {
        name: f.name,
        size: `${(f.size / 1024 / 1024).toFixed(1)} MB`,
        type: f.type.includes('video') ? 'video' : 'image',
        fileObj: f,
      }
      setFiles(updatedFiles)
    }
  }

  const addMockEvidence = (type) => {
    const mockFiles = {
      video: { name: `security_cam_clip_${files.length + 1}.mp4`, size: '12.4 MB', type: 'video' },
      image: { name: `screenshot_evidence_${files.length + 1}.jpg`, size: '2.1 MB', type: 'image' },
    }
    setFiles([...files, mockFiles[type]])
  }

  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="card bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800 flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-800/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Incident Submitted Successfully!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
            The incident has been created and submitted for internal review. An admin will review and approve before sending to the customer.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => navigate('/admin/incidents')}
              className="btn-primary"
            >
              View All Incidents
            </button>
            <button
              onClick={() => {
                setIsSuccess(false)
                setCurrentStep(1)
                setSelectedClientId('')
                setSelectedStoreId('')
                setSelectedCameraId('')
                setSelectedRegulationId('')
                setSelectedCategory('')
                setSelectedPriority('medium')
                setIncidentTitle('')
                setIncidentStory('')
                setIncidentReason('')
                setAssignedEmployeeId('')
                setFiles([])
              }}
              className="btn-secondary"
            >
              Report Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white flex items-center">
          <AlertOctagon className="w-8 h-8 mr-3 text-red-500" />
          Report an Incident
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
          Follow the steps below to create a detailed incident report with evidence.
        </p>
      </div>

      {/* Step Progress Bar */}
      <div className="card">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep === step.id
                    ? 'bg-primary-900 text-white shadow-lg shadow-primary-900/30 scale-110'
                    : currentStep > step.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 dark:bg-secondary-700 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`text-xs mt-2 font-medium hidden sm:block ${
                  currentStep === step.id ? 'text-primary-900 dark:text-primary-400' : 'text-gray-400'
                }`}>
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 rounded-full transition-all duration-300 ${
                  currentStep > step.id ? 'bg-green-500' : 'bg-gray-200 dark:bg-secondary-700'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="card space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-900/5 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>

        {/* Step 1: Select Context */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Select Client, Store & Camera</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Client <span className="text-red-500">*</span></label>
                <select
                  value={selectedClientId}
                  onChange={(e) => { setSelectedClientId(e.target.value); setSelectedStoreId(''); setSelectedCameraId(''); }}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all"
                >
                  <option value="">Select a client...</option>
                  {clients.filter(c => c.status === 'active').map((c) => (
                    <option key={c.id} value={c.id}>{c.name} ({c.id})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                  <Store className="w-4 h-4 mr-1.5 text-gray-400" /> Store <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  value={selectedStoreId}
                  onChange={(e) => { setSelectedStoreId(e.target.value); setSelectedCameraId(''); }}
                  disabled={!selectedClientId}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all disabled:opacity-50"
                >
                  <option value="">Select a store...</option>
                  {clientStores.map((s) => (
                    <option key={s.id} value={s.id}>{s.name} ({s.id})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                  <Camera className="w-4 h-4 mr-1.5 text-gray-400" /> Camera <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  value={selectedCameraId}
                  onChange={(e) => setSelectedCameraId(e.target.value)}
                  disabled={!selectedStoreId}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all disabled:opacity-50"
                >
                  <option value="">Select a camera...</option>
                  {storeCameras.map((c) => (
                    <option key={c.id} value={c.id}>{c.name} ({c.id}) — {c.status}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Assign Employee (Optional)</label>
                <select
                  value={assignedEmployeeId}
                  onChange={(e) => setAssignedEmployeeId(e.target.value)}
                  disabled={!selectedClientId}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all disabled:opacity-50"
                >
                  <option value="">Select employee...</option>
                  {clientEmployees.map((e) => (
                    <option key={e.id} value={e.id}>{e.name} — {e.role} ({e.id})</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Violation Details */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Violation & Severity Details</h2>

            {/* Applicable Regulations */}
            {clientRegulations.length > 0 && (
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Violated Regulation (Optional)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {clientRegulations.map((reg) => (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => setSelectedRegulationId(selectedRegulationId === reg.id ? '' : reg.id)}
                      className={`flex items-start p-3 rounded-xl border text-left transition-all ${
                        selectedRegulationId === reg.id
                          ? reg.type === 'do'
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20 ring-2 ring-green-500/20'
                            : 'border-red-500 bg-red-50 dark:bg-red-900/20 ring-2 ring-red-500/20'
                          : 'border-gray-200 dark:border-secondary-700 hover:border-gray-300'
                      }`}
                    >
                      {reg.type === 'do' ? (
                        <ShieldCheck className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      ) : (
                        <ShieldAlert className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white block">{reg.title}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{reg.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">Category <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'border-primary-900 bg-primary-900 text-white'
                        : 'border-gray-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-gray-600 dark:text-gray-300 hover:border-primary-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Priority */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-1.5 text-gray-400" /> Severity Level <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {priorities.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPriority(p.id)}
                    className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                      selectedPriority === p.id 
                        ? `${p.color} ${p.border} ring-4 ring-opacity-50 shadow-sm` 
                        : 'border-gray-100 dark:border-secondary-700 bg-gray-50 dark:bg-secondary-900/50 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-800'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Write Story */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Incident Narrative</h2>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">
                Incident Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={incidentTitle}
                onChange={(e) => setIncidentTitle(e.target.value)}
                placeholder="e.g., Sweethearting at Cash Counter #3"
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">
                The Story (What Happened?) <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                value={incidentStory}
                onChange={(e) => setIncidentStory(e.target.value)}
                placeholder="Describe the incident in detail from start to finish. Mention any individuals involved, specific behaviors, timestamps, and the immediate outcome..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all resize-y"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">
                Reason / Root Cause
              </label>
              <textarea
                rows="3"
                value={incidentReason}
                onChange={(e) => setIncidentReason(e.target.value)}
                placeholder="Why did this incident happen? What regulation or policy was violated?"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all resize-y"
              />
            </div>
          </div>
        )}

        {/* Step 4: Attach Evidence */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Attach Evidence (Images & Video)</h2>

            <div
              className="border-2 border-dashed border-gray-300 dark:border-secondary-600 rounded-2xl p-8 text-center hover:bg-gray-50 dark:hover:bg-secondary-800/50 transition-colors cursor-pointer group"
              onClick={() => document.getElementById('file-upload').click()}
            >
              <input type="file" id="file-upload" className="hidden" multiple accept="image/*,video/*" onChange={handleFileUpload} />
              <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8" />
              </div>
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or MP4 (max. 1080p)</p>
            </div>

            {/* Quick add mock evidence buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => addMockEvidence('video')}
                className="flex items-center px-4 py-2 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-primary-900 hover:text-primary-900 transition-colors"
              >
                <Video className="w-4 h-4 mr-2" /> Add Video Clip
              </button>
              <button
                type="button"
                onClick={() => addMockEvidence('image')}
                className="flex items-center px-4 py-2 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-primary-900 hover:text-primary-900 transition-colors"
              >
                <ImageIcon className="w-4 h-4 mr-2" /> Add Screenshot
              </button>
            </div>

            {files.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {files.map((file, idx) => (
                  <div key={idx} className="flex items-center p-3 bg-gray-50 dark:bg-secondary-900 border border-gray-100 dark:border-secondary-700 rounded-xl group transition-all hover:shadow-sm">
                    <div className="w-12 h-12 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-lg flex items-center justify-center mr-3 shrink-0 overflow-hidden shadow-sm">
                      {file.type === 'image' && file.fileObj ? (
                        <img src={URL.createObjectURL(file.fileObj)} alt="preview" className="w-full h-full object-cover" />
                      ) : file.type === 'video' ? (
                        <Video className="w-5 h-5 text-primary-900 dark:text-primary-400" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-primary-900 dark:text-primary-400" />
                      )}
                    </div>
                    <div className="overflow-hidden flex-1">
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate" title={file.name}>{file.name}</p>
                      <p className="text-xs text-gray-500">{file.size}</p>
                    </div>
                    <div className="flex gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <label htmlFor={`update-file-${idx}`} className="p-1.5 rounded-lg text-gray-400 hover:bg-white dark:hover:bg-secondary-800 hover:text-primary-900 cursor-pointer transition-colors shadow-sm">
                        <Edit2 className="w-4 h-4" />
                        <input id={`update-file-${idx}`} type="file" accept="image/*,video/*" className="hidden" onChange={(e) => handleUpdateFile(e, idx)} />
                      </label>
                      <button
                        type="button"
                        onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                        className="p-1.5 rounded-lg text-gray-400 hover:bg-white dark:hover:bg-secondary-800 hover:text-red-500 transition-colors shadow-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 5: Review & Submit */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Review Incident Report</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Client</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{getClientById(selectedClientId)?.name || '—'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Store</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{getStoreById(selectedStoreId)?.name || '—'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Camera</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{getCameraById(selectedCameraId)?.name || '—'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Severity</p>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                  priorities.find(p => p.id === selectedPriority)?.color
                }`}>
                  {priorities.find(p => p.id === selectedPriority)?.label}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4 space-y-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
              <p className="font-semibold text-gray-900 dark:text-white text-sm">{selectedCategory || '—'}</p>
            </div>

            {selectedRegulationId && (
              <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-4 border border-red-200 dark:border-red-900/30">
                <p className="text-xs text-red-500 dark:text-red-400 mb-1">Violated Regulation</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{getRegulationById(selectedRegulationId)?.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{getRegulationById(selectedRegulationId)?.description}</p>
              </div>
            )}

            <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4 space-y-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">Incident Title</p>
              <p className="font-bold text-gray-900 dark:text-white">{incidentTitle}</p>
            </div>

            <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4 space-y-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">Story</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{incidentStory}</p>
            </div>

            {incidentReason && (
              <div className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4 space-y-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Reason</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{incidentReason}</p>
              </div>
            )}

            {files.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Evidence ({files.length} files)</p>
                <div className="flex flex-wrap gap-2">
                  {files.map((f, i) => (
                    <span key={i} className="flex items-center text-xs bg-gray-100 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg">
                      {f.type === 'video' ? <Video className="w-3 h-3 mr-1.5" /> : <ImageIcon className="w-3 h-3 mr-1.5" />}
                      {f.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="flex items-center px-6 py-3 text-sm font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-xl hover:bg-gray-50 dark:hover:bg-secondary-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> Previous
        </button>

        {currentStep < 5 ? (
          <button
            onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
            disabled={!canNext()}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
          >
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            Submit Incident Report
          </button>
        )}
      </div>
    </div>
  )
}

export default AdminReportIncident
