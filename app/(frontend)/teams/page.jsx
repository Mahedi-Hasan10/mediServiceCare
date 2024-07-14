import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.image}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.position}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex">
                    <a className="text-gray-500" href={member.facebook}>
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-gray-500" href={member.twitter}>
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-gray-500" href={member.instagram}>
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "Alper Kamu",
    position: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    image: "https://dummyimage.com/200x200",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Holden Caulfield",
    position: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    image: "https://dummyimage.com/201x201",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Atticus Finch",
    position: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    image: "https://dummyimage.com/202x202",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Henry Letham",
    position: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    image: "https://dummyimage.com/203x203",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
];

export default TeamSection;
