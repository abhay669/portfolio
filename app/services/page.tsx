"use client";

import { Separator } from "@/components/ui/separator";
import Navbar from "../navbar";
import Brands from "./brands";
import Process from "./process";
import Impact from "./impact";
import Footer from "../footer";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Digital Marketing",
    description: `Precision, Performance, and Profitability.\nWe deploy result-oriented campaigns that move the needle—on leads, sales, and brand awareness. By blending creativity with data, we ensure every ad dollar turns into measurable business value. Our focus is ROAS (Return on Ad Spend), not vanity metrics.`,
    benefits: [
      "Immediate Lead Generation.",
      "Sales Funnel Automation",
      "Data-Driven Scaling",
      "Omnichannel Reach",
      "Campaign Transparency",
    ],
    video: "/videos/Digital Marketing.mp4",
  },

  {
    title: "COMMERCIAL SHOOTS",
    description: `Visuals That Sell, Stories That Scale.\nGreat products need great presentation. We produce scroll-stopping photos and videos that elevate perception and increase conversions across all marketing channels—ads, websites, packaging, and socials.`,
    benefits: [
      "Improved Product Appeal",
      "Higher Ad Performance",
      "Brand Storytelling",
      "Content for All Platforms",
      "Professionalism & Consistency",
    ],
    video: "/videos/COMMERCIAL SHOOTS.mp4",
  },
  {
    title: "Branding",
    description: `Crafting Brands That Stand the Test of Time.\nWe build magnetic identities that don't just look good—they resonate. From strategy to visuals, we create a cohesive brand system that aligns your values with your visuals and messaging.`,
    benefits: [
      "Stronger Customer Trust",
      "Premium Market Positioning",
      "Clarity in Messaging",
      "Emotional Connection",
      "Brand Guidelines for Scale",
    ],
    video: "/videos/BRANDING.mp4",
  },
  {
    title: "Web Development",
    description: `Fast. Scalable. Beautiful. Built to Convert.\nWe design and develop websites that aren't just digital brochures—they're performance machines. From sleek landing pages to robust enterprise web apps, our solutions are tailored for speed, scalability, and UX excellence. Every pixel and every line of code is written to serve your business goals.`,
    benefits: [
      "Higher Conversion Rates",
      "Improved SEO Performance",
      "Brand Credibility",
      "Scalability",
      "Custom Integrations",
    ],
    video: "/videos/WEB DEVLOPMENT.mp4",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: `Own the Rankings. Win the Market.\nWe turn your website into a lead-generating asset by making it discoverable. SEO is a long-term strategy that brings free, compounding traffic to your site—day after day, without ad spend.`,
    benefits: [
      "Consistent Organic Traffic",
      "Authority & Trust",
      "Higher Quality Leads",
      "Cost-Efficient Scaling",
      "Improved UX",
    ],
    video: "/videos/SEO.mp4",
  },
  {
    title: "Social Media management",
    description: `Build Community. Drive Conversation. Convert Followers.\nWe manage your brand’s voice across platforms—strategically, creatively, and consistently. From content calendars to comments, we take care of the entire ecosystem so you build not just followers, but fans.`,
    benefits: [
      "Increased Brand Awareness",
      "Higher Engagement Rates",
      "Stronger Community",
      "Lead Generation Through DMs",
      "Trend Alignment",
    ],
    video: "/videos/Social Media management.mp4",
  },
  {
    title: "GRAPHIC DESIGN",
    description: `Design That Performs. Not Just Decorates.\nDesign drives attention. Our graphics are built to communicate, convert, and captivate. Whether it’s a pitch deck, ad creative, or UI element—we create visual assets that push business goals forward.`,
    benefits: [
      "More Engagement on Ads & Posts",
      "Better First Impressions",
      "Enhanced User Experience",
      "Sales-Driven Creatives",
      "Brand Consistency",
    ],
    video: "/videos/GRAPHIC DESIGN.mp4",
  },
  {
    title: "Content Creation",
    description: `Inform. Influence. Inspire. Sell.\nFrom blogs to reels to video scripts, our content connects brands with audiences. We create not just for clicks—but for conversions and credibility.`,
    benefits: [
      "Stronger SEO",
      "Higher Engagement",
      "Lead Nurturing",
      "Omnichannel Usage",
      "Thought Leadership",
    ],
    video: "/videos/Content Creation.mp4",
  },
];

// Lazy-load video component
const ServiceVideo = ({ src, poster }: { src: string; poster: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: 480 }}>
      {isVisible ? (
        <video
          src={src}
          poster={poster}
          width={700}
          height={480}
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            borderRadius: 8,
            background: "#eee",
            display: "block",
            width: "100%",
            maxWidth: 700,
            height: 480,
          }}
        />
      ) : (
        <Image
          src={poster}
          alt="Service preview"
          width={700}
          height={480}
          style={{
            objectFit: "cover",
            borderRadius: 8,
            background: "#eee",
            display: "block",
            width: "100%",
            maxWidth: 700,
            height: 480,
          }}
        />
      )}
    </div>
  );
};

const Services = () => {
  return (
    <div className="md:min-h-screen bg-white">
      <Navbar />

      {/* hero section */}

      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              A full service digital innovation partner
            </h1>
            <p className="text-xl text-neutral-500">
              Our rich design and technology expertise delivers top brands and
              digital experiences
            </p>
          </div>
        </div>
      </div>

      <Brands />
      <Separator className="my-16" />

      {/* services section */}

      <div className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <h2 className="text-xl font-bold text-[#7b7b7b] mb-10">
          / Our Services
        </h2>

        <div className="w-full flex justify-center">
          <div className="space-y-24 md:space-y-40">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-32 items-start mb-24"
              >
                {/* Video or image */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <ServiceVideo
                    src={service.video}
                    poster={service.video.replace(/\.mp4$/i, ".jpg")}
                  />
                </div>
                {/* Text */}
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <h2 className="text-2xl font-bold mb-8">{service.title}</h2>
                  <p className="text-[#7b7b7b] mb-12">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div className="flex items-center space-x-2" key={benefitIndex}>
                        <span className="text-[#7b7b7b]">/ {benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Process />
      <Impact />
      <Footer />

      
    </div>
  );
};

export default Services;

