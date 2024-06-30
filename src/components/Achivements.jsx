import React from "react";
import AutoScrollingList from "./AutoScrolling";
import { FaAward } from "react-icons/fa";
export default function Achivements() {
  return (
    <div className="section m-3">
      <div className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[400px] sm:h-[500px] md:h-[400px] border-2 border-[#28292b] sm:col-span-2 md:col-span-1">
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex items-center mb-2">
            <FaAward className="text-purple-500 w-5 h-5" />
            <span className="ml-2 text-gray-400 text-sm">Achivements</span>
          </div>
          <h2 className="text-white text-xl mb-2 text-center">
            Top Achivements
          </h2>
          <div className="overflow-hidden w-full h-72 px-2">
            <AutoScrollingList
              items={[
                "Proud recipient of Meta's prestigious JavaScript certification, showcasing advanced proficiency and expertise.",
                "Achieved an outstanding 5-star rating on Hackerrank, reflecting top-tier problem-solving skills and coding excellence.",
                "Honored with the TOP 5% PROFESSIONAL certification from Pro5.ai, demonstrating elite-level capabilities and industry recognition.",
                "Ranked 764th worldwide in Codekaze by Coding Ninjas, placing among the top global coding talent.",
                "Secured an impressive 718th rank in X-Code by Newton School, affirming strong competitive coding skills.",
                "Led as the head of Codemonks during college, fostering a culture of innovation and excellence in coding.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
