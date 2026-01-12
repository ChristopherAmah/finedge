import React from "react";
import loans from "../assets/launch1.jpg";
import onboarding from "../assets/launch2.jpg";
import customer from "../assets/launch3.jpg";
import payment from "../assets/launch4.jpg";

const features = [
  {
    title: "Faster Time to Market",
    description: "Ship your MVP in weeks, not months. Pre-built banking features let you focus on your unique value proposition.",
    img: onboarding, // Corresponds to top-left image in source
  },
  {
    title: "Simplified Infrastructure",
    description: "No need to hire a large engineering team or manage complex infrastructure. We handle the heavy lifting.",
    img: customer, // Corresponds to top-right image in source
  },
  {
    title: "Built-In Compliance & Security",
    description: "Bank-grade security, data encryption, and regulatory compliance built into the platform from day one.",
    img: payment, // Corresponds to bottom-left image in source
  },
  {
    title: "Scales from MVP to Production",
    description: "Start small and grow without limits. Our infrastructure scales automatically as your user base grows.",
    img: loans, // Corresponds to bottom-right image in source
  },
];

const FeatureGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-4">
        {/* Header Updated for Fintechs */}
        <h2 className="text-4xl font-semibold mb-3 mx-auto max-w-xl text-[#000000]">
          Why FinEdge for Fintechs
        </h2>
        <p className="text-[#5E5E5E] max-w-lg mx-auto text-[18px]">
          Built specifically for startups who need to move fast and innovate continuously
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-6 md:px-28 max-w-7xl mx-auto">
        
        {/* Card 1: Faster Time to Market */}
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

        {/* Card 2: Simplified Infrastructure */}
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

        {/* Card 3: Built-In Compliance & Security */}
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

        {/* Card 4: Scales from MVP to Production */}
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