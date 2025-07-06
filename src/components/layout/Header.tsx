import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-primary-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-secondary-orange" />
            <span className="text-xl font-bold text-primary-black">THV Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-secondary-orange'
                    : 'text-gray-700 hover:text-secondary-orange'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-secondary-orange hover:text-secondary-orange-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 8140407272</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-secondary-orange hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-secondary-orange bg-orange-50'
                      : 'text-gray-700 hover:text-secondary-orange hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 px-3 py-2 text-secondary-orange hover:text-secondary-orange-dark"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 8140407272</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-2 btn-primary text-center"
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