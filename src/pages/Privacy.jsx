import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { motionVariants } from '../lib/motion'

const Privacy = () => (
  <div className="bg-gray-50 dark:bg-secondary-900 min-h-screen transition-colors duration-300">
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0">
        <img 
          src="/cyber-security.jpg" 
          alt="Privacy Policy" 
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
            <Shield className="h-5 w-5 mr-2" />
            <span className="font-semibold tracking-wide uppercase text-sm">Legal</span>
          </motion.div>
          
          <motion.h1 variants={motionVariants.fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white leading-tight">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
              Policy
            </span>
          </motion.h1>
          
          <motion.p variants={motionVariants.fadeInUp} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how Eye360 collects, uses, and protects your information.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <div className="section-padding pt-0">
      <div className="container-max">
        <div className="card max-w-3xl mx-auto border-t-4 border-t-primary-900">
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">1. Information We Collect</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          We may collect personal information such as your name, email, phone number, and company details when you use our services or contact us.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">2. How We Use Information</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Your information is used to provide and improve our services, respond to inquiries, and communicate important updates.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">3. Data Security</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">4. Third-Party Services</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          We do not sell or share your personal information with third parties except as required by law or to provide our services.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">5. Changes to Policy</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          We may update this policy from time to time. Please review it periodically for changes.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">6. Contact</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          If you have any questions about this policy, please contact us at <a href="mailto:info@eye360.net" className="text-primary-900 underline">info@eye360.net</a>.
        </p>
        </div>
      </div>
    </div>
  </div>
)

export default Privacy 