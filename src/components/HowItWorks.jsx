import { Camera, Cpu, UserCheck, BellRing } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: '1. Connect Your Cameras',
      description: 'No need to rip and replace. We integrate seamlessly with your existing CCTV and IP camera systems, turning passive hardware into active intelligence.'
    },
    {
      icon: Cpu,
      title: '2. AI Analyzes 24/7',
      description: 'Our advanced algorithms continuously monitor your feeds, detecting unusual behavior, after-hours access, sweet-hearting, and POS anomalies.'
    },
    {
      icon: UserCheck,
      title: '3. Human Verification',
      description: 'AI generates alerts, but humans verify them. Our trained monitoring team reviews every flagged event in real-time to eliminate false positives.'
    },
    {
      icon: BellRing,
      title: '4. Proactive Alerts',
      description: 'You only get notified when a real threat or policy violation occurs. Receive immediate calls for critical incidents and detailed weekly ROI reports.'
    }
  ]

  return (
    <section className="bg-white dark:bg-secondary-800 section-padding border-t border-gray-100 dark:border-secondary-700">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="border py-1 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase">Our Process</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-900 dark:text-white">
            How AI + Human Verification Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between automated software and reliable security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 dark:bg-secondary-700 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white dark:bg-secondary-800 rounded-full border border-gray-900 dark:border-gray-200 shadow-lg shadow-gray-900/10 dark:shadow-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary-900" />
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
