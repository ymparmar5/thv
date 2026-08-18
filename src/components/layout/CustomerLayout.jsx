import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, FileText, Video, CreditCard, LogOut, 
  Menu, X, Bell, Eye, ChevronDown 
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/customer', icon: LayoutDashboard },
  { name: 'Security Updates', href: '/customer/updates', icon: FileText },
  { name: 'Footage', href: '/customer/footage', icon: Video },
  { name: 'My Plan', href: '/customer/plan', icon: CreditCard },
]

const CustomerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/customer') return location.pathname === '/customer'
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
      <aside className={`fixed top-0 left-0 h-full w-64 bg-secondary-900 text-white z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-secondary-700">
            <Link to="/customer" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Eye360</span>
                <span className="text-xs text-primary-300 block">Customer Portal</span>
              </div>
            </Link>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="lg:hidden text-gray-400 hover:text-white"
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
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary-900 text-white shadow-lg shadow-primary-900/30'
                    : 'text-gray-300 hover:bg-secondary-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.name}</span>
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
          <div className="px-4 py-4 border-t border-secondary-700">
            <Link
              to="/"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-secondary-800 hover:text-white transition-all duration-200"
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
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {navItems.find(item => isActive(item.href))?.name || 'Customer Portal'}
                </h1>
                <p className="text-xs text-gray-500">Sunrise Mall — Pro Plan</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </button>

              {/* Customer Avatar */}
              <div className="flex items-center space-x-2 pl-3 border-l border-gray-200">
                <div className="w-9 h-9 bg-primary-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">SM</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Sunrise Mall</p>
                  <p className="text-xs text-gray-500">Pro Plan</p>
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
