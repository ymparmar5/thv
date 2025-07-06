import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 95584 99515',
        '+91 81404 07272'
      ],
      action: 'tel:+919558499515'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@thv.digital'],
      action: 'mailto:info@thv.digital'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '103, Vashisth Nakshatra, Gana Rd, Karamsad, Anand, Gujarat 388325',
        'C/401, Radha Park, Ayodhya Chowk, 150 Feet Road, Rajkot, Gujarat 360006'
      ],
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      action: null
    }
  ]

  const services = [
    'Surveillance Systems',
    'Monitoring Solutions',
    'Vigilance Services',
    'Camera Installation',
    'Custom Security Solutions'
  ]

  return (
    <div className="bg-gray-50 dark:bg-secondary-900">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container-max section-padding text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our security experts today for a customized solution that fits your organization's needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="mb-8">Send us a Message</h2>
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="select-field"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="textarea-field"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <Send className="h-5 w-5 text-white" />
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Ready to secure your organization? Contact our security experts today for a consultation and customized solution.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-500/20 p-3 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          {info.action ? (
                            <a
                              href={info.action}
                              className="text-gray-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors block"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300">{detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Quick Contact */}
              <div className="bg-primary-500/10 p-6 rounded-xl border-2 border-primary-500">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For urgent security concerns or immediate support, call us directly.
                </p>
                <a
                  href="tel:+919558499515"
                  className="btn-primary w-full justify-center"
                >
                  <Phone className="h-4 w-4 text-white" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Locations</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Serving organizations across Gujarat with professional security services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Karamsad Office</h3>
              <p className="text-gray-600 mb-4">
                103, Vashisth Nakshatra,<br />
                Gana Rd, Karamsad, Anand,<br />
                Gujarat 388325
              </p>
              <a
                href="tel:+919558499515"
                className="text-secondary-orange hover:text-secondary-orange-dark font-medium"
              >
                +91 95584 99515
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Rajkot Office</h3>
              <p className="text-gray-600 mb-4">
                C/401, Radha Park, Ayodhya Chowk,<br />
                150 Feet Road, Rajkot,<br />
                Gujarat 360006
              </p>
              <a
                href="tel:+918140407272"
                className="text-secondary-orange hover:text-secondary-orange-dark font-medium"
              >
                +91 81404 07272
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 