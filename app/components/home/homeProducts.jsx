"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const products = [
  {
    id: 1,
    title: "Digital Thermometer",
    description:
      "A reliable digital thermometer for accurate temperature readings.",
    image: "/product1.jpg",
  },
  {
    id: 2,
    title: "Blood Pressure Monitor",
    description:
      "An automatic blood pressure monitor for easy and accurate measurements.",
    image: "/product1.jpg",
  },
  {
    id: 3,
    title: "Stethoscope",
    description: "High-quality stethoscope for clear and precise auscultation.",
    image: "/product1.jpg",
  },
  {
    id: 4,
    title: "Pulse Oximeter",
    description: "Portable pulse oximeter for monitoring blood oxygen levels.",
    image: "/product1.jpg",
  },
  {
    id: 5,
    title: "Glucometer",
    description: "User-friendly glucometer for monitoring blood sugar levels.",
    image: "/product1.jpg",
  },
  {
    id: 6,
    title: "Nebulizer",
    description: "Efficient nebulizer for respiratory treatments.",
    image: "/product1.jpg",
  },
  {
    id: 7,
    title: "ECG Machine",
    description: "Advanced ECG machine for precise cardiac monitoring.",
    image: "/product1.jpg",
  },
  {
    id: 8,
    title: "Oxygen Concentrator",
    description: "Reliable oxygen concentrator for continuous oxygen supply.",
    image: "/product1.jpg",
  },
  {
    id: 9,
    title: "Syringe Pump",
    description: "Accurate syringe pump for controlled medication delivery.",
    image: "/product1.jpg",
  },
  {
    id: 10,
    title: "Hospital Bed",
    description: "Adjustable hospital bed for patient comfort and care.",
    image: "/product1.jpg",
  },
];

const HomeProductList = () => {
  return (
    <div className="container mx-auto product mt-10 px-5">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Our Products
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          We provide a wide range of medical equipment services, including
          sales, servicing, setup, and installation. Our team ensures that you
          get the best quality products and services for all your healthcare
          needs.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="group">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full group-hover:scale-105 group-hover:duration-500 transition-all cursor-pointer"
                src={product.image}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {product.title}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              {product.description}
            </p>
            <a
              href="/products/123"
              className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeProductList;
