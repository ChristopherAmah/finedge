import React from 'react';
import { ArrowRight } from 'lucide-react'; 
import logo from '../assets/logo.png'; // Placeholder for the FinEdge logo image

const Navbar = () => {
  return (
    // Outer container for padding and centering the rounded bar
    <header className="py-6 sm:py-8 lg:py-[30.5px]">
      
      {/* The main Navbar container:
        - max-w-5xl: Controls the width (adjust as needed)
        - mx-auto: Centers the bar
        - bg-gray-50: Sets a light background (you might use a custom color like 'bg-purple-50' for the exact shade)
        - rounded-full/rounded-3xl: Adds the prominent rounded corners
        - shadow-lg: Adds a subtle shadow/elevation
        - px-8 py-4: Internal padding
      */}
      <nav className="max-w-4xl mx-auto flex items-center justify-between bg-[#ECEBF4] rounded-full px-6 sm:px-[31px] py-2.5">
        
        {/* 1. Logo (FinEdge) */}
        <div className="flex items-center space-x-2">
          {/* Placeholder for the complex FinEdge logo image/SVG */}
          {/* Replace this with your actual logo component or image */}
          <div className="w-30 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[#7C7C7C] text-[16px]">
          <a href="#" className="hover:text-blue-600 transition duration-150">Core Banking</a>
          <a href="#" className="hover:text-blue-600 transition duration-150">Online Banking</a>
        </div>

        {/* 3. Get Started Button */}
        <button className="flex items-center space-x-1 bg-[#3A358C] text-white text-md font-medium py-2.5 px-5 rounded-full  hover:bg-indigo-800 transition duration-300 transform hover:scale-[1.02]">
          <span>Get Started</span>
          <ArrowRight size={18} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;