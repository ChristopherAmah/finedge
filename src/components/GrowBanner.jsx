import React from "react";
import whybg from "../assets/whybg.png";
import { PiFanFill } from "react-icons/pi";

const KeyBenefitsSection = () => {
  const benefits = [
    {
      title: "REDUCED MANUAL PROCESSES",
      description: "Automate loan calculations, interest accrual, and payment tracking to free up staff time",
    },
    {
      title: "BETTER PORTFOLIO VISIBILITY",
      description: "Real-time dashboards and reports help you monitor loan performance and identify risks early",
    },
    {
      title: "IMPROVED SERVICE DELIVERY",
      description: "Faster loan approvals and disbursements create happier customers and better retention",
    },
    {
      title: "REGULATORY COMPLIANCE",
      description: "Built-in audit trails and reporting tools ensure compliance with microfinance regulations",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-28 overflow-hidden bg-[#3F3D8F]">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${whybg})` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-left">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium mb-4 max-w-xl">
            Key Benefits for Your Micro Finance Banks
          </h2>
          <p className="text-white text-[16px] sm:text-[18px] opacity-90 max-w-lg">
            Transform your operations with modern technology designed for efficiency
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col items-start text-left"
            >
              <PiFanFill className="w-6 h-6 mb-4 sm:mb-6 md:mb-12 text-black" />
              
              <h3 className="text-[#121212] font-semibold text-[18px] sm:text-[20px] mb-2 sm:mb-3 uppercase tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-[#646464] text-[16px] sm:text-[18px] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
