import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import chall from '../assets/challenges.jpg';
import { FaLeaf } from "react-icons/fa";
import { PiFanFill } from "react-icons/pi";
import { RiGlasses2Fill } from "react-icons/ri";
import { IoAlertCircle } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";

const BankChallenges = () => {
  const challenges = [
    {
      title: "Legacy System Limitations",
      description: "Outdated infrastructure struggles with modern digital demands and integration capabilities.",
      icon: <FaLeaf className="w-5 h-5" />,
    },
    {
      title: "Slow Product Rollout",
      description: "Months-long timelines to launch new products and features, missing market opportunities.",
      icon: <PiFanFill className="w-5 h-5" />,
    },
    {
      title: "Fragmented Customer Experiences",
      description: "Disconnected channels create inconsistent experiences across mobile, web, and branch.",
      icon: <IoPieChartSharp  className="w-5 h-5" />,
    },
    {
      title: "High Operational Costs",
      description: "Manual processes and maintenance of legacy systems drain resources and budgets.",
      icon: <RiGlasses2Fill  className="w-5 h-5" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-16 font-sans text-[#000000]">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-medium mb-3 mx-auto max-w-xl">
          Challenges Faced by Retail Banks Today
        </h2>
        <p className="text-[#5E5E5E] text-[16px] sm:text-[18px] max-w-lg mx-auto">
          Modern retail banking demands require modern infrastructure. Are these
          challenges holding you back?
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left: Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8">
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
          <div className="sm:col-span-2 mt-2 sm:mt-4">
            <a href="mailto:info@thefifthlab.com">

            <button className="bg-[#3A358C] text-[#FFFFFF] px-4 sm:px-5 py-2.5 text-sm sm:text-md rounded-full font-medium flex items-center gap-2 hover:bg-[#333175] transition-colors">
              Contact Sales <ArrowUpRight className="w-4 h-4" />
            </button>
            </a>
          </div>
        </div>

        {/* Right: Featured Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <img
            src={chall}
            alt="Professional in a meeting room expressing stress"
            className="rounded-2xl sm:rounded-[2.5rem] w-full h-full object-cover shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default BankChallenges;
