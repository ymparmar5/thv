import { Shield, Eye, Camera, Users, CheckCircle, ArrowRight, Phone, Clock, AlertTriangle, Zap, Star, Award, TrendingUp, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'surveillance',
    title: 'Surveillance Systems',
    subtitle: 'Advanced Camera Solutions',
    description: 'State-of-the-art camera monitoring and recording systems for comprehensive security coverage with crystal clear video quality.',
    icon: Camera,
    color: 'blue',
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
    ],
    stats: {
      resolution: '4K Ultra HD',
      coverage: '360° View',
      storage: '30 Days'
    }
  },
  {
    id: 'monitoring',
    title: 'Live Monitoring Solutions',
    subtitle: 'Real-Time Security',
    description: 'Professional 24/7 live monitoring and instant alert systems for immediate response to security threats.',
    icon: Eye,
    color: 'green',
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
    ],
    stats: {
      response: '< 30 seconds',
      uptime: '99.9%',
      operators: '24/7'
    }
  },
  {
    id: 'vigilance',
    title: 'Vigilance Services',
    subtitle: 'On-Site Protection',
    description: 'Licensed security personnel providing professional on-site protection, monitoring, and emergency response services.',
    icon: Shield,
    color: 'red',
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
    ],
    stats: {
      guards: 'Licensed',
      response: '< 2 minutes',
      coverage: '24/7'
    }
  },
  {
    id: 'installation',
    title: 'Camera Installation',
    subtitle: 'Expert Setup & Support',
    description: 'Professional installation, configuration, and ongoing maintenance of security camera systems with warranty coverage.',
    icon: Zap,
    color: 'purple',
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
    ],
    stats: {
      warranty: '2 Years',
      setup: '< 24 hours',
      support: '24/7'
    }
  }
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Over 10+ years of experience in security solutions'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: '99.9% client satisfaction rate with measurable outcomes'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Only the best equipment and trained professionals'
  }
]

const Services = () => (
  <div className="bg-gray-50 dark:bg-secondary-900">
    {/* Hero Section */}
    <section className="bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Professional
            <span className="text-primary-900 block">Security Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive security solutions designed to protect your organization 
            with cutting-edge technology and expert personnel.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2 text-primary-900" />
              <span>24/7 Professional Monitoring</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2 text-primary-900" />
              <span>Advanced Technology</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2 text-primary-900" />
              <span>Licensed Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="section-padding bg-white dark:bg-secondary-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Our Services?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We deliver exceptional security solutions with proven expertise and unwavering commitment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-primary-900 dark:group-hover:bg-primary-900/30 transition-all duration-300">
                <item.icon className="h-10 w-10 text-primary-900 dark:text-primary-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="section-padding bg-gray-50 dark:bg-secondary-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Our Security Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive security solutions tailored to meet your organization's specific needs
          </p>
        </div>

        {/* Mobile Services */}
        <div className="block lg:hidden space-y-8">
          {services.map((service, index) => (
            <div key={service.id} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className={`bg-${service.color}-50 dark:bg-${service.color}-900/20 p-4 rounded-2xl w-fit mx-auto mb-4`}>
                  <service.icon className="h-12 w-12 text-primary-900 dark:text-primary-900" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-primary-900 dark:text-primary-900 font-semibold mb-3">{service.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(service.stats).map(([key, value]) => (
                  <div key={key} className="text-center bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                    <div className="text-lg font-bold text-primary-900 dark:text-primary-900">{value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <div className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary-900 hover:bg-primary-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Services */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start space-x-6 mb-8">
                  <div className={`bg-${service.color}-50 dark:bg-${service.color}-900/20 p-4 rounded-xl group-hover:bg-${service.color}-100 dark:group-hover:bg-${service.color}-900/30 transition-colors`}>
                    <service.icon className="h-10 w-10 text-primary-900 dark:text-primary-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-primary-900 dark:text-primary-900 font-semibold mb-3">{service.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(service.stats).map(([key, value]) => (
                    <div key={key} className="text-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                      <div className="text-xl font-bold text-primary-900 dark:text-primary-900">{value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gray-50 dark:bg-secondary-900 p-6 rounded-xl mb-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Benefits</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-900 dark:bg-primary-900 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-900 hover:bg-primary-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Learn More About {service.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="section-padding bg-white dark:bg-secondary-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our streamlined process ensures quick deployment and optimal security coverage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Assessment', desc: 'We evaluate your security needs and site requirements' },
            { step: '02', title: 'Planning', desc: 'Design a customized security solution for your organization' },
            { step: '03', title: 'Installation', desc: 'Professional installation and system configuration' },
            { step: '04', title: 'Monitoring', desc: '24/7 active monitoring and ongoing support' }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-primary-900 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gradient-accent py-20 px-4 sm:px-6 lg:px-8">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-black">
          Ready to Secure Your Organization?
        </h2>
        <p className="text-xl text-black mb-10 max-w-3xl mx-auto leading-relaxed">
          Get in touch with our security experts today for a customized solution that fits your needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="tel:+919558499515" 
            className="bg-white text-primary-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-large hover:shadow-xl inline-flex items-center justify-center min-w-[200px]"
          >
            <Phone className="h-5 w-5 mr-3" />
            Call Now
          </a>
          <Link 
            to="/contact" 
            className="bg-primary-900 hover:bg-primary-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-large hover:shadow-xl inline-flex items-center justify-center min-w-[200px]"
          >
            Get Free Consultation
          </Link>
        </div>
        <p className="text-sm text-black/70 mt-6">
          No commitment required • Free assessment • 24/7 support
        </p>
      </div>
    </section>
  </div>
)

export default Services 