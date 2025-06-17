"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full   fixed top-2 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:8">
        <div className="flex justify-between items-center h-16">
          <div className="text-5xl font-bold text-black flex items-center ml-6">
            <span>Jad</span>
            <div className="flex items-center ">
              <div className="w-6 h-8 bg-[#F1A501] rounded-full border-5"></div>
              <div className="w-6 h-8 bg-[#F1A501] rounded-full  border-5 "></div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 items-center text-md text-[#212832] font-semibold gap-6">
            <a href="#" className="">
              Destinations
            </a>
            <a href="#" className="">
              Hotels
            </a>
            <a href="#" className="">
              Flights
            </a>
            <a href="#" className="">
              Bookings
            </a>
            <a href="#" className="">
              Login
            </a>
            <a href="#" className="border p-2 px-4 rounded">
              Sign Up
            </a>
            <a className="flex items-center gap-1 cursor-pointer">
              EN
              <ChevronDown className="w-4 h-4" />
            </a>
          </nav>

          <div className="md:hidden"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;

// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown, Globe, User, Search } from 'lucide-react';

// interface NavItem {
//   name: string;
//   href: string;
//   hasDropdown: boolean;
//   dropdownItems?: string[];
// }

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);
//   const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems: NavItem[] = [
//     {
//       name: 'Destinations',
//       href: '#',
//       hasDropdown: true,
//       dropdownItems: ['Popular Destinations', 'Hidden Gems', 'City Breaks', 'Beach Holidays']
//     },
//     {
//       name: 'Hotels',
//       href: '#',
//       hasDropdown: true,
//       dropdownItems: ['Luxury Hotels', 'Budget Hotels', 'Resorts', 'Boutique Hotels']
//     },
//     {
//       name: 'Flights',
//       href: '#',
//       hasDropdown: true,
//       dropdownItems: ['Domestic Flights', 'International', 'Business Class', 'Deals']
//     },
//     {
//       name: 'Bookings',
//       href: '#',
//       hasDropdown: false
//     }
//   ];

//   const handleDropdown = (index: number): void => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20'
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">

//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <a
//               href="#"
//               className="group flex items-center space-x-2"
//             >

//               <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
//                 Jadoo
//               </span>
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <div key={item.name} className="relative group">
//                 <button
//                   onClick={() => item.hasDropdown && handleDropdown(index)}
//                   className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 py-2 relative group"
//                 >
//                   <span>{item.name}</span>
//                   {item.hasDropdown && (
//                     <ChevronDown
//                       size={16}
//                       className={`transform transition-transform duration-200 ${
//                         activeDropdown === index ? 'rotate-180' : ''
//                       }`}
//                     />
//                   )}
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {item.hasDropdown && activeDropdown === index && item.dropdownItems &&(
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
//                     {item.dropdownItems.map((dropdownItem) => (
//                       <a
//                         key={dropdownItem}
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
//                       >
//                         {dropdownItem}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right Side Actions */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {/* Search */}
//             <button className="p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-300">
//               <Search size={20} />
//             </button>

//             {/* Language Selector */}
//             <div className="relative group">
//               <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-all duration-300 p-2">
//                 <Globe size={16} />
//                 <span className="text-sm font-medium">EN</span>
//                 <ChevronDown size={14} />
//               </button>

//               <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 {['EN', 'ES', 'FR', 'DE'].map((lang) => (
//                   <button
//                     key={lang}
//                     className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
//                   >
//                     {lang}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Login */}
//             <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-orange-50">
//               <User size={16} />
//               <span>Login</span>
//             </button>

//             {/* Sign Up Button */}
//             <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
//               Sign up
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center space-x-3">
//             <button className="p-2 text-gray-600 hover:text-orange-500 rounded-full transition-all duration-300">
//               <Search size={20} />
//             </button>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-gray-700 hover:text-orange-500 transition-all duration-300"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 animate-slideDown">
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item, index) => (
//                 <div key={item.name}>
//                   <button
//                     onClick={() => item.hasDropdown && handleDropdown(index)}
//                     className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-500 font-medium py-3 border-b border-gray-100 transition-all duration-300"
//                   >
//                     <span>{item.name}</span>
//                     {item.hasDropdown && (
//                       <ChevronDown
//                         size={16}
//                         className={`transform transition-transform duration-200 ${
//                           activeDropdown === index ? 'rotate-180' : ''
//                         }`}
//                       />
//                     )}
//                   </button>

//                   {item.hasDropdown && activeDropdown === index && item.dropdownItems && (
//                     <div className="pl-4 mt-2 space-y-2">
//                       {item.dropdownItems.map((dropdownItem) => (
//                         <a
//                           key={dropdownItem}
//                           href="#"
//                           className="block text-sm text-gray-600 hover:text-orange-500 py-2 transition-all duration-200"
//                         >
//                           {dropdownItem}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Mobile Actions */}
//               <div className="pt-4 space-y-3 border-t border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-700 font-medium">Language</span>
//                   <select className="bg-transparent text-orange-500 font-medium">
//                     <option>EN</option>
//                     <option>ES</option>
//                     <option>FR</option>
//                     <option>DE</option>
//                   </select>
//                 </div>

//                 <button className="flex items-center space-x-2 w-full text-gray-700 hover:text-orange-500 font-medium py-3 transition-all duration-300">
//                   <User size={16} />
//                   <span>Login</span>
//                 </button>

//                 <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-full shadow-lg">
//                   Sign up
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }

//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//       `}</style>
//     </header>
//   );
// }
