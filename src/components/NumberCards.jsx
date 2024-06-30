import React from "react";

export default function NumberCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-3">
      <div className="bg-[#121416] rounded-xl border-2 border-[#28292b]">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="text-5xl font-bold mb-2 flex items-center gradient-text">
            <span>12k</span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
              +
            </span>
          </div>
          <div className="flex items-center justify-center bg-transparent w-40 text-white rounded-full border-2 border-[#28292b] p-1 mt-2">
            svg
            <span className="gradient-text">Projects</span>
          </div>
        </div>
      </div>
      <div className="bg-[#121416] rounded-xl border-2 border-[#28292b] h-[200px]">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="text-5xl font-bold mb-2 flex items-center gradient-text">
            <span>56k</span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
              +
            </span>
          </div>
          <div className="flex items-center justify-center bg-transparent w-40 text-white rounded-full border-2 border-[#28292b] p-1 mt-2">
            svg
            <span className="gradient-text">Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="bg-[#121416] rounded-xl h-[200px] border-2 border-[#28292b] col-span-2 md:col-span-1">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="text-5xl font-bold mb-2 flex items-center gradient-text">
            <span>11k</span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
              +
            </span>
          </div>
          <div className="flex items-center justify-center bg-transparent w-40 text-white rounded-full border-2 border-[#28292b] p-1 mt-2">
            svg
            <span className="gradient-text">Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}
