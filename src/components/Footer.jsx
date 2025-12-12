import React from 'react';
// 1. Import necessary icons from react-icons
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import footerlogo from '../assets/footerlogo.png';


// --- Helper Component: Central Hero Section ---
const HeroSection = () => (
    <div className="flex flex-col items-center text-center">
        {/* Logo Area */}
        <div className="mb-6">
            <img src={footerlogo} alt="" />
        </div>

        {/* Tagline */}
        <p className="max-w-md text-[#9CA3AF] text-[16px]">
            Advanced cloud-native internet banking and mobile banking solution that helps banks onboard, 
            service and engage more efficiently
        </p>
    </div>
);


// --- Helper Component: Navigation and Socials Section ---
const NavAndSocials = () => (
    <>
        {/* Top Row of the Bottom Section */}
    <div className="flex justify-between items-center text-[#7C7C7C] text-[12px]">
            
            {/* Navigation Links (Left side) */}
            <div className="flex space-x-8">
                <a href="#" className="hover:text-white transition-colors">Core Banking</a>
                <a href="#" className="hover:text-white transition-colors">Online Banking</a>
            </div>

            {/* Social Media Icons (Right side) */}
            <div className="flex space-x-4">
                
                {/* The 'X' icon (formerly Twitter) */}
                <a href="#" aria-label="X (Twitter)" className="hover:text-white transition-colors">
                    <FaXTwitter className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                    <FaFacebook className="w-5 h-5" />
                </a>
                
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                    <FaInstagram className="w-5 h-5" />
                </a>
                
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                </a>
            </div>
        </div>

        {/* Bottom Legal/Copyright Row */}
        <div className="text-center text-[12px] text-[#7C7C7C] mt-6">
            {/* Horizontal Rule */}
                <hr className="my-8 border-[#EAEAEA]" />
            <p>
                &copy; 2025 FinEdge &middot;
                <a href="#" className="ml-1 hover:text-white transition-colors">Terms</a> &middot;
                <a href="#" className="ml-1 hover:text-white transition-colors">Privacy</a>
            </p>
        </div>
    </>
);


// --- Main Component ---
const FinEdgeFooter = () => {
    return (
        // Main container with dark background and overall padding
        <footer className="bg-[#010101] text-white pt-16 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Central Logo and Tagline */}
                <HeroSection />

                

                {/* Navigation, Socials, and Copyright */}
                <NavAndSocials />

            </div>
        </footer>
    );
};

export default FinEdgeFooter;