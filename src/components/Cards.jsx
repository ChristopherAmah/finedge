import React from "react";
import customer from "../assets/customer.jpg";
import payment from "../assets/payment.jpg";
import digital from "../assets/digital.jpg";

const features = [
  {
    title: "Digital Onboarding",
    description:
      "Instant account creation with KYC checks, automated workflows, and real time profile syncing across channels.",
    img: "/images/onboarding.jpg",
    bg: "bg-[#F3F9ED]",
  },
  {
    title: "Customer Accounts",
    description:
      "Savings, current, target savings, and wallet accounts managed from one central system.",
    img: customer,
    bg: "bg-[#ECEBF4]",
  },
  {
    title: "Loans & Credits",
    description:
      "End to end loan setup, scoring, disbursement, repayment, and performance tracking.",
    img: "/images/loans.jpg",
    bg: "bg-[#EEF9F9]",
  },
  {
    title: "Payment & Transfers",
    description:
      "Seamless interbank transfers, internal transfers, bills, bulk payments, and automated settlement.",
    img: payment,
    bg: "bg-[#ECEBF4]",
  },
  {
    title: "Digital Channels",
    description:
      "Mobile banking and internet banking for individuals and businesses with complete self service tools.",
    img: digital,
    bg: "bg-[#EEF9F9]",
  },
];

const FeatureGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-6 md:px-28 max-w-7xl mx-auto">

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
  );
};

export default FeatureGrid;
