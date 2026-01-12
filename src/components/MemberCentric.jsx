import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import chall from '../assets/member.jpg';
import { FaLeaf } from "react-icons/fa";
import { PiFanFill } from "react-icons/pi";
import { RiGlasses2Fill } from "react-icons/ri";
import { IoPieChartSharp } from "react-icons/io5";

const MemberCapabilities = () => {
  const capabilities = [
    {
      title: "Savings & Loan Management",
      description: "Tools to manage member savings, share accounts, and loans with flexible terms and rates.",
      icon: <FaLeaf className="w-5 h-5" />,
    },
    {
      title: "Member Account Transparency",
      description: "Give members complete visibility into their accounts, transactions, and balances through intuitive online and mobile interfaces.",
      icon: <PiFanFill className="w-5 h-5" />,
    },
    {
      title: "Real-Time Reporting",
      description: "Get accurate financial statements, member reports, and regulatory filings instantly.",
      icon: <IoPieChartSharp className="w-5 h-5" />,
    },
    {
      title: "Multi-Channel Access",
      description: "Give members access to their accounts on the web, mobile app, or in person with consistent experiences.",
      icon: <RiGlasses2Fill className="w-5 h-5" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 font-sans text-[#000000]">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-5 mx-auto max-w-2xl">
          Member-Centric Capabilities
        </h2>
        <p className="text-[#5E5E5E] text-base sm:text-lg md:text-[20px] max-w-xl mx-auto">
          Everything your credit union needs to serve members effectively
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left: Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10">
          {capabilities.map((item, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <div className="bg-[#F5F5F5] w-10 h-10 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-[20px] md:text-[22px] font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-[#686868] text-sm sm:text-[15px] md:text-[16px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4 col-span-full flex justify-start sm:justify-start">
            <button className="bg-[#3F3D8F] text-white px-4 sm:px-5 py-2.5 sm:py-2.5 text-sm sm:text-md rounded-full font-medium flex items-center gap-2 hover:bg-[#333175] transition-colors">
              Contact Sales <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Right: Featured Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px]">
          <img
            src={chall}
            alt="Dashboard on laptop screen"
            className="rounded-2xl sm:rounded-[2.5rem] w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default MemberCapabilities;
