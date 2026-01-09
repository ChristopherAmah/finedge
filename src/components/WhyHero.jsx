import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import arm from '../assets/arm.png';
import whyfinedge from '../assets/whyfinedge.png';


const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-28 py-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content Column */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl sm:text-5xl md:text-[56px] font-semibold text-[#121212] mb-4">
            Scale Your Banking <br /> Operations with <br /> Confidence
          </h1>

          <p className="text-lg sm:text-[20px] text-[#7C7C7C] mb-8 max-w-xl">
            A cloud-native banking platform for growth, reliability, and innovation. 
            Empowering financial institutions to revolutionize operations and deliver 
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="bg-[#3B348E] text-md text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#2d276e] transition-colors">
              Request a Demo
            </button>
            <button className="bg-[#EEEEEE] text-md text-[#121212] px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Contact Sales <span><MdOutlineArrowOutward /></span>
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-[#7C7C7C] text-sm">
             <div className="flex -space-x-2">
                {/* Placeholder for small partner logos */}
                <img src={arm} alt="" className='w-12'/>
             </div>
             <span>Trusted by 20+ Finance Institutions.</span>
          </div>
        </div>

        {/* Right Image/Graphic Column */}
        <div className="flex-1 relative w-full flex justify-center items-center">
          <div className="w-full aspect-4/3 flex items-center justify-center">
            <img src={whyfinedge} alt="Banking Dashboard" className="w-full h-auto" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;