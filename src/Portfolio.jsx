import React from "react";
import Intro from "./components/Intro";
import NumberCards from "./components/NumberCards";
import MyProjects from "./components/MyProjects";
import TechStack from "./components/TechStack";
import Achivements from "./components/Achivements";
import WorkTogether from "./components/WorkTogether";
import Experience from "./components/Experience";
import SocialMedia from "./components/SocialMedia";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
export default function Portfolio() {
  return (
    <div>
      <main className="sm:px-4 lg:px-12 px-4 py-4 bg-black h-full w-full">
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-3">
          <div>
            <div>
              <NumberCards />
            </div>
            <div>
              <Intro />
            </div>
            <div>
              <Experience />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-2">
              <MyProjects />
            </div>
            <div className="col-span-2 md:col-span-1">
              <TechStack />
            </div>
            <div>
              <Achivements />
            </div>
            <div className="col-span-2">
              <WorkTogether />
            </div>
          </div>
        </div>
        <div className="bg-[#121416] rounded-xl border-2 border-[#28292b] p-6 my-6 text-white w-full">
          <div className="flex items-center gap-2 mb-6">
            <FaGithub className="text-purple-500 w-6 h-6" />
            <h2 className="text-xl font-bold">GitHub Profile Insights</h2>
          </div>
          
          {/* Calendar Wrapper */}
          <div className="w-full flex justify-center mb-6 p-4 bg-[#1a1c1e] rounded-xl border border-gray-700 overflow-x-auto no-scrollbar">
            <GitHubCalendar
              username="rishabh-17"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={16}
            />
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-[#1a1c1e] p-3 rounded-xl border border-gray-700 flex justify-center items-center hover:scale-[1.02] transition duration-300">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=rishabh-17&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&bg_color=0d1117&title_color=F59300&icon_color=F59300" 
                alt="GitHub General Stats" 
                className="w-full object-contain max-h-56"
              />
            </div>
            <div className="bg-[#1a1c1e] p-3 rounded-xl border border-gray-700 flex justify-center items-center hover:scale-[1.02] transition duration-300">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=rishabh-17&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=F59300" 
                alt="GitHub Top Languages" 
                className="w-full object-contain max-h-56"
              />
            </div>
            <div className="bg-[#1a1c1e] p-3 rounded-xl border border-gray-700 flex justify-center items-center hover:scale-[1.02] transition duration-300">
              <img 
                src="https://streak-stats.demolab.com?user=rishabh-17&theme=tokyonight&hide_border=true&background=0d1117&ring=F59300&fire=FF6B35&currStreakLabel=F59300" 
                alt="GitHub Streak Stats" 
                className="w-full object-contain max-h-56"
              />
            </div>
          </div>
        </div>
        <SocialMedia />
      </main>
    </div>
  );
}
