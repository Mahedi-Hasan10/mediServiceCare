"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    title: "Slide 1",
    description: "This is the first slide.",
    buttonText: "Learn More",
    imageUrl: "/banner2.jpg",
  },
  {
    title: "Slide 2",
    description: "This is the second slide.",
    buttonText: "Learn More",
    imageUrl: "/banner.jpg",
  },
  {
    title: "Slide 3",
    description: "This is the third slide.",
    buttonText: "Learn More",
    imageUrl: "/banner3.png",
  },
];

const Hero = () => {
  return (
    <div className="slider-container relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1000} // Increase the duration of the transition to 1000ms (1 second)
        effect="slide" // Set the effect to slide for smoother transitions
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide relative w-full h-full">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full lg:h-[50vh] h-[30vh] object-cover"
              />
              <div className="absolute bottom-0 left-0 h-full w-full lg:p-5 p-2 text-white bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="lg:text-[40px] text-[28px] font-bold">
                    {slide.title}
                  </h2>
                  <p className="mt-2 lg:max-w-[30%] max-w-[60%] mx-auto line-clamp-3">
                    {slide.description} Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Impedit laborum aperiam voluptates earum
                    asperiores eius veritatis fugiat amet illum inventore.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
