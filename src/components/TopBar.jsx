import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react'; // Using lucide-react for the icons

const AnnouncementBanner = () => {
  return (
    <div className="w-full bg-black text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base ">
        
        {/* Left Side: Icon and Title */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="font-semibold whitespace-nowrap text-[11px]">
            Introducing Finedge Version 2
          </span>
        </div>

        {/* Middle: Description */}
        <p className="text-white text-[9px] font-medium text-center md:text-left">
          A new way to expand your banking process with Finedge
        </p>

        {/* Right Side: CTA Button */}
        <button className="flex items-center gap-2 px-4 py-1.5 border border-white rounded-[5px] hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
          <span className="font-semibold text-[9px]">Check Out Version 2.0</span>
          <ArrowRight className="w-4 h-4 text-[#85BF4B]" />
        </button>
        
      </div>
    </div>
  );
};

export default AnnouncementBanner;