import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { motionVariants } from '../lib/motion'

const Terms = () => (
  <div className="bg-gray-50 dark:bg-secondary-900 min-h-screen transition-colors duration-300">
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0">
        <img 
          src="/20.jpg" 
          alt="Terms and Conditions" 
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
            Terms &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
              Conditions
            </span>
          </motion.h1>
          
          <motion.p variants={motionVariants.fadeInUp} className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Welcome to Eye360. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <div className="section-padding pt-0">
      <div className="container-max">
        <div className="card max-w-3xl mx-auto border-t-4 border-t-primary-900">
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">1. Use of Services</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Our services are provided for lawful purposes only. You agree not to misuse our services or use them for any illegal activities.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">2. Intellectual Property</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          All content, trademarks, and data on this website are the property of Eye360 or its licensors. Unauthorized use is strictly prohibited.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">3. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Eye360 is not liable for any damages arising from the use or inability to use our services, including but not limited to direct, indirect, or consequential damages.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">4. Changes to Terms</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the revised terms.
        </p>
        <h2 className="mt-8 mb-2 text-lg font-semibold text-primary-900">5. Contact</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          If you have any questions about these terms, please contact us at <a href="mailto:info@eye360.net" className="text-primary-900 underline">info@eye360.net</a>.
        </p>
        </div>
      </div>
    </div>
  </div>
)

export default Terms 