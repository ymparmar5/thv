import { Link } from 'react-router-dom'
import { Shield, Eye, Camera, Users, ArrowRight, Phone, Mail, MapPin, Bot, UserCheck, PhoneCall, AlertTriangle, TrendingDown, ClipboardCheck } from 'lucide-react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import TestimonialSection from '../components/TestimonialSection'
import HowItWorks from '../components/HowItWorks'
import Industries from '../components/Industries'
import Integrations from '../components/Integrations'

const Home = () => {
  const whyAiNotEnough = [
    {
      icon: Bot,
      title: 'AI detects unusual activity',
      description: 'Smart algorithms flag unusual behavior and patterns in real-time across your cameras.'
    },
    {
      icon: UserCheck,
      title: 'Human team verifies events',
      description: 'Our trained monitoring team reviews each flag to eliminate false positives and confirm real incidents.'
    },
    {
      icon: PhoneCall,
      title: 'Critical incidents are escalated',
      description: 'Verified critical events are immediately escalated to you with full context and recommended action.'
    }
  ]

  const stats = [
    { number: '35%', label: 'Loss Reduction' },
    { number: '24/7', label: 'Live Monitoring' },
    { number: '100%', label: 'Improved Accountability' },
    { number: '500+', label: 'Stores Protected' }
  ]

  const whatWeMonitor = [
    {
      title: 'Theft & Fraud',
      description: 'Monitor employee theft, shoplifting, refund scams, and POS system manipulation.',
      icon: AlertTriangle
    },
    {
      title: 'Operational Compliance',
      description: 'Ensure opening & closing procedures and policy violations are tracked.',
      icon: ClipboardCheck
    },
    {
      title: 'Customer Experience',
      description: 'Monitor customer service quality and lobby & checkout activity.',
      icon: Users
    },
    {
      title: 'Sales and Waste Reporting',
      description: 'Weekly sales reports, waste analysis, date-wise tracking, and trend analysis.',
      icon: TrendingDown
    },
    {
      title: 'Operational Intelligence',
      description: 'Virtual mystery shopping, customer service monitoring, and lost sales opportunities.',
      icon: Eye
    },
    {
      title: 'Reporting and Alerts',
      description: 'Immediate owner calls, verified incident reports, and actionable recommendations.',
      icon: Shield
    }
  ]

  return (
    <div className="bg-gray-50 dark:bg-secondary-900">
      {/* Hero Section */}
      <Hero />
      <Intro />
      <HowItWorks />
      <section className="bg-white dark:bg-secondary-900 text-gray-900 dark:text-white relative overflow-hidden py-20">
        <div className="relative z-10 container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
                Why AI Alone
                <span className="text-primary-900 block">Is Not Enough</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Most solutions rely purely on AI, generating endless false alarms.
                Our unique approach combines AI detection with trained human verification
                to give you actionable intelligence — not just raw alerts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-outline text-center">
                  Schedule a Demo Today
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-gray-50 dark:bg-secondary-800 rounded-3xl p-8 border border-gray-900 dark:border-gray-200 shadow-lg shadow-gray-900/10 dark:shadow-white/10 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-display font-semibold mb-8">How We Are Different</h3>
                <div className="space-y-6">
                  {whyAiNotEnough.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
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
      <section className="bg-white dark:bg-secondary-800 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-semibold text-primary-900 dark:text-primary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Industries />

      {/* Services Overview */}
      <section className="section-padding bg-gray-50 dark:bg-secondary-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="border py-1 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase">Our Services</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">What We Monitor</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              End-to-end monitoring that covers every aspect of your store operations — from the register to the front door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeMonitor.map((service, index) => (
              <div key={index} className="card p-8 group transform hover:-translate-y-2">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary-900 dark:group-hover:bg-primary-900/30 transition-colors">
                  <service.icon className="h-8 w-8 text-primary-900 dark:text-primary-900" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-900 dark:text-primary-900 hover:text-primary-900 dark:hover:text-primary-900 font-medium transition-colors group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Integrations />

      {/* CTA Section */}
      <section className="bg-white dark:bg-secondary-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">
            Protect your profits, improve operations, and increase visibility.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            See how Eye360 can reduce losses and give you complete visibility into your store operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919558499515"
              className="bg-primary-900 text-white hover:bg-primary-800 dark:bg-white dark:text-primary-900 dark:hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-large hover:shadow-xl inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="btn-outline"
            >
              Schedule a Demo Today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white dark:bg-secondary-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-secondary-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-900" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+91 95584 99515</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-900" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">info@eye360.net</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-900" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">Karamsad, Anand, Gujarat</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our AI + Human monitoring solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'How does AI + Human Verification work?',
                a: 'Our AI system continuously monitors all camera feeds and flags unusual activity. A trained human operator then reviews each flag in real-time, verifying whether it\'s a genuine incident. Only verified events are escalated to you.'
              },
              {
                q: 'What types of stores do you serve?',
                a: 'We work with convenience stores, gas stations, quick-service restaurants, retail chains, grocery stores, and any business with a physical location that needs loss prevention and operational monitoring.'
              },
              {
                q: 'How quickly will I be notified of an incident?',
                a: 'Critical verified incidents trigger an immediate phone call to the store owner. Non-urgent events are compiled into detailed weekly reports with recommendations.'
              },
              {
                q: 'Do I need to install new cameras?',
                a: 'In most cases, we can integrate with your existing camera system. If your current setup needs upgrading, we\'ll provide recommendations and assist with installation.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="card-secondary group cursor-pointer">
                <summary className="font-semibold text-primary-900 flex items-center justify-between text-lg select-none">
                  {faq.q}
                  <span className="ml-2 text-primary-900 group-open:rotate-90 transition-transform">▶</span>
                </summary>
                <div className="mt-4 text-gray-700 dark:text-gray-200 text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home