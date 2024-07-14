"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/products", key: "products", label: "Products" },
  { href: "/about", key: "about", label: "About Us" },
  { href: "/teams", key: "teams", label: "Teams" },
  { href: "/testimonials", key: "testimonials", label: "Testimonials" },
];

const navContainer = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (href) => {
    if (typeof window !== "undefined") {
      return window.location.pathname === href;
    }
    return false; // Handle SSR fallback, such as returning false
  };

  return (
    <nav className="flex items-center justify-between max-w-[90%] mx-auto relative z-30 py-5">
      <Link className="flex items-center gap-2 font-bold" href="/">
        <Image
          src="/logo.png"
          height={50}
          width={50}
          alt="logo"
          className="h-[25px] w-10"
        />
        <span className="text-[#23AFFF]">Medi Service Care</span>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className={`text-[16px] text-[#585858] ${
                isActive(link.href)
                  ? "text-[#23AFFF] hover:text-[#23AFFF]"
                  : "hover:text-[#23AFFF]"
              } flex items-center justify-center cursor-pointer pb-1.5 transition-all`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flex lg:items-center lg:justify-center hidden">
        <Link
          href="/contact"
          type="button"
          className="py-4 px-14 rounded-full bg-[#292C27] transition-all font-bold hover:bg-black text-white"
        >
          Contact Us
        </Link>
      </div>
      {isMenuOpen ? (
        <span
          onClick={toggleMenu}
          className="font-bold cursor-pointer text-black text-xl lg:hidden inline-block"
        >
          X
        </span>
      ) : (
        <Image
          src={"/menu.svg"}
          alt="menu"
          width={24}
          height={24}
          className="inline-block cursor-pointer lg:hidden text-black"
          onClick={toggleMenu}
        />
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-[10%] left-0 right-0 bg-white z-20 p-5 shadow-lg lg:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navContainer}
          >
            <motion.ul className="flex flex-col items-center gap-4">
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.key}
                  variants={navItem}
                  onClick={toggleMenu}
                >
                  <Link
                    href={link.href}
                    className={`text-[16px] text-[#585858] ${
                      isActive(link.href)
                        ? "text-[#23AFFF] hover:text-[#23AFFF]"
                        : "hover:text-[#23AFFF]"
                    } flex items-center justify-center cursor-pointer pb-1.5 transition-all`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="flex items-center justify-center mt-4">
              <Link
                href="/contact"
                type="button"
                className="py-4 px-14 rounded-full bg-[#292C27] transition-all font-bold hover:bg-black text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
