import React from 'react';
import Image from 'next/image';
import { Plane } from 'lucide-react';
import { destinations } from '@/data/destinations';
import { Pattern } from './Pattern';


const Destinations: React.FC = () => {
  return (
     <div className="bg-white pt-8 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
       
        <div className="absolute  top-2 right-20 z-0 opacity-20">
          <Pattern />
        </div>

        
        <div className="text-center mb-10 relative z-10">
          <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Top Selling
          </p>
          <h1 className="text-3xl md:text-4xl font-volkhov font-bold text-gray-900">
            Top Destinations
          </h1>
        </div>

        
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="w-62 h-[370px] bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              
              <div className="relative h-66 w-full">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  className="object-cover"
                />
              </div>

              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {destination.title}
                  </h3>
                  <span className="text-base font-bold text-gray-900">
                    {destination.price}
                  </span>
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                  <Plane className="w-4 h-4 mr-2" />
                  <span>{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;