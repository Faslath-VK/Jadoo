'use client';

import { Send } from 'lucide-react';
import React, { useState } from 'react';
import { PlusPattern } from './services/PlusPattern';

const SubscriptionPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="bg-white flex items-center justify-center px-4 pt-6 relative">
     
      <div className="absolute bottom-15 right-0 z-0">
        <PlusPattern />
      </div>

      <div className="relative max-w-[1170px] w-full h-[407px] z-10">
        
        <div className="absolute inset-0 bg-[#DFD7F9] opacity-20 rounded-tl-[129px] rounded-[20px] z-0"></div>

        
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-purple-600 rounded-full p-4 shadow-lg hover:bg-purple-700 transition">
            <Send className="w-5 h-5 text-white" />
          </div>
        </div>

        
        <div className="flex flex-col items-center justify-center h-full px-4 text-center relative z-10">
          <h1 className="text-2xl md:text-3xl font-medium font-volkhov text-gray-700 leading-relaxed mb-12 max-w-xl">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h1>

          <form onSubmit={handleSubmit} className="max-w-md w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 bg-orange-700 hover:bg-orange-500 text-white font-medium rounded-xl transition-transform transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
