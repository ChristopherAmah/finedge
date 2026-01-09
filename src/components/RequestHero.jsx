import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
const Hero = () => {
  const checklist = [
    "Platform Overview",
    "Account Setup",
    "First Integration",
    "Best Practices"
  ];

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-28 py-10 mb-10 font-sans">
      
      <div className="relative z-10 max-w-5xl">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[64px] font-semibold text-[#121212] mb-4">
          See FinEdge <br /> in Action
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-[20px] text-[#7C7C7C] mb-5 max-w-2xl">
          Experience a personalized demo tailored to your institution's needs. No pressure, no commitment—just a clear view of how FinEdge can transform your banking operations.
        </p>

        {/* Checklist Section */}
        <div className="space-y-1">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaRegCheckCircle  className="text-[#66AF1C] text-2xl" /> 
              <span className="text-[#4A4A4A] text-[20px]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;