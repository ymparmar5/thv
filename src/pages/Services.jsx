import { Shield, Eye, Camera, Users, CheckCircle, ArrowRight, Phone, Clock, AlertTriangle, TrendingDown, ClipboardCheck, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'loss-prevention',
    title: 'Loss Prevention Monitoring',
    subtitle: 'Stop theft and fraud in its tracks',
    description: 'We monitor employee theft, shoplifting, refund scams, and POS system manipulation. Every flagged event is verified by our human team before you are alerted, ensuring you only receive actionable intelligence.',
    icon: AlertTriangle,
    color: 'blue',
    features: [
      'Employee theft monitoring',
      'Refund scam detection',
      'POS system manipulation alerts',
      'Shoplifting tracking',
      'Human-verified incidents',
      'Real-time alerts'
    ],
    benefits: [
      'Reduced theft and shrinkage',
      'Improved accountability among staff',
      'Higher overall profitability',
      'No false alarms'
    ],
    stats: {
      coverage: '24/7 Monitoring',
      accuracy: '100% Verified',
      response: 'Immediate'
    }
  },
  {
    id: 'operational-intelligence',
    title: 'Operational Intelligence',
    subtitle: 'Insights beyond security',
    description: 'Understand how your business runs when you are not there. We track customer service quality, lobby and checkout activity, and identify lost sales opportunities to help you improve operations.',
    icon: Eye,
    color: 'green',
    features: [
      'Virtual mystery shopping',
      'Customer service monitoring',
      'Social media monitoring',
      'Lost sales opportunities tracking',
      'Lobby & checkout activity analysis',
      'Opening & closing procedures verification'
    ],
    benefits: [
      'Better customer service',
      'Improved operational compliance',
      'Optimized staffing levels',
      'Actionable training insights'
    ],
    stats: {
      insights: 'Weekly Summaries',
      tracking: 'Date-wise',
      reports: 'Customized'
    }
  },
  {
    id: 'reporting',
    title: 'Reporting & Alerts',
    subtitle: 'Data that drives decisions',
    description: 'Get clear, actionable reports that help you understand where money is being made — and where it\'s being lost. Our weekly reports break down sales performance and waste patterns.',
    icon: BarChart3,
    color: 'purple',
    features: [
      'Weekly sales reports',
      'Waste analysis',
      'Date-wise tracking',
      'Trend analysis',
      'Immediate owner calls for critical events',
      'Recommendations based on data'
    ],
    benefits: [
      'Clear visibility into operations',
      'Data-driven decision making',
      'Proactive problem solving',
      'Measurable ROI'
    ],
    stats: {
      delivery: 'Weekly',
      format: 'Detailed PDF',
      support: 'Expert review'
    }
  }
]

const Services = () => {
  return (
    <div className="bg-gray-50 dark:bg-secondary-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white dark:bg-secondary-900 text-gray-900 dark:text-white py-20 lg:py-32 relative overflow-hidden border-b border-gray-100 dark:border-secondary-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/5 dark:bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container-max relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
            Our <span className="text-primary-900">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Our AI + Human Verification solution helps reduce losses, improve operations, and protect profits before problems become costly.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-24">
        <div className="container-max">
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                    
                    {/* Content Side */}
                    <div className="flex-1 w-full space-y-8">
                      <div>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${
                          service.color === 'blue' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          service.color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                          <service.icon className="h-5 w-5 mr-2" />
                          <span className="font-semibold text-sm">{service.subtitle}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8">
                        {/* Features */}
                        <div className="card-secondary border-none shadow-none bg-white/50 dark:bg-secondary-800/50">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center text-lg">
                            <CheckCircle className="h-5 w-5 text-primary-900 mr-2" />
                            Key Features
                          </h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary-900 mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div className="card-secondary border-none shadow-none bg-white/50 dark:bg-secondary-800/50">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center text-lg">
                            <Shield className="h-5 w-5 text-primary-900 mr-2" />
                            Benefits
                          </h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary-900 mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div>
                        <Link 
                          to="/contact" 
                          className="btn-primary inline-flex items-center group"
                        >
                          Request this Service
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Stats Side */}
                    <div className="w-full lg:w-1/3">
                      <div className="card bg-primary-900 text-white p-8 lg:p-10 transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-display font-semibold mb-8 border-b border-white/20 pb-4">
                          Service Details
                        </h3>
                        <div className="space-y-6">
                          {Object.entries(service.stats).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-white/70 text-sm uppercase tracking-wider mb-1 font-medium">
                                {key}
                              </div>
                              <div className="text-2xl font-semibold">
                                {value}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <div className="text-white/70">Support</div>
                            <div className="font-semibold flex items-center">
                              <Clock className="h-4 w-4 mr-2" /> 24/7 Available
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white dark:bg-secondary-800 py-20 relative overflow-hidden border-t border-gray-100 dark:border-secondary-700">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container-max relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            Protect your profits, improve operations, and increase visibility.
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 font-medium">
            Schedule a Demo Today and see how Eye360 can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-outline border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-900"
            >
              Schedule a Demo Today
            </Link>
            <a 
              href="tel:+919558499515" 
              className="bg-primary-900 text-white hover:bg-primary-800 dark:bg-white dark:text-primary-900 dark:hover:bg-gray-100 font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-large flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services