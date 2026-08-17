import { Shield, Users, Award, Clock, CheckCircle, ArrowRight, TrendingUp, AlertTriangle, Eye, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Loss Prevention',
      description: 'Stop theft and fraud before they erode your margins.'
    },
    {
      icon: Activity,
      title: 'Operational Improvement',
      description: 'Actionable insights that help you optimize staff performance and compliance.'
    },
    {
      icon: Eye,
      title: 'Increased Visibility',
      description: 'Complete transparency into what happens in your store, anywhere, anytime.'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring by our AI systems and human verification team.'
    }
  ]

  const milestones = [
    { year: 'Vision', title: 'The AI + Human Concept', description: 'Recognized that AI alone generated too many false alarms, and built a dual verification system.' },
    { year: 'Launch', title: 'First Store Partners', description: 'Began monitoring convenience stores and gas stations, proving immediate ROI.' },
    { year: 'Scale', title: 'Advanced Analytics', description: 'Added sales and waste reporting, and operational intelligence tracking.' },
    { year: 'Today', title: 'Complete Store Protection', description: 'Serving 500+ stores with comprehensive loss prevention and operations monitoring.' }
  ]

  const team = [
    {
      name: 'AI Engineering Team',
      role: 'System Specialists',
      description: 'Experts in computer vision and machine learning who develop our anomaly detection algorithms.'
    },
    {
      name: 'Verification Operators',
      role: 'Human Review Team',
      description: 'Highly trained professionals who review AI flags in real-time to eliminate false positives.'
    },
    {
      name: 'Customer Success',
      role: 'Support & Advisory',
      description: 'Dedicated team providing weekly reports, insights, and recommendations to store owners.'
    }
  ]

  return (
    <div className="bg-gray-50 dark:bg-secondary-900">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white relative overflow-hidden" style={{ backgroundImage: 'url(/public/team.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-20 lg:py-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About
            <span className="text-primary-400 block mt-2">Eye360</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Helping store owners reduce losses and improve operations. We combine artificial intelligence 
            with expert human verification to protect your profits before problems become costly.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Our Goals</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to providing the actionable intelligence you need to run a successful store.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-primary-50 dark:bg-primary-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-900" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-white dark:bg-secondary-800">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-gray-900 dark:text-white">Our Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                From identifying the core challenges faced by store owners—like employee theft and refund scams—to 
                developing a comprehensive AI + Human Verification system, our journey has always been about one thing: 
                protecting your profits.
              </p>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {milestone.year}
                      </div>
                      {index !== milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-primary-200 dark:bg-primary-900/30 my-2"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{milestone.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="/public/company.jpg" 
                alt="Eye360 monitoring center" 
                className="relative rounded-3xl shadow-large w-full object-cover h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">Our Structure</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A perfect synergy of advanced artificial intelligence and trained human experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group">
                <div className="w-24 h-24 mx-auto bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-primary-900" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <div className="text-primary-900 font-medium text-sm mb-4">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About