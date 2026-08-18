export default function Loader() {
    return (
        <div className="bg-gray-50 dark:bg-secondary-900 min-h-screen flex items-center justify-center p-4">
            <style>{`
        @keyframes scan-eye {
            0% { top: -10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 110%; opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px 0 rgba(34, 141, 171, 0.2); }
          50% { box-shadow: 0 0 40px 10px rgba(34, 141, 171, 0.4); }
        }
        @keyframes blink-rec {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        @keyframes scale-x {
          0% { transform: scaleX(0.1); }
          100% { transform: scaleX(1); }
        }
        .scan-line { animation: scan-eye 2.5s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .blink-rec { animation: blink-rec 1.5s ease-in-out infinite; }
        .progress-bar { animation: scale-x 2s infinite alternate ease-in-out; transform-origin: left; }
      `}</style>

            <div className="text-center flex flex-col items-center">
                {/* Logo and Scanner Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 flex items-center justify-center pulse-glow rounded-[2rem] bg-white dark:bg-secondary-800 p-6 border border-gray-100 dark:border-secondary-700">
                    
                    {/* The Eye Logo */}
                    <img 
                        src="/images/logo.png" 
                        alt="Eye360 Logo" 
                        className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                    />

                    {/* The Scanning Laser Line */}
                    <div className="absolute inset-0 overflow-hidden rounded-[2rem] z-20 pointer-events-none">
                        <div className="scan-line absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent shadow-[0_0_15px_3px_rgba(34,141,171,0.8)]"></div>
                        
                        {/* A faint overlay that follows the scan line for a scanning "sweep" effect */}
                        <div className="scan-line absolute inset-x-0 h-32 -mt-32 bg-gradient-to-b from-transparent to-primary-500/20"></div>
                    </div>

                    {/* Techy Corner Markers */}
                    <div className="absolute inset-0 z-30 pointer-events-none">
                        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary-500 rounded-tl-xl opacity-70"></div>
                        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary-500 rounded-tr-xl opacity-70"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary-500 rounded-bl-xl opacity-70"></div>
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary-500 rounded-br-xl opacity-70"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
                        Initializing Eye360 Security
                    </h2>
                    
                    {/* Tech Progress Bar */}
                    <div className="w-48 h-1.5 bg-gray-200 dark:bg-secondary-700 rounded-full mx-auto overflow-hidden">
                        <div className="h-full bg-primary-500 rounded-full w-full progress-bar"></div>
                    </div>
                </div>

                {/* Status indicator */}
                <div className="mt-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 blink-rec shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-300 tracking-wider uppercase">
                        Establishing Secure Connection
                    </span>
                </div>
            </div>
        </div>
    );
}
