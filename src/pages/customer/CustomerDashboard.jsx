import { 
  Camera, AlertTriangle, CheckCircle, Clock, Shield, 
  FileText, Video, ArrowRight, Activity, Eye, ArrowUpRight, TrendingDown, Bell, ClipboardList
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { 
  LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { currentCustomer, securityUpdates, footageClips } from '../../data/mockData'
import { useIncidents } from '../../context/IncidentContext.jsx'
import ClientAnalyticsCharts from '../../components/ClientAnalyticsCharts.jsx'

const alertTrends = [
  { name: 'Week 1', alerts: 12 },
  { name: 'Week 2', alerts: 8 },
  { name: 'Week 3', alerts: 15 },
  { name: 'Week 4', alerts: 7 },
]

const lossPreventionData = [
  { name: 'Refund Fraud', value: 45 },
  { name: 'Sweethearting', value: 30 },
  { name: 'Policy Violation', value: 15 },
  { name: 'Theft', value: 10 },
]
const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'] // Red, Amber, Blue, Green

const CustomerDashboard = () => {
  const { getClientIncidents, getUnreadNotificationCount } = useIncidents()
  const customerUpdates = securityUpdates.filter(
    u => u.clientId === currentCustomer.id && u.status === 'published'
  ).slice(0, 3)

  const customerFootage = footageClips.filter(
    c => c.clientId === currentCustomer.id
  ).slice(0, 5)

  const pendingIncidents = getClientIncidents(currentCustomer.id).filter(
    i => i.status === 'sent_to_customer' || i.status === 'acknowledged'
  )
  const unreadCount = getUnreadNotificationCount(currentCustomer.id)

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-secondary-900 to-primary-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg shadow-primary-900/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Shield className="w-5 h-5 text-primary-300" />
              <span className="text-sm text-primary-200 font-bold tracking-wider uppercase">Security Dashboard</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 font-display">
              Welcome back, {currentCustomer.name}
            </h1>
            <p className="text-base text-white/80 mb-6 max-w-xl">
              Your intelligent security system is fully operational. Our human verification team is monitoring your {currentCustomer.activeCameras} active cameras to protect your profits.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-sm shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              <span className="text-green-100 font-bold">{currentCustomer.systemStatus}</span>
            </div>
          </div>
          <div className="mt-6 md:mt-0 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center min-w-[200px]">
            <p className="text-white/70 text-sm font-semibold mb-1">Estimated Savings</p>
            <p className="text-3xl font-bold text-white">$4,250</p>
            <p className="text-xs text-green-300 mt-2 flex items-center justify-center font-medium">
              <TrendingDown className="w-3 h-3 mr-1" /> -12% shrinkage this month
            </p>
          </div>
        </div>
      </div>

      {/* Incident Alert Banner */}
      {pendingIncidents.length > 0 && (
        <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-200 dark:border-amber-900/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                {pendingIncidents.length} Incident{pendingIncidents.length > 1 ? 's' : ''} Requiring Your Attention
                {unreadCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">{unreadCount}</span>
                )}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Review and acknowledge recent security incidents reported by our team</p>
            </div>
          </div>
          <Link to="/customer/incidents" className="btn-primary text-sm py-2 px-4 flex-shrink-0">
            <ClipboardList className="w-4 h-4 mr-1.5" /> View Incidents
          </Link>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-xl w-fit mb-4">
            <Camera className="w-6 h-6 text-primary-900 dark:text-primary-400" />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{currentCustomer.activeCameras}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Cameras Active</p>
        </div>
        <div className="card">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl w-fit mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 dark:text-amber-400" />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{currentCustomer.alertsThisMonth}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Verified Alerts This Month</p>
        </div>
        <div className="card">
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-xl w-fit mb-4">
            <Activity className="w-6 h-6 text-green-500 dark:text-green-400" />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">99.9%</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">System Uptime</p>
        </div>
        <div className="card">
          <div className="bg-secondary-50 dark:bg-secondary-900/20 p-3 rounded-xl w-fit mb-4">
            <Clock className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{currentCustomer.lastChecked}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Last Human Check</p>
        </div>
      </div>

      {/* Charts Row */}
      <ClientAnalyticsCharts clientId={currentCustomer.id} role="customer" />

      {/* Incident Data Table */}
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-secondary-700 flex items-center justify-between bg-gray-50/50 dark:bg-secondary-800/50">
          <div className="flex items-center space-x-3">
            <Video className="w-5 h-5 text-primary-900" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Verified Incidents</h2>
          </div>
          <Link to="/customer/footage" className="text-sm text-primary-900 hover:text-primary-700 font-bold flex items-center">
            View All Footage <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-secondary-900/50 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Date & Time</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Location</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Event Type</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Status</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-secondary-700">
              {customerFootage.map((clip) => (
                <tr key={clip.id} className="hover:bg-gray-50 dark:hover:bg-secondary-700/30 transition-colors bg-white dark:bg-secondary-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium text-gray-900 dark:text-white">{clip.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-600 dark:text-gray-300 font-medium flex items-center">
                      <Camera className="w-4 h-4 mr-2 text-gray-400" />
                      {clip.camera}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {clip.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30">
                      <span className="w-2 h-2 rounded-full mr-2 bg-amber-500" />
                      Action Required
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-primary-900 dark:text-primary-400 hover:text-primary-700 font-semibold text-sm transition-colors flex items-center justify-end w-full">
                      <Video className="w-4 h-4 mr-1" /> Play Clip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard
