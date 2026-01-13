import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    "General", 
    "Implementation & Onboarding", 
    "Features & Functionality", 
    "Security & Compliance", 
    "Pricing & Support"
  ];

  // Grouped FAQ data
  const faqData = {
    "General": [
      {
        question: "What is Finedge?",
        answer: "A modern, cloud-native core banking platform built for growth, reliability, and innovation. Designed for financial institutions ready to transform their operations and deliver exceptional digital experiences."
      },
      { question: "Who is Finedge Designed For?", answer: "Retail banks, microfinance institutions, and credit unions looking for digital transformation." },
      { question: "How does Finedge differ from legacy banking systems?", answer: "Finedge is built on a microservices architecture, allowing for faster updates and 99.9% uptime." },
      { question: "What Deployment Options are available?", answer: "We offer public cloud, private cloud, and hybrid deployment models." }
    ],
    "Implementation & Onboarding": [
      { question: "Can we migrate from our existing system?", answer: "Yes, we provide comprehensive migration tools and expert support to ensure a seamless transition from legacy systems." },
      { question: "How long does a typical implementation take?", answer: "Onboarding varies by institution size, but our phased approach typically takes 3 to 6 months." }
    ],
    "Features & Functionality": [
      { question: "Does Finedge support mobile banking?", answer: "Absolutely. Our platform comes with ready-to-deploy mobile banking SDKs for both iOS and Android." }
    ],
    "Security & Compliance": [
      { question: "Is Finedge PCI-DSS compliant?", answer: "Yes, our platform adheres to the highest global security standards, including PCI-DSS and SOC2." }
    ],
    "Pricing & Support": [
      { question: "What kind of support do you offer?", answer: "We provide 24/7 technical support, dedicated account managers, and a comprehensive knowledge base." }
    ]
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(0); // Reset accordion to first item when switching categories
  };

  return (
    <section className="py-12 px-4" id='faq'>
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium text-[#000000] mb-3">Your Questions. Answered.</h2>
          <p className="text-[#5E5E5E] text-[18px]">Answers to all your questions, quickly and clearly</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat 
                ? "bg-[#433EA4] text-white" 
                : "bg-white text-[#545454] border-[#E5E7EB] hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-20 min-h-[400px] max-w-3xl mx-auto">
          {faqData[activeCategory]?.map((faq, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className={`rounded-xl transition-all duration-300 border border-transparent ${
                openIndex === index ? "bg-[#F4EFFC] border-[#F4EFFC]" : "bg-[#FAFAFA]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className={`font-medium text-md transition-colors ${openIndex === index ? "text-[#000000]" : "text-gray-900"}`}>
                  {faq.question}
                </span>
                <div className="bg-white rounded-full p-1 shadow-sm border border-gray-100">
                  {openIndex === index ? (
                    <Minus size={18} className="text-[#7C7C7C]" />
                  ) : (
                    <Plus size={18} className="text-[#7C7C7C] group-hover:text-gray-600" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-[#5E5E5E] text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer Card */}
        <div className="bg-white border max-w-3xl mx-auto border-[#EAEAEA] rounded-xl p-6 md:p-6 flex flex-col md:flex-row items-center justify-between shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
          <div className="text-center md:text-left">
            <h4 className="text-[18px] font-medium text-[#000000] mb-2">Still have a question in mind?</h4>
            <p className="text-[#5E5E5E] text-sm">Contact us if you have any other questions.</p>
          </div>
          <button className="mt-8 md:mt-0 text-xs bg-[#3A358C] text-white px-4 py-2 rounded-full font-medium hover:bg-[#312E81] transition-all active:scale-95">
            Contact us
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;