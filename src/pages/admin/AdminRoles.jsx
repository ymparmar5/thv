import React, { useState } from 'react'
import { 
  Shield, UserCog, Key, Store, Edit, Trash2, Plus, 
  CheckCircle, XCircle, Search, Filter, Users
} from 'lucide-react'

// Mock Data
const roles = [
  { id: 1, name: 'Super Admin', description: 'Full access to all stores and system settings', users: 2, isCustom: false },
  { id: 2, name: 'Store Manager', description: 'Can view footage and manage staff for assigned store', users: 15, isCustom: true },
  { id: 3, name: 'Shift Lead', description: 'Can view live footage and receive alerts', users: 45, isCustom: true },
  { id: 4, name: 'Security Guard', description: 'View only access to camera feeds', users: 80, isCustom: true },
]

const permissionCategories = [
  {
    name: 'Dashboard & Analytics',
    permissions: [
      { id: 'view_revenue', label: 'View Revenue Data', activeRoles: [1, 2] },
      { id: 'view_analytics', label: 'View System Analytics', activeRoles: [1, 2, 3] },
      { id: 'export_reports', label: 'Export Reports', activeRoles: [1, 2] }
    ]
  },
  {
    name: 'Camera & Footage',
    permissions: [
      { id: 'view_live', label: 'View Live Feeds', activeRoles: [1, 2, 3, 4] },
      { id: 'view_recorded', label: 'View Recorded Footage', activeRoles: [1, 2, 3] },
      { id: 'download_clips', label: 'Download Video Clips', activeRoles: [1, 2] },
      { id: 'delete_clips', label: 'Delete Video Clips', activeRoles: [1] }
    ]
  },
  {
    name: 'Staff Management',
    permissions: [
      { id: 'manage_staff', label: 'Add/Remove Staff', activeRoles: [1, 2] },
      { id: 'assign_roles', label: 'Assign Roles', activeRoles: [1] },
      { id: 'manage_schedules', label: 'Manage Schedules', activeRoles: [1, 2] }
    ]
  }
]

const staffList = [
  { id: 1, name: 'Sarah Connor', email: 'sarah.c@eye360.com', role: 'Super Admin', store: 'Global', status: 'active' },
  { id: 2, name: 'John Smith', email: 'jsmith@stores.com', role: 'Store Manager', store: 'Sunrise Mall', status: 'active' },
  { id: 3, name: 'Emily Davis', email: 'edavis@stores.com', role: 'Shift Lead', store: 'Downtown Plaza', status: 'active' },
  { id: 4, name: 'Michael Chang', email: 'mchang@stores.com', role: 'Security Guard', store: 'Sunrise Mall', status: 'offline' },
  { id: 5, name: 'Jessica Alba', email: 'jalba@stores.com', role: 'Store Manager', store: 'Westside Branch', status: 'active' },
]

