import { ShoppingBag, Coffee, Fuel, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Industries = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: 'Retail & Grocery',
      description: 'Stop sweet-hearting, monitor self-checkout terminals, and reduce stockroom shrinkage with AI that understands retail environments.',
      features: ['Shoplifting Alerts', 'POS Void Tracking', 'Stockroom Monitoring'],
      image: '/10.jpg'
    },
    {
      icon: Coffee,
      title: 'QSR & Restaurants',
      description: 'Optimize speed-of-service, verify drive-thru operations, and ensure food safety compliance across all your locations.',
      features: ['Speed of Service', 'Food Waste Tracking', 'Cash Handling'],
      image: '/12.jpg'
    },
    {
      icon: Fuel,
      title: 'Convenience & Gas',
      description: 'Protect late-night employees, prevent pump-offs, and ensure age verification compliance for restricted products.',
      features: ['Pump-off Prevention', 'Employee Safety', 'Age Verification'],
      image: '/20.jpg'
    }
  ]

  return (
    <section className="bg-gray-50 dark:bg-secondary-900 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="border py-1 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase">Who We Serve</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">
            Tailored for Your Industry
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every business faces unique challenges. Our AI models are trained on specific industry scenarios to provide the highest accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group rounded-3xl overflow-hidden bg-white dark:bg-secondary-800 shadow-lg shadow-gray-900/10 dark:shadow-white/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-900 dark:border-gray-200 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-secondary-900/40 group-hover:bg-secondary-900/20 transition-colors duration-300 z-10"></div>
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-secondary-900/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                  <industry.icon className="h-6 w-6 text-primary-900" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-semibold mb-3 text-gray-900 dark:text-white">{industry.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">{industry.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-900 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="inline-flex items-center text-primary-900 font-semibold group-hover:text-primary-800 transition-colors">
                  Learn More 
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
