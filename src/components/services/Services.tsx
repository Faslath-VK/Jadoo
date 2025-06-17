"use client";

import React from "react";
import { ServiceCardProps } from "@/types";
import Image from "next/image";
import { services } from "@/data/services";
import { PlusPattern } from "./PlusPattern";

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl p-6  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1   flex flex-col items-center text-center ">
  {/* Image Shape + Image */}
  <div className="relative mb-4">
    <div className="w-[50px] h-[49px] bg-[#FFF1DA] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px] flex items-center justify-center">
      <Image
        src={imageSrc}
        alt={title}
        width={67}
        height={40}
        className="object-contain"
      />
    </div>
  </div>

  {/* Title & Description */}
  <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 min-h-[48px] flex items-center justify-center">
    {title}
  </h3>
  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-snug min-h-[72px]">
    {description}
  </p>

  {/* Hover border */}
  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
</div>
  );
};

const ServicesPage: React.FC = () => {
  return (
   <div className=" bg-white relative overflow-hidden mb-16">
      {/* Right side PlusPattern */}
      <div className="absolute right-0 top-10 hidden md:block">
        <PlusPattern />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-16 ">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
              Category
            </span>
          </div>
          <h1 className="text-5xl md:text-4xl font-bold font-volkhov text-black mt-6 mb-8">
            We Offer Best Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
