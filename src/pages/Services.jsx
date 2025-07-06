import { Shield, Eye, Camera, Users, CheckCircle, ArrowRight, Phone, Clock, AlertTriangle, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'surveillance',
    title: 'Surveillance Systems',
    description: 'Advanced camera monitoring and recording systems for comprehensive security coverage.',
    icon: Camera,
    features: [
      'HD and 4K camera systems',
      'Night vision capabilities',
      'Motion detection and alerts',
      'Remote monitoring access',
      'Video recording and storage',
      'Weather-resistant cameras'
    ],
    benefits: [
      'Crystal clear video quality',
      '24/7 recording capability',
      'Easy remote access',
      'Weatherproof installation'
    ]
  },
  {
    id: 'monitoring',
    title: 'Live Monitoring Solutions',
    description: 'Real-time monitoring and alert systems for immediate response to security threats.',
    icon: Eye,
    features: [
      '24/7 live monitoring',
      'Instant alert notifications',
      'Mobile app access',
      'Custom alert rules',
      'Integration with existing systems',
      'Professional monitoring staff'
    ],
    benefits: [
      'Real-time human monitoring',
      'Instant response capability',
      'Professional operators',
      'Customizable alerts'
    ]
  },
  {
    id: 'vigilance',
    title: 'Vigilance Services',
    description: 'Professional security personnel providing on-site protection and monitoring.',
    icon: Shield,
    features: [
      'Licensed security guards',
      'Patrol and monitoring services',
      'Access control management',
      'Emergency response',
      'Incident reporting',
      'Customer service support'
    ],
    benefits: [
      'Licensed professionals',
      'On-site presence',
      'Emergency response',
      'Detailed reporting'
    ]
  },
  {
    id: 'installation',
    title: 'Camera Installation',
    description: 'Professional installation and maintenance of security camera systems.',
    icon: Zap,
    features: [
      'Expert installation services',
      'System configuration',
      'Maintenance and support',
      'Upgrade services',
      'Technical consultation',
      'Warranty coverage'
    ],
    benefits: [
      'Professional installation',
      'System optimization',
      'Ongoing support',
      'Warranty protection'
    ]
  }
]

const Services = () => (
  <div className="bg-gray-50 dark:bg-secondary-900">
    {/* Hero Section */}
    <section className="bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Our
          <span className="text-primary-400 block">Services</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Comprehensive security solutions designed to protect your organization 
          with cutting-edge technology and expert personnel.
        </p>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Security Services</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Professional security solutions tailored to meet your organization's specific needs
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="card p-8 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
              {/* Service Header */}
              <div className="flex items-start space-x-6 mb-8">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                  <service.icon className="h-8 w-8 text-primary-500 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
              {/* Features Grid */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Benefits */}
              <div className="bg-gray-50 dark:bg-secondary-900 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gradient-accent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Ready to Secure Your Organization?
        </h2>
        <p className="text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
          Get in touch with our security experts today for a customized solution that fits your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+919558499515" 
            className="bg-white text-primary-500 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-large hover:shadow-xl inline-flex items-center justify-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Now
          </a>
          <Link 
            to="/contact" 
            className="btn-outline"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  </div>
)

export default Services 