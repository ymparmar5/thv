import React from 'react'
import { motion } from 'framer-motion'
import { motionVariants } from '../lib/motion'

// Generate array from 1 to 26 for client logos
const clientImages = Array.from({ length: 26 }, (_, i) => i + 1);

const ClientsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary-900 border-y border-gray-100 dark:border-secondary-800 relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={motionVariants.fadeInUp}
        className="container-max px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Will you be next on the list?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of top franchises and businesses protecting their assets with Eye360.
          </p>
        </div>
      </motion.div>

      {/* Grid Layout */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={motionVariants.staggerContainer}
        className="container-max px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {clientImages.map((num) => (
            <motion.div 
              key={num} 
              variants={motionVariants.fadeInUp}
              className="flex items-center justify-center w-full max-w-[160px] aspect-[3/2] p-4 group transition-transform duration-300 hover:scale-110"
            >
              <img
                src={`/images/clients/${num}`}
                alt={`Client ${num}`}
                className="max-w-full max-h-full object-contain transition-all duration-300 dark:invert dark:opacity-60 dark:hover:invert-0 dark:hover:opacity-100"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ClientsSection
