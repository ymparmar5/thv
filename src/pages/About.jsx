import { Shield, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent and dependable security services you can trust.'
    },
    {
      icon: Users,
      title: 'Professionalism',
      description: 'Highly trained and experienced security personnel.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to delivering the highest quality security solutions.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support services.'
    }
  ]

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to provide professional security services.' },
    { year: '2016', title: 'First Major Client', description: 'Secured our first enterprise-level security contract.' },
    { year: '2018', title: 'Technology Integration', description: 'Implemented advanced monitoring and surveillance systems.' },
    { year: '2020', title: 'Expansion', description: 'Expanded services to multiple cities across Gujarat.' },
    { year: '2023', title: 'Digital Transformation', description: 'Launched comprehensive digital security solutions.' }
  ]

  const team = [
    {
      name: 'Security Experts',
      role: 'Professional Personnel',
      description: 'Licensed and trained security professionals with years of experience.'
    },
    {
      name: 'Technical Team',
      role: 'System Specialists',
      description: 'Experts in surveillance systems and monitoring technology.'
    },
    {
      name: 'Support Staff',
      role: 'Customer Service',
      description: 'Dedicated team providing 24/7 customer support and assistance.'
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About
            <span className="text-secondary-orange block">THV Digital</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading provider of professional security services, delivering comprehensive 
            surveillance, monitoring, and vigilance solutions to organizations worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide cutting-edge security solutions that protect our clients' assets, 
                personnel, and operations through innovative technology and expert personnel. 
                We are committed to delivering reliable, professional, and comprehensive 
                security services that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience in the security industry, we understand 
                the unique challenges organizations face and provide tailored solutions 
                that address their specific security needs.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center bg-secondary-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-secondary-orange-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Our Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To be the most trusted and innovative security service provider, 
                setting industry standards for excellence, reliability, and customer satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange flex-shrink-0" />
                  <span className="text-gray-700">Industry-leading technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange flex-shrink-0" />
                  <span className="text-gray-700">Expert security personnel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange flex-shrink-0" />
                  <span className="text-gray-700">24/7 monitoring and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange flex-shrink-0" />
                  <span className="text-gray-700">Customized security solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-secondary-orange/10 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-secondary-orange/20 transition-colors">
                  <value.icon className="h-12 w-12 text-secondary-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Key milestones in our growth and development
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secondary-orange h-full hidden lg:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-secondary-orange mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-secondary-orange rounded-full border-4 border-white shadow-lg"></div>
                  <div className="lg:hidden w-4 h-4 bg-secondary-orange rounded-full border-4 border-white shadow-lg mx-auto my-4"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Dedicated professionals committed to your security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-secondary-orange/30 group">
                <div className="bg-secondary-orange/10 p-6 rounded-full w-fit mx-auto mb-6 group-hover:bg-secondary-orange/20 transition-colors">
                  <Users className="h-12 w-12 text-secondary-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-secondary-orange font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-orange py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help secure your organization with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-secondary-orange hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-orange font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 