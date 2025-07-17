"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabId = "projects" | "clients";

interface ProductPhoto {
  id: number;
  image: string;
  alt: string;
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [videoOrientations] = useState<{[id: number]: "portrait" | "landscape"}>({});
  const [modal, setModal] = useState<{ type: "image" | "video"; src: string } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  // Close modal on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modal && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModal(null);
      }
    }
    if (modal) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [modal]);

  // Replace the projects array with one using Portfolio Video files
  const portfolioVideos = [
    { filename: "jewelery.mp4", cover: "/Portfolio Video/jewelery-cover.PNG" },
    { filename: "Fashion 4.mp4", cover: "/Portfolio Video/Fashion 4-cover.PNG" },
    { filename: "product 4.mp4", cover: "/Portfolio Video/product 4-cover.PNG" },
    { filename: "Fashion 2.mp4", cover: "/Portfolio Video/Fashion 2-cover.PNG" },
    { filename: "Product 2.mp4", cover: "/Portfolio Video/Product 2-cover.PNG" },
    { filename: "Restaurant 1.mp4", cover: "/Portfolio Video/Restaurant 1-cover.PNG" },
    { filename: "Restaurant 2.mp4", cover: "/Portfolio Video/Restaurant 2-cover.PNG" },
    { filename: "School Banner.mp4", cover: "/Portfolio Video/School Banner-cover.PNG" },
    { filename: "Fahion 6.mp4", cover: "/Portfolio Video/Fahion 6-cover.PNG" },
    { filename: "_Fashion Banner 2.mp4", cover: "/Portfolio Video/_Fashion Banner 2-cover.PNG" },
    { filename: "Fashion Banner.mp4", cover: "/Portfolio Video/Fashion Banner-cover.PNG" },
    { filename: "Childern school .mp4", cover: "/Portfolio Video/Childern school -cveor.PNG" },
    { filename: "Work in progress .mp4", cover: "/Portfolio Video/Work in progress -cover.PNG" },
    { filename: "Interior 2.mp4", cover: "/Portfolio Video/Interior 2-cover.PNG" },
    { filename: "Builder .mp4", cover: "/Portfolio Video/Builder -cover.PNG" },
    { filename: "Influencer Day.mp4", cover: "/Portfolio Video/Influencer Day-cover.PNG" },
    { filename: "Interior.mp4", cover: "/Portfolio Video/Interior-cover.PNG" },
    { filename: "GYM.mp4", cover: "/Portfolio Video/GYM-cover.PNG" },
    { filename: "_Dental Care 1.mp4", cover: "/Portfolio Video/_Dental Care 1-cover.PNG" },
    { filename: "Real Estate.mp4", cover: "/Portfolio Video/Real Estate-cover.PNG" },
    { filename: "Real Estate 3.mp4", cover: "/Portfolio Video/Real Estate 3-cover.PNG" },
    { filename: "Real Estate 6.mp4", cover: "/Portfolio Video/Real Estate 6-cover.PNG" },
    { filename: "Real Estate 2.mp4", cover: "/Portfolio Video/Real Estate 2-cover.PNG" },
    { filename: "Real Estate 1.mp4", cover: "/Portfolio Video/Real Estate 1-cover.PNG" },
    { filename: "FOOD RESTAURANT Banner.mp4", cover: "/Portfolio Video/FOOD RESTAURANT Banner-cover.PNG" },
    { filename: "Ad video.mp4", cover: "/Portfolio Video/Ad video-cover.PNG" },
    { filename: "Motion Graphic.mp4", cover: "/Portfolio Video/Motion Graphic-cover.PNG" },
  ];

  const projects = portfolioVideos.map((item, idx) => ({
    id: idx + 1,
    name: item.filename,
    video: `/Portfolio Video/${item.filename}`,
    cover: item.cover,
    title: "",
    description: "",
  }));

  const productphotos: ProductPhoto[] = useMemo(() => [
    { id: 1, image: "/photos/F2.jpg", alt: "F2.jpg" },
    { id: 2, image: "/photos/Business Card 20.png", alt: "Business Card 20.png" },
    { id: 3, image: "/photos/Business Card 18.png", alt: "Business Card 18.png" },
    { id: 4, image: "/photos/Business Card 17 .png", alt: "Business Card 17 .png" },
    { id: 5, image: "/photos/Business Card 16.png", alt: "Business Card 16.png" },
    { id: 6, image: "/photos/Business Card 15.png", alt: "Business Card 15.png" },
    { id: 7, image: "/photos/Business Card 12.png", alt: "Business Card 12.png" },
    { id: 8, image: "/photos/Business Card 8.png", alt: "Business Card 8.png" },
    { id: 9, image: "/photos/Business Card 6.png", alt: "Business Card 6.png" },
    { id: 10, image: "/photos/Business Card 4.png", alt: "Business Card 4.png" },
    { id: 11, image: "/photos/Logo 17.jpg", alt: "Logo 17.jpg" },
    { id: 12, image: "/photos/Logo 16.jpg", alt: "Logo 16.jpg" },
    { id: 13, image: "/photos/Logo 13.jpg", alt: "Logo 13.jpg" },
    { id: 14, image: "/photos/Product 3.png", alt: "Product 3.png" },
    { id: 15, image: "/photos/Product 5.png", alt: "Product 5.png" },
    { id: 16, image: "/photos/Fashion 8.png", alt: "Fashion 8.png" },
    { id: 17, image: "/photos/Fashion 7.png", alt: "Fashion 7.png" },
    { id: 18, image: "/photos/Fashion 6.png", alt: "Fashion 6.png" },
    { id: 19, image: "/photos/Fashion 5.png", alt: "Fashion 5.png" },
    { id: 20, image: "/photos/Fashion 3.png", alt: "Fashion 3.png" },
    { id: 21, image: "/photos/Fashion 1.png", alt: "Fashion 1.png" },
    { id: 22, image: "/photos/Fashion 14.png", alt: "Fashion 14.png" },
    { id: 23, image: "/photos/Fashion 12.png", alt: "Fashion 12.png" },
    { id: 24, image: "/photos/Fashion 11.png", alt: "Fashion 11.png" },
    { id: 25, image: "/photos/Fashion 10.png", alt: "Fashion 10.png" },
    { id: 26, image: "/photos/Fashion 9.png", alt: "Fashion 9.png" },
    { id: 27, image: "/photos/health 2.png", alt: "health 2.png" },
    { id: 28, image: "/photos/health 1.png", alt: "health 1.png" },
    { id: 29, image: "/photos/food 5.png", alt: "food 5.png" },
    { id: 30, image: "/photos/jewellery 5.png", alt: "jewellery 5.png" },
    { id: 31, image: "/photos/jewellery 4.png", alt: "jewellery 4.png" },
    { id: 32, image: "/photos/Real Estate 2.png", alt: "Real Estate 2.png" },
    { id: 33, image: "/photos/Jewelry 5.png", alt: "Jewelry 5.png" },
    { id: 34, image: "/photos/Jewelry 2.png", alt: "Jewelry 2.png" },
    { id: 35, image: "/photos/jewellery 2.png", alt: "jewellery 2.png" },
    { id: 36, image: "/photos/Food 6.png", alt: "Food 6.png" },
    { id: 37, image: "/photos/Food 5(1).png", alt: "Food 5(1).png" },
    { id: 38, image: "/photos/Food 4.png", alt: "Food 4.png" },
    { id: 39, image: "/photos/Food 3.png", alt: "Food 3.png" },
    { id: 40, image: "/photos/food4.png", alt: "food4.png" },
    { id: 41, image: "/photos/food2.jpg", alt: "food2.jpg" },
    { id: 42, image: "/photos/food 3.jpg", alt: "food 3.jpg" },
    { id: 43, image: "/photos/H3-1.PNG", alt: "H3-1.PNG" },
    { id: 44, image: "/photos/H12.PNG", alt: "H12.PNG" },
    { id: 45, image: "/photos/H10.PNG", alt: "H10.PNG" },
    { id: 46, image: "/photos/H9.PNG", alt: "H9.PNG" },
    { id: 47, image: "/photos/H8.PNG", alt: "H8.PNG" },
    { id: 48, image: "/photos/H7.PNG", alt: "H7.PNG" },
    { id: 49, image: "/photos/H6.PNG", alt: "H6.PNG" },
    { id: 50, image: "/photos/H5.PNG", alt: "H5.PNG" },
    { id: 51, image: "/photos/H4.PNG", alt: "H4.PNG" },
    { id: 52, image: "/photos/H3.PNG", alt: "H3.PNG" },
    { id: 53, image: "/photos/H11.PNG", alt: "H11.PNG" },
    { id: 54, image: "/photos/H1.PNG", alt: "H1.PNG" },
    { id: 55, image: "/photos/H2-1.PNG", alt: "H2-1.PNG" },
    { id: 56, image: "/photos/H14.PNG", alt: "H14.PNG" },
    { id: 57, image: "/photos/H13.JPG", alt: "H13.JPG" },
    { id: 58, image: "/photos/H1-3.PNG", alt: "H1-3.PNG" },
    { id: 59, image: "/photos/H1-2.PNG", alt: "H1-2.PNG" },
    { id: 60, image: "/photos/12.PNG", alt: "12.PNG" },
    { id: 61, image: "/photos/9.PNG", alt: "9.PNG" },
    { id: 62, image: "/photos/11.PNG", alt: "11.PNG" },
    { id: 63, image: "/photos/8.PNG", alt: "8.PNG" },
    { id: 64, image: "/photos/10.PNG", alt: "10.PNG" },
    { id: 65, image: "/photos/7.PNG", alt: "7.PNG" },
    { id: 66, image: "/photos/5.PNG", alt: "5.PNG" },
    { id: 67, image: "/photos/3.PNG", alt: "3.PNG" },
    { id: 68, image: "/photos/2.PNG", alt: "2.PNG" },
    { id: 69, image: "/photos/1.PNG", alt: "1.PNG" },
    { id: 70, image: "/photos/C3.png", alt: "C3.png" },
    { id: 71, image: "/photos/C1.png", alt: "C1.png" },
    { id: 72, image: "/photos/C2.png", alt: "C2.png" },
    { id: 73, image: "/photos/G3.png", alt: "G3.png" },
    { id: 74, image: "/photos/G2.png", alt: "G2.png" },
    { id: 75, image: "/photos/G1.png", alt: "G1.png" },
    { id: 76, image: "/photos/E1.png", alt: "E1.png" },
    { id: 77, image: "/photos/B4.png", alt: "B4.png" },
    { id: 78, image: "/photos/B2.png", alt: "B2.png" },
    { id: 79, image: "/photos/B1.png", alt: "B1.png" },
    { id: 80, image: "/photos/A3.png", alt: "A3.png" },
    { id: 81, image: "/photos/B3.png", alt: "B3.png" },
    { id: 82, image: "/photos/AT9.png", alt: "AT9.png" },
    { id: 83, image: "/photos/AT7.png", alt: "AT7.png" },
    { id: 84, image: "/photos/AT6.png", alt: "AT6.png" },
    { id: 85, image: "/photos/AT3.png", alt: "AT3.png" },
    { id: 86, image: "/photos/AT2.png", alt: "AT2.png" },
    { id: 87, image: "/photos/Raghuveer.png", alt: "Raghuveer.png" },
    { id: 88, image: "/photos/Cake7.png", alt: "Cake7.png" },
    { id: 89, image: "/photos/House3.png", alt: "House3.png" },
    { id: 90, image: "/photos/House2.png", alt: "House2.png" },
    { id: 91, image: "/photos/House2-2.png", alt: "House2-2.png" },
    { id: 92, image: "/photos/cakeC1.png", alt: "cakeC1.png" },
    { id: 93, image: "/photos/House1.png", alt: "House1.png" },
    { id: 94, image: "/photos/cake.png", alt: "cake.png" },
  ], []);

  const tabs = [
    { id: "projects" as const, name: "Videography Work", count: projects.length },
    { id: "clients" as const, name: "Photography Work", count: productphotos.length },
  ];

  const [sortOption, setSortOption] = useState<string>("newest");
  const [imgLoading] = useState<{ [id: number]: boolean }>({});

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "az", label: "Name A-Z" },
    { value: "za", label: "Name Z-A" },
  ];

  function sortItems<T extends { id: number; name?: string; alt?: string }>(items: T[]): T[] {
    switch (sortOption) {
      case "oldest":
        return [...items].sort((a, b) => a.id - b.id);
      case "az":
        return [...items].sort((a, b) => {
          const aName = (a.name || a.alt || "").toLowerCase();
          const bName = (b.name || b.alt || "").toLowerCase();
          return aName.localeCompare(bName);
        });
      case "za":
        return [...items].sort((a, b) => {
          const aName = (a.name || a.alt || "").toLowerCase();
          const bName = (b.name || b.alt || "").toLowerCase();
          return bName.localeCompare(aName);
        });
      case "newest":
      default:
        return [...items].sort((a, b) => b.id - a.id);
    }
  }

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">
        {activeTab === "clients" ? (
          <>
            {/* Sorting Dropdown for photos */}
            <div className="flex justify-end mb-4">
              <select
                className="px-4 py-2 rounded-[10px] bg-white/20 text-black font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
                aria-label="Sort photos"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <motion.div
              layout
              key="clients"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 "
            >
              <AnimatePresence>
                {sortItems(productphotos
                ).map((photo) => (
                  <motion.div
                    layout
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center justify-center bg-white/10 rounded-[15px] overflow-hidden cursor-pointer"
                    style={{
                      aspectRatio: "1 / 1", // Default aspect ratio for images
                      width: "100%",
                      maxWidth: "100vw",
                      maxHeight: "80vh",
                      margin: "0 auto",
                    }}
                    onClick={() => setModal({ type: "image", src: photo.image })}
                  >
                    <div className="relative w-full h-full min-h-[120px] bg-black flex items-center justify-center max-w-full max-h-[80vh] mx-auto group">
                      <Image
                        priority
                        fill
                        src={photo.image}
                        alt={photo.alt}
                        className="object-contain w-full h-full rounded-[15px] max-w-full max-h-[80vh]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 rounded-[15px]">
                        <span className="text-white text-lg font-semibold text-center px-4">Click here to see the live preview</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        ) : (
          <>
            {/* Sorting Dropdown for Videos */}
            <div className="flex justify-end mb-4">
              <select
                className="px-4 py-2 rounded-[10px] bg-white/20 text-black font-semibold border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
                aria-label="Sort videos"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <motion.div
              layout
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2"
            >
              <AnimatePresence>
                {sortItems(projects).map((project) => {
                  const orientation = videoOrientations[project.id] || "landscape";
                  const aspectClass =
                    orientation === "portrait"
                      ? "aspect-[9/16]"
                      : "aspect-video";
                  const gridClass =
                    orientation === "portrait"
                      ? "col-span-1 row-span-2"
                      : "col-span-1 row-span-1";
                  return (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`relative flex items-center justify-center bg-black rounded-[15px] overflow-hidden cursor-pointer ${gridClass} ${aspectClass}`}
                      onClick={() => setModal({ type: "video", src: project.video })}
                    >
                      <Image
                        src={project.cover}
                        alt={project.name}
                        fill
                        className="object-contain w-full h-full rounded-[15px]"
                        style={{ display: 'block' }}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = "/Portfolio Video/placeholder.jpg"; }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {imgLoading[project.id] !== false && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/10">
                          <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 z-10 rounded-[15px]">
                        <span className="text-white text-lg font-semibold text-center px-4">Click here to see the live preview</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div
      className="
    md:mx-auto   
     2xl:w-4/5 md:px-16

    
    px-6 py-40 "
    >
      {/* Main Navigation */}
      <div className="flex flex-wrap gap-8 mb-12 items-center">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-2xl md:text-4xl font-bold ${
                activeTab === tab.id
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
              <span className="text-sm ml-1 align-super">{tab.count}</span>
            </motion.button>
            {index < tabs.length - 1 && (
              <div className=" p-2 rounded-full bg-black h-4 w-4 items-center flex justify-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Categories */}
      {/* Removed categories rendering */}

      {/* Content */}
      {renderContent()}
      {modal && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center" style={{ backdropFilter: "blur(2px)" }}>
          <div ref={modalRef} className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              className="absolute top-4 right-4 z-20 p-0.5 rounded-full shadow-2xl bg-gradient-to-br from-pink-500 via-blue-500 to-purple-500 hover:scale-110 transition-transform duration-200 border-2 border-white/80"
              onClick={() => setModal(null)}
              aria-label="Close preview"
              style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="bg-white rounded-full flex items-center justify-center w-10 h-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </button>
            {modal.type === "image" ? (
              <div style={{ position: 'relative', width: '100%', height: '80vh', maxWidth: '100%' }}>
                <Image
                  src={modal.src}
                  alt="Preview"
                  fill
                  className="object-contain rounded-[15px] shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            ) : (
              <video src={modal.src} controls autoPlay className="max-w-full max-h-[80vh] rounded-[15px] shadow-2xl bg-black" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
