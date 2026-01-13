import React from 'react';
import { FiTrendingUp } from "react-icons/fi";

const DocumentationPage = () => {
  const categories = [
    {
      title: "Getting Started",
      description: "Quick start guides, onboarding tutorials, and initial setup documentation",
      items: ["Platform Overview", "Account Setup", "First Integration", "Best Practices"],
      color: "bg-[#F4EFFC]"
    },
    {
      title: "API Documentation",
      description: "Complete API reference, authentication guides, and code examples",
      items: ["REST API Reference", "Authentication", "Webhooks", "SDKs & Libraries"],
      color: "bg-[#F4EFFC]"
    },
    {
      title: "Core Banking Features",
      description: "In-depth guides for accounts, transactions, loans, and product management",
      items: ["Account Management", "Transaction Processing", "Loan Products", "Reporting"],
      color: "bg-[#F4EFFC]"
    },
    {
      title: "Configuration & Setup",
      description: "Platform configuration, user management, and system administration",
      items: ["System Configuration", "User Roles", "Branch Setup", "Product Config"],
      color: "bg-[#EFFCF4]"
    },
    {
      title: "Security & Compliance",
      description: "Security best practices, compliance guides, and audit documentation",
      items: ["Security Standards", "Data Protection", "Compliance", "Audit Trails"],
      color: "bg-[#EFFCF4]"
    },
    {
      title: "Integration Guides",
      description: "Step-by-step guides for integrating with third-party services",
      items: ["Payment Gateways", "KYC Providers", "Credit Bureaus", "Banking Partners"],
      color: "bg-[#EFFCF4]"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-28" id='documentation'>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-medium text-[#000000]">Documentation</h1>
        <p className="mt-3 text-xl text-[#5E5E5E] max-w-md mx-auto">
          Comprehensive guides and references to help you implement and maximize FinEdge
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`${category.color} rounded-3xl p-8 flex flex-col h-full transition-transform hover:scale-[1.02] duration-300`}
          >
            {/* Icon */}
            <div className="bg-white w-12 h-12 rounded-[21.33px] flex items-center justify-center mb-30">
              <FiTrendingUp className="text-[#222222]" size={24} />
            </div>

            {/* Content */}
            <div className="grow">
              <h3 className="text-[20px] font-medium text-[#000000] mb-1">{category.title}</h3>
              <p className="text-[#5E5E5E] mb-4 text-md">
                {category.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center text-[14px] text-[#4A4A4A]">
                    <span className="w-1 h-1 bg-[#4A4A4A] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="w-full bg-[#222222] text-white py-2 rounded-full text-xs font-medium hover:bg-black transition-colors">
              View Documentation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentationPage;