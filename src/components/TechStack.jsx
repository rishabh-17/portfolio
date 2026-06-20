import React, { useEffect, useState } from "react";
import { RiStackFill } from "react-icons/ri";
import { FaBrain, FaAws, FaGitAlt, FaDatabase, FaCode } from "react-icons/fa";
import { SiOpenai, SiFastapi, SiSequelize, SiIonic } from "react-icons/si";

const categories = [
  {
    id: 1,
    title: "Frontend & Mobile",
    skills: [
      { name: "HTML5", icon: <i className="devicon-html5-plain colored text-sm"></i> },
      { name: "CSS3", icon: <i className="devicon-css3-plain colored text-sm"></i> },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain colored text-sm"></i> },
      { name: "React.js", icon: <i className="devicon-react-original colored text-sm"></i> },
      { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-original colored text-sm"></i> },
      { name: "React Native / Ionic", icon: <SiIonic className="text-blue-400 text-sm" /> }
    ]
  },
  {
    id: 2,
    title: "Backend & DBMS",
    skills: [
      { name: "Node.js", icon: <i className="devicon-nodejs-plain colored text-sm"></i> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400 text-sm" /> },
      { name: "Express.js", icon: <i className="devicon-express-original text-sm text-white"></i> },
      { name: "Sequelize / Mongoose", icon: <SiSequelize className="text-blue-500 text-sm" /> },
      { name: "SQL", icon: <i className="devicon-azuresqldatabase-plain colored text-sm"></i> },
      { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored text-sm"></i> }
    ]
  },
  {
    id: 3,
    title: "AI & Languages",
    skills: [
      { name: "Python", icon: <i className="devicon-python-plain colored text-sm"></i> },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain colored text-sm"></i> },
      { name: "OpenAI API", icon: <SiOpenai className="text-green-500 text-sm" /> },
      { name: "LangChain", icon: <FaBrain className="text-purple-400 text-sm" /> },
      { name: "GenAI & LLMs", icon: <FaBrain className="text-pink-400 text-sm" /> },
      { name: "ML / DL / CV", icon: <FaBrain className="text-indigo-400 text-sm" /> }
    ]
  },
  {
    id: 4,
    title: "DevOps & Core",
    skills: [
      { name: "AWS Cloud", icon: <FaAws className="text-yellow-500 text-base" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500 text-base" /> },
      { name: "DSA", icon: <FaCode className="text-blue-400 text-sm" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400 text-sm" /> },
      { name: "DevOps Pipelines", icon: <FaAws className="text-yellow-600 text-base" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-purple-400 text-sm" /> }
    ]
  }
];

export default function TechStack() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCategory = categories[currentIdx];

  return (
    <div className="section m-3">
      <div className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[500px] border-2 border-[#28292b] sm:col-span-2 md:col-span-1">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex items-center mb-2 mt-4">
            <RiStackFill className="text-purple-500 w-5 h-5" />
            <span className="ml-2 text-gray-400 text-sm">Tech Stack</span>
          </div>
          <h2 className="text-white text-xl mb-2 text-center">
            Technology I use
          </h2>
          <div className="w-full h-[1px] bg-gray-600 mb-4"></div>

          <div className="w-full text-center text-purple-400 font-bold mb-4 text-xs tracking-wider uppercase">
            {currentCategory.title}
          </div>

          <div className="w-full relative h-[280px] overflow-hidden">
            <div key={currentIdx} className="grid grid-cols-1 gap-1.5 p-1 slide-in">
              {currentCategory.skills.map((skill, index) => (
                <div key={index} className="bg-[#1a1c1e] rounded flex items-center py-1 px-2 border border-gray-700">
                  <div className="flex items-center justify-center bg-[#28292b] h-7 w-7 rounded border border-gray-600 p-0.5 mr-3 flex-shrink-0">
                    {skill.icon}
                  </div>
                  <span className="text-white text-xs font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {categories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIdx === idx ? "bg-purple-500 w-5" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                aria-label={`Go to category ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
