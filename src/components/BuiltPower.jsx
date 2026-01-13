import React, { useState, useEffect } from 'react';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const features = [
    {
      title: "Modern Core Architecture",
      description:
        "Cloud-native, modular foundation enables real-time processing and phased modernization without disrupting operations.",
      image: product1,
      color: "#85BF4B",
    },
    {
      title: "End-to-End Banking Coverage",
      description:
        "FinEdge offers a comprehensive platform, from core banking to digital channels, supporting diverse banking needs.",
      image: product2,
      color: "#3A358C",
    },
    {
      title: "Massive Scalability",
      description:
        "Scalable across customers, products and regions, with multi-entity and multi-currency support.",
      image: product3,
      color: "#50BFBF",
    },
  ];

  // Auto-cycle
  useEffect(() => {
    const duration = 5000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeIndex, features.length]);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      {/* Header */}
      <div className="text-center max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-3">
          Built to Power Modern Banking from the Core Out
        </h2>
        <p className="text-[#7C7C7C] text-sm sm:text-base">
          Robust, modular banking foundation that enables financial institutions
          to launch faster, scale securely, and innovate continuously—without the
          limitations of legacy systems.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full max-w-sm sm:max-w-xl mx-auto mb-12 sm:mb-20 transition-all duration-500">
        <div className="rounded-2xl overflow-hidden aspect-16/10 sm:aspect-video">
          <img
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-2 -mx-2 scrollbar-hide">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-w-[85%] snap-center relative pt-6 cursor-pointer"
              onClick={() => {
                setActiveIndex(index);
                setProgress(0);
              }}
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200">
                {activeIndex === index && (
                  <div
                    className="h-full transition-all ease-linear"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: feature.color,
                    }}
                  />
                )}
              </div>

              <h3
                className={`text-lg font-medium text-center mb-3 mt-4 transition-colors ${
                  activeIndex === index ? 'text-black' : 'text-gray-400'
                }`}
              >
                {feature.title}
              </h3>

              <p className="text-[#7C7C7C] text-sm text-center max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative pt-6 cursor-pointer"
            onClick={() => {
              setActiveIndex(index);
              setProgress(0);
            }}
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200">
              {activeIndex === index && (
                <div
                  className="h-full transition-all ease-linear"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: feature.color,
                  }}
                />
              )}
            </div>

            <h3
              className={`text-[24px] font-medium text-center mb-4 mt-4 transition-colors ${
                activeIndex === index ? 'text-black' : 'text-gray-400'
              }`}
            >
              {feature.title}
            </h3>

            <p className="text-[#7C7C7C] text-md text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
