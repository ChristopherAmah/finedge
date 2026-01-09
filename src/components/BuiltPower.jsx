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
      description: "Cloud-native, modular foundation enables real-time processing and phased modernization without disrupting operations.",
      image: product1, // Replace with your actual image paths
      color: "#85BF4B"
    },
    {
      title: "End-to-End Banking Coverage",
      description: "FinEdge offers a comprehensive platform, from core banking to digital channels, supporting diverse banking needs.",
      image: product2,
      color: "#3A358C"
    },
    {
      title: "Massive Scalability",
      description: "Scalable across customers, products and regions, with multi-entity and multi-currency support.",
      image: product3,
      color: "#50BFBF"
    }
  ];

  // Auto-cycle effect
  useEffect(() => {
    const duration = 5000; // 5 seconds per feature
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
    <section className="py-16 px-6 md:px-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-[#000000] mb-3">
          Built to Power Modern Banking from the Core Out
        </h2>
        <p className="text-[#7C7C7C] text-md ">
          Robust, modular banking foundation that enables financial institutions to launch faster, scale securely, and innovate continuously—without the limitations of legacy systems.
        </p>
      </div>

      {/* Main Image with Transition */}
      <div className="relative w-full max-w-3xl mx-auto mb-20 transition-all duration-500 ease-in-out">
        <div className="rounded-[20px] overflow-hidden aspect-video">
          <img 
            src={features[activeIndex].image} 
            alt={features[activeIndex].title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Features Grid with Loading Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="relative pt-6 cursor-pointer"
            onClick={() => { setActiveIndex(index); setProgress(0); }}
          >
            {/* Background Bar */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200">
              {/* Active Progress Fill */}
              {activeIndex === index && (
                <div 
                  className="h-full transition-all ease-linear"
                  style={{ 
                    width: `${progress}%`, 
                    backgroundColor: feature.color 
                  }}
                />
              )}
            </div>

            <h3 className={`text-[24px] font-medium text-center mb-4 mt-4 transition-colors ${activeIndex === index ? 'text-[#000000]' : 'text-gray-400'}`}>
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