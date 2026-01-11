import React, { useState } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
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

  return (
    <header className="py-4 sm:py-6 lg:py-[30.5px] lg:pb-[51px]">
      <nav className="max-w-5xl mx-auto bg-[#F3F3F8] rounded-full px-5 sm:px-[31px] py-2.5 flex items-center justify-between relative border border-[#D8CDFF] shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="FinEdge Logo" className="h-8 object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[16px]">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkClasses}>
            Product
          </NavLink>

          {/* Solutions Dropdown (Desktop) */}
          <div className="relative group">
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-[#3A358C] font-semibold"
                    : "text-[#595959] hover:text-[#3A358C]"
                }`
              }
            >
              <span>Solutions</span>
              <ChevronDown size={16} className="mt-px" />
            </NavLink>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
              <NavLink
                to="/solutions/modernize-banking"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-[#F3F3F8] hover:text-[#3A358C] rounded-t-xl"
              >
                Core Banking
              </NavLink>
              <NavLink
                to="/solutions/digital-banking"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-[#F3F3F8] hover:text-[#3A358C]"
              >
                Digital Banking
              </NavLink>
              <NavLink
                to="/solutions/payments"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-[#F3F3F8] hover:text-[#3A358C]"
              >
                Payments & Transfers
              </NavLink>
              <NavLink
                to="/solutions/analytics"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-[#F3F3F8] hover:text-[#3A358C] rounded-b-xl"
              >
                Analytics & Insights
              </NavLink>
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
          <div className="absolute top-[70px] left-0 w-full bg-[#ECEBF4] rounded-2xl shadow-lg py-4 px-6 lg:hidden flex flex-col space-y-4 text-[#7C7C7C] text-[16px] z-20">
            <NavLink to="/" end className={linkClasses}>
              Home
            </NavLink>

            <NavLink to="/products" className={linkClasses}>
              Product
            </NavLink>

            {/* Mobile Solutions Dropdown */}
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center justify-between hover:text-[#3A358C] transition"
            >
              <span>Solutions</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="pl-4 flex flex-col space-y-2 text-sm">
                <NavLink to="/solutions/modernize-banking">Core Banking</NavLink>
                <NavLink to="/solutions/digital-banking">
                  Digital Banking
                </NavLink>
                <NavLink to="/solutions/payments">
                  Payments & Transfers
                </NavLink>
                <NavLink to="/solutions/analytics">
                  Analytics & Insights
                </NavLink>
              </div>
            )}

            <NavLink to="/why-finedge" className={linkClasses}>
              Why Finedge
            </NavLink>

            <NavLink to="/resources&faqs" className={linkClasses}>
              Resources & FAQs
            </NavLink>

            {/* Mobile CTA */}
            <Link to="/demo">
              <button className="flex items-center justify-center space-x-1 bg-[#3A358C] text-white text-md font-medium py-2.5 px-5 rounded-full hover:bg-indigo-800 transition duration-300 mt-2">
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
