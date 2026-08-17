import { useState } from 'react'
import { 
  Search, Filter, Play, Clock, Camera, ChevronDown, X,
  AlertTriangle, CheckCircle, Video
} from 'lucide-react'
import { footageClips } from '../../data/mockData'

const AdminFootage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedClip, setSelectedClip] = useState(null)

  const filteredClips = footageClips.filter(clip => {
    const matchesSearch = clip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clip.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clip.cameraName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || clip.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Footage Management</h2>
          <p className="text-sm text-gray-500 mt-1">{footageClips.length} clips available</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="flex items-center px-3 py-1.5 bg-red-50 text-red-700 rounded-lg font-medium">
            <AlertTriangle className="w-3 h-3 mr-1.5" />
            {footageClips.filter(c => c.status === 'flagged').length} Flagged
          </span>
          <span className="flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-lg font-medium">
            <CheckCircle className="w-3 h-3 mr-1.5" />
            {footageClips.filter(c => c.status === 'normal').length} Normal
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, client, or camera..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
            >
              <option value="all">All Clips</option>
              <option value="flagged">Flagged</option>
              <option value="normal">Normal</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Footage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredClips.map((clip) => (
          <div
            key={clip.id}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            onClick={() => setSelectedClip(clip)}
          >
            {/* Thumbnail */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={clip.thumbnail} 
                alt={clip.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                  <Play className="w-6 h-6 text-primary-900 ml-1" />
                </div>
              </div>
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {clip.duration}
              </div>
              {/* Status Badge */}
              <div className="absolute top-2 left-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${
                  clip.status === 'flagged' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-green-500/80 text-white'
                }`}>
                  {clip.status === 'flagged' ? '⚠ Flagged' : '✓ Normal'}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-primary-900 transition-colors line-clamp-1">
                {clip.title}
              </h3>
              <div className="space-y-1.5 text-xs text-gray-500">
                <div className="flex items-center">
                  <Camera className="w-3 h-3 mr-1.5 text-gray-400" />
                  {clip.cameraName}
                </div>
                <div className="flex items-center justify-between">
                  <span>{clip.clientName}</span>
                  <span>{clip.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredClips.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <Video className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No footage found</h3>
          <p className="text-sm text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedClip && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedClip(null)}>
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{selectedClip.title}</h3>
                <p className="text-xs text-gray-500">{selectedClip.cameraName} • {selectedClip.clientName}</p>
              </div>
              <button 
                onClick={() => setSelectedClip(null)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Video Player */}
            <div className="bg-black aspect-video">
              <video 
                src={selectedClip.videoUrl} 
                controls 
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            {/* Clip Info */}
            <div className="px-6 py-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 border-t border-gray-100">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {selectedClip.date} at {selectedClip.time}
              </span>
              <span className="flex items-center">
                <Camera className="w-4 h-4 mr-1" />
                {selectedClip.cameraId}
              </span>
              <span className="flex items-center">
                Duration: {selectedClip.duration}
              </span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${
                selectedClip.status === 'flagged' 
                  ? 'bg-red-50 text-red-700' 
                  : 'bg-green-50 text-green-700'
              }`}>
                {selectedClip.status === 'flagged' ? '⚠ Flagged' : '✓ Normal'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminFootage
