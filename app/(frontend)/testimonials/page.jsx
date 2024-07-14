import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    feedback:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
    name: "Holden Caulfield",
    role: "UI DEVELOPER",
    img: "https://dummyimage.com/106x106",
  },
  {
    id: 2,
    feedback:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
    name: "Alper Kamu",
    role: "DESIGNER",
    img: "https://dummyimage.com/107x107",
  },
  {
    id: 3,
    feedback:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
    name: "Alper Kamu",
    role: "DESIGNER",
    img: "https://dummyimage.com/107x107",
  },
];

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <FaQuoteLeft className="w-5 h-5 text-gray-400 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.feedback}</p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.img}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {testimonial.role}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
