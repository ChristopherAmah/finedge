import React from 'react';
import { TrendingUp, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const stats = [
    { value: '20+', label: (
    <>
      Banks &<br />
      Financial Institutions
    </>
  ) },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Expert Support' },
  ];

  const features = [
    {
      title: 'Built To Scale',
      description: 'Scalable architecture supports multi-entity, multi-currency transactions, enabling seamless expansion across regions.',
      icon: <TrendingUp className="w-6 h-6 text-gray-800" />,
    },
    {
      title: 'Easy To Use',
      description: 'Easy-to-use platform for staff and clients. Streamline training and boost productivity with simple design and workflows.',
      icon: <Zap className="w-6 h-6 text-gray-800" />,
    },
    {
      title: 'Secure & Reliable',
      description: '99% uptime and strong security. Automated backups and compliance ensure smooth operation.',
      icon: <ShieldCheck className="w-6 h-6 text-gray-800" />,
    },
    {
      title: 'Innovation Ready',
      description: 'Open APIs and modular design drive innovation. Integrate services, create features, and use analytics to stay ahead.',
      icon: <Sparkles className="w-6 h-6 text-gray-800" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-28 py-16 font-sans">
      {/* Top Stats Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
        <div>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#000000] mb-3">Our stats</h2>
          <p className="text-[#7C7C7C] text-[18px]">Made for Financial Institutions</p>
        </div>
        
        <div className="flex gap-6 sm:gap-12 mt-8 md:mt-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-2xl sm:text-4xl font-medium text-[#3A358C] mb-3">{stat.value}</div>
              <div className="text-[#7C7C7C] text-sm sm:text-[18px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Heading Section */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-4xl font-medium text-[#000000] mb-3 max-w-lg">
          Why Leading Financial Institutions Choose FinEdge
        </h2>
        <p className="text-[#5E5E5E] text-[18px] max-w-lg">
          Transform your banking operations with a platform designed for the future of finance.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="bg-[#F4EFFC] p-7 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon Circle */}
            <div className="bg-white w-12 h-12 rounded-[21.33px] flex items-center justify-center mb-10">
              {feature.icon}
            </div>
            
            {/* Text Content */}
            <div className="mt-8">
              <h3 className="text-[20px] font-medium text-[#121212] mb-1">{feature.title}</h3>
              <p className="text-[#7C7C7C] text-[16px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;