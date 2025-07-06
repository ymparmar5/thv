import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8140407272', '+1 (234) 567-891'],
      action: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@thvdigital.com', 'support@thvdigital.com'],
      action: 'mailto:info@thvdigital.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Security Street', 'Business District, NY 10001'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Emergency: 24/7 Available'],
      action: null
    }
  ]

  const services = [
    'Surveillance Systems',
    'Monitoring Solutions',
    'Vigilance Services',
    'Security Consulting',
    'Risk Assessment',
    'Other'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-primary-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our security experts today for a customized solution 
            that fits your organization's needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get a Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our security experts will get back to you 
                within 24 hours with a customized solution.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-orange focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-orange focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-orange focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-orange focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-orange focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-orange focus:border-transparent"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're here to help 
                you secure your organization.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-secondary-orange/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-secondary-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-gray-600 hover:text-secondary-orange transition-colors"
                        >
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-gray-600">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h3>
                <p className="text-red-700 mb-3">
                  For urgent security matters, call our 24/7 emergency hotline:
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-2xl font-bold text-red-800 hover:text-red-900 transition-colors"
                >
                  +91 8140407272
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600">
              Located in the heart of the business district for easy access
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map</p>
              <p className="text-sm">123 Security Street, Business District, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Common questions about our security services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
              <p className="text-gray-600">
                We provide comprehensive security solutions including surveillance systems, 
                monitoring services, and professional security personnel.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How quickly can you respond to emergencies?</h3>
              <p className="text-gray-600">
                Our emergency response team can be on-site within 5 minutes for urgent situations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you provide 24/7 monitoring?</h3>
              <p className="text-gray-600">
                Yes, we offer round-the-clock monitoring services with our state-of-the-art 
                monitoring center.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Are your security personnel licensed?</h3>
              <p className="text-gray-600">
                All our security personnel are fully licensed, trained, and certified 
                according to state regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 