import React from 'react';
import footerlogo from '../assets/footerlogo.png';

const FinEdgeFooter = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 sm:mb-16">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <img src={footerlogo} alt="FinEdge Logo" className="h-8" />
            </div>

            <p className="text-gray-400 text-sm max-w-sm mx-auto sm:mx-0">
              Advanced cloud-native internet banking and mobile banking solution
              that helps banks onboard, service and engage more efficiently
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">

            {/* Product */}
            <div className="space-y-3">
              <h4 className="font-medium text-white text-lg">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Solutions</a></li>
                <li><a href="#" className="hover:text-white transition">Updates</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h4 className="font-medium text-white text-lg">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Docs</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-medium text-white text-lg">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">X</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2A2A2A] pt-6">
          <div className="flex flex-row items-center gap-3 text-xs text-[#7C7C7C] justify-center text-center">
            <span>© 2025 Finedge</span>
            <span className="inline">•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="inline">•</span>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FinEdgeFooter;
