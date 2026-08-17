import { 
  Users, Camera, AlertTriangle, DollarSign, TrendingUp, 
  ArrowUpRight, ArrowDownRight, Activity, Clock, Shield,
  Eye, CheckCircle, XCircle
} from 'lucide-react'
import { dashboardStats, clients, recentActivity } from '../../data/mockData'

const statCards = [
  {
    title: 'Total Clients',
    value: dashboardStats.totalClients,
    change: '+3 this month',
    trend: 'up',
    icon: Users,
    color: 'bg-primary-900',
  },
  {
    title: 'Active Cameras',
    value: `${dashboardStats.activeCameras}/${dashboardStats.totalCameras}`,
    change: '95.5% online',
    trend: 'up',
    icon: Camera,
    color: 'bg-green-500',
  },
  {
    title: 'Alerts Today',
    value: dashboardStats.alertsToday,
    change: '-2 from yesterday',
    trend: 'down',
    icon: AlertTriangle,
    color: 'bg-amber-500',
  },
  {
    title: 'Monthly Revenue',
    value: dashboardStats.monthlyRevenue,
    change: '+12% growth',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-secondary-900',
  },
]

const activityIcons = {
  alert: { icon: AlertTriangle, color: 'text-red-500 bg-red-50' },
  warning: { icon: XCircle, color: 'text-amber-500 bg-amber-50' },
  info: { icon: Eye, color: 'text-primary-900 bg-primary-50' },
  success: { icon: CheckCircle, color: 'text-green-500 bg-green-50' },
}

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-xl`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className={`flex items-center text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-500'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Activity className="w-5 h-5 text-primary-900" />
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Live
            </span>
          </div>
          <div className="divide-y divide-gray-50">
            {recentActivity.map((activity) => {
              const activityStyle = activityIcons[activity.type] || activityIcons.info
              return (
                <div
                  key={activity.id}
                  className="px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                >
                  <div className={`p-2 rounded-lg flex-shrink-0 ${activityStyle.color}`}>
                    <activityStyle.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.client}</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-400 flex-shrink-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-primary-900" />
              <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
            </div>
          </div>
          <div className="p-6 space-y-5">
            {/* Uptime */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">System Uptime</span>
                <span className="text-sm font-bold text-green-600">{dashboardStats.uptime}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.7%' }} />
              </div>
            </div>

            {/* Camera Status */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Cameras Online</span>
                <span className="text-sm font-bold text-primary-900">
                  {dashboardStats.activeCameras}/{dashboardStats.totalCameras}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-primary-900 h-2 rounded-full" 
                  style={{ width: `${(dashboardStats.activeCameras / dashboardStats.totalCameras) * 100}%` }} 
                />
              </div>
            </div>

            {/* Monthly Alerts */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Monthly Alerts</span>
                <span className="text-sm font-bold text-amber-500">{dashboardStats.alertsThisMonth}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>

            {/* Active Clients */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Active Clients</span>
                <span className="text-sm font-bold text-secondary-900">
                  {dashboardStats.activeClients}/{dashboardStats.totalClients}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-secondary-900 h-2 rounded-full" 
                  style={{ width: `${(dashboardStats.activeClients / dashboardStats.totalClients) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Overview Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-primary-900" />
            <h2 className="text-lg font-semibold text-gray-900">Client Overview</h2>
          </div>
          <a href="/admin/clients" className="text-sm text-primary-900 hover:text-primary-700 font-medium flex items-center">
            View All <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Cameras</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {clients.slice(0, 5).map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 bg-secondary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{client.avatar}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{client.name}</p>
                        <p className="text-xs text-gray-500">{client.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-50 text-primary-900">
                      {client.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {client.activeCameras}/{client.cameras}
                  </td>
                  <td className="px-6 py-4">
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
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{client.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
