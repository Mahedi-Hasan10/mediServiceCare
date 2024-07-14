import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebook } from "react-icons/fa";

const products = [
  {
    id: 1,
    category: "Thermometers",
    name: "Infrared Thermometer",
    description:
      "Non-contact infrared thermometer for quick temperature measurement.",
    img: "https://dummyimage.com/720x400",
  },
  {
    id: 2,
    category: "Stethoscopes",
    name: "Digital Stethoscope",
    description:
      "Advanced digital stethoscope with noise cancellation and recording capabilities.",
    img: "https://dummyimage.com/721x401",
  },
  {
    id: 3,
    category: "Monitors",
    name: "Blood Pressure Monitor",
    description:
      "Accurate and easy-to-use blood pressure monitor for home or clinical use.",
    img: "https://dummyimage.com/722x402",
  },
  {
    id: 4,
    category: "Monitors",
    name: "Blood Pressure Monitor",
    description:
      "Accurate and easy-to-use blood pressure monitor for home or clinical use.",
    img: "https://dummyimage.com/722x402",
  },
];

const Details = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/product1.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Digital Thermometer
            </h1>
            <p className="leading-relaxed">
              A reliable digital thermometer for accurate temperature readings.
              This digital thermometer offers fast and precise readings to help
              monitor body temperature effectively. Ideal for home use or in
              clinical settings.
            </p>
            <div className="flex mt-6">
              <a
                href="/contact"
                className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Call us for pricing or details
              </a>
              <a
                href="https://wa.me/yourwhatsappnumber"
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="tel:yourphonenumber"
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              >
                <FaPhoneAlt className="w-5 h-5" />
              </a>
              <a
                href="/facebook"
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="mb-4 text-2xl font-bold ">Others Products</h2>
            <div className="flex flex-wrap -m-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4  xl:w-1/4 lg:w-1/3 md:w-2/4"
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={product.img}
                      alt={product.name}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {product.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {product.name}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {product.description}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a
                          href="#"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Details;
