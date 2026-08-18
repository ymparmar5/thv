import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, FileText, Video, Settings, LogOut, CreditCard,
  Menu, X, Bell, Shield, ChevronDown, Camera, AlertTriangle, Sun, Moon, ClipboardList
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'
import { useIncidents } from '../../context/IncidentContext.jsx'
import { currentCustomer } from '../../data/mockData'

const navItems = [
  { name: 'Dashboard', href: '/customer', icon: LayoutDashboard },
  { name: 'Incidents', href: '/customer/incidents', icon: ClipboardList, badge: true },
  { name: 'Security Updates', href: '/customer/updates', icon: FileText },
  { name: 'Footage', href: '/customer/footage', icon: Video },
  { name: 'My Plan', href: '/customer/plan', icon: CreditCard },
]

const CustomerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()
  const { getClientNotifications, getUnreadNotificationCount, dispatch, toastMessage } = useIncidents()

  const notifications = getClientNotifications(currentCustomer.id)
  const unreadCount = getUnreadNotificationCount(currentCustomer.id)

  const isActive = (path) => {
    if (path === '/customer') return location.pathname === '/customer'
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary-900 flex">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-[100] animate-slide-up">
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 max-w-md">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold">New Notification</p>
              <p className="text-xs text-green-100 truncate">{toastMessage}</p>
            </div>
            <button onClick={() => dispatch({ type: 'DISMISS_TOAST' })} className="text-green-200 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

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
            <Link to="/customer" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">Eye360</span>
                <span className="text-xs text-primary-900 dark:text-primary-300 block font-medium">Customer Portal</span>
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
                {item.badge && unreadCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Plan Badge */}
          <div className="px-4 py-3">
            <div className="bg-primary-900/20 border border-primary-900/30 rounded-xl p-4">
              <p className="text-xs text-primary-300 mb-1">Current Plan</p>
              <p className="text-white font-bold text-lg">Pro Plan</p>
              <p className="text-xs text-gray-400 mt-1">14 Cameras Active</p>
            </div>
          </div>

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
                  {navItems.find(item => isActive(item.href))?.name || 'Customer Portal'}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Sunrise Mall — Pro Plan</p>
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

              {/* Notifications with Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setNotifOpen(!notifOpen)}
                  className="relative p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 rounded-full border-2 border-white dark:border-secondary-800 text-white text-[10px] font-bold flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {notifOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setNotifOpen(false)} />
                    <div className="absolute right-0 top-12 w-80 sm:w-96 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 rounded-2xl shadow-2xl z-50 overflow-hidden">
                      <div className="px-4 py-3 border-b border-gray-100 dark:border-secondary-700 flex items-center justify-between">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Notifications</h3>
                        {unreadCount > 0 && (
                          <span className="text-xs bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 rounded-full font-bold">
                            {unreadCount} new
                          </span>
                        )}
                      </div>
                      <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-secondary-700">
                        {notifications.length === 0 ? (
                          <div className="p-6 text-center text-gray-400 text-sm">No notifications</div>
                        ) : (
                          notifications.map((notif) => (
                            <Link
                              key={notif.id}
                              to={`/customer/incidents/${notif.incidentId}`}
                              onClick={() => {
                                dispatch({ type: 'MARK_NOTIFICATION_READ', payload: { notificationId: notif.id } })
                                setNotifOpen(false)
                              }}
                              className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-secondary-700/50 transition-colors ${
                                !notif.read ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${!notif.read ? 'bg-red-500' : 'bg-gray-300'}`} />
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{notif.title}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{notif.message}</p>
                                  <p className="text-xs text-gray-400 mt-1">{new Date(notif.createdAt).toLocaleDateString()}</p>
                                </div>
                              </div>
                            </Link>
                          ))
                        )}
                      </div>
                      <div className="px-4 py-3 border-t border-gray-100 dark:border-secondary-700">
                        <Link 
                          to="/customer/incidents" 
                          onClick={() => setNotifOpen(false)}
                          className="text-xs text-primary-900 dark:text-primary-400 font-bold hover:underline"
                        >
                          View All Incidents →
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Customer Avatar */}
              <div className="flex items-center space-x-2 pl-3 border-l border-gray-200 dark:border-secondary-700">
                <div className="w-9 h-9 bg-primary-900 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white text-sm font-bold">SM</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Sunrise Mall</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Pro Plan</p>
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

export default CustomerLayout
