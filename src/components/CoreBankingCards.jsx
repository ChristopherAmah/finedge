import React from "react";

import developer from "../assets/developer.jpg";
import scale from "../assets/scale.jpg";
import seamless from "../assets/seamless.jpg";

// Utility: Card background colors
const getCardBgColor = (title) => {
  if (title.includes("Seamless")) return "bg-[#85BF4B1A]";
  if (title.includes("Engineered")) return "bg-[#50BFBF1A]";
  return "bg-white";
};

// =============================
// FEATURE CARD (updated)
// Supports: default + side layouts
// =============================
const FeatureCard = ({
  title,
  content,
  imageSrc,
  imageAlt,
  isWide = false,
  hasButton = false,
  layout = "default", // NEW
}) => (
  <div
    className={`rounded-[20px] p-8 ${
      isWide ? "md:col-span-2" : ""
    } ${getCardBgColor(title)}`}
  >
    {/* DEFAULT LAYOUT (Stacked) */}
    {layout === "default" && (
      <>
        <h3 className="text-[14px] uppercase tracking-widest text-[#7C7C7C]">
          {title.includes("Seamless") ? "CORE BANKING" : ""}
        </h3>

        <h2 className="text-2xl font-medium text-[#000000]">{title}</h2>

        <div className="rounded-[20px] overflow-hidden mt-8 mb-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[220px] md:h-[250px] lg:h-[293px] object-cover"
          />
        </div>

        <p className="text-[#5E5E5E] text-[16px] leading-relaxed">{content}</p>

        {hasButton && (
          <button className="mt-6 font-medium px-4 py-2 bg-[#222222] text-white text-sm rounded-full hover:bg-gray-700 transition">
            Get started
          </button>
        )}
      </>
    )}

    {/* SIDE LAYOUT (Image Left, Text Right) */}
    {layout === "side" && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Image */}
        <div className="rounded-[20px] overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[260px] md:h-[332px] object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          {/* <h3 className="text-2xl font-medium tracking-widest text-[#000000]">
            Engineered for Scale
          </h3> */}

          <h2 className="text-2xl font-medium text-[#000000]">{title}</h2>

          <p className="text-[#5E5E5E] text-[16px] leading-relaxed mt-3">
            {content}
          </p>

          {hasButton && (
            <button className="mt-6 font-medium px-4 py-2 bg-[#222222] text-white text-sm rounded-full hover:bg-gray-700 transition">
              Get started
            </button>
          )}
        </div>
      </div>
    )}
  </div>
);

// =============================
// STAT CARD
// =============================
const StatCard = ({ value, description }) => (
  <div className="px-[18.49px] py-[38.5px] rounded-[20px] bg-[#F3F9ED] text-center">
    <p className="text-[50px] text-center font-medium text-[#000000]">{value}</p>
    <p className="mt-1 text-[16px] leading-relaxed text-[#5E5E5E]">{description}</p>
  </div>
);

// =============================
// API CARD
// =============================
const ApiCard = ({ title, content, imageSrc, imageAlt, stat1, stat2 }) => (
  <div className="space-y-4">
    {/* Top Block */}
    <div className="rounded-[20px] bg-[#3A358C1A] overflow-hidden">
      <div className="h-40 w-full px-8 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-[14px] uppercase tracking-widest text-[#7C7C7C]">
          API
        </h3>

        <h2 className="text-2xl font-medium text-[#000000] mt-2">{title}</h2>

        <p className="text-[16px] text-[#5E5E5E] leading-relaxed mt-2">
          {content}
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-3">
      <StatCard value={stat1.value} description={stat1.description} />
      <StatCard value={stat2.value} description={stat2.description} />
    </div>
  </div>
);

// =============================
// MAIN LAYOUT
// =============================
const BankingLayout = () => {
  return (
    <div className="px-6 md:px-12 lg:px-[207px] max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* TOP LEFT */}
        <FeatureCard
          title="Seamless Integration"
          content="FinEdge APIs connect mobile apps, internet banking, agency tools, and internal systems through one consistent layer. New features plug in quickly without disrupting existing services."
          imageSrc={seamless}
          imageAlt="Seamless integration"
        />

        {/* TOP RIGHT */}
        <ApiCard
          title="Developer Ready"
          content="Clear documentation, a realistic sandbox, and stable, predictable endpoints make it easy for teams to build, test, and deploy new services on top of FinEdge."
          imageSrc={developer}
          imageAlt="Developer API"
          stat1={{
            value: "3M",
            description:
              "Designed to move high-volume data across channels with ease.",
          }}
          stat2={{
            value: "99%",
            description:
              "Reliable infrastructure that keeps banking services running around the clock.",
          }}
        />

        {/* BOTTOM (SIDE LAYOUT) */}
        <FeatureCard
          title="Engineered for Scale"
          content="The platform comfortably handles heavy traffic across institutions, processing millions of transactions daily without performance drops."
          imageSrc={scale}
          imageAlt="Engineered for scale"
          isWide={true}
          hasButton={true}
          layout="side" // NEW
        />
      </div>
    </div>
  );
};

export default BankingLayout;
