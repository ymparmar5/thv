import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, Users, FileText, Video, Settings, LogOut, 
  Menu, X, Bell, Shield, ChevronDown, Sun, Moon, UserCog, AlertOctagon, ClipboardList, Store
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'
import { useIncidents } from '../../context/IncidentContext.jsx'

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Clients', href: '/admin/clients', icon: Users },
  { name: 'Stores', href: '/admin/stores', icon: Store },
  { name: 'Security Updates', href: '/admin/updates', icon: FileText },
  { name: 'Footage', href: '/admin/footage', icon: Video },
  { name: 'Report Incident', href: '/admin/report-incident', icon: AlertOctagon },
  { name: 'Incidents', href: '/admin/incidents', icon: ClipboardList, badge: true },
  { name: 'Roles & Staff', href: '/admin/roles', icon: UserCog },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()
  const { incidents } = useIncidents()
  const pendingReviewCount = incidents.filter(i => i.status === 'internal_review').length

  const isActive = (path) => {
    if (path === '/admin') return location.pathname === '/admin'
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary-900 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-secondary-900 border-r border-gray-200 dark:border-secondary-700 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-secondary-700">
            <Link to="/admin" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">Eye360</span>
                <span className="text-xs text-primary-900 dark:text-primary-300 block font-medium">Admin Panel</span>
              </div>
            </Link>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="lg:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-900 dark:bg-primary-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 hover:text-primary-900 dark:hover:bg-secondary-800 dark:hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="flex-1">{item.name}</span>
                {item.badge && pendingReviewCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {pendingReviewCount}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="px-4 py-4 border-t border-gray-200 dark:border-secondary-700">
            <Link
              to="/"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-500 dark:text-gray-400 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-secondary-800 dark:hover:text-white transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span>Back to Website</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Top Bar */}
        <header className="bg-white dark:bg-secondary-800 border-b border-gray-200 dark:border-secondary-700 sticky top-0 z-30 transition-colors duration-300">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {navItems.find(item => isActive(item.href))?.name || 'Admin'}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Welcome back, Admin</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-secondary-800" />
              </button>

              {/* Admin Avatar */}
              <div className="flex items-center space-x-2 pl-3 border-l border-gray-200 dark:border-secondary-700">
                <div className="w-9 h-9 bg-secondary-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Admin</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto text-gray-900 dark:text-white">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
