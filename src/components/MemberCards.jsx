import React from "react";
import simpleImg from "../assets/member1.jpg"; // Replace with your actual image paths
import automatedImg from "../assets/member2.jpg";
import auditImg from "../assets/member3.jpg";

const features = [
  {
    title: "Easy Product Configuration",
    description: "Set up new savings products, loan types, and member services without technical expertise. Intuitive admin tools make changes simple.",
    img: simpleImg,
  },
  {
    title: "Automated Processes",
    description: "Automate loan approvals, interest calculations, dividend distributions, and statement generation to reduce manual work.",
    img: automatedImg,
  },
  {
    title: "Clear Audit Trails",
    description: "Complete transaction history and audit logs provide transparency and meet regulatory requirements effortlessly.",
    img: auditImg,
  },
];

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-semibold mb-5 text-[#000000]">
          Operational Simplicity
        </h2>
        <p className="text-[#5E5E5E] max-w-2xl mx-auto text-[18px] leading-relaxed">
          Modern technology shouldn't be complicated. FinEdge makes operations straightforward
        </p>
      </div>

      {/* Balanced 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-28 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col rounded-4xl overflow-hidden bg-[#F5F5F5]"
          >
            {/* Image Container */}
            <div className="h-64 overflow-hidden">
              <img 
                src={feature.img} 
                alt={feature.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Text Content */}
            <div className="p-10 grow">
              <h3 className="text-[24px] font-semibold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-[#646464] text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;