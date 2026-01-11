import React from "react";
import loans from "../assets/loan.jpg";
import onboarding from "../assets/onboarding.jpg";
import customer from "../assets/customer.jpg";
import payment from "../assets/payment.jpg";
import digital from "../assets/digital.jpg";

const features = [
  {
    title: "Real-Time Core Processing at Scale",
    description:
      "Process millions of transactions per day with sub-second response times. Our distributed architecture ensures consistent performance even during peak loads.",
    img: onboarding,
    bg: "bg-[#F5F5F5]",
  },
  {
    title: "Flexible Product Configuration",
    description:
      "Launch new savings accounts, loan products, and services in days, not months. Using Finedge to empower your teams.",
    img: customer,
    bg: "bg-[#F5F5F5]",
  },
  {
    title: "Integrated Digital Channels",
    description:
      "Unified customer experience across mobile, web, USSD, and card channels. Single source of truth ensures data consistency everywhere.",
    img: payment,
    bg: "bg-[#F5F5F5]",
  },
  {
    title: "Multi-Branch & Multi-Entity Support",
    description:
      "Manage multiple branches, regions, and subsidiaries from one platform. Centralized control with local autonomy and compliance.",
    img: loans,
    bg: "bg-[#F5F5F5]",
  },
  {
    title: "Open APIs for Ecosystem Integration",
    description:
      "Connect with payment processors, credit bureaus, government systems, and fintech partners through secure, well-documented APIs.",
    img: digital,
    bg: "bg-[#F5F5F5]",
  },
];

const FeatureGrid = () => {
  return (

    <section className="">
      <div className="text-center">
        <h2 className="text-4xl font-medium mb-3 mx-auto max-w-xl">
          How FinEdge Solves These Challenges
        </h2>
        <p className="text-[#5E5E5E] max-w-lg mx-auto text-[18px]">
          Enterprise-grade capabilities designed specifically for retail banking at scale
        </p>
      </div>
      
    <div className="grid md:grid-cols-3 gap-3 px-6 md:px-28 max-w-7xl mx-auto py-15">

      {/* ---- ROW 1 ---- */}
      <div className="md:col-span-2 flex flex-col h-full">
        <div className="h-64 overflow-hidden rounded-t-[20px]">
          <img
            src={features[0].img}
            alt={features[0].title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className={`p-8 rounded-b-[20px] flex-1 ${features[0].bg}`}>
          <h3 className="text-[22px] font-semibold text-black">
            {features[0].title}
          </h3>
          <p className="text-[#7C7C7C] text-[16px] mt-2">
            {features[0].description}
          </p>
        </div>
      </div>

      <div className="flex flex-col h-full">
        <div className="h-64 overflow-hidden rounded-t-[20px]">
          <img
            src={features[1].img}
            alt={features[1].title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className={`p-8 rounded-b-[20px] flex-1 ${features[1].bg}`}>
          <h3 className="text-[22px] font-semibold text-black">
            {features[1].title}
          </h3>
          <p className="text-[#7C7C7C] text-[16px] mt-2">
            {features[1].description}
          </p>
        </div>
      </div>

      {/* ---- ROW 2 ---- */}
      {features.slice(2).map((item, index) => (
        <div key={index} className="flex flex-col h-full">
          <div className="h-64 overflow-hidden rounded-t-[20px]">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className={`p-8 rounded-b-[20px] flex-1 ${item.bg}`}>
            <h3 className="text-[22px] font-semibold text-black">
              {item.title}
            </h3>
            <p className="text-[#7C7C7C] text-[16px] mt-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default FeatureGrid;
