import { 
  Users, Camera, AlertTriangle, DollarSign, TrendingUp, 
  ArrowUpRight, ArrowDownRight, Activity, Clock, Shield,
  Eye, CheckCircle, XCircle
} from 'lucide-react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { 
  dashboardStats, recentActivity, clients 
} from '../../data/mockData'
import ClientAnalyticsCharts from '../../components/ClientAnalyticsCharts.jsx'

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

// Chart Mock Data
const revenueData = [
  { name: 'Mon', revenue: 4000, alerts: 24 },
  { name: 'Tue', revenue: 3000, alerts: 13 },
  { name: 'Wed', revenue: 5000, alerts: 35 },
  { name: 'Thu', revenue: 4500, alerts: 28 },
  { name: 'Fri', revenue: 6000, alerts: 42 },
  { name: 'Sat', revenue: 7000, alerts: 55 },
  { name: 'Sun', revenue: 6500, alerts: 48 },
]

const incidentData = [
  { name: 'Theft', count: 145 },
  { name: 'POS Fraud', count: 83 },
  { name: 'Policy', count: 62 },
  { name: 'Sweethearting', count: 45 },
]

const cameraStatusData = [
  { name: 'Online', value: dashboardStats.activeCameras },
  { name: 'Offline', value: dashboardStats.totalCameras - dashboardStats.activeCameras },
  { name: 'Maintenance', value: 12 },
]
const COLORS = ['#10b981', '#ef4444', '#f59e0b'] // Green, Red, Amber

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="card"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-xl`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center text-sm font-semibold ${
                stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue & Alerts Trend */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary-900" />
              Weekly Activity Overview
            </h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis yAxisId="left" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <YAxis yAxisId="right" orientation="right" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '0.5rem' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Line yAxisId="left" type="monotone" dataKey="revenue" name="Revenue" stroke="#228DAB" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line yAxisId="right" type="monotone" dataKey="alerts" name="Alerts" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Camera Status Donut */}
        <div className="card flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <Camera className="w-5 h-5 mr-2 text-primary-900" />
              Camera Health
            </h2>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cameraStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {cameraStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '0.5rem' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Dynamic Global Analytics Charts */}
      <ClientAnalyticsCharts role="admin" />

      {/* Charts Row 2 & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Incidents by Type Bar Chart */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-primary-900" />
              Incident Breakdown
            </h2>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incidentData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#374151" opacity={0.1} />
                <XAxis type="number" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(34, 141, 171, 0.1)' }}
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '0.5rem' }}
                />
                <Bar dataKey="count" name="Incidents" fill="#228DAB" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="lg:col-span-2 card p-0 overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100 dark:border-secondary-700 flex items-center justify-between bg-gray-50/50 dark:bg-secondary-800/50">
            <div className="flex items-center space-x-3">
              <Activity className="w-5 h-5 text-primary-900" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Live Activity Feed</h2>
            </div>
            <span className="text-xs text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Live
            </span>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-secondary-700 flex-1 overflow-y-auto max-h-[320px]">
            {recentActivity.map((activity) => {
              const activityStyle = activityIcons[activity.type] || activityIcons.info
              return (
                <div
                  key={activity.id}
                  className="px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 dark:hover:bg-secondary-700/50 transition-colors"
                >
                  <div className={`p-2 rounded-xl flex-shrink-0 ${activityStyle.color} dark:bg-opacity-20`}>
                    <activityStyle.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{activity.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{activity.client}</p>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-gray-400 dark:text-gray-500 flex-shrink-0 bg-gray-100 dark:bg-secondary-900 px-2 py-1 rounded-md">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Client Overview Table */}
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 dark:border-secondary-700 flex items-center justify-between bg-gray-50/50 dark:bg-secondary-800/50">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-primary-900" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Client Portfolio Overview</h2>
          </div>
          <a href="/admin/clients" className="text-sm text-primary-900 hover:text-primary-700 font-bold flex items-center">
            View All Clients <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-secondary-900/50 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Client Details</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Service Plan</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Camera Network</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">System Status</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider">Latest Activity</th>
                <th scope="col" className="px-6 py-4 font-bold tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-secondary-700">
              {clients.slice(0, 5).map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-secondary-700/30 transition-colors bg-white dark:bg-secondary-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-900 to-secondary-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-primary-900/20">
                        <span className="text-white text-sm font-bold">{client.avatar}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{client.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{client.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-900 dark:bg-primary-900/20 dark:text-primary-300 border border-primary-200 dark:border-primary-900/30">
                      {client.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <Camera className="w-4 h-4 mr-2 text-gray-400" />
                      {client.activeCameras} <span className="text-gray-400 mx-1">/</span> {client.cameras}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                      client.status === 'active' 
                        ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30' 
                        : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30'
                    }`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        client.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-red-500'
                      }`} />
                      {client.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {client.lastActivity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-primary-900 dark:text-primary-400 hover:text-primary-700 font-semibold text-sm transition-colors">
                      Manage
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

export default AdminDashboard
