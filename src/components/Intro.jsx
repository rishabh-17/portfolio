import React from "react";
import photo from "../assets/hrishabh.jpg";
import { IoMdDownload } from "react-icons/io";
import { FaCircle, FaUserGraduate } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { RiMedalFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
export default function Intro() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../assets/Hrishabh_Tiwari.pdf";
    link.download = "Hrishabh_Tiwari.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className=" relative overflow-hidden section rounded-2xl">
      <div class="animate-rotate inset-0 absolute h-full w-full rounded-full bg-[conic-gradient(#7e22ce_20deg,transparent_40deg)]"></div>
      <div className="m-1 ">
        <div className="relative bg-[#121416] rounded-xl border-2 border-[#28292b] flex flex-col py-10 px-6 box z-40">
          <div className="flex flex-row mb-4 items-center justify-between w-full z-10">
            <div className="flex items-center z-20">
              <div className="rounded-xl h-28 w-28 overflow-hidden">
                <img
                  src={photo}
                  alt="Hrishabh Tiwari"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start ml-4 pt-1">
                <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-2 text-xs font-medium text-white ring-1 ring-inset ring-[#28292b] mb-2">
                  <FaCircle className="w-2 h-2 text-green-500" /> Available to
                  work
                </div>
                <span className="text-white text-lg">Hrishabh Tiwari</span>
                <span className="text-white text-sm mt-2">
                  I am a{" "}
                  <span className="relative text-primary font-bold">
                    <span className="w-full h-full text-left">
                      <span className="w-full text-purple-500">designer</span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="h-[100px] flex-col justify-start">
              <button
                className="inline-flex w-fit justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#3a3b3c] hover:bg-[#505152] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#121416] mt-0 z-40 sm:inline-flex"
                onClick={handleDownload}
              >
                <span className="mr-2 hidden md:inline">Download</span>
                <div
                  title=""
                  role="button"
                  aria-label="animation"
                  tabIndex="0"
                  style={{
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    margin: "0px auto 4px",
                    outline: "none",
                  }}
                >
                  <IoMdDownload size={20} />
                </div>
              </button>
            </div>
          </div>
          <div className="bg-[#121412] border-2 border-[#28292b] rounded-lg w-full h-42 sm:h-24 p-4">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white bg-[#28292b]">
                <FaLocationDot className="w-3 h-3 text-purple-500" /> India
              </div>
              <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white bg-[#28292b]">
                <GrLanguage className="w-3 h-3 text-purple-500" /> Hindi &amp;
                English
              </div>
              <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white bg-[#28292b]">
                <FaUserGraduate className="w-3 h-3 text-purple-500" /> B.Tech
              </div>
              <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white bg-[#28292b]">
                <CiClock2 className="w-3 h-3 text-purple-500" /> IST
              </div>
              <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white bg-[#28292b]">
                <MdOutlineWork className="w-3 h-3 text-purple-500" /> Software
                Engineer
              </div>
              <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white bg-[#28292b]">
                <RiMedalFill className="w-3 h-3 text-purple-500" /> Full Stack
              </div>
              <div className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-white bg-[#28292b]">
                <RiMedalFill className="w-3 h-3 text-purple-500" /> MERN Stack
              </div>
            </div>
          </div>
          <div className="flex gap-2 mb-4 w-full mt-4">
            <button className="w-1/2 flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#28292b] hover:bg-[#3a3b3c] z-40">
              <div className="flex items-center">
                <div
                  title=""
                  role="button"
                  aria-label="animation"
                  tabindex="0"
                  style={{
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    margin: "0px 8px 0px auto",
                    outline: "none",
                  }}
                >
                  <AiFillMessage className="w-5 h-5 text-purple-500" />
                </div>
                <span>Message Me</span>
              </div>
            </button>
            <button className="w-1/2 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#28292b] hover:bg-[#3a3b3c] z-40">
              <div className="flex items-center">
                <div
                  title=""
                  role="button"
                  aria-label="animation"
                  tabindex="0"
                  style={{
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                    margin: "0px 8px 0px auto",
                    outline: "none",
                  }}
                >
                  <BiSolidPhoneCall className="w-5 h-5 text-purple-500" />
                </div>
                <span>Call Me</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
