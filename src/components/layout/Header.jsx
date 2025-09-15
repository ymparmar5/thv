import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Plans', href: '/plans' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white/95 dark:bg-secondary-800/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-gray-100 dark:border-secondary-700 transition-all duration-300">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {!logoError ? (
                <img 
                  src="/images/THV.png" 
                  alt="THV Digital" 
                  className="h-12  rounded-xl shadow-medium group-hover:shadow-large transition-all duration-300"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-12 w-12 bg-gradient-to-br from-primary-900 to-primary-900 rounded-xl shadow-medium group-hover:shadow-large transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">THV</span>
                </div>
              )}
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium text-sm transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary-900 dark:text-primary-900'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-900'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-900 dark:bg-primary-900 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-900 dark:hover:text-primary-900 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Contact Button */}
            <a
              href="tel:+919558499515"
              className="flex items-center space-x-2 text-primary-900 dark:text-primary-900 hover:text-primary-900 dark:hover:text-primary-900 transition-colors group"
            >
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg group-hover:bg-primary-900 dark:group-hover:bg-primary-900/30 transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-medium text-sm">+91 95584 99515</span>
            </a>

            <Link 
              to="/contact" 
              className="btn-primary text-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-900 dark:hover:text-primary-900 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-900 dark:hover:text-primary-900 hover:bg-gray-100 dark:hover:bg-secondary-700 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-secondary-700 bg-white/95 dark:bg-secondary-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-900 dark:text-primary-900 bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-900 dark:border-primary-900'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-900 hover:bg-gray-50 dark:hover:bg-secondary-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-secondary-700">
                <a
                  href="tel:+919558499515"
                  className="flex items-center space-x-2 px-3 py-3 text-primary-900 dark:text-primary-900 hover:text-primary-900 dark:hover:text-primary-900"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+91 95584 99515</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-2 mx-3 btn-primary text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 