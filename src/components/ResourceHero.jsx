import React from 'react';

const Hero = () => {
  return (
    <section className="text-center relative px-4 sm:px-6 lg:px-28 py-6 lg:py-12">
      

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-[64px] font-semibold font-sans text-[#121212] mb-4 max-w-3xl sm:max-w-5xl mx-auto">
        Resources & FAQs
      </h1>

      {/* Description */}
      <p className="text-[16px] sm:text-[20px] text-[#7C7C7C] mb-5 max-w-md sm:max-w-2xl mx-auto">
        Everything you need to understand, evaluate, and implement FinEdge. From technical documentation to customer success stories.
      </p>

      {/* Buttons */}
      <div className="flex flex-row flex-wrap justify-center gap-2 mb-12">
        <a href="mailto:info@thefifthlab.com" className="w-full sm:w-auto">
          <button className="border border-[#3A358C66] text-[#545454] cursor-pointer rounded-full transition
                            w-full sm:w-auto
                            py-2 px-4 text-sm sm:py-2.5 sm:px-5 sm:text-md">
            Documentation
          </button>
        </a>
        <button className="flex border border-[#3A358C66] text-[#545454] cursor-pointer rounded-full transition justify-center items-center
                          w-full sm:w-auto
                          py-2 px-4 text-sm sm:py-2.5 sm:px-5 sm:text-md">
          Case Studies
        </button>
        <button className="flex border border-[#3A358C66] text-[#545454] cursor-pointer rounded-full transition justify-center items-center
                          w-full sm:w-auto
                          py-2 px-4 text-sm sm:py-2.5 sm:px-5 sm:text-md">
          Frequently Askes Questions (FAQs) 
        </button>
      </div>
    </section>
  );
};

export default Hero;