import { Phone, Camera, AlertTriangle, Clock, Check, Star, Shield, Zap, TrendingUp, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic',
    hours: '8 hrs/day',
    cameras: 'Up to 4',
    perCameraRate: '$75',
    monthlyUSD: '$300',
    monthlyINR: '₹25,650',
    highlight: false,
    features: ['24/7 Monitoring', 'Real-time Alerts', 'Mobile App Access', 'Basic Reports'],
    icon: Shield,
  },
  {
    name: 'Standard',
    hours: '8 hrs/day',
    cameras: 'Up to 8',
    perCameraRate: '$65',
    monthlyUSD: '$520',
    monthlyINR: '₹44,460',
    highlight: true,
    features: ['24/7 Monitoring', 'Real-time Alerts', 'Mobile App Access', 'Advanced Reports', 'Priority Support', 'Custom Alerts'],
    icon: TrendingUp,
  },
  {
    name: 'Pro',
    hours: '12 hrs/day',
    cameras: '10–14',
    perCameraRate: '$55',
    monthlyUSD: '$550–$770',
    monthlyINR: '₹47,025 – 65,835',
    highlight: false,
    features: ['24/7 Monitoring', 'Real-time Alerts', 'Mobile App Access', 'Advanced Reports', 'Priority Support', 'Custom Alerts', 'Analytics Dashboard', 'API Access'],
    icon: Zap,
  },
  {
    name: 'Custom',
    hours: '24/7 or Multi-site',
    cameras: '15+',
    perCameraRate: '$50+',
    monthlyUSD: 'Starts at $750+',
    monthlyINR: '₹63,750+',
    highlight: false,
    features: ['Everything in Pro', 'Custom Integration', 'Dedicated Manager', 'SLA Guarantee', 'On-site Support', 'Custom Development'],
    icon: Award,
  },
]

const addOnServices = [
  {
    name: 'Extra Camera',
    price: '+$25',
    period: '/camera',
    icon: Camera,
    description: 'Add additional cameras to your existing plan',
  },
  {
    name: 'WhatsApp/SMS Alerts',
    price: '+$49',
    period: '/month',
    icon: AlertTriangle,
    description: 'Instant notifications via WhatsApp or SMS',
  },
  {
    name: 'Night or Weekend Monitoring',
    price: '+$75',
    period: '/month',
    icon: Clock,
    description: 'Extended monitoring during off-hours',
  },
]

const Plans = () => (
  <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 min-h-screen">
    {/* Hero Section */}
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-primary-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Shield className="h-5 w-5 mr-2 text-primary-300" />
            <span className="text-white/90 font-medium">Professional Security Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
            <span className="text-white">Security</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100 block">Plans</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
            Choose the perfect monitoring plan for your organization. 
            Professional security solutions tailored to your needs and budget.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Check className="h-4 w-4 mr-3 text-primary-300" />
              <span className="text-white/90 font-medium">24/7 Professional Monitoring</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Check className="h-4 w-4 mr-3 text-primary-300" />
              <span className="text-white/90 font-medium">Instant Alerts</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Check className="h-4 w-4 mr-3 text-primary-300" />
              <span className="text-white/90 font-medium">Mobile App Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Plans Section */}
    <section className="section-padding relative">
      <div className="container-max">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4 mr-2" />
            Choose Your Perfect Plan
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Security Plans That Scale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Select the plan that best fits your security requirements and budget. 
            All plans include our core security features with professional monitoring.
          </p>
        </div>
        
        {/* Mobile Plans */}
        <div className="block lg:hidden space-y-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative group cursor-pointer ${
                plan.highlight ? 'scale-105' : ''
              }`}
            >
                              {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-2xl flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
              
              <div className={`relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 ${
                plan.highlight
                  ? 'border-2 border-red-500 dark:border-red-400'
                  : 'border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-400'
              }`}>
                
                {/* Theme Background */}
                <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/10 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6 shadow-lg">
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary-500 mb-2">{plan.monthlyUSD}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{plan.monthlyINR}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Monitoring Hours</span>
                      <span className="font-bold text-gray-900 dark:text-white">{plan.hours}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Cameras</span>
                      <span className="font-bold text-gray-900 dark:text-white">{plan.cameras}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Per Camera</span>
                      <span className="font-bold text-gray-900 dark:text-white">{plan.perCameraRate}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Features:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 active:scale-95 ${
                      plan.highlight
                        ? 'bg-primary-500 text-white shadow-lg hover:shadow-xl hover:bg-primary-600 transform hover:scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Plans */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative group cursor-pointer ${
                  plan.highlight ? 'scale-110' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary-500 text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center">
                      <Star className="h-5 w-5 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 ${
                  plan.highlight
                    ? 'border-2 border-red-500 dark:border-red-400'
                    : 'border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-400'
                }`}>
                  
                  {/* Theme Background */}
                  <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/10 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-3xl mb-6 shadow-lg">
                        <plan.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{plan.name}</h3>
                      <div className="text-5xl font-bold text-primary-500 mb-3">{plan.monthlyUSD}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">{plan.monthlyINR}</div>
                      
                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-gray-600 dark:text-gray-400">Hours/Day</span>
                          <span className="font-bold text-gray-900 dark:text-white">{plan.hours}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-gray-600 dark:text-gray-400">Cameras</span>
                          <span className="font-bold text-gray-900 dark:text-white">{plan.cameras}</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-gray-600 dark:text-gray-400">Per Camera</span>
                          <span className="font-bold text-gray-900 dark:text-white">{plan.perCameraRate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Features:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0 mt-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                                    <button
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 active:scale-95 ${
                    plan.highlight
                      ? 'bg-primary-500 text-white shadow-lg hover:shadow-xl hover:bg-primary-600 transform hover:scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                      Select {plan.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Add-On Services */}
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-secondary-800 dark:to-secondary-900 relative">
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Additional Services
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Enhance Your Security
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Boost your security coverage with our premium add-on services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addOnServices.map((service, idx) => (
            <div key={service.name} className="group cursor-pointer">
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:border-primary-300 dark:hover:border-primary-400">
                
                {/* Theme Background */}
                <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/10 rounded-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{service.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">{service.price}</span>
                    <span className="text-lg text-gray-500 dark:text-gray-400">{service.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300`}>
                    Add Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-primary-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container-max py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
          Ready to Secure Your Organization?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get in touch with our security experts today for a customized solution that fits your needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="tel:+919558499515" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center min-w-[220px] text-lg"
          >
            <Phone className="h-6 w-6 mr-3" />
            Call Now
          </a>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center min-w-[220px] text-lg"
          >
            Get Free Quote
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-6 text-white/70 text-sm">
          <div className="flex items-center">
            <Check className="h-4 w-4 mr-2" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center">
            <Check className="h-4 w-4 mr-2" />
            <span>Free consultation</span>
          </div>
          <div className="flex items-center">
            <Check className="h-4 w-4 mr-2" />
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Plans 
