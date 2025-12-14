import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 sm:py-6 lg:py-[30.5px]">
      <nav className="max-w-4xl mx-auto bg-[#ECEBF4] rounded-full px-5 sm:px-[31px] py-2.5 flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="FinEdge Logo" className="h-8 sm:h-10 object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[#7C7C7C] text-[16px]">
          <a href="#core-banking" className="hover:text-blue-600 transition">Core Banking</a>
          <a href="#online-banking" className="hover:text-blue-600 transition">Online Banking</a>
        </div>

        {/* Get Started Button */}
        <button className="hidden lg:flex items-center space-x-1 bg-[#3A358C] text-white text-md font-medium py-2.5 px-5 rounded-full hover:bg-indigo-800 transition duration-300">
          <span>Get Started</span>
          <ArrowRight size={18} />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-[70px] left-0 w-full bg-[#ECEBF4] rounded-2xl shadow-lg py-4 px-6 lg:hidden flex flex-col space-y-4 text-[#7C7C7C] text-[16px] z-20">

            <a href="#core-banking" className="hover:text-blue-600 transition">Core Banking</a>
            <a href="#online-banking" className="hover:text-blue-600 transition">Online Banking</a>

            {/* Mobile Get Started Button */}
            <button className="flex items-center justify-center space-x-1 bg-[#3A358C] text-white text-md font-medium py-2.5 px-5 rounded-full hover:bg-indigo-800 transition duration-300">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </button>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
