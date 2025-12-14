import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import footerlogo from '../assets/footerlogo.png';

// --- Helper Component: Central Hero Section ---
const HeroSection = () => (
  <div className="flex flex-col items-center text-center mb-10">
    {/* Logo */}
    <div className="mb-4 w-28 sm:w-32">
      <img src={footerlogo} alt="FinEdge Logo" className="w-full" />
    </div>

    {/* Tagline */}
    <p className="max-w-sm text-[#9CA3AF] text-sm sm:text-[16px] leading-relaxed">
      Advanced cloud-native internet banking and mobile banking solution that helps banks onboard,
      service and engage more efficiently
    </p>
  </div>
);

// --- Helper Component: Navigation and Socials Section ---
const NavAndSocials = () => (
  <>
    {/* Top Row */}
    <div className="
      flex flex-col
      md:flex-row
      items-center
      md:justify-between
      text-[#7C7C7C]
      text-[12px]
      gap-6
      md:gap-0
    ">

      {/* Navigation Links */}
      <div className="flex space-x-6 md:space-x-8">
        <a href="#core-banking" className="hover:text-white transition-colors">
          Core Banking
        </a>
        <a href="#online-banking" className="hover:text-white transition-colors">
          Online Banking
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="#" aria-label="X (Twitter)" className="hover:text-white transition-colors">
          <FaXTwitter className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
          <FaFacebook className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>

    {/* Bottom Legal Row */}
    <div className="text-center text-[12px] text-[#7C7C7C] mt-6">
      <hr className="my-6 border-[#EAEAEA]" />
      <p className="flex flex-wrap justify-center items-center gap-2">
        &copy; {new Date().getFullYear()} FinEdge
        <span className="mx-2">&middot;</span>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <span className="mx-2">&middot;</span>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
      </p>
    </div>
  </>
);

// --- Main Component ---
const FinEdgeFooter = () => {
  return (
    <footer className="bg-[#010101] text-white pt-12 sm:pt-16 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">

        <HeroSection />
        <NavAndSocials />

      </div>
    </footer>
  );
};

export default FinEdgeFooter;
