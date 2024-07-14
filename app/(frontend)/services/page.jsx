import React from "react";

const services = [
  {
    id: 1,
    subtitle: "Medical Equipment",
    title: "Operation Theatre Lights",
    description:
      "High-quality, reliable operation theatre lights to ensure precision in surgeries.",
    img: "https://dummyimage.com/720x400",
  },
  {
    id: 2,
    subtitle: "Maintenance",
    title: "Equipment Servicing",
    description:
      "Comprehensive servicing of all medical equipment to ensure optimal performance.",
    img: "https://dummyimage.com/721x401",
  },
  {
    id: 3,
    subtitle: "Sales",
    title: "Hospital Beds",
    description:
      "Durable and comfortable hospital beds for patient care and recovery.",
    img: "https://dummyimage.com/722x402",
  },
  {
    id: 4,
    subtitle: "Consultation",
    title: "Setup & Installation",
    description:
      "Professional setup and installation of medical equipment in healthcare facilities.",
    img: "https://dummyimage.com/723x403",
  },
];

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Services
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
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <div key={service.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={service.img}
                  alt={service.title}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {service.subtitle}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
