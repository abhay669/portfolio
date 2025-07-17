'use client'

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, easeOut, Variants } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Get navigation timing
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    // Check if this is a fresh page load or reload
    if (navigation?.type === "reload" || navigation?.type === "navigate") {
      setHasAnimated(false);
    } else {
      setHasAnimated(true);
    }
  }, []);

  // Transform video size and width based on scroll with eased transitions
  const videoScale = useTransform(scrollY, [0, 500], [0.9, 1], {
    ease: easeOut,
  });
  const videoWidth = useTransform(scrollY, [0, 500], ["85%", "100%"], {
    ease: easeOut,
  });
  const videoBorderRadius = useTransform(scrollY, [0, 500], [32, 0], {
    ease: easeOut,
  });

  // Enhanced content animations
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0, 1],
        delay: 0.6,
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Content Section */}
      <motion.div
        className="w-full flex justify-center items-center md:px-0 pt-32 md:pt-40 bg-white"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={contentVariants}
      >
        <div className="md:max-w-3xl text-center px-4">
          <motion.h1
            variants={contentVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            <motion.span className="inline-block" variants={contentVariants as Variants}>
            Start  Your  Digital 
            </motion.span>
            <br />
            <motion.span className="inline-block" variants={contentVariants as Variants}>
            journey with आरंभ 
            </motion.span>
          </motion.h1>

          <motion.p
            variants={contentVariants}
            className="text-xl text-[#7b7b7b] mb-8"
          >
            At Aarambh Works your dreams nmpmcome
            <br />
            to life with our great team
          
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial={hasAnimated ? "visible" : "hidden"}
            animate="visible"
            className="flex gap-x-3 md:gap-x-6 justify-center mb-10"
          >
            <Link
              href={"/projects"}
              className="bg-black text-white 
              px-6 md:px-8 py-3 rounded-full text-lg font-medium transition-all hover:shadow-lg"
            >
             View Our Work
            </Link>

            <motion.a
              href="/book-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white
               px-6 md:px-8 py-3 rounded-full text-lg
                font-medium hover:bg-red-600 transition-all hover:shadow-lg inline-block"
            >
              Book a meeting
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="flex justify-center w-full md:px-0"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.96 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              delay: 0.2,
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
          },
        }}
      >
        <motion.div
          style={{
            width: videoWidth,
            scale: videoScale,
            borderRadius: videoBorderRadius,
            overflow: "hidden",
          }}
          className="relative w-full md:w-auto aspect-[700/480] bg-[#eee] rounded-lg"
        >
          <video
            src="/videos/home.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-lg pointer-events-none"
            style={{ background: '#eee' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
