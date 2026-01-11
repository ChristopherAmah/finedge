import React from "react";
import { MoveUpRight } from "lucide-react";
import whybg from "../assets/whybg.png";
import { PiFanFill } from "react-icons/pi";


const KeyBenefitsSection = () => {
  const benefits = [
    {
      metric: "10X",
      subLabel: "SATISFACTION RATE",
      title: "IMPROVED MEMBER SATISFACTION",
      description: "Faster service, better transparency, and convenient access keep members happy and engaged.",
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
    <section className="relative w-full py-24 px-28 overflow-hidden bg-[#3F3D8F]">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${whybg})` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-left">
        {/* Header Updated with Image Data */}
        <div className="mb-20">
          <h2 className="text-white text-4xl font-medium mb-3">
            Key Benefits for Credit Unions
          </h2>
          <p className="text-white text-[18px]">
            Transform your operations while keeping members at the heart of everything you do
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] p-7 rounded-2xl flex flex-col items-start text-left"
            >
              <PiFanFill  className="w-6 h-6 mb-8 text-black" />
              
              <div className="mb-7">
                <span className="text-[34px] font-medium text-[#3A358C] block mb-1">
                  {benefit.metric}
                </span>
                <span className="text-[#7C7C7C] text-[16px] uppercase">
                  {benefit.subLabel}
                </span>
              </div>

              <h3 className="text-[#121212] font-medium text-[18px] mb-2 uppercase">
                {benefit.title}
              </h3>
              <p className="text-[#646464] text-[18px] max-w-xl">
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