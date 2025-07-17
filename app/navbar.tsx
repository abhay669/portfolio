"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
   // Placeholder for dropdown
  { href: '/book-meeting', label: 'Book Meeting' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navWrapperRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mobileMenuOpen) {
      const scrollingUp = latest < prevScrollY;
      const shouldShow = scrollingUp || latest < 50;
      setIsVisible(shouldShow);
      if (latest > 50 && !minimized) {
        setMinimized(true);
        setExpanded(false);
      } else if (latest <= 50 && minimized) {
        setMinimized(false);
        setExpanded(false);
      }
      if (latest > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (latest < 50) {
        setHasScrolled(false);
      }
    }
    setPrevScrollY(latest);
  });

  useEffect(() => {
    if (!expanded) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        navWrapperRef.current &&
        !navWrapperRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  const navbarVariants = {
    initial: isHomePage
      ? {
          y: -100,
          opacity: 0,
        }
      : {
          y: 0,
          opacity: 1,
        },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        duration: 0.8,
        delay: isHomePage && !hasScrolled ? 1.8 : 0,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {!minimized && (
        <motion.nav
          key="navbar"
          className="fixed top-0 left-0 right-0 z-50 py-6 px-4 flex justify-center items-center bg-transparent navbar-shine"
          initial="initial"
          animate={isVisible ? "visible" : "hidden"}
          exit="hidden"
          variants={navbarVariants}
          style={{ boxShadow: "none", border: "none" }}
        >
          {/* Logo/Brand on the left */}
          <div className="absolute left-4 md:left-10 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Aarambh Works Logo"
                width={320}
                height={320}
                className="w-[20rem] h-[20rem] object-contain"
                priority
              />
            </Link>
          </div>

          {/* Centered pill-shaped menu */}
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-neutral-900 rounded-full px-8 py-2 flex items-center space-x-6 shadow-lg navbar-shine">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 ${
                    pathname === link.href ? "text-white" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button, right aligned */}
          <button
            className="md:hidden absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-neutral-800" />
            ) : (
              <Menu className="w-7 h-7 text-neutral-800" />
            )}
          </button>

          {/* Mobile menu */}
          <motion.div
            initial="closed"
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            className="md:hidden overflow-hidden absolute top-full left-0 w-full bg-neutral-900 rounded-b-2xl shadow-lg z-50 navbar-shine"
          >
            <div className="flex flex-col space-y-4 py-6 px-8">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`flex items-center gap-1 text-lg font-medium transition-colors duration-200 ${
                    pathname === link.href ? "text-white" : "text-neutral-300 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.nav>
      )}
      {/* Top center wrapper for dot and expanded navbar */}
      {minimized && (
        <div
          ref={navWrapperRef}
          className="flex fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex-col items-center"
          style={{ width: 'auto' }}
        >
          {/* Dot */}
          <motion.div
            key="dot"
            className="w-24 h-10 bg-[#181818] rounded-full shadow-lg items-center justify-center cursor-pointer hover:bg-neutral-800 transition-colors flex"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: expanded ? 0 : 1, scale: expanded ? 0.8 : 1, pointerEvents: expanded ? 'none' : 'auto' }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', duration: 0.2 }}
            title="Show menu"
            onClick={() => setExpanded((prev) => !prev)}
          >
          </motion.div>
          {/* Full navbar at top center when minimized and expanded */}
          {expanded && (
            <motion.div
              key="floating-menu"
              className="fixed top-0 left-0 right-0 z-[101] py-6 px-4 flex justify-center items-center bg-transparent navbar-shine"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ boxShadow: "none", border: "none" }}
            >
              <div className="bg-neutral-900 rounded-full px-8 py-2 flex items-center space-x-6 shadow-lg justify-center navbar-shine">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 ${
                      pathname === link.href ? "text-white" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </AnimatePresence>
  );
};

export default Navbar;
