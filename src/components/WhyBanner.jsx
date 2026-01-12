import React from "react";
import {
  Cloud,
  Zap,
  Activity,
  Layers,
  CheckCircle,
  Lock,
  BarChart3,
} from "lucide-react";
import whybg from "../assets/whybg.png";

const TechnologySection = () => {
  const tags = [
    {
      label: "Cloud-Native Architecture",
      icon: <Cloud size={20} className="text-blue-600" />,
    },
    {
      label: "Open APIs",
      icon: <Zap size={20} className="text-blue-600" />,
    },
    {
      label: "Real-Time Processing",
      icon: <Activity size={20} className="text-blue-600" />,
    },
    {
      label: "Modular Design",
      icon: <Layers size={20} className="text-blue-600" />,
    },
    {
      label: "DevOps-Driven Delivery",
      icon: <CheckCircle size={20} className="text-blue-600" />,
    },
    {
      label: "Robust Security",
      icon: <Lock size={20} className="text-blue-600" />,
    },
    {
      label: "Real-Time Data & Analytics",
      icon: <BarChart3 size={20} className="text-blue-600" />,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden flex flex-col items-center text-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#2D2B8E]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${whybg})` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 leading-tight">
          Future-Ready, Cloud-Native <br className="hidden sm:block" />
          Technology
        </h2>

        <p className="text-white/90 text-base sm:text-lg mb-10 max-w-md sm:max-w-lg mx-auto">
          Built on modern architecture principles to ensure scalability,
          security, and innovation.
        </p>

        {/* Tags */}
        <div
          className="
            flex gap-4
            overflow-x-auto scrollbar-hide
            sm:flex-wrap sm:justify-center
            max-w-5xl mx-auto
            px-1
          "
        >
          {tags.map((tag, index) => (
            <div
              key={index}
              className="
                flex items-center gap-3
                bg-white
                px-5 py-3
                rounded-full
                min-w-max
                hover:scale-105
                transition-transform
                cursor-default
              "
            >
              {tag.icon}
              <span className="text-[#101828] font-medium text-sm sm:text-base whitespace-nowrap">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
