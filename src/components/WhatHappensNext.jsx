import React from "react";
import { Send, User, Monitor } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit Your Request",
    description:
      "Fill out the form with your details and specific needs. Takes less than 2 minutes.",
    icon: Send,
  },
  {
    id: 2,
    title: "A FinEdge Expert Contacts You",
    description:
      "Our banking specialist will reach out within 24 hours to understand your requirements.",
    icon: User,
  },
  {
    id: 3,
    title: "Get a Tailored Walkthrough",
    description:
      "Experience a personalized demo focused on the features most relevant to your institution.",
    icon: Monitor,
  },
];

const WhatHappensNext = () => {
  return (
    <section className="py-20 bg-white lg:px-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-medium text-[#000000]">
            What Happens Next
          </h2>
          <p className="mt-4 text-[18px] text-[#5E5E5E]">
            A simple, straightforward process to get you started
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1 right-1 h-0.5 bg-[#69ED4F] z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative z-10 bg-[#F9FAFB] rounded-[14px] px-4 py-8 text-center"
              >
                {/* Icon */}
                <div className="relative w-14 h-14 mx-auto mb-6 rounded-full bg-linear-to-r from-[#3A358C] to-[#412AEE] flex items-center justify-center shadow-lg">
                  <Icon className="text-white w-6 h-6" />

                  {/* Step number */}
                  <span className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-white text-[#3A358C] text-[14px] font-bold flex items-center justify-center p-2 border-4 border-[#DBEAFE]">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-[20px] text-[#101828] mb-2">
                  {step.title}
                </h3>
                <p className="text-[16px] text-[#4A5565]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer pill */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4EFFC] text-[#3A358C] text-[16px] font-semibold">
            <span className="w-2 h-2 bg-[#3A358C] rounded-full" />
            Average response time: Under 24 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
