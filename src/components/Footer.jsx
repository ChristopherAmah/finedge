import React from 'react';
import footerlogo from '../assets/footerlogo.png';

const FinEdgeFooter = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column - Spans 5 columns */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <img src={footerlogo} alt="FinEdge Logo" className="h-8" />
              {/* <span className="text-2xl font-semibold tracking-tight">FinEdge</span> */}
            </div>
            <p className="text-gray-400 text-[14px] max-w-xs">
              Advanced cloud-native internet banking and mobile banking solution 
              that helps banks onboard, service and engage more efficiently
            </p>
          </div>

          {/* Links Columns - Spans 7 columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Product Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-white text-[20px]">Product</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Solutions</a></li>
                <li><a href="#" className="hover:text-white transition">Updates</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-white text-[20px]">Resources</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Docs</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-white text-[20px]">Social</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">X</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Divider and Legal */}
        <div className="border-t border-[#EAEAEA] pt-8">
          <div className="flex flex-col md:row  gap-4 text-[12px] text-[#7C7C7C]">
            <div className="flex items-center gap-4 text-[12px]">
              <span>© 2025 Finedge</span>
              <span className="text-[#7C7C7C]">•</span>
              <a href="#" className="hover:text-white">Terms</a>
              <span className="text-[#7C7C7C]">•</span>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FinEdgeFooter;