const AdminRoles = () => {
  const [activeTab, setActiveTab] = useState('roles')

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white flex items-center">
            <UserCog className="w-8 h-8 mr-3 text-primary-900" />
            Roles & Permissions
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage staff access levels across multiple store locations
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            {activeTab === 'staff' ? 'Add Staff' : 'Create Role'}
          </button>
        </div>
      </div>

      {/* Custom Tabs */}
      <div className="flex space-x-1 bg-white dark:bg-secondary-800 p-1 rounded-xl w-fit border border-primary-900 shadow-sm shadow-primary-900/10">
        <button
          onClick={() => setActiveTab('roles')}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center ${
            activeTab === 'roles'
              ? 'bg-primary-900 text-white shadow-md'
              : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }`}
        >
          <Shield className="w-4 h-4 mr-2" />
          Roles matrix
        </button>
        <button
          onClick={() => setActiveTab('staff')}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center ${
            activeTab === 'staff'
              ? 'bg-primary-900 text-white shadow-md'
              : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }`}
        >
          <Store className="w-4 h-4 mr-2" />
          Staff Assignments
        </button>
      </div>

      {/* Tab Content: Roles & Permissions */}
      {activeTab === 'roles' && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Roles List */}
          <div className="xl:col-span-1 space-y-4">
            {roles.map((role) => (
              <div key={role.id} className="card p-5 group cursor-pointer hover:border-primary-900 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-900/10 to-transparent rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                    <Key className="w-4 h-4 mr-2 text-primary-900" />
                    {role.name}
                  </h3>
                  {!role.isCustom && (
                    <span className="px-2.5 py-1 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 text-xs font-bold rounded-full">
                      System
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{role.description}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-secondary-700 relative z-10">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-secondary-900 px-3 py-1.5 rounded-lg flex items-center">
                    <UserCog className="w-3 h-3 mr-1.5" />
                    {role.users} Assigned
                  </span>
                  {role.isCustom && (
                    <div className="flex space-x-2">
                      <button className="p-1.5 text-gray-400 hover:text-primary-900 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Permissions Matrix */}
          <div className="xl:col-span-2 card p-0 overflow-hidden flex flex-col h-fit">
            <div className="px-6 py-5 border-b border-gray-100 dark:border-secondary-700 bg-gray-50/50 dark:bg-secondary-800/50 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-900" />
                Permission Matrix
              </h2>
              <span className="text-xs text-primary-900 dark:text-primary-300 font-medium">Auto-saves on toggle</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-white dark:bg-secondary-900 border-b border-gray-100 dark:border-secondary-700">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300">Permission</th>
                    {roles.map(r => (
                      <th key={r.id} className="px-4 py-4 text-center font-bold text-gray-700 dark:text-gray-300">
                        {r.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-secondary-700">
                  {permissionCategories.map((category, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="bg-gray-50 dark:bg-secondary-800/80">
                        <td colSpan={roles.length + 1} className="px-6 py-3 font-bold text-primary-900 dark:text-primary-400 uppercase text-xs tracking-wider">
                          {category.name}
                        </td>
                      </tr>
                      {category.permissions.map((perm) => (
                        <tr key={perm.id} className="hover:bg-gray-50/50 dark:hover:bg-secondary-700/30 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">
                            {perm.label}
                          </td>
                          {roles.map(r => (
                            <td key={r.id} className="px-4 py-4 text-center">
                              {/* Custom Toggle Switch */}
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  className="sr-only peer" 
                                  defaultChecked={perm.activeRoles.includes(r.id)}
                                  disabled={!r.isCustom} // Disable toggling for System roles
                                />
                                <div className={`w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-secondary-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 ${
                                  !r.isCustom 
                                    ? 'peer-checked:bg-primary-900/50 cursor-not-allowed opacity-60' 
                                    : 'peer-checked:bg-primary-900'
                                }`}></div>
                              </label>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Staff Assignment */}
      {activeTab === 'staff' && (
        <div className="card p-0 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 dark:border-secondary-700 bg-gray-50/50 dark:bg-secondary-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary-900" />
              Staff Roster
            </h2>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:min-w-[250px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search staff..." 
                  className="w-full pl-9 pr-4 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg text-sm focus:outline-none focus:border-primary-900 focus:ring-1 focus:ring-primary-900 text-gray-900 dark:text-white transition-all"
                />
              </div>
              <button className="p-2 border border-gray-200 dark:border-secondary-700 rounded-lg text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-secondary-900/50 dark:text-gray-300">
                <tr>
                  <th className="px-6 py-4">Staff Member</th>
                  <th className="px-6 py-4">Assigned Store</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-secondary-700">
                {staffList.map((staff) => (
                  <tr key={staff.id} className="hover:bg-gray-50 dark:hover:bg-secondary-700/30 transition-colors bg-white dark:bg-secondary-800">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-9 h-9 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold mr-3 shadow-sm">
                          {staff.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">{staff.name}</div>
                          <div className="text-xs text-gray-500">{staff.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                        <Store className="w-4 h-4 mr-1.5 text-gray-400" />
                        {staff.store}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-primary-50 text-primary-900 dark:bg-primary-900/20 dark:text-primary-300 border border-primary-100 dark:border-primary-900/30">
                        <Shield className="w-3 h-3 mr-1" />
                        {staff.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {staff.status === 'active' ? (
                        <span className="flex items-center text-xs font-bold text-green-600 dark:text-green-400">
                          <CheckCircle className="w-4 h-4 mr-1" /> Active
                        </span>
                      ) : (
                        <span className="flex items-center text-xs font-bold text-gray-500 dark:text-gray-400">
                          <XCircle className="w-4 h-4 mr-1" /> Offline
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-primary-900 dark:text-primary-400 hover:text-primary-700 font-semibold text-sm transition-colors mr-3">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors">
                        Revoke
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminRoles
