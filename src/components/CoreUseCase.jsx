import React from 'react';
import { Leaf, RefreshCcw, LayoutGrid, Calculator, ArrowUpRight } from 'lucide-react';
import chall from '../assets/challenges.jpg';
import { FaLeaf } from "react-icons/fa";
import { PiFanFill } from "react-icons/pi";
import { RiGlasses2Fill } from "react-icons/ri";
import { IoAlertCircle } from "react-icons/io5";



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
      icon: <IoAlertCircle  className="w-5 h-5" />,
    },
    {
      title: "Customer Onboarding & KYC",
      description: "Streamlined digital onboarding with built-in KYC verification. Reduce paperwork and onboard customers in minutes, not days.",
      icon: <RiGlasses2Fill  className="w-5 h-5" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-28 py-16 font-sans text-[#000000]">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium mb-3 mx-auto max-w-xl">
          Challenges Faced by Retail Banks Today
        </h2>
        <p className="text-[#5E5E5E] max-w-lg mx-auto text-[18px]">
          Modern retail banking demands require modern infrastructure. Are these
          challenges holding you back?
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        
        {/* Left: Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-x-20 gap-y-20">
          {challenges.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-[#F5F5F5] w-10 h-10 rounded-[14px] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium leading-snug">
                {item.title}
              </h3>
              <p className="text-[#686868] text-md">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* CTA Button */}
          <div className="">
            <button className="bg-[#3A358C] text-[#FFFFFF] px-5 py-2.5 text-md rounded-full font-medium flex items-center gap-2 hover:bg-[#333175] transition-colors">
              Contact Sales <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Featured Image */}
        <div className="relative h-[500px] w-full">
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