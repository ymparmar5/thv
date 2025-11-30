import { Link } from 'react-router-dom'
import { Shield, Eye, Camera, Users, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import TestimonialSection from '../components/TestimonialSection'

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
    <div className="bg-gray-50 dark:bg-secondary-900">
      {/* Hero Section */}
      <Hero />
      <Intro />
      <section className="bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
                Professional
                <span className="text-primary-900 block">Security Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Providing comprehensive surveillance, monitoring, and vigilance solutions 
                to protect your organization with cutting-edge technology and expert personnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-outline text-center">
                  Get Free Quote
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-large">
                <h3 className="text-2xl font-display font-semibold mb-8">Why Choose THV Digital?</h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-900/20 rounded-xl flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
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

      {/* Services Overview */}
      <section className="section-padding bg-gray-50 dark:bg-secondary-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Our Security Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Comprehensive security solutions tailored to meet the unique needs of your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* CTA Section */}
      <section className="bg-gradient-accent py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-black">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our security experts today for a customized solution that fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919558499515" 
              className="bg-white text-primary-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-large hover:shadow-xl inline-flex items-center justify-center"
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

      {/* Contact Info */}
      <section className="bg-secondary-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-900/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-900" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+91 95584 99515</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-900" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@thv.digital</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-900" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Address</h3>
              <p className="text-gray-300">Karamsad, Anand, Gujarat</p>
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
              Answers to common questions about our security services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What areas do you serve?',
                a: 'We provide security services across Gujarat, including Anand, Karamsad, Rajkot, and surrounding regions.'
              },
              {
                q: 'Are your monitoring services available 24/7?',
                a: 'Yes, our monitoring and support teams are available 24/7 to ensure your safety and peace of mind.'
              },
              {
                q: 'Can I customize my security plan?',
                a: 'Absolutely! We offer customizable plans and add-on services to fit your unique requirements.'
              },
              {
                q: 'How quickly can you respond to an incident?',
                a: 'Our team is trained for rapid response and will act immediately upon receiving an alert or notification.'
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