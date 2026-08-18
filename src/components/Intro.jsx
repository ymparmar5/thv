import { Button } from "../components/utils/Button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "/12.jpg";
import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../lib/motion";

const Intro = () => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-secondary-900 text-gray-900 dark:text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            variants={motionVariants.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div
              variants={motionVariants.fadeInUp}
              className="inline-block border py-1 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase mb-6"
            >
              AI + Human Verification
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                variants={motionVariants.fadeInUp}
                className="text-4xl lg:text-6xl font-display font-bold leading-tight text-gray-900 dark:text-white"
              >
                Eye360 –{" "}
                <span className="bg-primary-900 bg-clip-text text-transparent">
                  Loss Prevention
                </span>
              </motion.h1>

              <motion.p
                variants={motionVariants.fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
              >
                Our AI + Human Verification solution helps store owners reduce losses, improve operations, and protect profits before problems become costly. 
              </motion.p>
            </div>

            <motion.div
              variants={motionVariants.fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={motionVariants.interactive}
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="px-8 py-6 text-base bg-primary-900 text-white hover:bg-primary-800 dark:bg-white dark:text-primary-900 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Demo Today
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-900 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Video */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={motionVariants.scaleIn}
            className="relative h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Eye360 monitoring system"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Play Button Overlay */}
            <motion.div 
              whileHover="hover"
              whileTap="tap"
              variants={motionVariants.interactive}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-primary-900 transition-colors">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              variants={motionVariants.fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="absolute -bottom-10 -right-1 bg-white dark:bg-secondary-800 border border-primary-900 rounded-xl p-3 shadow-lg shadow-primary-900/10 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-12 h-12 text-primary-900 rounded-full flex items-center justify-center"
                >
                  <img src="/images/logo.png" className="w-8 h-8 object-contain" />
                </motion.div>
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="font-semibold text-gray-900 dark:text-white"
                  >
                    Stores Protected
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    with AI + Human verification
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;