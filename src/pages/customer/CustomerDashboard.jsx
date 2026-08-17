import { 
  Camera, AlertTriangle, CheckCircle, Clock, Shield, 
  FileText, Video, ArrowRight, Activity, Eye
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { currentCustomer, securityUpdates, footageClips } from '../../data/mockData'

const CustomerDashboard = () => {
  const customerUpdates = securityUpdates.filter(
    u => u.clientId === currentCustomer.id && u.status === 'published'
  ).slice(0, 3)

  const customerFootage = footageClips.filter(
    c => c.clientId === currentCustomer.id
  ).slice(0, 3)

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-5 h-5 text-primary-300" />
            <span className="text-sm text-primary-200 font-medium">Security Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Welcome back, {currentCustomer.name}
          </h1>
          <p className="text-sm text-white/70 mb-4">
            Your security system is fully operational. All {currentCustomer.activeCameras} cameras are online.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-sm">
            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-green-100 font-medium">{currentCustomer.systemStatus}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="bg-primary-50 p-3 rounded-xl w-fit mb-3">
            <Camera className="w-5 h-5 text-primary-900" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{currentCustomer.activeCameras}</p>
          <p className="text-sm text-gray-500">Cameras Active</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="bg-amber-50 p-3 rounded-xl w-fit mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{currentCustomer.alertsThisMonth}</p>
          <p className="text-sm text-gray-500">Alerts This Month</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="bg-green-50 p-3 rounded-xl w-fit mb-3">
            <Activity className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">99.9%</p>
          <p className="text-sm text-gray-500">System Uptime</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="bg-secondary-50 p-3 rounded-xl w-fit mb-3">
            <Clock className="w-5 h-5 text-secondary-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{currentCustomer.lastChecked}</p>
          <p className="text-sm text-gray-500">Last Checked</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Updates */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-primary-900" />
              <h2 className="text-lg font-semibold text-gray-900">Recent Updates</h2>
            </div>
            <Link 
              to="/customer/updates" 
              className="text-sm text-primary-900 hover:text-primary-700 font-medium flex items-center"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {customerUpdates.length > 0 ? customerUpdates.map((update) => (
              <div key={update.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg flex-shrink-0 ${
                    update.type === 'alert' ? 'bg-red-50 text-red-500' : 
                    update.type === 'report' ? 'bg-blue-50 text-blue-500' : 
                    'bg-green-50 text-green-500'
                  }`}>
                    {update.type === 'alert' ? <AlertTriangle className="w-4 h-4" /> :
                     update.type === 'report' ? <FileText className="w-4 h-4" /> :
                     <CheckCircle className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{update.title}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{update.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{update.date}</p>
                  </div>
                </div>
              </div>
            )) : (
              <div className="px-6 py-8 text-center">
                <p className="text-sm text-gray-500">No recent updates</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Footage */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Video className="w-5 h-5 text-primary-900" />
              <h2 className="text-lg font-semibold text-gray-900">Recent Footage</h2>
            </div>
            <Link 
              to="/customer/footage" 
              className="text-sm text-primary-900 hover:text-primary-700 font-medium flex items-center"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {customerFootage.length > 0 ? customerFootage.map((clip) => (
              <div key={clip.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{clip.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{clip.cameraName}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-gray-500">{clip.date}</p>
                    <p className="text-xs text-gray-400">{clip.duration}</p>
                  </div>
                </div>
              </div>
            )) : (
              <div className="px-6 py-8 text-center">
                <p className="text-sm text-gray-500">No recent footage</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard
