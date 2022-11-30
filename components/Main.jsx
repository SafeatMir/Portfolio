import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-[45vh]">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center font-sen px-4 my-10 lg:my-0">
        <div className="sm:w-[480px] md:w-[595px] lg:w-[1080px]">
          <h1 className="py-2 text-2xl sm:text-3xl sm:px-4 md:text-3xl">
            Hi, I'm Safeat, a web developer
          </h1>
          <p className="py-2 text-[#A1A1A1] m-auto text-start text-xl  sm:px-4">
            Frontend web developer.
          </p>
          <p className="py-2 text-[#A1A1A1] text-start text-md sm:text-lg sm:px-4">
            I make clean & responsive web apps.
          </p>
          <a
            className="group mt-2  flex cursor-pointer flex-row items-center text-md text-gray-400 transition-all duration-150 hover:text-white sm:text-lg sm:px-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.buymeacoffee.com/#"
          >
            Like my work? sponsor!
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-[1.1rem] ml-1 duration-150 group-hover:ml-2 rounded-full"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
