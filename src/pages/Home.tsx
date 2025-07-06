import { Link } from 'react-router-dom'
import { Shield, Eye, Camera, Users,  ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Professional Security',
      description: 'Licensed and trained security personnel for your protection needs.'
    },
    {
      icon: Eye,
      title: '24/7 Surveillance',
      description: 'Round-the-clock monitoring and surveillance systems.'
    },
    {
      icon: Camera,
      title: 'Advanced Technology',
      description: 'State-of-the-art camera systems and monitoring equipment.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced security professionals with specialized training.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '24/7', label: 'Support Available' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ]

  const services = [
    {
      title: 'Surveillance Systems',
      description: 'Advanced camera monitoring and recording systems for comprehensive security coverage.',
      icon: Camera
    },
    {
      title: 'Monitoring Solutions',
      description: 'Real-time monitoring and alert systems for immediate response to security threats.',
      icon: Eye
    },
    {
      title: 'Vigilance Services',
      description: 'Professional security personnel providing on-site protection and monitoring.',
      icon: Shield
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-primary-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional
                <span className="text-secondary-orange block">Security Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Providing comprehensive surveillance, monitoring, and vigilance solutions 
                to protect your organization with cutting-edge technology and expert personnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Get Free Quote
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-4">Why Choose THV Digital?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <feature.icon className="h-6 w-6 text-secondary-orange mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security solutions tailored to meet the unique needs of your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover border border-gray-200">
                <div className="bg-secondary-orange/10 p-4 rounded-lg w-fit mb-6">
                  <service.icon className="h-8 w-8 text-secondary-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-secondary-orange hover:text-secondary-orange-dark font-medium transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-orange section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our security experts today for a customized solution that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890" className="bg-white text-secondary-orange hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-orange font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-secondary-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+91 8140407272</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-secondary-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@thvdigital.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-secondary-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">123 Security Street, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 