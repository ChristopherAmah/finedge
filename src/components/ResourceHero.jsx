import React from 'react';

const Hero = () => {
  return (
    <section className="text-center relative px-4 sm:px-6 lg:px-28 py-8 lg:py-12">
      
      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold font-sans text-[#121212] mb-4 max-w-3xl sm:max-w-4xl mx-auto leading-snug">
        Resources & FAQs
      </h1>

      {/* Description */}
      <p className="text-[15px] sm:text-[18px] md:text-[20px] text-[#7C7C7C] mb-8 max-w-md sm:max-w-2xl mx-auto">
        Everything you need to understand, evaluate, and implement FinEdge. From technical documentation to customer success stories.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
        <a href="mailto:info@thefifthlab.com" className="w-full sm:w-auto">
          <button className="border border-[#3A358C66] text-[#545454] rounded-full transition 
                            w-full sm:w-auto
                            py-2 sm:py-2.5 px-4 sm:px-5 text-sm sm:text-md">
            Documentation
          </button>
        </a>

        <button className="flex justify-center items-center border border-[#3A358C66] text-[#545454] rounded-full transition
                          w-full sm:w-auto
                          py-2 sm:py-2.5 px-4 sm:px-5 text-sm sm:text-md">
          Case Studies
        </button>

        <button className="flex justify-center items-center border border-[#3A358C66] text-[#545454] rounded-full transition
                          w-full sm:w-auto
                          py-2 sm:py-2.5 px-4 sm:px-5 text-sm sm:text-md">
          Frequently Asked Questions (FAQs)
        </button>
      </div>
    </section>
  );
};

export default Hero;
