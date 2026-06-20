import React from "react";
import AutoSilde from "./AutoSlide";
import KreeyaaLogo from "../assets/kreeyaa_logo.png";
import AerosimpleLogo from "../assets/aerosimple.jpg";
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
                  image: KreeyaaLogo,
                  name: "Kreeyaa",
                  role: "Senior Software Engineer",
                  website: "https://jobs.qualifyde.com",
                  linkedin: "https://www.linkedin.com/company/kreeyaa-technologies/",
                  description: `Spearheaded the development of client-side architecture from the ground up, ensuring scalability and performance optimization. Led a developer team, fostering a collaborative environment, and provided hands-on training to enhance team skills. Partnered with business/sales to design customer-centric solutions driving revenue, contributed to mobile and AI/GenAI developments, and managed AWS infrastructure pipelines to streamline deployment.`,
                  year: "Nov 2024 - Present",
                },
                {
                  image: AerosimpleLogo,
                  name: "Aerosimple",
                  role: "Software Engineer",
                  website: "https://us.aerosimple.com",
                  linkedin: "https://www.linkedin.com/company/aerosimple/",
                  description: `Directed a team of developers to architect and implement airport management software used by 100+ airports worldwide (including Washington Dulles and Denver International). Engineered responsive and intuitive web interfaces using React.js and RESTful APIs, partnering with UI/UX designers to translate wireframes into production-ready features while maintaining code quality via unit testing and version control.`,
                  year: "Aug 2023 - Oct 2024",
                },
                {
                  image: avyaanLogo,
                  name: "Avyaan Management",
                  role: "Software Engineer",
                  website: "https://avyaanmanagement.com/",
                  linkedin: "https://www.linkedin.com/company/avyaanmgmt/",
                  description: `At Avyaan Management, a dynamic management solutions firm, I worked as a Full Stack Developer. I implemented client-specific project architectures, developed internal tools and the company website, designed data models, database schemas, and API endpoints, and integrated React front-ends with Node.js back-ends. I ensured that all interfaces were responsive, visually appealing, and user-friendly.`,
                  year: "Dec 2022 - Jul 2023",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
