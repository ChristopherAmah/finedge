import React from 'react';
// Importing icons from Lucide or similar library
import { TrendingUp, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const DemoCapabilities = () => {
  const capabilities = [
    {
      title: "Core Banking Capabilities",
      description: "See how FinEdge handles product configuration, account management, loan processing, and real-time transaction processing at scale.",
      icon: <TrendingUp className="w-6 h-6 text-gray-800" />
    },
    {
      title: "Digital Channels",
      description: "Experience seamless mobile, web, USSD, corporate, and agent banking channels—all integrated with a single core system.",
      icon: <Zap className="w-6 h-6 text-gray-800" />
    },
    {
      title: "Open API & Integrations",
      description: "Discover how FinEdge connects with payment gateways, switches, KYC providers, and third-party services through open APIs.",
      icon: <ShieldCheck className="w-6 h-6 text-gray-800" />
    },
    {
      title: "Security & Compliance",
      description: "Review built-in security controls, comprehensive audit trails, data protection, and regulatory compliance features.",
      icon: <Sparkles className="w-6 h-6 text-gray-800" />
    }
  ];

  return (
    <section className="bg-white py-[103.26px] px-6 lg:px-28 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-[#000000] mb-3">
            What You'll See in the Demo
          </h2>
          <p className="text-[#5E5E5E] text-[18px] max-w-lg mx-auto">
            Get a comprehensive walkthrough of the capabilities that matter most to your institution
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#EAFBFB] p-7 rounded-2xl flex flex-col items-start transition-transform hover:scale-[1.02] duration-300"
            >
              {/* Icon Container */}
              <div className="bg-white p-4 rounded-[21.33px] mb-30">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[20px] font-medium text-[#000000] mb-1">
                {item.title}
              </h3>
              <p className="text-[#7C7C7C] text-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default DemoCapabilities;