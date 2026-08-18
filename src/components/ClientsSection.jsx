import React from 'react'

const clients = [
  { name: 'Taco Bell', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/512px-Taco_Bell_2016.svg.png' },
  { name: 'KFC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/512px-KFC_logo.svg.png' },
  { name: 'Dunkin', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Dunkin%27_logo.svg/512px-Dunkin%27_logo.svg.png' },
  { name: '7-Eleven', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/512px-7-eleven_logo.svg.png' },
  { name: 'Popeyes', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Popeyes_Louisiana_Kitchen_logo.svg/512px-Popeyes_Louisiana_Kitchen_logo.svg.png' },
  { name: 'Wingstop', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wingstop_logo.svg/512px-Wingstop_logo.svg.png' },
  { name: 'Baskin Robbins', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/512px-Baskin-Robbins_logo.svg.png' },
  { name: 'Circle K', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Circle_K_logo_2015.svg/512px-Circle_K_logo_2015.svg.png' },
  { name: 'Jamba', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jamba_Juice_2019_logo.svg/512px-Jamba_Juice_2019_logo.svg.png' },
  { name: 'Little Caesars', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Little_Caesars_logo.svg/512px-Little_Caesars_logo.svg.png' },
]

// Duplicate the array to create a seamless infinite scroll effect
const doubleClients = [...clients, ...clients]

const ClientsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary-900 border-y border-gray-100 dark:border-secondary-800 overflow-hidden relative">
      <div className="container-max px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Will you be next on the list?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of top franchises and businesses protecting their assets with Eye360.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 dark:from-secondary-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 dark:from-secondary-900 to-transparent z-10"></div>

        <div className="flex animate-marquee hover:[animation-play-state:paused] items-center">
          {doubleClients.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center w-32 h-32 bg-white dark:bg-secondary-800 rounded-2xl shadow-sm border border-gray-100 dark:border-secondary-700 p-6 group hover:shadow-lg hover:border-primary-900 dark:hover:border-primary-900 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate Marquee for seamless looping */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] items-center" aria-hidden="true">
          {doubleClients.map((client, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center w-32 h-32 bg-white dark:bg-secondary-800 rounded-2xl shadow-sm border border-gray-100 dark:border-secondary-700 p-6 group hover:shadow-lg hover:border-primary-900 dark:hover:border-primary-900 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default ClientsSection
