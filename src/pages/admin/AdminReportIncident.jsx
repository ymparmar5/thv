import { useState } from 'react'
import { 
  AlertOctagon, UploadCloud, Image as ImageIcon, Video, 
  Send, CheckCircle, Clock, MapPin, FileText, AlertTriangle 
} from 'lucide-react'

const priorities = [
  { id: 'low', label: 'Low', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
  { id: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', border: 'border-yellow-200 dark:border-yellow-800' },
  { id: 'high', label: 'High', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
  { id: 'critical', label: 'Critical', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
]

const categories = [
  'Theft / Shoplifting',
  'Vandalism',
  'Safety Violation',
  'Suspicious Activity',
  'Technical Failure',
  'Other'
]

const AdminReportIncident = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedPriority, setSelectedPriority] = useState('medium')
  const [files, setFiles] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSuccess(false)
        setFiles([])
      }, 3000)
    }, 1500)
  }

  // Mock file upload handler
  const handleFileDrop = (e) => {
    e.preventDefault()
    // In a real app, we'd use e.dataTransfer.files
    const mockFile = { name: 'security_cam_clip.mp4', size: '12.4 MB', type: 'video' }
    setFiles([...files, mockFile])
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Header section */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white flex items-center">
          <AlertOctagon className="w-8 h-8 mr-3 text-red-500" />
          Report an Incident
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
          Log a detailed report of any security event. Attach relevant screenshots and video clips to help the review team understand exactly what happened.
        </p>
      </div>

      {isSuccess ? (
        <div className="card bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800 flex flex-col items-center justify-center py-16 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Report Submitted Successfully</h2>
          <p className="text-gray-500 dark:text-gray-400">The incident has been logged and the security team has been notified.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card p-6 sm:p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
            
            {/* Basic Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                  Incident Title <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Attempted shoplifting at front entrance" 
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 text-gray-400" /> Location / Store
                </label>
                <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all appearance-none">
                  <option>Sunrise Mall (Main Entrance)</option>
                  <option>Downtown Plaza (Loading Dock)</option>
                  <option>Westside Branch (Aisle 4)</option>
                  <option>Other / Unspecified</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-gray-400" /> Date & Time of Incident
                </label>
                <input 
                  type="datetime-local" 
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                  <FileText className="w-4 h-4 mr-1.5 text-gray-400" /> Category
                </label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((cat) => (
                    <button 
                      key={cat}
                      type="button"
                      className="px-4 py-2 rounded-lg border border-gray-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-primary-900 hover:text-primary-900 dark:hover:text-white transition-colors focus:ring-2 focus:ring-primary-900/20"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-gray-100 dark:border-secondary-700" />

            {/* Priority Section */}
            <div className="space-y-3 relative z-10">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-1.5 text-gray-400" /> Priority Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {priorities.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPriority(p.id)}
                    className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                      selectedPriority === p.id 
                        ? `${p.color} ${p.border} ring-4 ring-opacity-50 ring-${p.border.split('-')[1]}-500/20 shadow-sm` 
                        : 'border-gray-100 dark:border-secondary-700 bg-gray-50 dark:bg-secondary-900/50 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-800'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-100 dark:border-secondary-700" />

            {/* The Story */}
            <div className="space-y-2 relative z-10">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200">
                The Story (What Happened?) <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea 
                required
                rows="5"
                placeholder="Please describe the incident in detail from start to finish. Mention any individuals involved, specific behaviors, and the immediate outcome..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all resize-y"
              ></textarea>
            </div>

            {/* Media Upload */}
            <div className="space-y-2 relative z-10">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-200 flex items-center justify-between">
                <span>Attach Evidence (Images & Video)</span>
                <span className="text-xs font-normal text-gray-500">Max 50MB per file</span>
              </label>
              
              <div 
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
                className="border-2 border-dashed border-gray-300 dark:border-secondary-600 rounded-2xl p-8 text-center hover:bg-gray-50 dark:hover:bg-secondary-800/50 transition-colors cursor-pointer group"
                onClick={() => document.getElementById('file-upload').click()}
              >
                <input type="file" id="file-upload" className="hidden" multiple accept="image/*,video/*" onChange={(e) => {
                  if (e.target.files.length > 0) {
                     const mockFile = { name: e.target.files[0].name, size: '2.1 MB', type: e.target.files[0].type.includes('video') ? 'video' : 'image' }
                     setFiles([...files, mockFile])
                  }
                }} />
                
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8" />
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or MP4 (max. 1080p)
                </p>
              </div>

              {/* Uploaded Files Preview */}
              {files.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {files.map((file, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-gray-50 dark:bg-secondary-900 border border-gray-100 dark:border-secondary-700 rounded-xl">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-400 rounded-lg flex items-center justify-center mr-3 shrink-0">
                        {file.type === 'video' ? <Video className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          <div className="flex justify-end pt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary flex items-center px-8 py-3 text-base shadow-lg shadow-primary-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              Submit Incident Report
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default AdminReportIncident
