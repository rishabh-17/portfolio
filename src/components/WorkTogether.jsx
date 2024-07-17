import React from "react";
import { HiSparkles } from "react-icons/hi2";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
export default function WorkTogether() {
  return (
    <div className="section m-3">
      <div className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[400px] border-2 border-[#28292b] sm:col-span-4 md:col-span-3">
        <div className="flex flex-col items-center justify-center h-full p-4 px-4 sm:px-10">
          <div className="w-16 h-16 rounded-full bg-[#28292b] border border-gray-600 flex items-center justify-center mb-4">
            <HiSparkles className="text-purple-500 w-8 h-8" />
          </div>
          <h2 className="text-2xl text-white mb-2">Let's Work Together</h2>
          <h3 className="text-sm text-gray-400 mb-4">
            Let's transform your ideas into reality for your projects
          </h3>
          <button className="w-full bg-[#28292b] border border-gray-600 text-white py-3 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-purple-900"
              style={{
                transformOrigin: "left center",
                transform: "scaleX(0) translateZ(0px)",
              }}
            ></div>
            <span className="relative z-10 flex items-center">
              <AiFillMessage className="w-5 h-5 mr-2 text-purple-500" /> <a href="tel:+918770739976" > Contact
              Me </a>
            </span>
          </button>
          <button className="w-full bg-[#28292b] border border-gray-600 text-white py-3 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-purple-900"
              style={{
                transformOrigin: "left center",
                transform: "scaleX(0) translateZ(0px)",
              }}
            ></div>
            <span className="relative z-10 flex items-center">
              <BiSolidPhoneCall className="w-5 h-5 mr-2 text-purple-500" /> Book
              a meeting
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
