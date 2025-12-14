import React from "react";

import access from "../assets/access.png";
import bankly from "../assets/bankly.png";
import uba from "../assets/uba.png";
import trustbanck from "../assets/trustbanc.png";
import wema from "../assets/wema.png";
import stanbic from "../assets/stanbic.png";
import itex from "../assets/itex.png";
import firstbank from "../assets/firstbank.png";
import remita from "../assets/remita.webp";
import providus from "../assets/providus.png";
import covenant from "../assets/covenant.png";
import npf from "../assets/npf.png";
import firs from "../assets/firs.png";

const LogoScroll = () => {
  const logos = [
    { src: access, alt: "Access Bank" },
    { src: bankly, alt: "Bankly" },
    { src: firstbank, alt: "FirstBank" },
    { src: itex, alt: "Itex" },
    { src: stanbic, alt: "Stanbic Bank" },
    { src: wema, alt: "Wema Bank" },
    { src: trustbanck, alt: "TrustBanc" },
    { src: remita, alt: "Remita" },
    { src: providus, alt: "Providus" },
    { src: covenant, alt: "Covenant MFB" },
    { src: npf, alt: "NPF MFB" },
    { src: firs, alt: "FIRS MFB" },
    { src: uba, alt: "UBA" },
  ];

  return (
    <div className="overflow-hidden mb-20 py-3 md:py-5 bg-[#F5F5F5]">
      <div className="flex w-max gap-x-12 animate-logoScroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-20 h-20 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes logoScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-logoScroll {
            animation: logoScroll 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LogoScroll;
