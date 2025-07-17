'use client'

import React, { forwardRef } from "react";


// StatCard component removed because it is not used

const Stats = forwardRef<HTMLElement>((props, ref) => {
  const stats = [
    { number: "100", label: "Clients from Surat & Gujarat" },
    { number: "1.5", label: "Years of Experience in this Field" },
    { number: "90", label: "Of our clients come back" },
    { number: "98", label: "Net Promoting Score" },
  ];

  return (
    <section ref={ref} className="w-full 2xl:w-4/5 md:mx-auto bg-[#ffffff] py-10 px-2 md:px-6 rounded-[12px] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left column */}
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <h2 className="text-5xl font-extrabold mb-2 uppercase">OUR NUMBERS</h2>
            <p className="text-base text-gray-700 mb-8">
              With every project we take on, we strive to deliver the best results for our clients.
            </p>
          </div>
        </div>
        {/* Right column: bento grid of numbers and labels */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 h-[340px]">
          {/* Large card, spans 2 rows */}
          <div className="row-span-2 bg-[#f3f3f5] rounded-[8px] flex flex-col items-center justify-center p-4">
            <span className="text-5xl font-bold mb-2">{stats[0].number}+</span>
            <span className="text-base text-gray-500 text-center">{stats[0].label}</span>
          </div>
          {/* Top right card */}
          <div className="bg-[#f3f3f5] rounded-[8px] flex flex-col items-center justify-center p-4">
            <span className="text-5xl font-bold mb-2">{stats[1].number}+</span>
            <span className="text-base text-gray-500 text-center">{stats[1].label}</span>
          </div>
          {/* Bottom right card */}
          <div className="bg-[#f3f3f5] rounded-[8px] flex flex-col items-center justify-center p-4">
            <span className="text-5xl font-bold mb-2">{stats[2].number}+</span>
            <span className="text-base text-gray-500 text-center">{stats[2].label}</span>
          </div>
          {/* Bottom wide card, spans 2 columns */}
          <div className="col-span-2 bg-[#f3f3f5] rounded-[8px] flex flex-col items-center justify-center p-4">
            <span className="text-5xl font-bold mb-2">{stats[3].number}+</span>
            <span className="text-base text-gray-500 text-center">{stats[3].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
});
Stats.displayName = "Stats";

export default Stats;
