import Image from "next/image";
import React from "react";
import { heroContent } from "@/data/hero";


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div
        className="absolute bg-[#FFF1DA] rounded-full"
        style={{
          width: "766.31px",
          height: "872.58px",
          top: "-149px",
          left: "736px",
          zIndex: 1,
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-96px)] ml-6">
          
          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-[#DF6951] font-bold text-lg uppercase ">
                {heroContent.subtitle}
              </p>

              <h1 className=" text-5xl lg:text-6xl xl:text-7xl font-bold font-volkhov text-[#181E4B] ">
                {heroContent.title}
              </h1>

              <p className="text-[#5E6282] text-lg  max-w-lg">
                {heroContent.description}
              </p>
            </div>

           
            <div className="flex items-center space-x-6">
              <button className="bg-[#F1A501] hover:bg-[#E09501] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg">
                Find out more
              </button>

              <button className="flex items-center space-x-3 text-[#686D77] hover:text-[#F1A501] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l7-5z" />
                  </svg>
                </div>
                <span className="font-medium">Play Demo</span>
              </button>
            </div>
          </div>

         
          <div className="relative">
            
              <Image
                src="/Traveller.png"
                alt="Traveller with backpack"
                width={820}
                height={800}
                className="object-cover rounded-lg"
                priority
              />
           
          </div>
        </div>
      </div>

       <div className="absolute top-55 right-20 z-5">
        <Image
          src="/flight.png"
          alt="flight1"
          width={112}
          height={42} />
      </div>
      
      <div className="absolute top-44 right-96 z-5">
        <Image
          src="/flight.png"
          alt="flight1"
          width={99}
          height={32} />
      </div>
    </section>
  );
};
export default Hero;
