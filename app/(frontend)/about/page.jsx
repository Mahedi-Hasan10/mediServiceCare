import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/product1.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 overflow-hidden">
                <Image
                  src="/nayan.jpeg"
                  alt="Md. Nayan Biswas"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Md. Nayan Biswas (Rasel)
                </h2>
                <h2 className="font-medium title-font mt-1 text-gray-500 text-sm italic">
                  CEO & Founder
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Leading the vision to empower healthcare providers with
                  reliable medical technology and exceptional support.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                MediServiceCare is a leading provider of medical equipment
                solutions, specializing in the sales, servicing, setup, and
                installation of a wide range of medical devices. From digital
                thermometers to advanced cardiac monitoring systems, we are
                committed to excellence in every aspect of our work.
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Our experienced team works tirelessly to support hospitals,
                clinics, and home care providers with reliable technology and
                expert maintenance. We believe that better equipment leads to
                better healthcare, and we are proud to be a trusted partner in
                your medical journey.
              </p>
              <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                Learn More
                <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
