import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import arm from '../assets/arm.png';
import whyfinedge from '../assets/whyfinedge.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-28 py-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content Column */}
        <div className="flex-1 z-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold text-[#121212] mb-4 leading-tight">
            Scale Your Banking <br /> Operations with <br /> Confidence
          </h1>

          <p className="text-lg sm:text-[20px] text-[#7C7C7C] mb-8 max-w-xl mx-auto lg:mx-0">
            A cloud-native banking platform for growth, reliability, and innovation. 
            Empowering financial institutions to revolutionize operations and deliver 
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex justify-center items-center lg:justify-start lg:items-start gap-3 mb-12">
            <a href="mailto:info@thefifthlab.com">
              <button className="bg-[#3A358C] hover:bg-indigo-700 text-white font-medium rounded-full transition
                                px-4 py-2 text-sm
                                sm:px-5 sm:py-2.5 sm:text-base">
                Request a Demo
              </button>
            </a>
          
            <button className="flex items-center bg-[#EEEEEE] hover:bg-gray-100 text-[#222222] font-medium rounded-full transition
                              px-4 py-2 text-sm
                              sm:px-5 sm:py-2.5 sm:text-base">
              Get Started
              <MdOutlineArrowOutward  size={16} className="ml-2" />
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[#7C7C7C] text-sm mt-6">
            <div className="flex -space-x-2">
              <img src={arm} alt="Partner Logo" className="w-12" />
            </div>
            <span>Trusted by 20+ Finance Institutions.</span>
          </div>
        </div>

        {/* Right Image/Graphic Column */}
        <div className="flex-1 relative w-full flex justify-center items-center mt-10 lg:mt-0">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl flex items-center justify-center">
            <img src={whyfinedge} alt="Banking Dashboard" className="w-full h-auto rounded-lg" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
