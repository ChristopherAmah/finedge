import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import arm from '../assets/arm.png';
import heropc from '../assets/heropc.png';
import herophone from '../assets/herophone.png';

const Hero = () => {
  return (
    <section className="text-center pb-0 relative px-4 sm:px-6 lg:px-28">
      
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold font-sans text-[#121212] leading-tight mb-4 max-w-3xl sm:max-w-5xl mx-auto">
        Integrated <br />banking & payment automation <br />solution
      </h1>

      {/* Description */}
      <p className="text-[16px] sm:text-[20px] text-[#7C7C7C] mb-5 max-w-md sm:max-w-4xl mx-auto">
        FinEdge brings your core operations, digital channels, and payment services
        into one powerful platform. Faster deployment, easier management,
        and a product built for African financial institutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-row flex-wrap justify-center gap-2 mb-6">
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


      {/* Trusted */}
      <div className="flex flex-row justify-center items-center space-x-2 sm:space-x-2 text-sm text-[#7C7C7C] mb-6">
        <img src={arm} alt="ARM" className="w-16 sm:w-20" />
        <span>Trusted by 20+ Finance Institutions.</span>
      </div>

      {/* IMAGES SECTION */}
      <div className="relative w-full flex justify-center pb-0 mt-6 px-4">

        {/* === PHONE (hidden on mobile) === */}
        <img
          src={herophone}
          alt="Phone"
          className="hidden md:block
            absolute
            z-0
            -rotate-24
            drop-shadow-2xl
            rounded-xl
            top-[-100px]
            left-[12%]
            w-[360px]
            lg:-top-[120px]
            lg:left-[10%]
            lg:w-[360px]
          "
        />

        {/* === PC === */}
        <div className="relative w-full flex justify-center overflow-hidden h-[300px] sm:h-[350px] md:h-[300px] lg:h-[300px] z-10 ">
          <img
            src={heropc}
            alt="PC Mockup"
            className="w-full object-cover max-w-full"
            style={{
              minHeight: "550px",
              maxHeight: "500px",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
