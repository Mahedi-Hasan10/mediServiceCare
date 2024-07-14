"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFax } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex lg:flex-row flex-col ">
        <div className="flex flex-col lg:w-1/2 mb-12 text-center">
          <img src="/logo.png" alt="logo" className="mx-auto w-16 h-10 mb-2" />
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Medi Service Care
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            All Kind Of Medical Equipment Installation, Repairing And Service
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="p-4 w-full">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Contact Us
            </h2>
            <p className="leading-relaxed">Dhaka Office</p>
            <p className="leading-relaxed mt-2">
              <FaMapMarkerAlt className="inline-block mr-2" /> 256/2,wesr
              sewarapara,Mirpur, Dhaka1216,Bangladesh
            </p>
            <p className="leading-relaxed mt-2">
              <FaEnvelope className="inline-block mr-2" />{" "}
              mediservice43@gmail.com
            </p>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-4">
              Registered Office
            </h2>
            <p className="leading-relaxed mt-2">
              <FaMapMarkerAlt className="inline-block mr-2" /> 256/2,wesr
              sewarapara,Mirpur, Dhaka1216,Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
