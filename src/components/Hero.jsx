import React, { useEffect, useState, useRef, useCallback } from "react";

const SLIDE_INTERVAL = 4000;

const slides = [
  "/11.jpg",
  "/20.jpg",
  "/9.jpg",
  "/7.jpg",
  "/24.jpg",
  "/21.jpg",
];

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState(true);

  const intervalRef = useRef(null);

  // Auto slideshow
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="relative w-full">
        {slides.map((src, index) => {
          const isActive = index === slideIndex;
          const isLoaded = loadedImages.has(index);

          return (
            <div
              key={index}
              className={`w-full transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 relative"
                  : "opacity-0 absolute top-0 left-0"
              }`}
            >
              <div className="relative w-full">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] object-cover object-center"
                  loading={index <= 1 ? "eager" : "lazy"}
                  onLoad={() =>
                    setLoadedImages((prev) => new Set([...prev, index]))
                  }
                  style={{
                    filter: isLoaded ? "blur(0px)" : "blur(4px)",
                    transition: "filter 0.5s ease-out",
                  }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          );
        })}

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Hero;
