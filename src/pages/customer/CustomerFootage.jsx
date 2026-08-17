import { useState } from 'react'
import { Play, Clock, Camera, X, Video, AlertTriangle, CheckCircle } from 'lucide-react'
import { footageClips, currentCustomer } from '../../data/mockData'

const CustomerFootage = () => {
  const [selectedClip, setSelectedClip] = useState(null)

  // Filter footage for current customer
  const customerClips = footageClips.filter(c => c.clientId === currentCustomer.id)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Footage Clips</h2>
        <p className="text-sm text-gray-500 mt-1">
          View recorded footage from your security cameras — {customerClips.length} clips available
        </p>
      </div>

      {/* Footage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {customerClips.map((clip) => (
          <div
            key={clip.id}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            onClick={() => setSelectedClip(clip)}
          >
            {/* Thumbnail */}
            <div className="relative h-44 overflow-hidden">
              <img 
                src={clip.thumbnail} 
                alt={clip.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-100 scale-75 transition-transform duration-300">
                  <Play className="w-6 h-6 text-primary-900 ml-1" />
                </div>
              </div>
              {/* Duration */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {clip.duration}
              </div>
              {/* Status */}
              <div className="absolute top-2 left-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${
                  clip.status === 'flagged' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-green-500/80 text-white'
                }`}>
                  {clip.status === 'flagged' ? (
                    <><AlertTriangle className="w-3 h-3 mr-1" /> Flagged</>
                  ) : (
                    <><CheckCircle className="w-3 h-3 mr-1" /> Normal</>
                  )}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-primary-900 transition-colors">
                {clip.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <Camera className="w-3 h-3 mr-1 text-gray-400" />
                  {clip.cameraName}
                </span>
                <span>{clip.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {customerClips.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <Video className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No footage available</h3>
          <p className="text-sm text-gray-500">Footage clips will appear here when recorded</p>
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
                <p className="text-xs text-gray-500">{selectedClip.cameraName} • {selectedClip.date} at {selectedClip.time}</p>
              </div>
              <button 
                onClick={() => setSelectedClip(null)}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black aspect-video">
              <video 
                src={selectedClip.videoUrl} 
                controls 
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-6 py-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Camera className="w-4 h-4 mr-1" />
                {selectedClip.cameraId}
              </span>
              <span>Duration: {selectedClip.duration}</span>
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

export default CustomerFootage
