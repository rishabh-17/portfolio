import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { FaGlobe, FaBriefcase, FaMusic, FaPlane, FaPhoneAlt, FaChartLine, FaSearch, FaMoon, FaHardHat, FaUsers, FaLaptopCode, FaClock, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import contextifyLogo from "../assets/contextifyLogo.png";
import avyaanLogo from "../assets/avyaanLogo.png";
import deepjungsLogo from "../assets/deepjungsLogo.svg";
import AerosimpleLogo from "../assets/aerosimple.jpg";
import tanggoLogo from "../assets/tanggo.png";
import xenyLogo from "../assets/xeny-logo.png";

const iconMap = {
  FaBriefcase: <FaBriefcase className="w-6 h-6 text-purple-400" />,
  FaMusic: <FaMusic className="w-6 h-6 text-purple-400" />,
  FaPlane: <FaPlane className="w-6 h-6 text-purple-400" />,
  FaPhoneAlt: <FaPhoneAlt className="w-6 h-6 text-purple-400" />,
  FaChartLine: <FaChartLine className="w-6 h-6 text-purple-400" />,
  FaSearch: <FaSearch className="w-6 h-6 text-purple-400" />,
  FaMoon: <FaMoon className="w-6 h-6 text-purple-400" />,
  FaHardHat: <FaHardHat className="w-6 h-6 text-purple-400" />,
  FaUsers: <FaUsers className="w-6 h-6 text-purple-400" />,
  FaLaptopCode: <FaLaptopCode className="w-6 h-6 text-purple-400" />,
  FaClock: <FaClock className="w-6 h-6 text-purple-400" />,
};

export default function MyProjects() {
  const [active, setActive] = useState(undefined);
  const projects = [
    {
      id: 1,
      title: "AI-Powered Job Portals & Recruitment Solutions",
      description: "Built two full-stack platforms: a blue-collar job solution with multi-language video job descriptions, and an AI-driven recruitment portal with semantic matching, self-assessment, and automated interviews. Both feature React.js frontends, Node.js/FastAPI backends, MongoDB, and OpenAI integration. Deployed from concept to production.",
      tech: ["React.js", "Node.js", "FastAPI", "MongoDB", "OpenAI", "AWS"],
      heading: "Recruitment Solutions",
      url: "http://jobs.qualifyde.com",
      icon: "FaBriefcase"
    },
    {
      id: 2,
      title: "Tanggo – NFC-Powered Music Sharing Platform",
      description: "Developed a cross-platform app that plays music by scanning NFC-enabled discs. Built a React Native mobile app for NFC reading and music retrieval, a React.js admin portal for content management, and a Node.js/MongoDB backend for NFC mappings, metadata, and real-time sync. Optimised performance and database queries for fast playback.",
      tech: ["React Native", "React.js", "Node.js", "MongoDB", "NFC Protocol", "Real-time Sync"],
      heading: "Tanggo NFC",
      playStore: "https://play.google.com/store/apps/details?id=com.digi_smart_disc&hl=en_CA",
      appStore: "https://apps.apple.com/us/app/tanggo-media-player/id6670744514",
      img: tanggoLogo,
      icon: "FaMusic"
    },
    {
      id: 3,
      title: "Aerosimple: Airport Management Software",
      description: "Engineered a comprehensive airport management solution used by 100+ airports worldwide, including top-tier airports like Washington Dulles International and Denver International. The platform digitizes airport workflows, streamlining operations and enhancing overall efficiency for airport management teams.",
      tech: ["React.js", "Node.js", "RESTful APIs", "Git", "AWS"],
      img: AerosimpleLogo,
      heading: "Aerosimple",
      url: "https://us.aerosimple.com",
      icon: "FaPlane"
    },
    {
      id: 4,
      title: "Xeny – Voice Calling Bot for BPO",
      description: "Developed a voice-calling bot for BPO operations, providing AI-driven architecture advice, integration strategies, and deployment guidance to optimise outbound and inbound call workflows.",
      tech: ["Python", "FastAPI", "OpenAI", "GenAI", "LLMs", "Voice API"],
      img: xenyLogo,
      heading: "Xeny Bot",
      url: "https://xeny.ai/",
      icon: "FaPhoneAlt"
    },
    {
      id: 5,
      title: "Convoze – AI Post-Call Analytics",
      description: "Created an AI-powered post-call analytics platform that evaluates recorded agent conversations, surfaces performance insights, and recommends actionable improvements to boost BPO quality.",
      tech: ["Python", "Node.js", "OpenAI", "GenAI", "LLMs", "Analytics"],
      heading: "Convoze Analytics",
      icon: "FaChartLine"
    },
    {
      id: 6,
      title: "Contextify AI – Contextual Search Web App & Chrome Extension",
      description: "Contextify AI is a cutting-edge web application that enhances contextual searches for text and images using the MERN stack and GPT. Users can effortlessly search and understand content directly from any webpage with a right-click through its Chrome extension. The app features a token-based system for searches, in-app search functionality, and comprehensive profile management, including search history and categorization. Additional features include an audio option for search results, social sharing, and a robust website with a landing page, FAQs, and customer support.",
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
      icon: "FaSearch"
    },
    {
      id: 7,
      title: "DeepJung – Jungian Dream Interpreter Chatbot",
      description: "DeepJung is an advanced AI-based chatbot designed to perform Jungian analysis on your dreams, providing insights that help you understand your subconscious mind. Built using the robust and versatile MERN stack, DeepJung showcases a seamless integration of MongoDB, Express.js, React, and Node.js, demonstrating sophisticated full-stack development skills. DeepJung is not just a dream interpreter but also a powerful tool for psychological exploration and self-discovery.",
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
      icon: "FaMoon"
    },
    {
      id: 8,
      title: "Civil-ERP Solution",
      description: "Designed and implemented an ERP solution for the civil engineering sector, featuring project tracking, resource allocation, and comprehensive reporting modules to streamline construction operations.",
      tech: ["React.js", "Node.js", "SQL", "Sequelize", "ERP Architecture"],
      heading: "Civil-ERP",
      icon: "FaHardHat"
    },
    {
      id: 9,
      title: "Multi-Level Marketing (MLM) Platform",
      description: "Built a full-featured MLM platform handling commission structures, downline management, and real-time dashboards, enabling transparent and efficient network marketing operations.",
      tech: ["React.js", "Node.js", "Sequelize", "SQL", "Commission Algorithms"],
      heading: "MLM Platform",
      icon: "FaUsers"
    },
    {
      id: 10,
      title: "Avyaan Company Website",
      description: "I led the development of the company website, highlighting my web design and content creation abilities. I utilized templates and incorporated appealing design elements to create visually stunning web pages. Additionally, I wrote persuasive content that clearly conveyed the company's mission and values. This project not only honed my web development skills but also provided me with essential experience in crafting engaging online experiences for businesses.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: avyaanLogo,
      heading: "Avyaan Web",
      icon: "FaLaptopCode"
    },
    {
      id: 11,
      title: "Break Management Tool",
      description: "The Break Management Tool is a robust Node.js and Electron.js application designed for efficient break scheduling and comprehensive analytics. It leverages APIs and SQL for seamless data management and boasts a user-friendly, cross-platform interface.",
      tech: ["JavaScript", "React.js", "Node.js", "Electron.js", "SQL"],
      heading: "Break Master",
      icon: "FaClock"
    },
  ];

  return (
    <div className="section m-3">
      <div className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[500px] border-2 border-[#28292b] sm:col-span-4 md:col-span-2">
        <div className="flex flex-col items-center justify-start overflow-hidden h-full">
          <div className="flex items-center mb-2 mt-4">
            <MdWork className="text-purple-500 w-5 h-5" />
            <span className="ml-2 text-gray-400 text-sm">My projects</span>
          </div>
          <h2 className="text-white text-xl mb-2">Review my best projects</h2>
          <div className="w-full h-[1px] bg-gray-600 mb-2"></div>
          {!active ? (
            <div className="w-full overflow-y-auto h-[380px] no-scrollbar px-6 pb-4">
              {projects?.map((i) => (
                <div key={i.id} className="w-full mt-3">
                  <div
                    className="bg-[#1a1c1e] transition duration-300 ease-in-out hover:scale-[1.03] rounded-md flex items-center p-2 border border-gray-700 cursor-pointer"
                    tabIndex="0"
                    onClick={() => setActive(i)}
                  >
                    <div className="flex items-center justify-center bg-[#28292b] min-h-10 min-w-10 rounded-md border border-gray-600 p-1 mr-3 flex-shrink-0">
                      {i.img ? (
                        <img src={i.img} className="h-8 bg-white w-8 object-contain rounded" alt="" />
                      ) : (
                        iconMap[i.icon] || <FaBriefcase className="w-6 h-6 text-purple-400" />
                      )}
                    </div>
                    <span className="text-white text-sm font-medium">{i.title}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[380px] overflow-y-auto no-scrollbar px-6 pb-4 slide-in">
              <IoIosArrowBack
                className="text-white cursor-pointer mb-3 text-xl hover:text-purple-500 transition"
                onClick={() => setActive(null)}
              />
              <div className="w-full grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-2 items-center border-r border-gray-600 pr-3">
                  {active?.img ? (
                    <img
                      src={active?.img}
                      className="bg-white rounded-xl h-16 w-16 object-contain p-1"
                      alt=""
                    />
                  ) : (
                    <div className="bg-[#1a1c1e] border border-gray-700 rounded-xl h-16 w-16 flex items-center justify-center flex-shrink-0">
                      {iconMap[active?.icon]}
                    </div>
                  )}
                  <h3 className="gradient-text font-bold text-sm text-center">
                    {active?.heading}
                  </h3>
                  <div className="flex justify-center gap-3 mt-2 flex-wrap">
                    {active?.url && (
                      <a href={active.url} target="_blank" rel="noopener noreferrer" title="View Website">
                        <FaGlobe className="w-5 h-5 text-purple-500 hover:text-purple-400 transition" />
                      </a>
                    )}
                    {active?.playStore && (
                      <a href={active.playStore} target="_blank" rel="noopener noreferrer" title="View on Google Play Store">
                        <FaGooglePlay className="w-5 h-5 text-purple-500 hover:text-purple-400 transition" />
                      </a>
                    )}
                    {active?.appStore && (
                      <a href={active.appStore} target="_blank" rel="noopener noreferrer" title="View on Apple App Store">
                        <FaAppStore className="w-5 h-5 text-purple-500 hover:text-purple-400 transition" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="col-span-2 flex flex-wrap h-fit content-start">
                  {active?.tech?.map((t, index) => (
                    <span key={index} className="text-white text-xs h-fit bg-[#3a3b3c] px-2 py-0.5 m-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#1a1c1e] border border-gray-700 rounded-lg shadow-inner">
                <p className="text-white text-sm leading-relaxed">{active?.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
