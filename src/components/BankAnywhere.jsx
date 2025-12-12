// src/components/FinEdgeHero.jsx

import React from 'react';
import man_using_phone from '../assets/bank1.jpg'; // Your first image
import internet_banking_cards from '../assets/bank2.png'; // <-- New image file placeholder

const FinEdgeHero = () => {
  return (
    // Use a fragment or a main div for the entire page content
    <div className="min-h-screen bg-white">
      
      {/* --- Main Header Section (Copied from your original code) --- */}
      <div className="py-10 px-4 sm:px-6 lg:px-28"> 
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Main Title and Subtitle */}
          <h1 className="text-[54px] font-semibold max-w-3xl mx-auto text-[#121212] mb-3 leading-tight">
            Bank Anywhere with FinEdge Online
          </h1>
          <p className="text-[24px] text-[#6C6C6C] max-w-xl mx-auto mb-20">
            A single digital channel experience available on both mobile and web.
          </p>

          {/* FIRST CONTENT SECTION: Mobile Banking (Image Left) */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
            
            {/* Image Container (Left) */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 max-w-lg">
              <img 
                src={man_using_phone} 
                alt="Man smiling while using mobile banking app"
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-[20px]" 
              />
            </div>

            {/* Text and Button Container (Right) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start text-left">
              
              {/* Text */}
              <div className="h-[300px] lg:h-[400px] flex flex-col justify-between pt-4 pb-4">
                <div>
                  <p className="text-[14px] uppercase tracking-widest text-[#7C7C7C] mb-3">
                    FINEDGE MOBILE BANKING
                  </p>
                  <h2 className="text-[40px] font-semibold text-[#000000] mb-2 leading-snug">
                    Managing Mobile Banking
                  </h2>
                  <p className="text-[20px] text-[#5E5E5E] mb-8 max-w-md">
                    Fast sign in, transfers, payments, statements, alerts, and card tools.
                  </p>
                </div>

                {/* Bottom-left button */}
                <div>
                  <button className="px-6 py-2 text-[17px] font-medium rounded-full text-white bg-[#3A358C] hover:bg-indigo-800 transition duration-300 shadow-md">
                    Schedule A Demo
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* --- SECOND CONTENT SECTION: Internet Banking (Image Right) --- */}
      {/* Note the use of lg:flex-row-reverse to swap the order on large screens */}
      <div className="py-10 px-4 sm:px-6 lg:px-28">
        <div className="max-w-7xl mx-auto text-center">

          <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:space-x-reverse lg:space-x-10">
            
            {/* Image Container (Right on desktop) */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 max-w-lg">
              {/* This image is more complex (cards/screen overlay) so it's treated as one graphic. */}
              <img 
                src={internet_banking_cards} // <-- Replace with your graphic path
                alt="Internet banking interface with bank cards"
                className="w-full h-auto object-contain" 
              />
            </div>

            {/* Text and Button Container (Left on desktop) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start text-left max-w-lg">
              
              {/* Text */}
              <div className="h-[300px] lg:h-[400px] flex flex-col justify-between pt-4 pb-4">
                <div>
                  <p className="text-[14px] uppercase tracking-widest text-[#7C7C7C] mb-3">
                    FINEDGE ONLINE BANKING
                  </p>
                  <h2 className="text-[40px] font-semibold text-[#000000] mb-2 ">
                    Managing Internet Banking
                  </h2>
                  <p className="text-[20px] text-[#5E5E5E] mb-8 max-w-lg">
                    Perfect for individuals and businesses. Supports roles, approvals, bulk transfers, limits, audit trails, and account views.
                  </p>
                </div>

                {/* Bottom-left button */}
                <div>
                  <button className="px-6 py-2 text-[17px] font-medium rounded-full text-white bg-[#3A358C] hover:bg-indigo-800 transition duration-300 shadow-md">
                    Schedule A Demo
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FinEdgeHero;