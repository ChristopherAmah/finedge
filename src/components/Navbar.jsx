import React, { useState, useRef, useEffect } from "react";
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
  const dropdownRef = useRef(null);

  const isSolutionsActive = location.pathname.startsWith("/solutions");

  // Close dropdown if clicking outside (Good UX for click-to-open menus)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when navigation happens
  useEffect(() => {
    setSolutionsOpen(false);
    setOpen(false);
  }, [location]);

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
          <div 
            className="relative group" 
            ref={dropdownRef}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={`flex items-center gap-1 transition py-2 outline-none ${
                isSolutionsActive || solutionsOpen
                  ? "text-[#3A358C] font-semibold"
                  : "text-[#595959] hover:text-[#3A358C]"
              }`}
            >
              <span>Solutions</span>
              <ChevronDown 
                size={16} 
                className={`mt-px transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {/* Mega Dropdown Content - Controlled by solutionsOpen state */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-white rounded-[22px] border border-[#EFF0F6] transition-all duration-300 z-50 p-10 
              ${solutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                
                <NavLink to="/solutions/modernize-banking" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1 group-hover/item:text-[#3A358C] transition-colors">
                    For Retail Banks
                  </span>
                  <span className="text-[#6F6C90] text-[16px] leading-tight">
                    A real-time, scalable core powering accounts, loans, deposits, and reporting.
                  </span>
                </NavLink>

                <NavLink to="/solutions/launch" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1 group-hover/item:text-[#3A358C] transition-colors">
                    For Fintech Startups
                  </span>
                  <span className="text-[#6F6C90] text-[16px] leading-tight">
                    A real-time, scalable core powering accounts, loans, deposits, and reporting.
                  </span>
                </NavLink>

                <NavLink to="/solutions/grow" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1 group-hover/item:text-[#3A358C] transition-colors">
                    For Microfinance Banks
                  </span>
                  <span className="text-[#6F6C90] text-[16px] leading-tight">
                    A real-time, scalable core powering accounts, loans, deposits, and reporting.
                  </span>
                </NavLink>

                <NavLink to="/solutions/member" className="group/item flex flex-col">
                  <span className="text-[#170F49] font-medium text-[19px] mb-1 group-hover/item:text-[#3A358C] transition-colors">
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

        {/* ... Rest of the mobile code remains largely the same ... */}
        
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
            <NavLink to="/" end className={linkClasses}>Home</NavLink>
            <NavLink to="/product" className={linkClasses}>Product</NavLink>
            
            <div className="flex flex-col">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center justify-between w-full transition ${
                  isSolutionsActive ? "text-[#3A358C] font-semibold" : "hover:text-[#3A358C]"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {solutionsOpen && (
                <div className="pl-4 mt-4 flex flex-col space-y-5 border-l-2 border-[#D8CDFF] ml-1">
                  <NavLink to="/solutions/modernize-banking" className="flex flex-col">
                    <span className="font-bold text-[#1A1655] text-[15px]">For Retail Banks</span>
                    <span className="text-xs text-[#7C7C8B]">Real-time scalable core banking.</span>
                  </NavLink>
                  {/* ... other mobile sub-links ... */}
                </div>
              )}
            </div>

            <NavLink to="/why-finedge" className={linkClasses}>Why Finedge</NavLink>
            <NavLink to="/resources&faqs" className={linkClasses}>Resources & FAQs</NavLink>
            <hr className="border-[#D8CDFF]" />
            <Link to="/demo">
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