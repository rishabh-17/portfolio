import React from "react";
import AutoSilde from "./AutoSlide";
import AerosimpleLogo from "../assets/aerosimple.jpg";
import { FaYammer } from "react-icons/fa";
import avyaanLogo from "../assets/avyaan.jpg";
import { FaGraduationCap } from "react-icons/fa6";

export default function Experience() {
  return (
    <div className="section my-3">
      <div className="bg-[#121416] rounded-xl h-[600px] sm:h-[287px] xl:h-[330px] border-2 border-[#28292b]">
        <div className="flex flex-col items-center justify-start h-full p-0">
          <div className="flex items-center mb-2 mt-4">
            <FaGraduationCap className="text-purple-500 w-5 h-5" />
            <span className="ml-2 text-gray-400 text-sm">Work</span>
          </div>
          <h2 className="text-white text-xl mb-2 text-center">
            Explore my work experience
          </h2>
          <div className="w-full h-[1px] bg-gray-600 mb-12">
            <AutoSilde
              items={[
                {
                  image: AerosimpleLogo,
                  name: "Aerosimple",
                  role: "Software Engineer",
                  website: "https://aerosimple.com",
                  linkedin: "https://www.linkedin.com/company/aerosimple/",
                  description: `At Aerosimple, a leading product-based company that digitalizes airport workflows, I worked as a Software Engineer (Full Stack). Utilizing React and Node.js, I developed robust and scalable web applications that enhanced airport operations. My role involved collaborating with cross-functional teams to deliver high-quality software, optimizing performance for a seamless user experience, and contributing to the successful deployment of features that significantly improved efficiency and user satisfaction in airport environments.`,
                  year: "Aug 2023 - Present",
                },
                {
                  image: avyaanLogo,
                  name: "Avyaan",
                  role: "Software Engineer",
                  website: "https://avyaanmanagement.com/",
                  linkedin: "https://www.linkedin.com/company/avyaanmgmt/",
                  description: `At Avyaan Management, a dynamic management solutions firm, I worked as a Full Stack Developer. I implemented client-specific project architectures, developed internal tools and the company website, designed data models, database schemas, and API endpoints, and integrated React front-ends with Node.js back-ends. I ensured that all interfaces were responsive, visually appealing, and user-friendly. `,
                  year: "Dec 2022 - jul 2023",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
