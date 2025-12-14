import React from 'react';
import corebank from '../assets/corebank.jpg';

// Component for the individual feature cards
const FeatureCard = ({ title, description }) => (
  <div className="mb-8 md:mb-12">
    <h3 className="text-[22px] font-semibold text-[#000000] mb-1">
      {title}
    </h3>
    <p className="text-[#7C7C7C] text-md">
      {description}
    </p>
  </div>
);

// Main component for the Finedge Core Banking section
const FinedgeCoreBanking = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-28">
      <div className="max-w-7xl mx-auto">

        {/* --- MAIN HEADING + DESCRIPTION --- */}
        <div className="mb-16 max-w-3xl" id='core-banking'>
          <h1 className="text-4xl sm:text-[54px] font-semibold text-[#121212] leading-tight mb-3">
            Finedge <br />
            Core Banking
          </h1>

          <p className="text-[24px] text-[#6C6C6C] max-w-xl leading-tight tracking-tight">
            FinEdge gives in a flexible, secure, and ready for growth. All your
            products and operations sit on a single system that updates in real time.
          </p>
        </div>

        {/* --- TWO COLUMN LAYOUT: FEATURES + IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT: FEATURE CARDS */}
          <div className="">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20">
              <FeatureCard
                title="Deposits and Savings"
                description="Create and manage account types with automated workflows."
              />
              <FeatureCard
                title="Loans & Credits"
                description="Set up loan products, track performance, and manage approvals."
              />
              <FeatureCard
                title="Wallets and Digital Accounts"
                description="Instant onboarding and seamless KYC flow."
              />
              <FeatureCard
                title="Integration"
                description="Direct connections to NIBSS, payment providers, and internal systems."
              />
            </div>

            <a href="mailto:info@thefifthlab.com">
              <button className="mt-14 px-5 py-2.5 rounded-full text-white text-[17px] font-medium bg-[#3A358C] hover:bg-indigo-800 transition duration-300">
              Schedule A Demo
            </button>
            </a>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96 lg:h-full overflow-hidden rounded-[20px]">
              <img src={corebank} alt="" 
              className='bg-cover w-full h-full'/>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FinedgeCoreBanking;
