'use client';

import React from 'react';
import Image from 'next/image';

const logos = [
  '/Axon.jpg',
  '/Jetstar.jpg',
  '/Expedia.jpg',
  '/Qantas.jpg',
  '/Alitalia.jpg',
];

const LogoStrip: React.FC = () => {
  return (
    <div className=" py-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8">
        {logos.map((src, index) => (
          <div key={index} className="relative w-36 h-30">
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;
