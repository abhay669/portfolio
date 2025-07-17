'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, PanInfo } from "framer-motion";

import Image from "next/image";
import {
  PiArrowArcLeft,
  PiArrowArcRight,
 
} from "react-icons/pi";


interface Founder {
    name: string;
    role: string;
    image: string;
    description: string;
  }


const founders: Founder[] = [
    {
      name: "Tulip Enterprise",
      role: "",
      image: "/Tulip Logo (1).png",
      description:
        "Leading our vision with over a decade of experience in Marketing and business strategy",
    },
    {
      name: "Haridarshan jewellers",
      role: "",
      image: "/Haridarshan Logo.png",
      description:
        "Expert in Branding, driving innovation and technical excellence across our projects",
    },
    {
      name: "TuningBags",
      role: "",
      image: "/Tuning Logo.png",
      description:
        "Crafting impactful marketing strategies that resonate with our clients and their audiences",
    },
    {
      name: "Delta School",
      role: "",
      image: "/Delta Logo.png",
      description:
        "Creating innovative solutions with our expert development team",
    },
    
   
  ];





const Founders = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const [isMobile, setIsMobile] = useState(false);


    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: 0.2,
          },
        },
      };
    
      const item: Variants = {
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring" as const,
            duration: 0.5,
            bounce: 0.4,
          },
        },
        exit: {
          opacity: 0,
          y: -20,
          scale: 0.95,
          transition: {
            duration: 0.3,
          },
        },
      };

      



    useEffect(() => {
        const handleResize = () => {
          const mobile = window.innerWidth < 768;
          setIsMobile(mobile);
          setItemsToShow(mobile ? 2 : 4);
          setStartIndex((prev) => {
            const maxStart = founders.length - (mobile ? 2 : 4);
            return prev > maxStart ? maxStart : prev;
          });
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


      const next = () => {
        setStartIndex((prev) => {
          const nextIndex = prev + 1;
          const maxStart = founders.length - itemsToShow;
          return nextIndex > maxStart ? 0 : nextIndex;
        });
      };
    
      const prev = () => {
        setStartIndex((prev) => {
          const nextIndex = prev - 1;
          return nextIndex < 0 ? founders.length - itemsToShow : nextIndex;
        });
      };
    
      const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
      ) => {
        const swipeThreshold = 50;
        if (
          info.offset.x < -swipeThreshold &&
          startIndex < founders.length - itemsToShow
        ) {
          next();
        } else if (info.offset.x > swipeThreshold && startIndex > 0) {
          prev();
        }
      };
    
      const visibleFounders = founders.slice(startIndex, startIndex + itemsToShow);

      


    return ( 
        <div
        className="px-6 
      mx-auto 2xl:w-4/5 md:px-16
      
      py-16 md:py-32"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Trusted by 400+ Business Owners
            </h2>
            <p className="text-gray-600">
              Meet the passionate experts driving our AI solutions.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <motion.button onClick={prev}>
              <PiArrowArcLeft className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
            </motion.button>
            <motion.button onClick={next}>
              <PiArrowArcRight className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
            </motion.button>
          </div>
        </div>
  
        <div className="relative max-w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
              key={startIndex}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              drag={isMobile ? "x" : false}
              dragSnapToOrigin
              dragElastic={0.1}
              onDragEnd={(event, info) => handleDragEnd(event, info)}
              style={{
                touchAction: "none",
                x: 0,
              }}
            >
              {visibleFounders.map((founder, index) => (
                <motion.div
                  key={`${founder.name}-${index}`}
                  variants={item}
                  className="mb-6 md:mb-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.06, y: -6 }}
                    className="relative flex flex-col items-center justify-between h-full w-full bg-white rounded-2xl p-4 sm:p-6 transition-all duration-300 group overflow-hidden"
                    style={{ minHeight: '390px' }}
                  >
                    <div className="bg-gray-100 aspect-square mb-4 overflow-hidden rounded-xl w-full max-w-[220px] sm:max-w-full relative z-20">
                      <motion.div
                        whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="w-full h-full"
                      >
                        <Image
                          priority
                          width={500}
                          height={500}
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover transition-transform duration-300 rounded-xl"
                        />
                      </motion.div>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-center z-20 drop-shadow-sm text-gray-900">{founder.name}</h3>
                    <p className="text-[#7b7b7b] text-xs sm:text-sm mb-2 text-center z-20">{founder.role}</p>
                    <p className="text-gray-700 text-xs sm:text-sm mb-4 text-center z-20">{founder.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    
);
}
 
export default Founders;