import React, { useMemo } from 'react'
import { 
  BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { Activity, Shield } from 'lucide-react'
import { useIncidents } from '../context/IncidentContext.jsx'
import { stores } from '../data/mockData.js'

const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'] // Red, Amber, Blue, Green

const ClientAnalyticsCharts = ({ clientId, role }) => {
  const { incidents, getCamerasByStore } = useIncidents()

  // Filter incidents depending on whether a specific clientId is provided
  const relevantIncidents = useMemo(() => {
    if (clientId) {
      return incidents.filter(i => i.clientId === clientId)
    }
    return incidents // Global (for admin dashboard)
  }, [incidents, clientId])

  // Compute Store-wise Incident and Camera Data
  const storeData = useMemo(() => {
    const relevantStores = clientId ? stores.filter(s => s.clientId === clientId) : stores

    return relevantStores.map(store => {
      const incCount = relevantIncidents.filter(i => i.storeId === store.id).length
      const camCount = getCamerasByStore(store.id).length
      
      return {
        name: store.name,
        incidents: incCount,
        cameras: camCount
      }
    }).filter(d => d.incidents > 0 || d.cameras > 0)
  }, [relevantIncidents, clientId, getCamerasByStore])

  // Compute Severity Risk Data
  const severityData = useMemo(() => {
    const counts = { critical: 0, high: 0, medium: 0, low: 0 }
    relevantIncidents.forEach(inc => {
      if (counts[inc.severity] !== undefined) {
        counts[inc.severity] += 1
      }
    })

    const formattedData = [
      { name: 'Critical', value: counts.critical },
      { name: 'High', value: counts.high },
      { name: 'Medium', value: counts.medium },
      { name: 'Low', value: counts.low },
    ].filter(d => d.value > 0) // Only show severities that have incidents

    return formattedData.length > 0 ? formattedData : [{ name: 'No Incidents', value: 1 }]
  }, [relevantIncidents])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      {/* Incidents by Store Bar Chart */}
      <div className="card p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-primary-900" />
            {role === 'admin' && !clientId ? 'Global Incidents by Store' : 'Incidents by Store'}
          </h2>
        </div>
        <div className="h-72">
          {storeData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={storeData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => val.length > 15 ? val.substring(0, 15) + '...' : val} />
                <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '0.5rem' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: 'rgba(34, 141, 171, 0.1)' }}
                />
                <Legend verticalAlign="top" height={36} />
                <Bar dataKey="cameras" name="Cameras" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="incidents" name="Incidents" fill="#228DAB" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
              No store incident data available.
            </div>
          )}
        </div>
      </div>

      {/* Severity Risk Pie Chart */}
      <div className="card p-6 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <Shield className="w-5 h-5 mr-2 text-primary-900" />
            {role === 'admin' && !clientId ? 'Global Severity Risk' : 'Severity Risk Breakdown'}
          </h2>
        </div>
        <div className="flex-1 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={severityData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                stroke="none"
                label={({ name, percent }) => name === 'No Incidents' ? name : `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {severityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.name === 'No Incidents' ? '#9ca3af' : COLORS[index % COLORS.length]} />
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
  )
}

export default ClientAnalyticsCharts
