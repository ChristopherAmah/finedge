import React from 'react';

// --- Image Imports ---
import LaptopImage from '../assets/demopc.png';
import BackgroundShape from '../assets/demobg.png';

const FinedgeHero = () => {
  return (
    <section className="relative bg-[#050510] flex items-center overflow-hidden py-20">

      {/* Background Shape */}
      <img
        src={BackgroundShape}
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      {/* Optional overlay for subtle dark effect */}
      {/* <div className="absolute inset-0 bg-black/20 z-0"></div> */}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center">

        {/* Left Side: Text & Buttons */}
        <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0 lg:pl-40">
          <h1 className="text-[32px] font-semibold">
            Ready to try out our <br />
            <span className="text-white">Finedge 2.0?</span>
          </h1>

          <p className="text-[16px] text-[#FFFFFF] max-w-lg mb-8 font-medium">
            Create an account and get started using Finedge, with full access to all features.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-[19.95px] py-[9.98px] bg-[#3A358C] text-[17.46px] hover:bg-indigo-600 text-white font-medium rounded-[1245.62px] transition duration-300">
              Schedule A Demo
            </button>
            <button className="px-[19.95px] py-[9.98px] bg-[#F5F5F5] text-[17.46px] hover:bg-gray-100 text-[#222222] font-medium rounded-[1245.62px] transition duration-300">
              Send A Mail
            </button>
          </div>
        </div>

        {/* Right Side: Laptop Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center">
          <img
            src={LaptopImage}
            alt="Laptop showing Finedge interface"
            className="w-full max-w-md lg:max-w-full
                       transform -rotate-3 lg:rotate-0
                       transition-transform duration-500 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default FinedgeHero;
