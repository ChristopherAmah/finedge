import React from 'react';
import partner1 from '../assets/partner1.jpg';
import partner2 from '../assets/partner2.jpg';
import partner3 from '../assets/partner3.jpg';

const PartnershipSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-28 py-20 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium text-[#000000] mb-4">
          Why Partner With FinEdge
        </h2>
        <p className="text-[#5E5E5E] text-[18px] max-w-lg mx-auto">
          A trusted partner with proven expertise in transforming banking operations
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/* Card 1: Deep Industry Experience */}
        <div className="flex flex-col rounded-[20px] overflow-hidden ">
          <div className="bg-[#F4EFFC] p-8 grow">
            <h3 className="text-2xl font-medium text-[#000000] mb-2">Deep Industry Experience</h3>
            <p className="text-[#5E5E5E] text-sm">
              With over a decade of core banking expertise, our team deeply understands 
              the challenges and regulations of today's financial institutions.
            </p>
          </div>
          <div className="overflow-hidden ">
             {/* Replace with your actual image */}
            <img src={partner1} alt="" className='rounded-b-[20px]'/>
          </div>
        </div>

        {/* Card 2: Proven Deployments */}
        <div className="flex flex-col rounded-[20px] overflow-hidden ">
          <div className="overflow-hidden">
             {/* Replace with your actual image */}
            <img src={partner2} alt="" className='rounded-t-[20px]'/>
          </div>
          <div className="bg-[#EAFBF0] p-8 grow">
            <h3 className="text-2xl font-medium text-[#000000] mb-2">Proven Deployments</h3>
            <p className="text-[#5E5E5E] text-sm">
              Successfully deployed across 50+ financial institutions ranging from 
              microfinance organizations to regional banks. Our track record speaks for itself.
            </p>
          </div>
        </div>

        {/* Card 3: Built for African Banking */}
        <div className="flex flex-col rounded-[20px] overflow-hidden">
          <div className="bg-[#EAFBFB] p-8 grow">
            <h3 className="text-2xl font-medium text-[#000000] mb-2">Built for African Banking</h3>
            <p className="text-[#5E5E5E] text-sm">
              Designed specifically for African banking regulations and ecosystems. 
              Native support for local compliance requirements, multi-currency operations, 
              and regional payment systems.
            </p>
          </div>
          <div className="overflow-hidden">
             {/* Replace with your actual pattern image */}
            <img src={partner3} alt="" className='rounded-b-[20px]'/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipSection;