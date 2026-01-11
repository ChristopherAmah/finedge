import React from "react";
import whybg from "../assets/whybg.png";
import { PiFanFill } from "react-icons/pi";

const KeyBenefitsSection = () => {
  const benefits = [
    {
      title: "EASY PARTNER INTEGRATIONS",
      description: "Connect with payment gateways, KYC providers, credit bureaus, and other services through our partner ecosystem.",
    },
    {
      title: "ANALYTICS & REAL-TIME INSIGHTS",
      description: "Built-in dashboards and analytics help you understand user behavior, optimize features, and make data-driven decisions.",
    },
    {
      title: "MULTI-CHANNEL EXPANSION",
      description: "Launch on web, mobile, or via API partners. One platform supports all channels as you expand your reach.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-28 overflow-hidden bg-[#3F3D8F]">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${whybg})` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-left">
        {/* Header Updated for Growth Enablement */}
        <div className="mb-20">
          <h2 className="text-white text-5xl font-medium mb-4 max-w-xl">
            Growth Enablement
          </h2>
          <p className="text-white text-[18px] opacity-90">
            Tools and features designed to help you scale rapidly and sustainably
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-[#F5F5F5] p-10 rounded-3xl flex flex-col items-start text-left ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <PiFanFill className="w-6 h-6 mb-12 text-black" />
              
              <h3 className="text-[#121212] font-semibold text-[20px] mb-3 uppercase tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-[#646464] text-[18px] leading-relaxed">
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