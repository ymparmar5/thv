import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, AlertTriangle, Clock, CheckCircle, Send, MessageSquare,
  Video, Image as ImageIcon, FileText, User, Store, Camera, ShieldAlert,
  ChevronRight, Play
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
  low: { label: 'Low', color: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20', border: 'border-blue-200' },
  medium: { label: 'Medium', color: 'text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/20', border: 'border-yellow-200' },
  high: { label: 'High', color: 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20', border: 'border-orange-200' },
  critical: { label: 'Critical', color: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20', border: 'border-red-200' },
}

const AdminIncidentDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getIncidentById, getClientById, getStoreById, getCameraById, getRegulationById, getEmployeeById, dispatch } = useIncidents()

  const incident = getIncidentById(id)
  const [reviewNotes, setReviewNotes] = useState('')

  if (!incident) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Incident Not Found</h2>
        <Link to="/admin/incidents" className="text-primary-900 hover:underline text-sm font-bold">← Back to Incidents</Link>
      </div>
    )
  }

  const client = getClientById(incident.clientId)
  const store = getStoreById(incident.storeId)
  const camera = getCameraById(incident.cameraId)
  const regulation = incident.regulationId ? getRegulationById(incident.regulationId) : null
  const employee = incident.assignedEmployeeId ? getEmployeeById(incident.assignedEmployeeId) : null
  const sCfg = statusConfig[incident.status] || statusConfig.internal_review
  const svCfg = severityConfig[incident.severity] || severityConfig.medium

  const handleApprove = () => {
    dispatch({
      type: 'APPROVE_INCIDENT',
      payload: { incidentId: incident.id, notes: reviewNotes || 'Approved after review', reviewerName: 'Sarah Connor' },
    })
    setReviewNotes('')
  }

  const handleSendToCustomer = () => {
    dispatch({
      type: 'SEND_TO_CUSTOMER',
      payload: { incidentId: incident.id, sentByName: 'Sarah Connor' },
    })
  }

  const handleResolve = () => {
    dispatch({
      type: 'RESOLVE_INCIDENT',
      payload: { incidentId: incident.id, resolvedBy: employee?.name || 'Admin', note: 'Resolved by admin after review' },
    })
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Back + Title */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <button onClick={() => navigate('/admin/incidents')} className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary-900 dark:hover:text-white font-medium mb-3 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Incidents
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{incident.title}</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="text-sm text-gray-500 dark:text-gray-400">{incident.id}</span>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${sCfg.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${sCfg.dot}`} />
              {sCfg.label}
            </span>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${svCfg.color}`}>
              {incident.severity === 'critical' && <AlertTriangle className="w-3 h-3 mr-1" />}
              {svCfg.label} Severity
            </span>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          {incident.status === 'internal_review' && (
            <button onClick={handleApprove} className="btn-primary text-sm py-2 px-4">
              <CheckCircle className="w-4 h-4 mr-1.5" /> Approve
            </button>
          )}
          {incident.status === 'approved' && (
            <button onClick={handleSendToCustomer} className="btn-primary text-sm py-2 px-4">
              <Send className="w-4 h-4 mr-1.5" /> Send to Customer
            </button>
          )}
          {(incident.status === 'acknowledged' || incident.status === 'sent_to_customer') && (
            <button onClick={handleResolve} className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-colors">
              <CheckCircle className="w-4 h-4 mr-1.5" /> Mark Resolved
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column — Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Context Info */}
          <div className="card">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Incident Context</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-400 flex items-center"><User className="w-3 h-3 mr-1" /> Client</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{client?.name || '—'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 flex items-center"><Store className="w-3 h-3 mr-1" /> Store</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{store?.name || '—'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 flex items-center"><Camera className="w-3 h-3 mr-1" /> Camera</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{camera?.name || '—'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400">Category</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{incident.category}</p>
              </div>
            </div>

            {regulation && (
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-900/30 flex items-start space-x-2">
                <ShieldAlert className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-red-500 font-bold">Violated Regulation</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{regulation.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{regulation.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* Story */}
          <div className="card">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center">
              <FileText className="w-4 h-4 mr-2" /> Incident Story
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{incident.story}</p>
            {incident.reason && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-secondary-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold mb-1">Reason / Root Cause</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{incident.reason}</p>
              </div>
            )}
          </div>

          {/* Evidence */}
          <div className="card">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Evidence</h3>
            
            {/* Video Clips */}
            {incident.evidenceClips?.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center font-bold">
                  <Video className="w-3 h-3 mr-1.5" /> Video Clips ({incident.evidenceClips.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {incident.evidenceClips.map((clip) => (
                    <div key={clip.id} className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-secondary-700">
                      <img src={clip.thumbnail} alt={clip.name} className="w-full h-36 object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <p className="text-white text-xs font-bold truncate">{clip.name}</p>
                        <p className="text-white/70 text-xs">{clip.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Images */}
            {incident.evidenceImages?.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center font-bold">
                  <ImageIcon className="w-3 h-3 mr-1.5" /> Screenshots ({incident.evidenceImages.length})
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {incident.evidenceImages.map((img) => (
                    <div key={img.id} className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-secondary-700">
                      <img src={img.url} alt={img.name} className="w-full h-28 object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                        <p className="text-white text-xs truncate">{img.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(!incident.evidenceClips?.length && !incident.evidenceImages?.length) && (
              <p className="text-sm text-gray-400 text-center py-4">No evidence attached</p>
            )}
          </div>

          {/* Internal Review */}
          {incident.status === 'internal_review' && (
            <div className="card">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Internal Review</h3>
              <textarea
                rows="3"
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                placeholder="Add review notes before approving..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all resize-y"
              />
              <div className="flex justify-end mt-3">
                <button onClick={handleApprove} className="btn-primary text-sm py-2 px-6">
                  <CheckCircle className="w-4 h-4 mr-1.5" /> Approve Incident
                </button>
              </div>
            </div>
          )}

          {/* Existing Review Notes */}
          {incident.internalReviewNotes && incident.status !== 'internal_review' && (
            <div className="card bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-900/30">
              <h3 className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2">Internal Review Notes</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{incident.internalReviewNotes}</p>
              {incident.internalReviewBy && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Reviewed by {getEmployeeById(incident.internalReviewBy)?.name || 'Admin'} on {new Date(incident.internalReviewDate).toLocaleString()}
                </p>
              )}
            </div>
          )}

          {/* Customer Feedback */}
          {incident.customerFeedback?.length > 0 && (
            <div className="card">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" /> Customer Feedback ({incident.customerFeedback.length})
              </h3>
              <div className="space-y-3">
                {incident.customerFeedback.map((fb, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-secondary-900 rounded-xl p-4 border border-gray-100 dark:border-secondary-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{fb.by}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(fb.date).toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{fb.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column — Timeline & Info */}
        <div className="space-y-6">
          {/* Assigned Employee */}
          {employee && (
            <div className="card">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Assigned To</h3>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{employee.avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">{employee.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{employee.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Timeline */}
          <div className="card">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 flex items-center">
              <Clock className="w-4 h-4 mr-2" /> Timeline
            </h3>
            <div className="space-y-0">
              {incident.timeline.map((event, idx) => (
                <div key={idx} className="flex space-x-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      idx === incident.timeline.length - 1 ? 'bg-primary-900 ring-4 ring-primary-900/20' : 'bg-gray-300 dark:bg-gray-600'
                    }`} />
                    {idx < incident.timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-secondary-700 min-h-[40px]" />
                    )}
                  </div>
                  <div className="pb-4 min-w-0">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{event.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{event.by}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{new Date(event.date).toLocaleString()}</p>
                    {event.note && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">{event.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="card">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Created</span>
                <span className="font-medium text-gray-900 dark:text-white">{new Date(incident.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Updated</span>
                <span className="font-medium text-gray-900 dark:text-white">{new Date(incident.updatedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Evidence</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {(incident.evidenceClips?.length || 0) + (incident.evidenceImages?.length || 0)} files
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Feedback</span>
                <span className="font-medium text-gray-900 dark:text-white">{incident.customerFeedback?.length || 0} responses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminIncidentDetail
