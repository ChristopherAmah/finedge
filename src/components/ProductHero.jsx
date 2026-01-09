import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import arm from '../assets/arm.png';
import heropc from '../assets/heropc.png';
import herophone from '../assets/herophone.png';

const Hero = () => {
  return (
    <section className="text-center pb-0 relative px-4 sm:px-6 lg:px-28 py-6 lg:py-12">
      
      {/* --- ADDED BADGE SECTION START --- */}
      <div className="flex justify-center mb-[30px]">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F0FA]">
          <span role="img" aria-label="thumbs up">👍</span>
          <span className="text-[#3A358C] text-sm">
            Trusted by 20+ Finance Institutions.
          </span>
        </div>
      </div>
      {/* --- ADDED BADGE SECTION END --- */}

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-[64px] font-semibold font-sans text-[#121212] mb-4 max-w-3xl sm:max-w-5xl mx-auto">
        The FinEdge Complete<br />Banking Stack
      </h1>

      {/* Description */}
      <p className="text-[16px] sm:text-[21px] text-[#7C7C7C] mb-5 max-w-md sm:max-w-4xl mx-auto">
        Designed to scale with your institution as it grows, FinEdge provides a modern foundation for banks looking to grow, innovate, and operate efficiently.
      </p>

      {/* Buttons */}
      <div className="flex flex-row flex-wrap justify-center gap-2 mb-12">
        <a href="mailto:info@thefifthlab.com" className="w-full sm:w-auto">
          <button className="bg-[#3A358C] hover:bg-indigo-700 text-white font-medium rounded-full transition
                            w-full sm:w-auto
                            py-2 px-4 text-sm sm:py-2.5 sm:px-5 sm:text-md">
            Request a Demo
          </button>
        </a>
        <button className="flex bg-[#EEEEEE] hover:bg-gray-100 text-[#222222] font-medium rounded-full transition justify-center items-center
                          w-full sm:w-auto
                          py-2 px-4 text-sm sm:py-2.5 sm:px-5 sm:text-md">
          Get Started <MdArrowOutward size={16} className="ml-2 mt-0.5 sm:ml-2 sm:mt-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;