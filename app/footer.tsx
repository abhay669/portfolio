"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Removed newsletter state and logic

  const mainLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Book Meeting", href: "book-meeting" },
    { name: "Photography work", href: "/projects" },
    { name: "Videography work", href: "/projects" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const socialLinks = [
    { icon: PiFacebookLogo, href: "https://www.facebook.com/profile.php?id=61574220253478" },
    { icon: PiInstagramLogo, href: "https://www.instagram.com/aarambhworks/" },
    { icon: PiLinkedinLogo, href: "https://in.linkedin.com/company/aarambh-works?trk=public_post_feed-actor-name" },
    { icon: PiTwitterLogo, href: "https://x.com/AarambhWorks" },
    { icon: FaWhatsapp, href: "https://wa.me/918487848089" }, // Replace with actual WhatsApp number
  ];

  return (
    <footer className="py-10 md:py-16 md:mt-20 px-6 2xl:w-4/5 md:mx-auto md:px-16">
      <Separator className="mb-12" />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* left side */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Let&apos;s Talk!</h2>
            <a
              href="mailto:aarmbhworks@gmail.com"
              className="text-xl hover:underline inline-block mb-2"
            >
              aarmbhworks@gmail.com
            </a>
            <br />
            <a
              href="tel:+919825123456"
              className="text-xl hover:underline inline-block mb-2"
            >
              +91 84878 48089
            </a>
            <p className="text-gray-600 mt-2">
              105 Shiven Arise, Opp. Madhav Elegance,
              <br />
              Jahangir Pura, Surat, Gujarat 395005
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              {mainLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#7b7b7b] hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {mainLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#7b7b7b] hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - (Newsletter removed) */}
        </div>

        {/* Bottom section */}
        <div
          className="flex flex-col md:flex-row 
        justify-between items-start md:items-center pt-8 border-t border-gray-200"
        >
          {/* Legal links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#7b7b7b] hover:underline text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#7b7b7b] hover:text-gray-900"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-[#7b7b7b] text-sm">© 2025 Abhay Thummar & Aarambh Works</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
