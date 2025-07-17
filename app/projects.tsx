'use client';

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

type Project = {
  src: string;
  name: string;
};

const projects: Project[] = [
  { src: "/images/1.PNG", name: "Adidas" },
  { src: "/images/2.PNG", name: "Airbnb" },
  { src: "/images/5.PNG", name: "Audi" },
  { src: "/images/11.png", name: "Paypal" },
  { src: "/images/12.png", name: "Sony" },
  { src: "/images/13.png", name: "Under Armour" },
  { src: "/images/15.png", name: "Redbull" },
  { src: "/images/16.png", name: "Spalding" },
  { src: "/images/17.PNG", name: "image" },
  { src: "/images/16.png", name: "Nordstrom" },
  { src: "/images/8.PNG", name: "Zara" },
  { src: "/images/10.PNG", name: "Zara" },
];

// Split projects into three unique rows for the Marquee
const rowLength = Math.ceil(projects.length / 3);
const rows = [
  projects.slice(0, rowLength),
  projects.slice(rowLength, rowLength * 2),
  projects.slice(rowLength * 2),
];

export function Projects() {
  return (
    <section className="w-full bg-[#f5f5f7]75 py-16 md:mx-auto 2xl:w-4/5 md:px-16 rounded-[48px]">
      <div className="mx-auto mb-12 px-6 md:px-0 text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Explore our projects
        </h2>
        <p className="text-[#7b7b7b] text-lg">
          Our projects showcase the best visuals and storytelling techniques.
        </p>
      </div>
      <div className="w-full h-[800px] flex items-center justify-center overflow-hidden py-8">
        {rows.map((row, i) => (
          <Marquee
            key={i}
            vertical
            pauseOnHover
            className={`[--duration:60s]${i === 2 ? ' hidden md:flex' : ''}`}
          >
            {row.map((project, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-[#f5f5f7] border border-gray-200 shadow-lg"
              >
                <Image
                  width={500}
                  height={500}
                  src={project.src}
                  alt={project.name}
                  className="object-cover w-full rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0 && index === 0}
                />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
  