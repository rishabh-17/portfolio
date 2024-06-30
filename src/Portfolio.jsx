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
              <TechStack items={["HTML", "CSS", "JavaScript", "React"]} />
            </div>
            <div>
              <Achivements />
            </div>
            <div className="col-span-2">
              <WorkTogether />
            </div>
          </div>
        </div>
        {/* <div className="w-full text-white  mb-24">
          <GitHubCalendar
            username="rishabh-17"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div> */}
        <SocialMedia />
      </main>
    </div>
  );
}
