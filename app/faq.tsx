"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const steps = [
  {
    title: 'Research & Discovery',
    description: 'Understanding your needs, market analysis, and gathering insights to build a strong foundation.',
    gif: '/research.gif',
  },
  {
    title: 'Strategy & Planning',
    description: 'Developing comprehensive strategies and detailed project roadmaps for success.',
    gif: '/strategy.gif',
  },
  {
    title: 'Execution & Development',
    description: 'Implementing solutions with agile methodologies and continuous improvement.',
    gif: '/execution.gif',
  },
  {
    title: 'Testing & Launch',
    description: 'Rigorous quality assurance and seamless deployment of solutions.',
    gif: '/launch.gif',
  },
];

const ANIMATION_DURATION = 1500; // ms
const ANIMATION_PAUSE = 400; // ms between loops

const Faq = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  // Store dashOffset and length for each step
  const [dashOffsets, setDashOffsets] = useState<number[]>(steps.map(() => 0));
  const [lengths, setLengths] = useState<number[]>(steps.map(() => 0));
  const svgRefs = useRef<(SVGPathElement | null)[]>([]);

  // Get path lengths on mount
  useEffect(() => {
    const newLengths = svgRefs.current.map((ref) => (ref ? ref.getTotalLength() : 0));
    setLengths(newLengths);
    setDashOffsets(newLengths);
  }, []);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.3 }
    );
    const node = sectionRef.current;
    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Animation loop for all steps (staggered, independent repeat)
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    if (animate && lengths.every((l) => l > 0)) {
      steps.forEach((_, idx) => {
        const startDelay = 50 + idx * 300;
        const loop = () => {
          setDashOffsets((prev) => {
            const next = [...prev];
            next[idx] = lengths[idx];
            return next;
          });
          timers[idx] = setTimeout(() => {
            setDashOffsets((prev) => {
              const next = [...prev];
              next[idx] = 0;
              return next;
            });
            timers[idx] = setTimeout(loop, ANIMATION_DURATION + ANIMATION_PAUSE);
          }, startDelay);
        };
        // Initial start
        timers[idx] = setTimeout(loop, startDelay);
      });
    }
    return () => timers.forEach(clearTimeout);
  }, [animate, lengths]);

  return (
    <div ref={sectionRef} className="w-full flex justify-center items-center min-h-[600px] bg-white pt-56 pb-56">
      <div className="relative max-w-6xl w-full px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 flex justify-center"
        >
          <div className="max-w-2xl text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Process
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We follow a proven methodology that ensures every project is delivered with excellence and innovation.
            </motion.p>
          </div>
        </motion.div>

        {/* Steps Section */}
        <div className="relative flex flex-col gap-y-16 max-w-3xl w-full mx-auto">
        {steps.map((step, i) => (
            <motion.div
            key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
              style={{ minHeight: 160 }}
          >
            {i % 2 === 0 ? (
              <>
                  <motion.div style={{ width: 140, height: 140, marginRight: 56, zIndex: 2 }}>
                    <Image
                      src={step.gif}
                      alt={step.title}
                      width={140}
                      height={140}
                      style={{ objectFit: 'contain', borderRadius: 10 }}
                      priority={i === 0}
                    />
                  </motion.div>
                  {/* Text box with SVG wrapping around it */}
                  <div style={{ textAlign: 'left', maxWidth: 260, position: 'relative', zIndex: 2, minHeight: 120 }}>
                    {/* SVG absolutely positioned around the text */}
                    <svg
                      className="absolute"
                      style={{ left: -40, top: -30, zIndex: 1 }}
                      width="275"
                      height="126"
                      viewBox="0 0 275 126"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        ref={el => { svgRefs.current[i] = el; }}
                        d="M52.5 19C81 -2.00003 271.745 -16.7675 274.245 51C276.745 118.767 123.745 137.035 57.2453 118.767C-9.25474 100.5 -13.2547 64 26.7453 27.5C66.7453 -9.00003 164 1.49999 243.5 19"
                        stroke="#FFE100"
                        strokeWidth="2"
                        strokeDasharray={lengths[i]}
                        strokeDashoffset={dashOffsets[i] === undefined ? lengths[i] : dashOffsets[i]}
                        style={{
                          transition: dashOffsets[i] !== lengths[i] ? `stroke-dashoffset ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)` : 'none',
                        }}
                        fill="none"
                      />
                    </svg>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.4 }}
                      style={{ position: 'relative', zIndex: 2 }}
                    >
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 14, color: '#222', fontWeight: 400 }}>
                    {step.description}
                  </div>
                    </motion.div>
                </div>
              </>
            ) : (
              <>
                  {/* Text box with SVG wrapping around it */}
                  <div style={{ textAlign: 'right', maxWidth: 260, position: 'relative', zIndex: 2, minHeight: 120 }}>
                    {/* SVG absolutely positioned around the text */}
                    <svg
                      className="absolute"
                      style={{ right: -40, top: -30, zIndex: 1 }}
                      width="275"
                      height="126"
                      viewBox="0 0 275 126"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        ref={el => { svgRefs.current[i] = el; }}
                        d="M52.5 19C81 -2.00003 271.745 -16.7675 274.245 51C276.745 118.767 123.745 137.035 57.2453 118.767C-9.25474 100.5 -13.2547 64 26.7453 27.5C66.7453 -9.00003 164 1.49999 243.5 19"
                        stroke="#FFE100"
                        strokeWidth="2"
                        strokeDasharray={lengths[i]}
                        strokeDashoffset={dashOffsets[i] === undefined ? lengths[i] : dashOffsets[i]}
                        style={{
                          transition: dashOffsets[i] !== lengths[i] ? `stroke-dashoffset ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)` : 'none',
                        }}
                        fill="none"
                      />
                    </svg>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.4 }}
                      style={{ position: 'relative', zIndex: 2 }}
                    >
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 14, color: '#222', fontWeight: 400 }}>
                    {step.description}
                  </div>
                    </motion.div>
                </div>
                  <motion.div style={{ width: 140, height: 140, marginLeft: 56, zIndex: 2 }}>
                    <Image
                      src={step.gif}
                      alt={step.title}
                      width={140}
                      height={140}
                      style={{ objectFit: 'contain', borderRadius: 10 }}
                    />
                  </motion.div>
              </>
            )}
            </motion.div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Faq;