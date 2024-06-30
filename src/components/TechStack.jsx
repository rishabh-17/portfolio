import React, { useEffect } from "react";
import { RiStackFill } from "react-icons/ri";

export default function TechStack({ items }) {
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="section m-3">
      <div className="bg-[#121416] rounded-xl col-span-2 row-span-2 h-[500px] border-2 border-[#28292b] sm:col-span-2 md:col-span-1">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-2 mt-4">
            <RiStackFill className="text-purple-500 w-5 h-5" />
            <span className="ml-2 text-gray-400 text-sm">Tech Stack</span>
          </div>
          <h2 className="text-white text-xl mb-2 text-center">
            Technology I use
          </h2>
          <div className="w-full h-[1px] bg-gray-600 mb-4"></div>
          <div className="w-full mt-4 relative h-96 overflow-hidden">
            <div className="space-y-2">
              {count % 2 ? (
                <>
                  <div className="w-full relative h-16 slide-in">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-html5-plain colored"></i>
                          </div>
                          <span className="text-white">HTML</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16 slide-in2">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-css3-plain colored"></i>
                          </div>
                          <span className="text-white">CSS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16 animate-slide-in">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-javascript-plain colored"></i>
                          </div>
                          <span className="text-white">JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16 slide-in2">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-react-original colored"></i>
                          </div>
                          <span className="text-white">React</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16  slide-in">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-nodejs-plain-wordmark colored"></i>
                          </div>
                          <span className="text-white">Node</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full relative h-16 slide-in2">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center h-10 w-10 rounded-md border border-gray-600 p-1 mr-2 bg-[#28292b]">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                          </div>
                          <span className="text-white">Python</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16 slide-in">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-android-plain colored"></i>
                          </div>
                          <span className="text-white">React Native</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16 slide-in2">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-tailwindcss-original colored"></i>
                          </div>
                          <span className="text-white">Tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16 slide-in">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-azuresqldatabase-plain colored"></i>
                          </div>
                          <span className="text-white">SQL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative h-16  slide-in2">
                    <div className="absolute w-full flex justify-center items-center px-2">
                      <div className="w-full px-2">
                        <div className="bg-[#1a1c1e] rounded-md flex items-center p-2 border border-gray-700">
                          <div className="flex items-center justify-center bg-[#28292b] h-10 w-10 rounded-md border border-gray-600 p-1 mr-2">
                            <i class="devicon-mongodb-plain colored"></i>
                          </div>
                          <span className="text-white">Mongodb</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
