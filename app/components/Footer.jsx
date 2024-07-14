"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <GiSailboat className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          <span className="ml-3 text-xl">Medi Service Care</span>
        </a> */}
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
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Mediservicecare —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @noyonbiswas
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://facebook.com" className="text-gray-500">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" className="ml-3 text-gray-500">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" className="ml-3 text-gray-500">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" className="ml-3 text-gray-500">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
