"use client";
import dynamic from "next/dynamic";

const Faq = dynamic(() => import("./faq"), { ssr: false });
const Footer = dynamic(() => import("./footer"), { ssr: false });
const Founders = dynamic(() => import("./founders"), { ssr: false });
const Hero = dynamic(() => import("./hero"), { ssr: false });
const Navbar = dynamic(() => import("./navbar"), { ssr: false });
const Projects = dynamic(() => import("./projects").then(mod => mod.Projects), { ssr: false });
const Statistics = dynamic(() => import("./stats"), { ssr: false });
const Trusted = dynamic(() => import("./trusted"), { ssr: false });
const HomeServicesSection = dynamic(() => import("./HomeServicesSection"), { ssr: false });

export default function HomeClient() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Projects />
      <div className="my-40" />
      <HomeServicesSection />
      <div className="my-20" />
      <Statistics />
      <div className="my-20" />
      <Faq />
      <Founders />
      <Footer />
    </div>
  );
} 