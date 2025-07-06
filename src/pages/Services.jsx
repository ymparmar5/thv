import { Shield, Eye, Camera, Users, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 'surveillance',
      title: 'Surveillance Systems',
      description: 'Advanced camera monitoring and recording systems for comprehensive security coverage.',
      features: [
        'HD and 4K camera systems',
        'Night vision capabilities',
        'Motion detection and alerts',
        'Remote monitoring access',
        'Video recording and storage',
        'Weather-resistant cameras'
      ],
      icon: Camera
    },
    {
      id: 'monitoring',
      title: 'Monitoring Solutions',
      description: 'Real-time monitoring and alert systems for immediate response to security threats.',
      features: [
        '24/7 live monitoring',
        'Instant alert notifications',
        'Mobile app access',
        'Custom alert rules',
        'Integration with existing systems',
        'Professional monitoring staff'
      ],
      icon: Eye
    },
    {
      id: 'vigilance',
      title: 'Vigilance Services',
      description: 'Professional security personnel providing on-site protection and monitoring.',
      features: [
        'Licensed security guards',
        'Patrol and monitoring services',
        'Access control management',
        'Emergency response',
        'Incident reporting',
        'Customer service support'
      ],
      icon: Shield
    },
    {
      id: 'cameras',
      title: 'Camera Installation',
      description: 'Professional installation and maintenance of security camera systems.',
      features: [
        'Expert installation services',
        'System configuration',
        'Maintenance and support',
        'Upgrade services',
        'Technical consultation',
        'Warranty coverage'
      ],
      icon: Camera
    }
  ]

  const benefits = [
    '24/7 Professional Monitoring',
    'Advanced Technology Integration',
    'Customized Security Solutions',
    'Expert Security Personnel',
    'Comprehensive Coverage',
    'Immediate Response Capability'
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our
            <span className="text-secondary-orange block">Services</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Security Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Professional security solutions tailored to meet your organization's specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-secondary-orange/30 group transform hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="bg-secondary-orange/10 p-4 rounded-xl group-hover:bg-secondary-orange/20 transition-colors">
                    <service.icon className="h-8 w-8 text-secondary-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary-orange flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Our Services?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide comprehensive security solutions that combine advanced technology 
                with professional expertise to ensure your organization's safety and protection.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-orange rounded-full"></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  to="/plans" 
                  className="inline-flex items-center bg-secondary-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-secondary-orange-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Plans
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary-orange/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-secondary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Security</h3>
                    <p className="text-gray-600 text-sm">Licensed and trained personnel</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary-orange/10 p-3 rounded-lg">
                    <Eye className="h-6 w-6 text-secondary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Monitoring</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock surveillance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary-orange/10 p-3 rounded-lg">
                    <Camera className="h-6 w-6 text-secondary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Technology</h3>
                    <p className="text-gray-600 text-sm">State-of-the-art equipment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary-orange/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-secondary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600 text-sm">Experienced professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              How we deliver exceptional security services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Assessment</h3>
              <p className="text-gray-600 leading-relaxed">We evaluate your security needs and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Planning</h3>
              <p className="text-gray-600 leading-relaxed">Develop a customized security solution</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Implementation</h3>
              <p className="text-gray-600 leading-relaxed">Install and configure security systems</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">24/7 surveillance and support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-orange py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our security experts today for a customized solution that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919558499515" 
              className="bg-white text-secondary-orange hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-orange font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 