import React from 'react';
import man_using_phone from '../assets/bank1.jpg';
import internet_banking_cards from '../assets/bank2.png';

const FinEdgeHero = () => {
  return (
    <div className="min-h-screen bg-white py-8" id='online-banking'>

      {/* --- Main Header Section --- */}
      <div className="py-10 px-4 sm:px-6 lg:px-28">
        <div className="max-w-7xl mx-auto text-center">

          {/* Main Title and Subtitle */}
          <h1 className="text-[28px] sm:text-[36px] lg:text-[54px] font-semibold max-w-3xl mx-auto text-[#121212] mb-3 leading-snug sm:leading-tight">
            Bank Anywhere with FinEdge Online
          </h1>
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#6C6C6C] max-w-xl mx-auto mb-12 sm:mb-20">
            A single digital channel experience available on both mobile and web.
          </p>

          {/* FIRST CONTENT SECTION: Mobile Banking */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
            
            {/* Image Container */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 max-w-lg">
              <img 
                src={man_using_phone} 
                alt="Man smiling while using mobile banking app"
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-[20px]" 
              />
            </div>

            {/* Text + Button */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start text-center lg:text-left">
              <div className="flex flex-col justify-between h-auto lg:h-[400px] pt-4 pb-4">
                <div>
                  <p className="text-[12px] sm:text-[14px] uppercase tracking-widest text-[#7C7C7C] mb-2 sm:mb-3">
                    FINEDGE MOBILE BANKING
                  </p>
                  <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-[#000000] mb-2 leading-snug">
                    Managing Mobile Banking
                  </h2>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#5E5E5E] mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                    Fast sign in, transfers, payments, statements, alerts, and card tools.
                  </p>
                </div>

                {/* Button */}
                <div className="flex justify-center lg:justify-start">
                  <a href="mailto:info@thefifthlab.com">
                    <button className="px-5 sm:px-6 py-2 sm:py-2.5 text-[15px] sm:text-[17px] font-medium rounded-full text-white bg-[#3A358C] hover:bg-indigo-800 transition duration-300 shadow-md">
                      Schedule A Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- SECOND CONTENT SECTION: Internet Banking --- */}
      <div className="py-10 px-4 sm:px-6 lg:px-28">
        <div className="max-w-7xl mx-auto text-center">

          <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:space-x-reverse lg:space-x-10">
            
            {/* Image */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 max-w-lg">
              <img 
                src={internet_banking_cards}
                alt="Internet banking interface with bank cards"
                className="w-full h-auto object-contain rounded-[20px]" 
              />
            </div>

            {/* Text + Button */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start text-center lg:text-left max-w-lg">
              <div className="flex flex-col justify-between h-auto lg:h-[400px] pt-4 pb-4">
                <div>
                  <p className="text-[12px] sm:text-[14px] uppercase tracking-widest text-[#7C7C7C] mb-2 sm:mb-3">
                    FINEDGE ONLINE BANKING
                  </p>
                  <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-[#000000] mb-2 leading-snug">
                    Managing Internet Banking
                  </h2>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#5E5E5E] mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                    Perfect for individuals and businesses. Supports roles, approvals, bulk transfers, limits, audit trails, and account views.
                  </p>
                </div>

                {/* Button */}
                <div className="flex justify-center lg:justify-start">
                  <a href="mailto:info@thefifthlab.com">
                    <button className="px-5 sm:px-6 py-2 sm:py-2.5 text-[15px] sm:text-[17px] font-medium rounded-full text-white bg-[#3A358C] hover:bg-indigo-800 transition duration-300 shadow-md">
                      Schedule A Demo
                    </button>
                  </a>
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
