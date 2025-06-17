


 'use client';

 import React, { useState } from 'react';
 import Image from 'next/image';
 import { testimonials } from '@/data/testimonials';





 const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];
  const nextIndex = (activeTestimonial + 1) % testimonials.length;
  const nextTestimonialData = testimonials[nextIndex];

  return (
    <div className="overflow-hidden px-4 ml-6 py-16 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */} 
          <div className="space-y-8 -mt-6">
            <div>
              <p className="text-sm font-semibold font-volkhov text-gray-500 uppercase tracking-wider mb-4">
                TESTIMONIALS
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold font-volkhov text-gray-900 leading-tight">
                What People Say
                <br />
                About Us.
              </h1>
            </div>

            {/* Pagination Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-black'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

         {/* Right Section */}
<div className="relative h-[360px] w-full max-w-md">
  {/* Arrow Buttons */}
  <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 space-y-4 hidden sm:flex flex-col z-30">
    <button
      onClick={prevTestimonial}
      className="w-10 h-10 flex items-center justify-center transition-all duration-200"
      aria-label="Previous testimonial"
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
    <button
      onClick={nextTestimonial}
      className="w-10 h-10 flex items-center justify-center transition-all duration-200"
      aria-label="Next testimonial"
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>

  {/* Next Card (partially shown under current) */}
  <div className="absolute bottom-3 right-3 w-full z-10">
    <div className="bg-white rounded-xl shadow-md p-6">
      <p className="text-sm text-gray-500">"{nextTestimonialData.quote}"</p>
    </div>
  </div>

  {/* Current Card */}
  <div className="absolute top-0 left-[-50px] w-full bg-white rounded-xl shadow-xl p-6 z-20">
    {/* Avatar */}
    <div className="absolute -top-1 left-2 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
      <Image
        src={currentTestimonial.avatar}
        alt={currentTestimonial.name}
        width={56}
        height={56}
        className="object-cover w-full h-full"
      />
    </div>

    <div className="mt-10">
      <p className="text-md text-gray-600 leading-relaxed mb-6">
        "{currentTestimonial.quote}"
      </p>

      <div>
        <h3 className="font-bold text-gray-600 text-lg">
          {currentTestimonial.name}
        </h3>
        <p className="text-gray-600 text-sm">{currentTestimonial.location}</p>
        {currentTestimonial.role && currentTestimonial.company && (
          <p className="text-gray-500 text-sm">
            {currentTestimonial.role} of {currentTestimonial.company}
          </p>
        )}
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;


