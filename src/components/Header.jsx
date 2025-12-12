import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import topBg from '../assets/top.png';
import bottomBg from '../assets/bottom.png';

function App() {
  return (
    <div className="relative bg-white font-sans overflow-hidden">

      {/* ==== TOP BACKGROUND IMAGE ==== */}
      <img
        src={topBg}
        alt="Top Background"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-auto opacity-80 z-0"
      />

      {/* ==== BOTTOM BACKGROUND IMAGE ==== */}
      <img
        src={bottomBg}
        alt="Bottom Background"
        className="pointer-events-none select-none absolute bottom-0 left-0 w-full h-auto opacity-80 z-0"
      />

      {/* Page Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
