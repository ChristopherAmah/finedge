import React from 'react';

// Reusable Section Component
const FeatureSection = ({ title, description, features, bgColor, buttonColor }) => (
  <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start font-sans md:px-28">
    
    <div className="lg:col-span-1">
      <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-medium text-[#000000] mb-3 whitespace-pre-line">
        {title}
      </h2>

      <p className="text-[#4A4A4A] text-[14px] sm:text-[16px] lg:text-[20px] mb-[50px] max-w-sm">
        {description}
      </p>

      <a href="mailto:info@thefifthlab.com">
      <button className={`${buttonColor} text-white text-[14px] sm:text-[16px] lg:text-[20px] font-medium py-2.5 px-5 rounded-full transition duration-300`}>
        Request a Demo
      </button>
      </a>
    </div>

    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${bgColor} p-8 rounded-2xl min-h-[260px] flex flex-col justify-between`}
        >
          <h3 className="text-[16px] sm:text-[18px] lg:text-[24px] font-medium text-[#000000]">
            {feature.title}
          </h3>

          <p className="text-[#727272] text-[14px] sm:text-[16px] lg:text-[20px] mt-30">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const BankingPlatform = () => {
  const sections = [
    {
      title: "Core Banking\nSystem",
      description:
        "A complete, modern core banking platform with all the essential capabilities financial institutions need to serve their customers effectively.",
      bgColor: "bg-[#EAFBFBBF]",
      features: [
        { title: "Account Management", desc: "Comprehensive multi-currency accounts, deposits, and loan management with flexible product configurations." },
        { title: "Transaction Engine", desc: "High-performance processing engine supporting real-time transactions, batch operations, and complex workflows." },
        { title: "Customer 360", desc: "Unified customer view with KYC, relationship management, and cross-product insights for better service delivery." },
        { title: "Compliance & Security", desc: "Built-in regulatory compliance, audit trails, and enterprise-grade security with role-based access controls." }
      ]
    },
    {
      title: "Digital Banking\nChannels",
      description:
        "Deliver exceptional digital experiences to your customers with modern, secure, and feature-rich banking channels.",
      bgColor: "bg-[#F0EAFBBF]",
      features: [
        { title: "Mobile & Web Banking", desc: "Responsive digital banking experiences with modern design, supporting iOS, Android, and progressive web apps." },
        { title: "Omnichannel Experience", desc: "Seamless customer journey across all touchpoints with consistent branding and unified session management." },
        { title: "Real-Time Updates", desc: "Live transaction notifications, account balance updates, and instant alert delivery across all channels." },
        { title: "Secure Authentication", desc: "Multi-factor authentication, biometric support, and device fingerprinting for enhanced security." }
      ]
    },
    {
      title: "Open API Platform",
      description:
        "Build and integrate with confidence using our comprehensive API platform designed for developers and partners.",
      bgColor: "bg-[#EAFBF0BF]",
      features: [
        { title: "Account Management", desc: "Comprehensive APIs with detailed documentation, SDKs, and sandbox environment for rapid integration." },
        { title: "Microservices Ready", desc: "Modular architecture enabling easy integration with third-party services and custom business logic." },
        { title: "Customer 360", desc: "Unified customer view with KYC, relationship management, and cross-product insights for better service delivery." },
        { title: "Compliance & Security", desc: "Built-in regulatory compliance, audit trails, and enterprise-grade security with role-based access controls." }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {sections.map((section, index) => (
        <FeatureSection
          key={index}
          title={section.title}
          description={section.description}
          features={section.features}
          bgColor={section.bgColor}
          buttonColor="bg-[#3A358C]"
        />
      ))}
    </div>
  );
};

export default BankingPlatform;
