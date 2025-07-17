'use client';
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black w-screen h-screen overflow-hidden select-none">
      <video
        src="/videos/Loader AARAMBH .mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full max-w-[100vw] max-h-[100vh] object-cover mb-8"
      />
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin absolute bottom-12 left-1/2 -translate-x-1/2" />
    </div>
  );
};

export default Loader; 