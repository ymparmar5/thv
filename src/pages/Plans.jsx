import { Phone, Camera, AlertTriangle, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic',
    hours: '8 hrs/day',
    cameras: 'Up to 4',
    perCameraRate: '$75',
    monthlyUSD: '$300',
    monthlyINR: '25,650',
    highlight: false,
  },
  {
    name: 'Standard',
    hours: '8 hrs/day',
    cameras: 'Up to 8',
    perCameraRate: '$65',
    monthlyUSD: '$520',
    monthlyINR: '44,460',
    highlight: true,
  },
  {
    name: 'Pro',
    hours: '12 hrs/day',
    cameras: '10–14',
    perCameraRate: '$55',
    monthlyUSD: '$550–$770',
    monthlyINR: '47,025 – 65,835',
    highlight: false,
  },
  {
    name: 'Custom',
    hours: '24/7 or Multi-site',
    cameras: '15+',
    perCameraRate: '$50+',
    monthlyUSD: 'Starts at $750+',
    monthlyINR: '63,750+',
    highlight: false,
  },
]

const addOnServices = [
  {
    name: 'Extra Camera',
    price: '+$25',
    period: '/camera',
    icon: Camera,
  },
  {
    name: 'WhatsApp/SMS Alerts',
    price: '+$49',
    period: '/month',
    icon: AlertTriangle,
  },
  {
    name: 'Night or Weekend Add-On Monitoring',
    price: '+$75',
    period: '/month',
    icon: Clock,
  },
]

const Plans = () => (
  <div className="bg-gray-50 dark:bg-secondary-900">
    {/* Hero Section */}
    <section className="bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 container-max section-padding text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
          Security
          <span className="text-primary-400 block">Plans</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Choose the perfect monitoring plan for your organization. 
          Professional security solutions tailored to your needs and budget.
        </p>
      </div>
    </section>

    {/* Plans Table Section */}
    <section className="section-padding bg-white dark:bg-secondary-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Pricing Packages</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Select the plan that best fits your security requirements
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`card p-8 flex flex-col h-full justify-between ${plan.highlight ? 'border-2 border-primary-500 scale-105 shadow-lg' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="bg-primary-500 text-white text-xs px-3 py-1 rounded-full font-medium">Most Popular</span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Hours/Day</div>
                    <div className="text-gray-900 dark:text-white font-medium">{plan.hours}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Camera Count</div>
                    <div className="text-gray-900 dark:text-white font-medium">{plan.cameras}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Per-Camera Rate</div>
                    <div className="text-gray-900 dark:text-white font-medium">{plan.perCameraRate}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Estimated Monthly Fee</div>
                    <div className="text-primary-500 dark:text-primary-400 font-semibold">{plan.monthlyUSD}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Estimated Monthly Fee INR</div>
                    <div className="text-primary-500 dark:text-primary-400 font-semibold">{plan.monthlyINR}</div>
                  </div>
                </div>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 mt-4 ${plan.highlight ? 'btn-primary' : 'bg-gray-100 dark:bg-secondary-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white shadow-soft hover:shadow-medium'}`}
                >
                  Select {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Add-On Services */}
    <section className="section-padding bg-gray-50 dark:bg-secondary-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Add-On Services (Monthly)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addOnServices.map((service, idx) => (
            <div key={service.name} className="card p-8 text-center flex flex-col items-center">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-2xl w-fit mb-6">
                <service.icon className="h-10 w-10 text-primary-500 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{service.name}</h3>
              <div className="mb-2 text-2xl font-bold text-primary-500 dark:text-primary-400">{service.price}<span className="text-base text-gray-500 dark:text-gray-400">{service.period}</span></div>
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

export default Plans 