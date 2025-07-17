'use client'

import React, { useRef, useEffect, useState } from 'react';


const cardData = [
  {
    title: 'Digital Marketing',
    desc: 'Fueling business growth through precision targeting, data-driven strategy, and omnichannel execution.',
    video: '/videos/Digital Marketing.mp4',
    alt: 'Digital Marketing',
    features: [
      'Performance Marketing (Meta Ads, Google Ads, YouTube Ads)',
      'Email & SMS Campaigns',
      'Funnel Optimization',
      'Analytics & Conversion Tracking',
      'Marketing Automation & CRM Integration',
    ],
    impact: 'Impact: Lower CPL, higher ROAS, and scalable acquisition pipelines.',
  },
  {
    title: 'Commercial Shoots',
    desc: 'Visual storytelling designed to move audiences and markets.\nWhether it’s product sizzle reels or cinematic brand stories, our team turns concepts into scroll-stopping content.',
    video: '/videos/COMMERCIAL SHOOTS.mp4',
    alt: 'Commercial Shoots',
    features: [
      'Product Photography',
      'Brand Films & Commercials',
      'Reels & Short-Form Content',
      'Corporate & Industrial Shoots',
      'Post-Production',
    ],
    impact: 'Impact: Higher engagement, increased brand recall, and premium perception.',
  },
  {
    title: 'Branding',
    desc: 'We don’t just create logos—we build legacies.\nYour brand isn’t your logo. It’s your promise, your positioning, your perception. We craft it end-to-end.',
    video: '/videos/BRANDING.mp4',
    alt: 'Branding',
    features: [
      'Logo Design & Brand Identity',
      'Brand Strategy & Messaging',
      'Packaging Design',
      'Style Guides',
      'Naming & Tagline Creation',
    ],
    impact: 'Impact: Consistent identity across channels, increased consumer trust, and premium positioning.',
  },
  {
    title: 'Web Development',
    desc: 'Fast. Scalable. Beautiful. Built to convert and perform.\nWhether it\'s a single landing page or an enterprise dashboard, we develop with purpose and power.',
    video: '/videos/WEB DEVLOPMENT.mp4',
    alt: 'Web Development',
    features: [
      'UI/UX Design',
      'Business Websites',
      'E-commerce Stores',
      'Web Applications',
      'Backend Development',
    ],
    impact: 'Impact: Faster load times, better SEO, and higher conversion rates.',
  },
  {
    title: 'SEO',
    desc: 'Search isn’t dead—it’s evolving. We stay ahead of every algorithm update.\nOrganic traffic is the compound interest of digital marketing. We build that engine.',
    video: '/videos/SEO.mp4',
    alt: 'SEO',
    features: [
      'Technical SEO',
      'On-Page SEO',
      'Content SEO',
      'Link Building',
      'Local SEO',
    ],
    impact: 'Impact: Long-term visibility, reduced paid ad dependency, and consistent inbound traffic.',
  },
  {
    title: 'Social Media Management',
    desc: 'From content chaos to platform precision. We turn followers into loyal communities.\nWe don’t post for the sake of it. We post with intent, backed by analytics, trends, and human psychology.',
    video: '/videos/Social Media management.mp4',
    alt: 'Social Media Management',
    features: [
      'Content Strategy & Calendar',
      'Content Creation (Static + Video)',
      'Publishing & Scheduling',
      'Community Management',
      'Social Listening & Analytics',
    ],
    impact: 'Impact: Increased engagement, follower growth, and brand love.',
  },
  {
    title: 'Graphic Design',
    desc: 'Design that delivers—visually, emotionally, and commercially.\nEvery visual has a job to do. Ours deliver both aesthetic appeal and business outcomes.',
    video: '/videos/GRAPHIC DESIGN.mp4',
    alt: 'Graphic Design',
    features: [
      'Marketing Design',
      'Presentation & Deck Design',
      'Social Creatives',
      'Print & Packaging Design',
      'UI Kits & Digital Assets',
    ],
    impact: 'Impact: Strong visual equity, better engagement, and higher user retention.',
  },
  {
    title: 'Content Creation',
    desc: 'Content is still king—but only when it’s strategic, soulful, and scalable.\nWe create content that ranks, resonates, and drives revenue.',
    video: '/videos/Content Creation.mp4',
    alt: 'Content Creation',
    features: [
      'SEO Blogs & Articles',
      'Ad Copy & Sales Pages',
      'Video Content',
      'Scriptwriting',
      'Podcast Production',
    ],
    impact: 'Impact: Higher dwell time, improved trust, and multi-channel repurposing potential.',
  },
];

