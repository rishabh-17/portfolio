import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaHackerrank } from "react-icons/fa";

import { SiGmail, SiHackerrank } from "react-icons/si";
export default function SocialMedia() {
  return (
    <div className="social-media">
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mx-auto flex h-16 items-end gap-4 rounded-t-2xl bg-[#121416] px-4 pb-2 border-2 border-[#28292b] z-50">
        <a
          className="aspect-square w-10 rounded-full bg-[#28292b] border border-gray-600 flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-125"
          href="https://www.linkedin.com/in/hrishabh2560/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "40px" }}
        >
          <FaLinkedin className="text-purple-500 h-6 w-6" />
        </a>
        <a
          className="aspect-square w-10 rounded-full bg-[#28292b] border border-gray-600 flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-125"
          href="https://github.com/rishabh-17"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "40px" }}
        >
          <FaGithub className="text-purple-500 h-6 w-6" />
        </a>
        <a
          className="aspect-square w-10 rounded-full bg-[#28292b] border border-gray-600 flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-125"
          href="mailto:rishabh2560@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "40px" }}
        >
          <SiGmail className="text-purple-500 h-6 w-6" />
        </a>
        <a
          className="aspect-square w-10 rounded-full bg-[#28292b] border border-gray-600 flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-125"
          href="https://api.whatsapp.com/send?phone=918770739976"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-purple-500 h-6 w-6" />
        </a>
        <a
          className="aspect-square w-10 rounded-full bg-[#28292b] border border-gray-600 flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-125"
          href="https://www.hackerrank.com/profile/rishabh2560"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "40px" }}
        >
          <FaHackerrank className="text-purple-500 h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
