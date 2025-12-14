import React from 'react';

// --- Image Imports ---
import LaptopImage from '../assets/demopc.png';
import BackgroundShape from '../assets/demobg.png';

const FinedgeHero = () => {
  return (
    <section className="relative bg-[#050510] overflow-hidden py-14 sm:py-16 lg:py-20">

      {/* Background Shape */}
      <img
        src={BackgroundShape}
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 w-full flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side: Text & Buttons */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold leading-tight mb-4">
            Ready to try out our <br />
            <span className="text-white">Finedge 2.0?</span>
          </h1>

          <p className="text-[14px] sm:text-[16px] text-white/90 max-w-md mx-auto lg:mx-0 mb-8 font-medium">
            Create an account and get started using Finedge, with full access to all features.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="mailto:info@thefifthlab.com">
              <button className="
                px-5 py-2.5
                bg-[#3A358C]
                text-[15px] sm:text-[17px]
                hover:bg-indigo-600
                text-white font-medium
                rounded-full
                transition
              ">
                Schedule A Demo
              </button>
            </a>

            <a href="mailto:info@thefifthlab.com">
              <button className="
                px-5 py-2.5
                bg-[#F5F5F5]
                text-[15px] sm:text-[17px]
                hover:bg-gray-100
                text-[#222222] font-medium
                rounded-full
                transition
              ">
                Send A Mail
              </button>
            </a>
          </div>
        </div>

        {/* Right Side: Laptop Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          <img
            src={LaptopImage}
            alt="Laptop showing Finedge interface"
            className="
              w-full max-w-[280px] sm:max-w-md lg:max-w-full
              transform -rotate-2 sm:-rotate-3 lg:rotate-0
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>

      </div>
    </section>
  );
};

export default FinedgeHero;