const CarouselService: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLSpanElement>(null);
  const progressDuration = 5000; // 5 seconds per slide

  // Center the selected card
  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;
    const card = track.children[index] as HTMLElement;
    if (card) {
      const carouselWidth = carousel.offsetWidth;
      const cardWidth = card.offsetWidth;
      const offset = card.offsetLeft - (carouselWidth - cardWidth) / 2;
      track.style.transform = `translateX(${-offset}px)`;
      setCurrentIndex(index);
    }
  };

  // Animate progress bar
  useEffect(() => {
    if (!autoPlay) return;
    let start: number | null = null;
    let frame: number;
    function step(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const percent = Math.min(100, (elapsed / progressDuration) * 100);
      setProgress(percent);
      if (percent < 100 && autoPlay) {
        frame = requestAnimationFrame(step);
      } else if (autoPlay) {
        const next = (currentIndex + 1) % cardData.length;
        scrollToCard(next);
        setProgress(0);
        start = null;
        frame = requestAnimationFrame(step);
      }
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [autoPlay, currentIndex]);

  // Keep current card centered on resize
  useEffect(() => {
    const handleResize = () => scrollToCard(currentIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Prevent manual scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const prevent = (e: Event) => e.preventDefault();
    carousel.addEventListener('wheel', prevent, { passive: false });
    carousel.addEventListener('touchmove', prevent, { passive: false });
    return () => {
      carousel.removeEventListener('wheel', prevent);
      carousel.removeEventListener('touchmove', prevent);
    };
  }, []);

  // Initial position
  useEffect(() => {
    scrollToCard(0);
  }, []);

  // Render dots/progress bar
  const renderDots = () => {
    return cardData.map((_, i) => {
      if (i === currentIndex) {
        return (
          <button
            key={i}
            className="carousel-dot progress"
            data-index={i}
            tabIndex={0}
            aria-label={`Go to card ${i + 1}`}
          >
            <span
              className="progress-bar"
              id="progressBar"
              ref={i === currentIndex ? progressBarRef : undefined}
              style={{ width: `${progress}%` }}
            />
          </button>
        );
      } else {
        return (
          <button
            key={i}
            className="carousel-dot inactive"
            data-index={i}
            tabIndex={0}
            aria-label={`Go to card ${i + 1}`}
            onClick={() => scrollToCard(i)}
          />
        );
      }
    });
  };

  return (
    <section className="highlights-section">
      <style>{`
        .highlights-section {
          margin-top: 40px;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .highlights-title {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 24px;
          margin-left: 320px;
          align-self: flex-start;
        }
        .carousel {
          width: 100vw;
          overflow: hidden;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .carousel-track {
          display: flex;
          flex-direction: row;
          gap: 128px;
          transition: transform 0.7s cubic-bezier(.4,1,.6,1);
          will-change: transform;
          justify-content: center;
        }
        .carousel-card {
          flex: 0 0 80vw;
          width: 80vw;
          max-width: 1200px;
          min-width: 340px;
          height: 440px;
          background: #fff;
          border-radius: 44px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          scroll-snap-align: start;
          position: relative;
          margin: 0;
          padding: 48px 60px;
          box-sizing: border-box;
        }
        .carousel-card video {
          flex: 0 0 45%;
          width: 45%;
          max-width: 520px;
          min-width: 260px;
          height: 320px;
          border-radius: 8px;
          object-fit: cover;
          background: #eee;
          margin-left: 32px;
        }
        .carousel-card .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-right: 36px;
          min-width: 0;
        }
        .carousel-card .card-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 18px;
          text-align: left;
          line-height: 1.2;
          letter-spacing: 0.01em;
        }
        .carousel-card .card-desc {
          font-size: 1.15rem;
          color: #333;
          text-align: left;
          line-height: 1.6;
          padding: 0;
          margin: 0;
        }
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          margin-top: 32px;
        }
        .carousel-controls .play-btn {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #f5f6f8;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          box-shadow: none;
          margin-right: 8px;
          font-size: 2.2rem;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
        }
        .carousel-controls .play-btn:active {
          background: #ececec;
        }
        .carousel-progress-dots {
          display: flex;
          align-items: center;
          background: #f5f6f8;
          border-radius: 40px;
          padding: 0 36px;
          height: 64px;
          gap: 18px;
          min-width: 340px;
        }
        .carousel-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #111;
          border: none;
          margin: 0 2px;
          opacity: 0.8;
          transition: background 0.2s, opacity 0.2s;
          pointer-events: auto;
          cursor: pointer;
          position: relative;
        }
        .carousel-dot.inactive {
          background: #111;
          opacity: 0.2;
        }
        .carousel-dot.progress {
          width: 56px;
          height: 16px;
          border-radius: 16px;
          background: #e9eaec;
          opacity: 1;
          overflow: hidden;
          padding: 0;
          margin: 0 2px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
        }
        .carousel-dot .progress-bar {
          height: 100%;
          background: #111;
          border-radius: 16px;
          transition: width 0.2s linear;
          width: 0%;
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
        }
        .carousel-dot.progress::before {
          content: '';
          position: absolute;
          left: 0; top: 0; right: 0; bottom: 0;
          background: #e9eaec;
          border-radius: 16px;
          z-index: 0;
        }
        @media (max-width: 900px) {
          .carousel-card {
            flex: 0 0 98vw;
            width: 98vw;
            max-width: 98vw;
            padding: 24px 4vw;
          }
          .carousel-card video {
            width: 100%;
            max-width: 100vw;
            height: 180px;
            margin-left: 0;
          }
          .carousel-card .card-content {
            padding-right: 0;
          }
        }
        @media (max-width: 600px) {
          .highlights-title {
            font-size: 1.3rem;
            margin-left: 0;
            text-align: left;
            padding-left: 8px;
          }
          .carousel-track {
            gap: 24px;
          }
          .carousel-card {
            flex-direction: column;
            align-items: flex-start;
            min-width: 0;
            width: 98vw;
            max-width: 98vw;
            height: auto;
            padding: 16px 4vw 24px 4vw;
            border-radius: 20px;
          }
          .carousel-card video {
            width: 100%;
            max-width: 100vw;
            height: 160px;
            margin: 0 0 12px 0;
            border-radius: 10px;
          }
          .carousel-card .card-content {
            width: 100%;
            padding: 0;
            align-items: flex-start;
          }
          .carousel-card .card-title {
            font-size: 1.1rem;
            margin-bottom: 10px;
          }
          .carousel-card .card-desc {
            font-size: 0.98rem;
            line-height: 1.5;
          }
          .carousel-controls {
            flex-direction: column;
            gap: 16px;
            margin-top: 18px;
          }
          .carousel-progress-dots {
            min-width: 0;
            padding: 0 10px;
            height: 44px;
            gap: 8px;
          }
        }
      `}</style>
      <div className="highlights-title">Our Service</div>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-track" ref={trackRef}>
          {cardData.map((card, idx) => (
            <div className="carousel-card" key={idx}>
              <div className="card-content">
                <div className="card-title">{card.title}</div>
                <div className="card-desc">{card.desc}</div>
                {card.features && (
                  <ul className="mt-2 pl-5 space-y-1 text-base text-gray-700 list-disc">
                    {card.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                {card.impact && (
                  <div className="mt-3 text-sm text-blue-700 font-semibold">{card.impact}</div>
                )}
              </div>
              <video
                src={card.video}
                muted
                loop
                playsInline
                autoPlay
                width={520}
                height={320}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button
          className="play-btn"
          id="carouselPlay"
          title="Play/Pause"
          onClick={() => setAutoPlay(a => !a)}
        >
          <span id="playIcon" style={{ display: autoPlay ? 'none' : 'inline' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9C12 7.89543 13.3431 7.23607 14.2426 7.87868L27.4853 17.8787C28.3232 18.4789 28.3232 19.7211 27.4853 20.3213L14.2426 30.3213C13.3431 30.9639 12 30.3046 12 29.2V9Z" fill="#1a1311" stroke="#1a1311" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </span>
          <span id="pauseIcon" style={{ display: autoPlay ? 'inline' : 'none' }}>
            &#10073;&#10073;
          </span>
        </button>
        <div className="carousel-progress-dots" id="carouselProgressDots">
          {renderDots()}
        </div>
      </div>
    </section>
  );
};

export default CarouselService; 