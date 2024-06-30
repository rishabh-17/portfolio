import React, { useEffect, useRef } from "react";

const AutoScrollingList = ({ items }) => {
  const scrollContainerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const scroll = () => {
      if (
        container.scrollTop >=
        itemsRef.current[0].clientHeight * items.length
      ) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += 1;
      }
    };

    const interval = setInterval(scroll, 30);

    return () => clearInterval(interval);
  }, [items]);

  const duplicatedItems = [...items, ...items];

  return (
    <ul
      ref={scrollContainerRef}
      className="overflow-auto h-full flex flex-col gap-3 no-scrollbar"
    >
      {duplicatedItems.map((item, index) => (
        <li
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className="w-full bg-[#1a1c1e] border border-gray-700 rounded-xl py-3 px-4 flex-shrink-0"
        >
          <p className="text-white mb-2">{item} </p>
        </li>
      ))}
    </ul>
  );
};

export default AutoScrollingList;
