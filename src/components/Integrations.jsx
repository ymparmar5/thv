import { MonitorPlay, Database, Activity, RefreshCw } from 'lucide-react'

const Integrations = () => {
  return (
    <section className="bg-white dark:bg-secondary-800 section-padding border-t border-gray-100 dark:border-secondary-700">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-block border py-1 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase mb-4">Seamless Integration</div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-gray-900 dark:text-white">
              Connect Your Video to Your Point of Sale
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Video alone isn't enough to catch sweethearting or fraudulent refunds. Eye360 integrates directly with your existing POS systems and IP cameras, overlaying transaction data onto video feeds in real-time.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mr-4">
                  <Database className="h-6 w-6 text-primary-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">No New Hardware Required</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We work with 95% of existing camera systems and DVRs. Just plug in our secure bridge device and you are online.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mr-4">
                  <Activity className="h-6 w-6 text-primary-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">POS Exception Reporting</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Automatically search video footage based on specific register events like voids, no-sales, discounts, or returns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual representation */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-transparent rounded-3xl transform rotate-3"></div>
            
            <div className="relative bg-white dark:bg-secondary-900 border border-gray-900 dark:border-gray-200 shadow-lg shadow-gray-900/10 dark:shadow-white/10 rounded-3xl p-8">
              
              {/* Diagram */}
              <div className="flex flex-col items-center justify-center space-y-6">
                
                {/* Cameras & POS */}
                <div className="flex justify-between w-full px-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-secondary-800 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-secondary-700 shadow-sm mx-auto mb-3">
                      <MonitorPlay className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Existing Cameras</span>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-secondary-800 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-secondary-700 shadow-sm mx-auto mb-3">
                      <Database className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">POS Data</span>
                  </div>
                </div>

                {/* Animated connecting arrows */}
                <div className="flex space-x-2 text-primary-900 py-4">
                  <RefreshCw className="h-6 w-6 animate-spin-slow" />
                </div>

                {/* Central Brain */}
                <div className="w-full bg-primary-50 dark:bg-primary-900/10 border-2 border-primary-200 dark:border-primary-900/30 rounded-2xl p-6 text-center">
                  <h3 className="font-display font-bold text-xl text-primary-900 mb-2">Eye360 Platform</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AI Analysis + Human Verification</p>
                </div>

                {/* Output */}
                <div className="w-full flex justify-center pt-4">
                  <div className="bg-gray-900 dark:bg-black text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    Actionable Verified Alerts
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Integrations
