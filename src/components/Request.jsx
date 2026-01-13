import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    institutionType: "",
    role: "",
    country: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Request for FinEdge Demo");

    const body = encodeURIComponent(`
Full Name: ${formData.fullName}
Work Email: ${formData.email}
Institution Name: ${formData.institution}
Institution Type: ${formData.institutionType}
Role / Job Title: ${formData.role}
Country: ${formData.country}

Message:
${formData.message || "N/A"}
    `);

    window.location.href = `mailto:info@thefifthlab.com?subject=${subject}&body=${body}`;
  };

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
          <h2 className="text-3xl md:text-4xl font-medium text-black">
            Request Your Personalized Demo
          </h2>
          <p className="mt-4 text-[#5E5E5E] text-[18px] max-w-xl mx-auto">
            Fill out the form below and our team will reach out to schedule your demo
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-[14px] border-2 border-[#DBEAFE] p-6 md:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              label="Full Name *"
              placeholder="John Doe"
              icon={User}
              value={formData.fullName}
              onChange={handleChange("fullName")}
            />

            <Input
              label="Work Email *"
              placeholder="john.doe@yourbank.com"
              icon={Mail}
              value={formData.email}
              onChange={handleChange("email")}
            />

            <Input
              label="Institution Name *"
              placeholder="Your Bank Name"
              icon={Building2}
              value={formData.institution}
              onChange={handleChange("institution")}
            />

            <Select
              label="Institution Type *"
              icon={Building2}
              value={formData.institutionType}
              onChange={handleChange("institutionType")}
              options={[
                "Commercial Bank",
                "Microfinance Bank",
                "Fintech",
                "Credit Union",
                "Other",
              ]}
            />

            <Input
              label="Role / Job Title *"
              placeholder="e.g. CEO, CTO, Head of Operations"
              icon={Briefcase}
              value={formData.role}
              onChange={handleChange("role")}
            />

            <Select
              label="Country *"
              icon={Globe}
              value={formData.country}
              onChange={handleChange("country")}
              options={["Nigeria", "Kenya", "Ghana", "South Africa", "Other"]}
            />

            <Textarea
              label="Message (Optional)"
              placeholder="Tell us about your specific needs or questions..."
              icon={MessageSquare}
              value={formData.message}
              onChange={handleChange("message")}
            />

            <button
              type="submit"
              className="w-full mt-4 bg-[#3A358C] hover:bg-indigo-800 text-white text-[18px] font-medium py-3 rounded-full flex items-center justify-center gap-2 transition"
            >
              Request a Demo →
            </button>

            <p className="text-[14px] text-center text-[#4A5565] mt-6">
              We respect your privacy. A FinEdge specialist will reach out shortly.
            </p>
          </form>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F4EFFC]/40" />
    </section>
  );
};

export default RequestDemo;

/* ---------------------------------- */
/* Reusable Components */
/* ---------------------------------- */

const Input = ({ label, placeholder, icon: Icon, value, onChange }) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
      <Icon className="w-4 h-4 text-indigo-600" />
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

const Select = ({ label, icon: Icon, value, onChange, options }) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
      <Icon className="w-4 h-4 text-indigo-600" />
      {label}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        required
        className="w-full appearance-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const Textarea = ({ label, placeholder, icon: Icon, value, onChange }) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
      <Icon className="w-4 h-4 text-indigo-600" />
      {label}
    </label>
    <textarea
      rows="4"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
    />
  </div>
);
