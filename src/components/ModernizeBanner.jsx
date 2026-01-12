import React from "react";
import { MoveUpRight } from "lucide-react";
import whybg from "../assets/whybg.png";
import { PiFanFill } from "react-icons/pi";

const KeyBenefitsSection = () => {
  const benefits = [
    {
      metric: "10X",
      subLabel: "FASTER LAUNCH",
      title: "FASTER TIME TO MARKET",
      description: "Launch new products and services 10x faster with flexible configuration tools",
    },
    {
      metric: "35%",
      subLabel: "HIGHER ENGAGEMENT",
      title: "IMPROVED CUSTOMER ENGAGEMENT",
      description: "Deliver seamless omnichannel experiences that keep customers coming back",
    },
    {
      metric: "30%",
      subLabel: "COST REDUCTION",
      title: "OPERATIONAL EFFICIENCY",
      description: "Reduce operational costs through automation and streamlined processes",
    },
    {
      metric: "99.8%",
      subLabel: "UPTIME SLA",
      title: "SECURE & COMPLIANT",
      description: "Enterprise-grade security with built-in compliance for regulatory peace of mind",
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
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mb-2 sm:mb-3">
            Key Benefits for Your Retail Bank
          </h2>
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px]">
            Transform your operations and deliver exceptional value to your customers
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] p-4 sm:p-6 md:p-7 rounded-2xl flex flex-col items-start text-left"
            >
              <PiFanFill className="w-5 h-5 mb-4 sm:mb-6 md:mb-8 text-black" />

              <div className="mb-4 sm:mb-5 md:mb-7">
                <span className="text-[24px] sm:text-[28px] md:text-[34px] font-medium text-[#3A358C] block mb-1">
                  {benefit.metric}
                </span>
                <span className="text-[#7C7C7C] text-[12px] sm:text-[14px] md:text-[16px] uppercase">
                  {benefit.subLabel}
                </span>
              </div>

              <h3 className="text-[#121212] font-medium text-[16px] sm:text-[18px] md:text-[18px] mb-1 sm:mb-2 md:mb-2 uppercase">
                {benefit.title}
              </h3>
              <p className="text-[#646464] text-[14px] sm:text-[16px] md:text-[18px] max-w-full">
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
