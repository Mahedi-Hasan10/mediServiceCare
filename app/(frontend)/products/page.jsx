"use client";
import React from "react";

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

const ProductList = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center my-10 font-bold text-3xl">Our Products</h2>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 xl:w-1/4 lg:w-1/3 md:w-2/4 sm:mb-2 mb-6 group"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
