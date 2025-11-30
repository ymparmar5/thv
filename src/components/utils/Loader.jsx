export default function Loader() {
    return (
        <div className="bg-secondary-900 min-h-screen flex items-center justify-center p-4">
            <style>{`
        @keyframes scan {
            0% { top: 0; }
            100% { top: 100%; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.7; }
          100% { transform: scale(0.95); opacity: 1; }
        }
        @keyframes rotate-lens {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blink-rec {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .scan-line { animation: scan 2s ease-in-out infinite; }
        .pulse-ring { animation: pulse-ring 2s ease-in-out infinite; }
        .rotate-lens { animation: rotate-lens 3s linear infinite; }
        .blink-rec { animation: blink-rec 1.5s ease-in-out infinite; }
      `}</style>

            <div className="text-center">
                {/* Logo and Loader Container */}
                <div className="relative w-40 h-40 mx-auto mb-8">

                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-secondary-800"></div>
                    <div className="absolute inset-2 rounded-full border-2 border-secondary-700/50 pulse-ring"></div>

                    {/* Rotating corner brackets */}
                    <div className="absolute inset-0 rotate-lens">
                        {/* Top Left */}
                        <div className="absolute top-0 left-0 w-6 h-6">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-500"></div>
                            <div className="absolute top-0 left-0 w-0.5 h-full bg-primary-500"></div>
                        </div>
                        {/* Top Right */}
                        <div className="absolute top-0 right-0 w-6 h-6">
                            <div className="absolute top-0 right-0 w-full h-0.5 bg-primary-500"></div>
                            <div className="absolute top-0 right-0 w-0.5 h-full bg-primary-500"></div>
                        </div>
                        {/* Bottom Left */}
                        <div className="absolute bottom-0 left-0 w-6 h-6">
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></div>
                            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-primary-500"></div>
                        </div>
                        {/* Bottom Right */}
                        <div className="absolute bottom-0 right-0 w-6 h-6">
                            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary-500"></div>
                            <div className="absolute bottom-0 right-0 w-0.5 h-full bg-primary-500"></div>
                        </div>
                    </div>

                    {/* Center Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-20 h-20 bg-gradient-to-br from-secondary-800 to-secondary-800 rounded-lg border border-secondary-700 shadow-2xl">

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="m-1 text-2xl font-bold tracking-tighter text-secondary-50 bg-white rounded-full  leading-none mb-0.5">
                                        <img
                                            className=" object-contain scale-105 "
                                            src="./images/THV-loader.png" >

                                        </img>
                                    </div>
                                    <div className="h-px w-12 bg-primary-500 mx-auto mb-0.5"></div>
                                    <div className="absolute bottom-8 right-3 w-1 h-1 rounded-sm bg-primary-500 blink-rec"></div>

                                </div>
                            </div>

                            {/* Camera lens indicator */}
                            {/* <div className="absolute bottom-9 right-3 w-2 h-2 rounded-full bg-primary-500 blink-rec"></div> */}

                            {/* Scanning line */}
                            <div className="absolute inset-0 overflow-hidden rounded-lg">
                                <div className="scan-line absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Corner markers */}
                    <div className="absolute inset-[-4px]">
                        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary-400/60"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-primary-400/60"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-primary-400/60"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary-400/60"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-3">
                    <h2 className="text-xl font-semibold tracking-tight text-secondary-50">
                        We about to protect you ...
                    </h2>
                    {/* <p className="text-sm text-secondary-400 font-normal">
                        Please wait while we make you secure
                    </p> */}

                    {/* Progress dots */}
                    {/* <div className="flex items-center justify-center space-x-2 pt-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500" style={{ animation: 'blink-rec 1.4s ease-in-out infinite' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary-500" style={{ animation: 'blink-rec 1.4s ease-in-out 0.2s infinite' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary-500" style={{ animation: 'blink-rec 1.4s ease-in-out 0.4s infinite' }}></div>
                    </div> */}
                </div>

                {/* Status indicator */}
                <div className="mt-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary-800 border border-secondary-700">
                    <div className="w-2 h-2 rounded-full bg-primary-500 blink-rec"></div>
                    <span className="text-xs font-medium text-secondary-300 tracking-wide">
                        SYSTEM ONLINE
                    </span>
                </div>
            </div>
        </div>
    );
}
