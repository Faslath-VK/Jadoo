import React from "react";
import Image from "next/image";
import { bookingSteps, tripData } from "@/data/booktrip";
import { Leaf, Send, Map, Building2 } from "lucide-react";

const BookTrip: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ml-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Steps */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 text-lg mb-2 font-volkhov font-semibold">
                Easy and Fast
              </p>
              <h1 className="text-4xl lg:text-5xl font-volkhov font-bold text-gray-900 leading-tight">
                Book Your Next Trip
                <br />
                In 3 Easy Steps
              </h1>
            </div>

            <div className="space-y-4">
              {bookingSteps.map((step) => (
                <div key={step.number} className="flex items-start space-x-3">
                  <div
                    className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center text-white font-bold flex-shrink-0`}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold font-volkhov text-gray-600 mb-0">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Trip Card */}
          <div className="flex justify-center lg:justify-end pr-4 lg:pr-20">
            <div className="relative shadow-[12px_-12px_30px_0px_rgba(15,182,243,0.3)]
 rounded-3xl mt-4">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-80 relative z-10">
                
                {/* Trip Image */}
                <div className="relative h-40 mx-6 mt-4 rounded-2xl overflow-hidden">
                  <Image
                    src="/greece.jpg"
                    alt="Santorini, Greece"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tripData.title}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">{tripData.dates}</span>
                    <span className="text-sm text-gray-600">
                      by {tripData.author}
                    </span>
                  </div>

                  {/* Status Icons */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <Send className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <Map className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* People Count */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">
                          {tripData.peopleCount} people going
                        </span>
                      </div>
                    </div>

                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Section */}
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
