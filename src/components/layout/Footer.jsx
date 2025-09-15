import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const [logoError, setLogoError] = useState(false)
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Plans', href: '/plans' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Surveillance Systems', href: '/services#surveillance' },
    { name: 'Monitoring Solutions', href: '/services#monitoring' },
    { name: 'Vigilance Services', href: '/services#vigilance' },
    { name: 'Camera Installation', href: '/services#cameras' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                {!logoError ? (
                  <img 
                    src="/images/thv.svg" 
                    alt="THV Digital" 
                    className="h-12 w-12 rounded-xl shadow-medium"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="h-12 w-12 bg-gradient-to-br from-primary-900 to-primary-900 rounded-xl shadow-medium flex items-center justify-center">
                    <span className="text-white font-bold text-lg">THV</span>
                  </div>
                )}
              </div>
              <div>
                <span className="text-xl font-display font-semibold">thv.digital</span>
                <div className="text-sm text-gray-400 font-medium">Security Services</div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              Professional security services providing surveillance, monitoring, and vigilance solutions 
              to organizations worldwide with cutting-edge technology and expert personnel.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-900 transition-colors p-2 bg-secondary-800 rounded-lg hover:bg-secondary-700"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-900 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <div className="w-1 h-1 bg-primary-900 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-primary-900 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <div className="w-1 h-1 bg-primary-900 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-900/20 rounded-lg">
                  <Phone className="h-5 w-5 text-primary-900" />
                </div>
                <div>
                  <div className="text-gray-300 font-medium text-sm">+91 95584 99515</div>
                  <div className="text-gray-400 text-xs">+91 81404 07272</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-900/20 rounded-lg">
                  <Mail className="h-5 w-5 text-primary-900" />
                </div>
                <span className="text-gray-300 text-sm">info@thv.digital</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-900/20 rounded-lg mt-1">
                  <MapPin className="h-5 w-5 text-primary-900" />
                </div>
                <div className="text-gray-300 text-xs">
                  <div>103, Vashisth Nakshatra,</div>
                  <div>Gana Rd, Karamsad, Anand,</div>
                  <div>Gujarat 388325</div>
                  <div className="mt-2">C/401, Radha Park, Ayodhya Chowk,</div>
                  <div>150 Feet Road, Rajkot,</div>
                  <div>Gujarat 360006</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} thv.digital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-900 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-900 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 