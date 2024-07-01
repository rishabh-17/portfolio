import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import contextifyLogo from "../assets/contextifyLogo.png";
import { FaGlobe, FaLinkedin } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import rentifyLogo from "../assets/rentifyLogo.png";
import avyaanLogo from "../assets/avyaanLogo.png";
import deepjungsLogo from "../assets/deepjungsLogo.svg";
export default function MyProjects() {
  const [active, setActive] = useState(undefined);
  const projects = [
    {
      id: 1,
      title:
        "Contextify AI: Comprehensive AI-Based Web Application with Chrome Extension",
      description:
        "Contextify AI is a cutting-edge web application that enhances contextual searches for text and images using the MERN stack and GPT. Users can effortlessly search and understand content directly from any webpage with a right-click through its Chrome extension. The app features a token-based system for searches, in-app search functionality, and comprehensive profile management, including search history and categorization. Additional features include an audio option for search results, social sharing, and a robust website with a landing page, FAQs, and customer support.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "OpenAI GPT",
        "Plasmo JS",
        "Tailwind CSS",
        "OAuth 2.0",
        "Stripe",
      ],
      img: contextifyLogo,
      heading: "Contextify AI",
    },
    {
      id: 2,
      title:
        "DeepJung: Your Personal Dream Interpreter and Psychological Guide",
      description:
        "DeepJung is an advanced AI-based chatbot designed to perform Jungian analysis on your dreams, providing insights that help you understand your subconscious mind. Built using the robust and versatile MERN stack, DeepJung showcases a seamless integration of MongoDB, Express.js, React, and Node.js, demonstrating sophisticated full-stack development skills. DeepJung is not just a dream interpreter but also a powerful tool for psychological exploration and self-discovery.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "OpenAI GPT",
        "Tailwind CSS",
      ],
      img: deepjungsLogo,
      heading: "DeepJung",
    },
    {
      id: 3,
      title: "Avyaan Company Website Development",
      description:
        " I led the development of the company website, highlighting my web design and content creation abilities. I utilized templates and incorporated appealing design elements to create visually stunning web pages. Additionally, I wrote persuasive content that clearly conveyed the company's mission and values. This project not only honed my web development skills but also provided me with essential experience in crafting engaging online experiences for businesses.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: avyaanLogo,
      heading: "Avyaan",
    },
    {
      id: 4,
      title: "Break Management Tool",
      description:
        "The Break Management Tool is a robust Node.js and Electron.js application designed for efficient break scheduling and comprehensive analytics. It leverages APIs and SQL for seamless data management and boasts a user-friendly, cross-platform interface.",
      tech: ["JavaScript", "React.js", "Node.js", "Electron.js"],
      img: contextifyLogo,
      heading: "Break Master",
    },
    {
      id: 5,
      title: "Rentify: A Real Estate Web Application",
      description:
        "Developed a full-stack real estate web application, Rentify, designed to facilitate property rentals and sales. The application offers a seamless user experience for both property seekers and owners. Key features include property listings with detailed descriptions, photos, and pricing, user authentication and profile management, advanced search and filtering options, and secure mails between users.",
      tech: ["JavaScript", "React.js", "Node.js", "Sequelize", "SQL"],
      img: rentifyLogo,
      heading: "Rentify",
    },
  ];

  return (
    <div className="section m-3">
      <div className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[500px] border-2 border-[#28292b] sm:col-span-4 md:col-span-2">
        <div className="flex flex-col items-center justify-center  overflow-hidden">
          <div className="flex items-center mb-2 mt-4">
            <MdWork className="text-purple-500 w-5 h-5" />
            <span className="ml-2 text-gray-400 text-sm">My projects</span>
          </div>
          <h2 className="text-white text-xl mb-2">Review my best projects</h2>
          <div className="w-full h-[1px] bg-gray-600 mb-4"></div>
          {!active ? (
            <>
              {projects?.map((i) => (
                <div className="w-full px-6 mt-4">
                  <div
                    className="bg-[#1a1c1e] transition  slide-in2 ease-in-out delay-150 hover:scale-110 rounded-md flex items-center p-2 border border-gray-700 cursor-pointer"
                    tabindex="0"
                    onClick={() => setActive(i)}
                  >
                    <div className="flex items-center justify-center bg-[#28292b] min-h-10 min-w-10 rounded-md border border-gray-600 p-1 mr-2">
                      <img src={i.img} className="h-8 bg-white w-8" alt="" />
                    </div>
                    <span className="text-white">{i.title}</span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="w-full h-full px-4 slide-in">
              <IoIosArrowBack
                className="text-white cursor-pointer mb-3"
                onClick={() => setActive(null)}
              />
              <div className="w-full grid grid-cols-3 gap-2 h-full">
                <div className="flex flex-col gap-2 items-center border-r border-gray-500">
                  <img
                    src={active?.img}
                    className="bg-white rounded-xl h-16 w-16"
                    alt=""
                  />
                  <h3 className="gradient-text font-bold text-lg">
                    {active?.heading}
                  </h3>
                  <div className="flex justify-center">
                    <FaGlobe className="w-4 h-4 text-purple-500" />
                  </div>
                </div>
                <div className="col-span-2 flex flex-wrap h-fit">
                  {active?.tech?.map((i) => (
                    <span className="text-white text-xs h-5  bg-[#3a3b3c] px-2 m-1  rounded-full">
                      {i}{" "}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-full mt-4 p-3 rounded-lg drop-shadow-lg">
                <p className="text-white text-sm">{active?.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
