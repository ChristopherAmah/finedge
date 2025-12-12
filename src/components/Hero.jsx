import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import arm from '../assets/arm.png';
import heropc from '../assets/heropc.png';
import herophone from '../assets/herophone.png';

const Hero = () => {
  return (
    <section className="text-center pb-0 relative">
      
      {/* Headline */}
      <h1 className="text-5xl md:text-[64px] font-bold text-[#121212] leading-tight mb-4 max-w-5xl mx-auto">
        Integrated <br />banking & payment automation <br />solution
      </h1>

      {/* Description */}
      <p className="text-[20px] text-[#7C7C7C] mb-5 max-w-4xl mx-auto">
        FinEdge brings your core operations, digital channels, and payment services
        into one powerful platform. Faster deployment, easier management,
        and a product built for African financial institutions.
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-2 mb-6">
        <button className="bg-[#3A358C] hover:bg-indigo-700 text-white text-md font-medium py-2.5 px-5 rounded-full transition">
          Request a Demo
        </button>
        <button className="flex bg-[#EEEEEE] hover:bg-gray-100 text-[#222222] font-medium py-2.5 px-5 rounded-full transition">
          Get Started <MdArrowOutward size={18} className="ml-2 mt-1" />
        </button>
      </div>

      {/* Trusted */}
      <div className="flex justify-center items-center space-x-2 text-sm text-[#7C7C7C] mb-2">
        <img src={arm} alt="ARM" className="w-20" />
        <span>Trusted by 20+ Finance Institutions.</span>
      </div>

      {/* IMAGES SECTION */}
      <div className="relative w-full flex justify-center pb-0 mt-2">

        {/* === PHONE === */}
        <img
          src={herophone}
          alt="Phone"
          className="
            absolute
            z-0
            -rotate-24
            drop-shadow-2xl
            rounded-xl

            /* Desktop — keep your exact layout */
            md:-top-[100px]
            md:left-[12%]
            md:w-[360px]

            /* Mobile/tablet responsive fixes */
            top-[-90px]
            left-[5%]
            w-[180px]
          "
        />

        {/* === PC (Half visible) === */}
        <div className="relative w-full flex justify-center overflow-hidden h-[220px] md:h-[300px] z-10">
          <img
            src={heropc}
            alt="PC Mockup"
            className="w-full object-cover"
            style={{
              height: "650px",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
