import React from "react";
import {
  User,
  Mail,
  Building2,
  Briefcase,
  Globe,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import resource from "../assets/resource.png";

const RequestDemo = () => {
  return (
    <section
      className="relative py-20 px-4 bg-[#F4EFFC] overflow-hidden"
      style={{
        backgroundImage: `url(${resource})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-[#000000]">
            Request Your Personalized Demo
          </h2>
          <p className="mt-4 text-[#5E5E5E] text-[18px] max-w-xl mx-auto">
            Fill out the form below and our team will reach out to schedule
            your demo
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[14px] border-2 border-[#DBEAFE] p-6 md:p-8">
          <form className="space-y-5">
            {/* Full Name */}
            <Input
              label="Full Name *"
              placeholder="John Doe"
              icon={User}
            />

            {/* Work Email */}
            <Input
              label="Work Email *"
              placeholder="john.doe@yourbank.com"
              icon={Mail}
            />

            {/* Institution Name */}
            <Input
              label="Institution Name *"
              placeholder="Your Bank Name"
              icon={Building2}
            />

            {/* Institution Type */}
            <Select
              label="Institution Type *"
              placeholder="Select institution type"
              icon={Building2}
            />

            {/* Role */}
            <Input
              label="Role / Job Title *"
              placeholder="e.g. CEO, CTO, Head of Operations"
              icon={Briefcase}
            />

            {/* Country */}
            <Select
              label="Country *"
              placeholder="e.g. Kenya, Nigeria, Ghana"
              icon={Globe}
            />

            {/* Message */}
            <Textarea
              label="Message (Optional)"
              placeholder="Tell us about your specific needs or questions..."
              icon={MessageSquare}
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#3A358C] hover:bg-indigo-800 text-white text-[18px] font-medium py-3 rounded-full flex items-center justify-center gap-2 transition"
            >
              Request a Demo
              <span>→</span>
            </button>

            {/* Footer Note */}
            <p className="text-[14px] text-center text-[#4A5565] mt-6">
              We respect your privacy. A FinEdge specialist will reach out
              shortly.
            </p>
          </form>
        </div>
      </div>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#F4EFFC]/40" />
    </section>
  );
};

export default RequestDemo;

/* ---------------------------------- */
/* Reusable Components */
/* ---------------------------------- */

const Input = ({ label, placeholder, icon: Icon }) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
      <Icon className="w-4 h-4 text-indigo-600" />
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

const Select = ({ label, placeholder, icon: Icon }) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
      <Icon className="w-4 h-4 text-indigo-600" />
      {label}
    </label>
    <div className="relative">
      <select className="w-full appearance-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>{placeholder}</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const Textarea = ({ label, placeholder, icon: Icon }) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
      <Icon className="w-4 h-4 text-indigo-600" />
      {label}
    </label>
    <textarea
      rows="4"
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
    />
  </div>
);
