import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import chall from '../assets/startup.jpg';
import { FaLeaf } from "react-icons/fa";
import { PiFanFill } from "react-icons/pi";
import { RiGlasses2Fill } from "react-icons/ri";
import { IoAlertCircle } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";


const BankChallenges = () => {
  const challenges = [
    {
      title: "Open APIs for Rapid Integration",
      description: "APIs with comprehensive documentation. Integrate banking capabilities into your app in hours, not weeks.",
      icon: <FaLeaf className="w-5 h-5" />,
    },
    {
      title: "Real-Time Transaction Processing",
      description: "Process payments, transfers, and account operations instantly with sub-second latency. Built for modern user expectations.",
      icon: <PiFanFill className="w-5 h-5" />,
    },
    {
      title: "Cloud & SaaS Deployment",
      description: "Cloud-native infrastructure that scales automatically. No servers to manage, no infrastructure headaches.",
      icon: <IoPieChartSharp className="w-5 h-5" />,
    },
    {
      title: "Modular Product Setup",
      description: "Pick and choose the banking features you need. Start with accounts and payments, add more as you grow.",
      icon: <RiGlasses2Fill className="w-5 h-5" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 font-sans text-[#000000]">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium mb-3 mx-auto max-w-xl">
          Startup-Focused Capabilities
        </h2>
        <p className="text-[#5E5E5E] text-base sm:text-lg md:text-[18px] max-w-lg mx-auto">
          Everything you need to build and launch innovative financial products
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        
        {/* Left: Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10">
          {challenges.map((item, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <div className="bg-[#F5F5F5] w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
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
          <div className="col-span-full mt-2 sm:mt-4 flex justify-start sm:justify-start">
            <button className="bg-[#3A358C] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-md rounded-full font-medium flex items-center gap-2 hover:bg-[#333175] transition-colors">
              Contact Sales <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Right: Featured Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px]">
          <img
            src={chall}
            alt="Startup workspace with professional"
            className="rounded-2xl sm:rounded-[2.5rem] w-full h-full object-cover shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default BankChallenges;
