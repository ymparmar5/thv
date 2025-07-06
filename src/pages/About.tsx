import { Shield, Target, Award, Users, CheckCircle } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards and transparency in all our dealings.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering superior security solutions that exceed client expectations.'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Dependable service delivery with 24/7 support and rapid response times.'
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'Continuously adopting cutting-edge technology to enhance security effectiveness.'
    }
  ]

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      description: '20+ years of experience in security management and technology implementation.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Security Director',
      description: 'Expert in surveillance systems and security protocol development.'
    },
    {
      name: 'Michael Chen',
      position: 'Technology Lead',
      description: 'Specialist in advanced monitoring and AI-powered security solutions.'
    }
  ]

  const achievements = [
    '500+ satisfied clients across various industries',
    'ISO 9001:2015 certified security services',
    '24/7 monitoring center with 99.9% uptime',
    'Advanced AI-powered surveillance systems',
    'Rapid response team with <5 minute response time',
    'Comprehensive training programs for all personnel'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-primary-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About THV Digital</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading provider of professional security services, specializing in surveillance, 
            monitoring, and vigilance solutions for organizations worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                To provide comprehensive security solutions that protect our clients' assets, 
                personnel, and operations through innovative technology and expert personnel, 
                ensuring peace of mind and business continuity.
              </p>
              <p className="text-gray-600 text-lg">
                We believe that effective security is not just about protection, but about 
                creating an environment where businesses can thrive without fear of security threats.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the most trusted name in security services, known for innovation, 
                reliability, and unwavering commitment to client safety.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange" />
                  <span className="text-gray-700">Advanced technology integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange" />
                  <span className="text-gray-700">Expert personnel training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange" />
                  <span className="text-gray-700">24/7 monitoring capabilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary-orange/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover border border-gray-200 text-center">
                <div className="w-24 h-24 bg-secondary-orange/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-secondary-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-secondary-orange font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-secondary-orange text-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">
              Milestones that demonstrate our commitment to excellence and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <span className="text-orange-100">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">10+ Years of Excellence</h2>
              <p className="text-gray-600 text-lg mb-6">
                Since our founding, we have been at the forefront of security innovation, 
                continuously evolving our services to meet the changing needs of modern organizations.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Our experience spans across various industries including corporate offices, 
                manufacturing facilities, retail establishments, and critical infrastructure, 
                giving us the expertise to handle any security challenge.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-orange mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-orange mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange mt-1" />
                  <div>
                    <h4 className="font-semibold">Licensed & Insured</h4>
                    <p className="text-gray-600 text-sm">Fully licensed security services with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange mt-1" />
                  <div>
                    <h4 className="font-semibold">Advanced Technology</h4>
                    <p className="text-gray-600 text-sm">State-of-the-art surveillance and monitoring systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-orange mt-1" />
                  <div>
                    <h4 className="font-semibold">Expert Personnel</h4>
                    <p className="text-gray-600 text-sm">Trained and certified security professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 