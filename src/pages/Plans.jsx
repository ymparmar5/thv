import { useState } from 'react'
import { Check, Star, Shield, Eye, Camera, Clock, AlertTriangle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic')

  const plans = [
    {
      id: 'basic',
      name: 'Basic Monitoring',
      price: '$99',
      period: '/month',
      description: 'Essential security monitoring for small businesses',
      features: [
        '4 HD Cameras',
        '24/7 Basic Monitoring',
        'Mobile App Access',
        '7-Day Video Storage',
        'Email Alerts',
        'Basic Support'
      ],
      popular: false,
      icon: Camera
    },
    {
      id: 'professional',
      name: 'Professional Monitoring',
      price: '$199',
      period: '/month',
      description: 'Advanced monitoring solution for growing businesses',
      features: [
        '8 HD Cameras',
        '24/7 Advanced Monitoring',
        'Mobile App Access',
        '30-Day Video Storage',
        'SMS & Email Alerts',
        'Priority Support',
        'Motion Detection',
        'Night Vision'
      ],
      popular: true,
      icon: Eye
    },
    {
      id: 'enterprise',
      name: 'Enterprise Monitoring',
      price: '$399',
      period: '/month',
      description: 'Comprehensive security solution for large organizations',
      features: [
        '16 HD Cameras',
        '24/7 Premium Monitoring',
        'Mobile App Access',
        '90-Day Video Storage',
        'SMS, Email & WhatsApp Alerts',
        '24/7 Dedicated Support',
        'AI-Powered Detection',
        'Advanced Analytics',
        'Custom Integration',
        'Monthly Security Report'
      ],
      popular: false,
      icon: Shield
    }
  ]

  const addOnServices = [
    {
      name: 'Extra Camera',
      price: '+$25',
      period: '/camera/month',
      description: 'Add additional HD cameras to your monitoring system',
      icon: Camera
    },
    {
      name: 'WhatsApp/SMS Alerts',
      price: '+$49',
      period: '/month',
      description: 'Instant notifications via WhatsApp and SMS for critical events',
      icon: AlertTriangle
    },
    {
      name: 'Night or Weekend Add-On Monitoring',
      price: '+$75',
      period: '/month',
      description: 'Enhanced monitoring during night hours and weekends',
      icon: Clock
    }
  ]

  return (
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

      {/* Plans Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Monitoring Plans</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Select the plan that best fits your security requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative card p-8 transition-all duration-300 hover:shadow-large transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-primary-500 scale-105' 
                    : 'hover:border-primary-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-medium">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div>
                  {/* Plan Icon */}
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-900/30 rounded-2xl h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="text-center text-primary-600 dark:text-primary-400 flex items-center justify-center flex-col">
                        <plan.icon className="h-16 w-16 mx-auto mb-4" />
                        <p className="font-medium text-lg">{plan.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-display font-semibold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-display font-semibold text-primary-500 dark:text-primary-400">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-500" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'btn-primary'
                        : 'bg-gray-100 dark:bg-secondary-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white shadow-soft hover:shadow-medium'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Add-On Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Enhance your security monitoring with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-secondary-700 p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-200 dark:border-secondary-600 hover:border-primary-500/30 group">
                <div className="text-center mb-6">
                  <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/30 transition-colors">
                    <service.icon className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-gray-900 dark:text-white">{service.name}</h3>
                  <div className="mb-3">
                    <span className="text-2xl font-display font-semibold text-primary-500">{service.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">{service.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{service.description}</p>
                </div>
                
                <Link 
                  to="/contact" 
                  className="block w-full text-center btn-primary"
                >
                  Add Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-padding bg-gray-50 dark:bg-secondary-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Plan Comparison</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Compare features across all our monitoring plans
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-secondary-700">
                  <tr>
                    <th className="text-left py-6 px-6 font-display font-semibold text-gray-900 dark:text-white">Features</th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center py-6 px-6 font-display font-semibold text-gray-900 dark:text-white">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-secondary-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-secondary-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">HD Cameras</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-6 text-gray-700 dark:text-gray-300">
                        {plan.features.find(f => f.includes('Cameras'))?.split(' ')[0] || '-'}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-secondary-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Video Storage</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-6 text-gray-700 dark:text-gray-300">
                        {plan.features.find(f => f.includes('Storage'))?.split(' ')[0] || '-'}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-secondary-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Alert Types</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-6 text-gray-700 dark:text-gray-300">
                        {plan.features.find(f => f.includes('Alerts'))?.split(' ')[0] || '-'}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-secondary-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Support</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-6 text-gray-700 dark:text-gray-300">
                        {plan.features.find(f => f.includes('Support'))?.split(' ')[0] || '-'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
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
}

export default Plans 