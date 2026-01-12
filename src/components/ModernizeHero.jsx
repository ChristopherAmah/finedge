import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="text-center py-12 relative px-4 sm:px-6 lg:px-28">
      
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
        Modernize Retail<br />Banking at Scale
      </h1>

      {/* Description */}
      <p className="text-[16px] sm:text-[21px] text-[#7C7C7C] mb-5 max-w-md sm:max-w-3xl mx-auto">
        Equip your bank with FinEdge to process transactions at scale and rapidly deploy new products. Our secure infrastructure ensures operational excellence.
      </p>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-3 mb-12">
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
          <MdArrowOutward size={16} className="ml-2" />
        </button>
      </div>

      {/* Trusted (Logo section) */}
      {/* <div className="flex flex-row justify-center items-center space-x-2 sm:space-x-2 text-sm text-[#7C7C7C] mb-6">
        <img src={arm} alt="ARM" className="w-16 sm:w-20" />
        <span>Trusted by 20+ Finance Institutions.</span>
      </div> */}
    </section>
  );
};

export default Hero;