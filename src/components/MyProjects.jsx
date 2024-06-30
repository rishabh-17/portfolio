import React from "react";
import { MdWork } from "react-icons/md";

export default function MyProjects() {
  return (
    <div className="section m-3">
      <div className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[500px] border-2 border-[#28292b] sm:col-span-4 md:col-span-2">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-2 mt-4">
            <MdWork className="text-purple-500 w-5 h-5" />
            <span className="ml-2 text-gray-400 text-sm">My projects</span>
          </div>
          <h2 className="text-white text-xl mb-2">Review my best projects</h2>
          <div className="w-full h-[1px] bg-gray-600 mb-4"></div>
          <div className="w-full space-y-2 px-6 mt-4">
            <div
              className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700 cursor-pointer"
              tabindex="0"
            >
              <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                svg
              </div>
              <span className="text-white">Project Management App</span>
            </div>
            <div
              className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700 cursor-pointer"
              tabindex="0"
            >
              <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                svg
              </div>
              <span className="text-white">E-Learning Platform</span>
            </div>
            <div
              className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700 cursor-pointer"
              tabindex="0"
            >
              <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                svg
              </div>
              <span className="text-white">Global News Aggregator</span>
            </div>
            <div
              className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700 cursor-pointer"
              tabindex="0"
            >
              <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                svg
              </div>
              <span className="text-white">Scientific Research Database</span>
            </div>
            <div
              className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700 cursor-pointer"
              tabindex="0"
            >
              <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                svg
              </div>
              <span className="text-white">Cybersecurity Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
