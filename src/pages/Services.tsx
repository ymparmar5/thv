import { Camera, Eye, Shield, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 'surveillance',
      icon: Camera,
      title: 'Surveillance Systems',
      description: 'Advanced camera monitoring and recording systems for comprehensive security coverage.',
      features: [
        'HD and 4K camera systems',
        'Night vision capabilities',
        'Motion detection and alerts',
        'Remote monitoring access',
        'Cloud storage solutions',
        'Mobile app integration'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      id: 'monitoring',
      icon: Eye,
      title: 'Monitoring Solutions',
      description: 'Real-time monitoring and alert systems for immediate response to security threats.',
      features: [
        '24/7 monitoring center',
        'Real-time threat detection',
        'Automated alert systems',
        'Emergency response coordination',
        'Incident reporting and documentation',
        'Integration with law enforcement'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      id: 'vigilance',
      icon: Shield,
      title: 'Vigilance Services',
      description: 'Professional security personnel providing on-site protection and monitoring.',
      features: [
        'Licensed security guards',
        'Armed and unarmed options',
        'Mobile patrol services',
        'Access control management',
        'Emergency response teams',
        'Regular security assessments'
      ],
      image: '/api/placeholder/400/300'
    }
  ]

  const additionalServices = [
    {
      icon: Users,
      title: 'Security Consulting',
      description: 'Expert assessment and recommendations for your security infrastructure.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency response services.'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive security risk analysis and mitigation strategies.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-primary-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your organization 
            with cutting-edge technology and expert personnel.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Security Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional security solutions tailored to meet the unique needs of your organization
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-secondary-orange/10 p-4 rounded-lg w-fit mb-6">
                    <service.icon className="h-8 w-8 text-secondary-orange" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center btn-primary"
                  >
                    Get Quote <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Camera className="h-16 w-16 mx-auto mb-4" />
                      <p>Service Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Supporting services to enhance your security infrastructure and operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover border border-gray-200">
                <div className="bg-secondary-orange/10 p-4 rounded-lg w-fit mb-6">
                  <service.icon className="h-8 w-8 text-secondary-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-secondary-orange hover:text-secondary-orange-dark font-medium transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach to delivering effective security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your security needs and current infrastructure</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">Customized security strategy and solution design for your organization</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-600">Professional installation and setup of security systems and personnel</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-600">Ongoing monitoring, maintenance, and 24/7 support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-orange text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact our security experts today for a customized solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-secondary-orange hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Free Quote
            </Link>
            <a href="tel:+1234567890" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-orange font-semibold py-3 px-6 rounded-lg transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 