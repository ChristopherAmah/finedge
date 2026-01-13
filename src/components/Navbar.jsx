import React, { useState } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const linkClasses = ({ isActive }) =>
  `transition ${
    isActive
      ? "text-[#3A358C] font-semibold"
      : "text-[#595959] hover:text-[#3A358C]"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  // Check if current route is under /solutions
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  return (
    <header className="py-4 sm:py-6 lg:py-[30.5px] lg:pb-[51px]">
      <nav className="max-w-5xl mx-auto bg-[#F3F3F8] rounded-full px-5 sm:px-[31px] py-2.5 flex items-center justify-between relative border border-[#D8CDFF] shadow-sm">
        
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="FinEdge Logo" className="h-8 object-contain" />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[16px]">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>

          <NavLink to="/product" className={linkClasses}>
            Product
          </NavLink>

          {/* Solutions Dropdown (Desktop) */}
          <div className="relative group">
            <button
              type="button"
              className={`flex items-center gap-1 transition py-2 ${
                isSolutionsActive
                  ? "text-[#3A358C] font-semibold"
                  : "text-[#595959] hover:text-[#3A358C]"
              }`}
            >
              <span>Solutions</span>
              <ChevronDown size={16} className="mt-px transition-transform group-hover:rotate-180" />
            </button>

            {/* Mega Dropdown Content */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-white rounded-[22px] border border-[#EFF0F6] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-10">
              <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                
                {/* Retail Banks */}
                <NavLink to="/solutions/modernize-banking" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1 group-hover/item:text-[#3A358C] transition-colors">
                    For Retail Banks
                  </span>
                  <span className="text-[#6F6C90] text-[16px] leading-tight">
                    A real-time, scalable core powering accounts, loans, deposits, and reporting.
                  </span>
                </NavLink>

                {/* Fintech Startups */}
                <NavLink to="/solutions/launch" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1 group-hover/item:text-[#3A358C] transition-colors">
                    For Fintech Startups
                  </span>
                  <span className="text-[#6F6C90] text-[16px] leading-tight">
                    A real-time, scalable core powering accounts, loans, deposits, and reporting.
                  </span>
                </NavLink>

                {/* Microfinance Banks */}
                <NavLink to="/solutions/grow" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1 group-hover/item:text-[#3A358C] transition-colors">
                    For Microfinance Banks
                  </span>
                  <span className="text-[#6F6C90] text-[16px] leading-tight">
                    A real-time, scalable core powering accounts, loans, deposits, and reporting.
                  </span>
                </NavLink>

                {/* Credit Unions */}
                <NavLink to="/solutions/member" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1  group-hover/item:text-[#3A358C] transition-colors">
                    For Credit Unions
                  </span>
                  <span className="text-[#6F6C90] text-[16px] leading-tight">
                    A real-time, scalable core powering accounts, loans, deposits, and reporting.
                  </span>
                </NavLink>
                
              </div>
            </div>
          </div>

          <NavLink to="/why-finedge" className={linkClasses}>
            Why Finedge
          </NavLink>

          <NavLink to="/resources&faqs" className={linkClasses}>
            Resources & FAQs
          </NavLink>
        </div>

        {/* Get Started Button */}
        <Link to="/demo">
          <button className="hidden lg:flex items-center space-x-1 bg-[#3A358C] text-white text-md font-medium py-2.5 px-5 rounded-full hover:bg-indigo-800 transition duration-300">
            <span>Request Demo</span>
            <ArrowRight size={18} />
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-[70px] left-0 w-full bg-[#ECEBF4] rounded-2xl shadow-lg py-6 px-6 lg:hidden flex flex-col space-y-5 text-[#7C7C7C] text-[16px] z-20 overflow-y-auto max-h-[80vh]">
            
            <NavLink to="/" end className={linkClasses} onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/product" className={linkClasses} onClick={() => setOpen(false)}>
              Product
            </NavLink>

            {/* Mobile Solutions Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center justify-between w-full transition ${
                  isSolutionsActive ? "text-[#3A358C] font-semibold" : "hover:text-[#3A358C]"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="pl-4 mt-4 flex flex-col space-y-5 border-l-2 border-[#D8CDFF] ml-1">
                  <NavLink to="/solutions/modernize-banking" onClick={() => setOpen(false)} className="flex flex-col">
                    <span className="font-bold text-[#1A1655] text-[15px]">For Retail Banks</span>
                    <span className="text-xs text-[#7C7C8B]">Real-time scalable core banking.</span>
                  </NavLink>
                  
                  <NavLink to="/solutions/launch" onClick={() => setOpen(false)} className="flex flex-col">
                    <span className="font-bold text-[#1A1655] text-[15px]">For Fintech Startups</span>
                    <span className="text-xs text-[#7C7C8B]">Launch fast and scale without limits.</span>
                  </NavLink>

                  <NavLink to="/solutions/grow" onClick={() => setOpen(false)} className="flex flex-col">
                    <span className="font-bold text-[#1A1655] text-[15px]">For Microfinance Banks</span>
                    <span className="text-xs text-[#7C7C8B]">Grow with confidence and precision.</span>
                  </NavLink>

                  <NavLink to="/solutions/member" onClick={() => setOpen(false)} className="flex flex-col">
                    <span className="font-bold text-[#1A1655] text-[15px]">For Credit Unions</span>
                    <span className="text-xs text-[#7C7C8B]">Member-first banking technology.</span>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/why-finedge" className={linkClasses} onClick={() => setOpen(false)}>
              Why Finedge
            </NavLink>

            <NavLink to="/resources&faqs" className={linkClasses} onClick={() => setOpen(false)}>
              Resources & FAQs
            </NavLink>

            <hr className="border-[#D8CDFF]" />

            <Link to="/demo" onClick={() => setOpen(false)}>
              <button className="w-full flex items-center justify-center space-x-2 bg-[#3A358C] text-white text-md font-medium py-3 px-5 rounded-full">
                <span>Request Demo</span>
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;