import React from 'react';
import { Building2, Users } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      initials: "RB",
      company: "Regional Bank of East Africa",
      type: "Retail Bank",
      industry: "Retail Banking",
      scale: "45 Branches",
      accentColor: "bg-[#50BFBF]",
      challenge: "Legacy core banking system limiting digital transformation and causing frequent downtime",
      solution: "Migrated to FinEdge cloud-native platform with phased rollout across 45 branches",
      results: [
        { label: "Uptime achieved", value: "99.9%" },
        { label: "Faster transactions", value: "60%" },
        { label: "Faster product launch", value: "10x" },
      ]
    },
    {
      id: 2,
      initials: "MF",
      company: "Community Microfinance Ltd",
      type: "Microfinance Bank",
      industry: "Microfinance",
      scale: "500+ Agents",
      accentColor: "bg-[#3A358C]",
      challenge: "Manual loan processing taking 7+ days, high operational costs, and limited rural reach",
      solution: "Implemented FinEdge with agent banking network and USSD channels for financial inclusion",
      results: [
        { label: "Loan approval time", value: "2 Days" },
        { label: "Customer growth", value: "200%" },
        { label: "Cost reduction", value: "45%" },
      ]
    },
    {
        id: 3,
        initials: "CU",
        company: "Unity Credit Union",
        type: "Credit Union",
        industry: "Credit Union",
        scale: "12,000 Members",
        accentColor: "bg-[#85BF4B]", // The specific green from the image
        challenge: "Outdated member services, poor visibility into accounts, and high maintenance costs",
        solution: "Deployed FinEdge with member portal and mobile app for transparent self-service",
        results: [
            { label: "Member satisfaction", value: "92%" },
            { label: "Lower operating costs", value: "40%" },
            { label: "Digital adoption", value: "5x" },
        ]
    }
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-28">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium text-[#000000] mb-4">Customer Success Stories</h2>
        <p className="text-[#5E5E5E] text-[18px]">
          Real results from financial institutions who transformed their operations with FinEdge
        </p>
      </div>

      {/* Stories Container */}
      <div className="max-w-7xl mx-auto space-y-8 ">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col lg:flex-row border border-[#0000001A] rounded-xl overflow-hidden shadow-sm">
            
            {/* Left Column: Branding */}
            <div className={`${story.accentColor} p-8 lg:w-1/3 text-white flex flex-col justify-between`}>
              <div>
                <div className="w-12 h-12 p-4 bg-transparent/70 backdrop-blur-md text-[#FFFFFF] border border-[#FFFFFF4D] rounded-[14px] flex items-center justify-center font-bold text-xl mb-6">
                  {story.initials}
                </div>
                <h3 className="text-[24px] font-medium mb-2">{story.company}</h3>
                <p className=" text-[14px] mb-6">{story.type}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[14px]">
                    <Building2 size={18} className="opacity-70" />
                    <span>{story.industry}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px]">
                    <Users size={18} className="opacity-70" />
                    <span>{story.scale}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Details */}
            <div className="p-8 lg:w-1/3 bg-white border-r border-gray-100">
              <div className="mb-8">
                <h4 className="text-[14px] font-medium uppercase text-[#121212] mb-2">Challenge</h4>
                <p className="text-[#6C6C6C] text-[15px]">{story.challenge}</p>
              </div>
              <div>
                <h4 className="text-[14px] font-medium uppercase text-[#121212] mb-2">Solution</h4>
                <p className="text-[#6C6C6C] text-[15px]">{story.solution}</p>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="p-8 lg:w-1/3 bg-[#F0F5FA] flex flex-col gap-4">
              <h4 className="text-[14px] font-medium uppercase text-[#364153] mb-6">Results</h4>
              {story.results.map((result, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-[10px] border border-[#DBEAFE]">
                  <div className="text-3xl font-bold text-[#155DFC] mb-1">{result.value}</div>
                  <div className="text-[14px] text-[#4A5565]">{result.label}</div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;