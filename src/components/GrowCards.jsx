import React from "react";
import loans from "../assets/grow1.jpg";
import onboarding from "../assets/grow2.jpg";
import customer from "../assets/grow3.jpg";
import payment from "../assets/grow4.jpg";

const features = [
  {
    title: "SaaS Deployment",
    description: "Cloud-hosted solution with low upfront costs and predictable monthly pricing",
    img: onboarding,
  },
  {
    title: "Rapid Implementation",
    description: "Get live in weeks, not months. Pre-configured templates for common microfinance workflows",
    img: customer,
  },
  {
    title: "Configurable Loan Models",
    description: "Set up custom interest rates, repayment schedules, and loan products without coding",
    img: payment,
  },
  {
    title: "Scales with Growth",
    description: "Start small and expand seamlessly as your customer base and portfolio grows",
    img: loans,
  },
];

const FeatureGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-semibold mb-3 mx-auto max-w-xl text-[#000000]">
          Why FinEdge for Microfinance
        </h2>
        <p className="text-[#5E5E5E] max-w-lg mx-auto text-[18px]">
          Purpose-built features that address the unique needs of microfinance institutions
        </p>
      </div>

      {/* Using a 6-column grid to handle the 2/3 and 1/2 splits accurately */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-6 md:px-28 max-w-7xl mx-auto">
        
        {/* Card 1: SaaS Deployment (Spans 4 columns / ~66%) */}
        <div className="md:col-span-4 flex flex-col rounded-[24px] overflow-hidden bg-[#F5F5F5]">
          <div className="h-64 sm:h-80 overflow-hidden">
            <img 
              src={features[0].img} 
              alt={features[0].title} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          <div className="p-8">
            <h3 className="text-[22px] font-semibold text-black">{features[0].title}</h3>
            <p className="text-[#7C7C7C] text-[16px] mt-2">{features[0].description}</p>
          </div>
        </div>

        {/* Card 2: Rapid Implementation (Spans 2 columns / ~33%) */}
        <div className="md:col-span-2 flex flex-col rounded-[24px] overflow-hidden bg-[#F5F5F5]">
          <div className="h-64 sm:h-80 overflow-hidden">
            <img 
              src={features[1].img} 
              alt={features[1].title} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          <div className="p-8">
            <h3 className="text-[22px] font-semibold text-black">{features[1].title}</h3>
            <p className="text-[#7C7C7C] text-[16px] mt-2">{features[1].description}</p>
          </div>
        </div>

        {/* Card 3: Configurable Loan Models (Spans 3 columns / 50%) */}
        <div className="md:col-span-3 flex flex-col rounded-[24px] overflow-hidden bg-[#F5F5F5]">
          <div className="h-64 sm:h-80 overflow-hidden">
            <img 
              src={features[2].img} 
              alt={features[2].title} 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          <div className="p-8">
            <h3 className="text-[22px] font-semibold text-black">{features[2].title}</h3>
            <p className="text-[#7C7C7C] text-[16px] mt-2">{features[2].description}</p>
          </div>
        </div>

        {/* Card 4: Scales with Growth (Spans 3 columns / 50%) */}
        <div className="md:col-span-3 flex flex-col rounded-[24px] overflow-hidden bg-[#F5F5F5]">
          <div className="h-64 sm:h-80 overflow-hidden">
            <img 
              src={features[3].img} 
              alt={features[3].title} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          <div className="p-8">
            <h3 className="text-[22px] font-semibold text-black">{features[3].title}</h3>
            <p className="text-[#7C7C7C] text-[16px] mt-2">{features[3].description}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;