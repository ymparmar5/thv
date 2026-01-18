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
    <div className="bg-gray-50 dark:bg-secondary-900">
      {/* Hero Section */}
      <section style={{backgroundImage: 'url(/public/team.jpg)'}} className=" text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-40 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About
            <span className="text-black-900 block">THV Digital</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                To provide cutting-edge security solutions that protect our clients' assets, 
                personnel, and operations through innovative technology and expert personnel. 
                We are committed to delivering reliable, professional, and comprehensive 
                security services that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                With over a decade of experience in the security industry, we understand 
                the unique challenges organizations face and provide tailored solutions 
                that address their specific security needs.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center bg-primary-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-900 dark:hover:bg-primary-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Our Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                To be the most trusted and innovative security service provider, 
                setting industry standards for excellence, reliability, and customer satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-900 dark:text-primary-900 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Industry-leading technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-900 dark:text-primary-900 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Expert security personnel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-900 dark:text-primary-900 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">24/7 monitoring and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-900 dark:text-primary-900 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Customized security solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-primary-900 dark:group-hover:bg-primary-900/30 transition-colors">
                  <value.icon className="h-12 w-12 text-primary-900 dark:text-primary-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Key milestones in our growth and development
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-900 dark:bg-primary-900 h-full hidden lg:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-900 dark:text-primary-900 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-primary-900 dark:bg-primary-900 rounded-full border-4 border-white dark:border-secondary-800 shadow-lg"></div>
                  <div className="lg:hidden w-4 h-4 bg-primary-900 dark:bg-primary-900 rounded-full border-4 border-white dark:border-secondary-800 shadow-lg mx-auto my-4"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Dedicated professionals committed to your security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-full w-fit mx-auto mb-6 group-hover:bg-primary-900 dark:group-hover:bg-primary-900/30 transition-colors">
                  <Users className="h-12 w-12 text-primary-900 dark:text-primary-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-primary-900 dark:text-primary-900 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{member.description}</p>
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
              className="bg-transparent border border-primary-900 border-white text-white hover:bg-white hover:text-secondary-orange font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
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