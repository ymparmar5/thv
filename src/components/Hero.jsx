import React, { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Shield } from "lucide-react";

const SLIDE_INTERVAL = 5000;

const slides = [
  {
    video: "/1.mp4",
    title: "Advanced Security Monitoring",
    tagline: "Protecting what matters most with 24/7 surveillance"
  },
  {
    video: "/2.mp4",
    title: "Real-Time Threat Detection",
    tagline: "Instant alerts and rapid response to keep you safe"
  },
  {
    video: "/5.mov",
    title: "Smart Protection Systems",
    tagline: "AI-powered security for complete peace of mind"
  },
  {
    video: "/3.mp4",
    title: "Comprehensive Coverage",
    tagline: "Every corner monitored, every moment secured"
  },
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const intervalRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === slideIndex && isVideoPlaying) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [slideIndex, isVideoPlaying]);

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setSlideIndex(index);
  }, []);

  const toggleAutoplay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const toggleVideoPlayback = useCallback(() => {
    setIsVideoPlaying((prev) => !prev);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div 
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Video Slides */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
          {slides.map((slide, index) => {
            const isActive = index === slideIndex;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  preload={index <= 1 ? "auto" : "metadata"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                
                {/* Content Overlay - Left Side */}
                <div className={`absolute inset-0 flex items-center z-10 transition-all duration-1000 ${
                  isActive ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                }`}>
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                      {/* Shield Icon */}
                      <div className={`mb-4 sm:mb-6 transition-all duration-700 delay-200 ${
                        isActive ? "scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}>
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>

                      {/* Main Title */}
                      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight transition-all duration-700 delay-300 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}>
                        {slide.title}
                      </h1>

                      {/* Tagline */}
                      <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-500 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}>
                        {slide.tagline}
                      </p>

                      {/* Decorative Line */}
                      <div className={`w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-white to-transparent transition-all duration-700 delay-700 ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`} style={{ transformOrigin: "left" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

    


        {/* Bottom Right - Navigation Controls */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-20">
          <div className="flex flex-col gap-4">
            {/* Slide Indicators */}
            <div className="flex items-center justify-end gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`relative h-1.5 rounded-full transition-all duration-500 ${
                    index === slideIndex
                      ? "w-10 sm:w-14 bg-white shadow-lg shadow-white/50"
                      : "w-1.5 bg-white/40 hover:bg-white/70 hover:w-6"
                  }`}
                >
                  {index === slideIndex && isPlaying && (
                    <div className="absolute inset-0 bg-white rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white/50 animate-progress"
                        style={{
                          animation: `progress ${SLIDE_INTERVAL}ms linear`
                        }}
                      ></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Arrow Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="group w-12 h-12 sm:w-14 sm:h-14 bg-black/30 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-white/20 hover:border-white"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-125 transition-transform duration-300" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="group w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-125 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;