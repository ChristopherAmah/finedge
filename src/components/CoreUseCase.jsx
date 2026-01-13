import React from 'react';
import { Leaf, RefreshCcw, LayoutGrid, Calculator, ArrowUpRight } from 'lucide-react';
import chall from '../assets/core.jpg';
import { FaLeaf } from "react-icons/fa";
import { PiFanFill } from "react-icons/pi";
import { RiGlasses2Fill } from "react-icons/ri";
import { IoAlertCircle } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";

const BankChallenges = () => {
  const challenges = [
    {
      title: "Loan Lifecycle Management",
      description: "End-to-end loan management, from application to repayment. Customizable interest rates and automated alerts ensure a healthy portfolio.",
      icon: <FaLeaf className="w-5 h-5" />,
    },
    {
      title: "Savings & Deposit Products",
      description: "Provide diverse savings plans with varying rates and terms. Streamline interest calculations and account oversight.",
      icon: <PiFanFill className="w-5 h-5" />,
    },
    {
      title: "Agent & USSD Banking",
      description: "Extend your reach with agent networks and USSD channels. Enable customers to transact without smartphones or internet access.",
      icon: <IoPieChartSharp  className="w-5 h-5" />,
    },
    {
      title: "Customer Onboarding & KYC",
      description: "Streamlined digital onboarding with built-in KYC verification. Reduce paperwork and onboard customers in minutes, not days.",
      icon: <RiGlasses2Fill  className="w-5 h-5" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-28 py-12 md:py-16 font-sans text-[#000000]">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-medium mb-3 mx-auto max-w-xl">
          Core Use Cases for Microfinance
        </h2>
        <p className="text-[#5E5E5E] max-w-lg mx-auto text-[16px] sm:text-[18px]">
          Everything you need to run and grow your microfinance institution
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left: Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {challenges.map((item, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <div className="bg-[#F5F5F5] w-10 h-10 rounded-[14px] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-medium leading-snug">
                {item.title}
              </h3>
              <p className="text-[#686868] text-sm sm:text-md">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* CTA Button */}
          <div className="sm:col-span-2">
            <button className="bg-[#3A358C] text-[#FFFFFF] px-4 sm:px-5 py-2.5 text-sm sm:text-md rounded-full font-medium flex items-center gap-2 hover:bg-[#333175] transition-colors">
              Contact Sales <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Featured Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <img
            src={chall}
            alt="Professional in a meeting room expressing stress"
            className="rounded-[2.5rem] w-full h-full object-cover shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default BankChallenges;
