import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
  >
    {children}
  </Link>
);

interface FooterSectionProps {
  title: string;
  links: { href: string; label: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-gray-900 font-semibold text-base">{title}</h3>
    {links.map((link, idx) => (
      <FooterLink key={idx} href={link.href}>
        {link.label}
      </FooterLink>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/mobile", label: "Mobile" },
  ];

  const contactLinks = [
    { href: "/help", label: "Help/FAQ" },
    { href: "/press", label: "Press" },
    { href: "/affiliates", label: "Affiliates" },
  ];

  const moreLinks = [
    { href: "/airlinefees", label: "Airlinefees" },
    { href: "/airline", label: "Airline" },
    { href: "/low-fare-tips", label: "Low fare tips" },
  ];

  return (
    <footer className="bg-white pt-8 pb-12 px-4 sm:px-6 lg:px-8 mt-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Jadoo <span className="w-2 h-2 bg-black rounded-full"></span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm max-w-xs">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>

       
        <FooterSection title="Company" links={companyLinks} />
        <FooterSection title="Contact" links={contactLinks} />
        <FooterSection title="More" links={moreLinks} />

        
        <div className="space-y-4">
          
          <div className="flex gap-4">
            
            <Link href="#" className="group">
              <div className="bg-white shadow-md rounded-full p-2 transition-transform transform group-hover:scale-105">
                <Facebook className="w-5 h-5 text-black" />
              </div>
            </Link>

            
            <Link href="#" className="group">
              <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-md rounded-full p-2 transition-transform transform group-hover:scale-105">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </Link>

            
            <Link href="#" className="group">
              <div className="bg-white shadow-md rounded-full p-2 transition-transform transform group-hover:scale-105">
                <Twitter className="w-5 h-5 text-black" />
              </div>
            </Link>
          </div>

         
          <p className="text-sm text-gray-600">Discover our app</p>
          <div className="flex flex-col sm:flex-row gap-2 ">
            <Link href="#">
              <div className="bg-black text-white px-3 py-2 rounded-4xl text-sm hover:bg-gray-800 flex items-center gap-2">
                <Image
                  src="/playstore.png"
                  alt="Google Play"
                  width={20}
                  height={20}
                />
                Google Play
              </div>
            </Link>

            <Link href="#">
              <div className="bg-black text-white px-3 py-2 rounded-4xl text-sm hover:bg-gray-800 flex items-center gap-2">
                <Image src="/ios.png" alt="App Store" width={30} height={30} />
                App Store
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-12 pt-6 border-t border-gray-200">
        All rights reserved @jadoo.co
      </div>
    </footer>
  );
};

export default Footer;
