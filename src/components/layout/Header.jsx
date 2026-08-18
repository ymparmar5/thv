import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext.jsx'
import { motionVariants } from '../../lib/motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Plans', href: '/plans' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-secondary-800/95 backdrop-blur-md shadow-soft border-b border-gray-100 dark:border-secondary-700 py-0' 
        : 'bg-transparent border-transparent py-2'
    }`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {!logoError ? (
                <img 
                  src="/images/logo.png" 
                  alt="Eye360" 
                  className="h-12 object-contain transition-all duration-300"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-12 w-12 bg-gradient-to-br from-primary-900 to-primary-900 rounded-xl shadow-medium group-hover:shadow-large transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Eye360</span>
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
                    ? (isScrolled ? 'text-primary-900 dark:text-primary-400' : 'text-primary-400')
                    : (isScrolled 
                        ? 'text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400' 
                        : 'text-gray-200 hover:text-white')
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-900 dark:bg-primary-900 rounded-full"
                    transition={motionVariants.interactive.hover.transition}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={motionVariants.interactive}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-600 dark:text-gray-400 hover:text-primary-900 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-secondary-700'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            {/* Contact Button */}
            <motion.a
              whileHover="hover"
              whileTap="tap"
              variants={motionVariants.interactive}
              href="tel:+919558499515"
              className={`flex items-center space-x-2 transition-colors group ${
                isScrolled ? 'text-primary-900 dark:text-primary-400' : 'text-white hover:text-primary-300'
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'bg-primary-50 dark:bg-primary-900/20' : 'bg-white/10'
              }`}>
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-medium text-sm">+91 95584 99515</span>
            </motion.a>

            <motion.div whileHover="hover" whileTap="tap" variants={motionVariants.interactive}>
              <Link 
                to="/contact" 
                className="btn-primary text-sm"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-600 dark:text-gray-400 hover:text-primary-900 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-secondary-700'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-600 dark:text-gray-400 hover:text-primary-900 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-secondary-700'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-secondary-800 border-b border-gray-100 dark:border-secondary-700 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-secondary-700 hover:text-primary-900 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-secondary-700">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full btn-primary justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 