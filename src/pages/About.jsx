import { Shield, Users, Award, Clock, CheckCircle, ArrowRight, TrendingUp, AlertTriangle, Eye, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { motionVariants } from '../lib/motion'

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
    <div className="bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Image with Theme-Aware Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/team.jpg" 
            alt="About Eye360" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "/12.jpg";
            }}
          />
          <div className="absolute inset-0 bg-secondary-900/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-secondary-900"></div>
        </div>
        
        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            variants={motionVariants.staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={motionVariants.fadeInUp} className="inline-flex items-center bg-white/10 text-white rounded-full px-6 py-3 mb-8 border border-white/20 backdrop-blur-sm">
              <Users className="h-5 w-5 mr-2" />
              <span className="font-semibold tracking-wide uppercase text-sm">Our Story</span>
            </motion.div>
            
            <motion.h1 variants={motionVariants.fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Eye360
              </span>
            </motion.h1>
            
            <motion.p variants={motionVariants.fadeInUp} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              We believe business owners shouldn't have to choose between constant monitoring 
              and running their operations. Our dual-verification system is the answer.
            </motion.p>
          </motion.div>
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
                src="/20.jpg" 
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