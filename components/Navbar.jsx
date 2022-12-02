import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-20 shadow-md z-[100] sm:shadow-none sm:h-24">
      <div className="flex justify-between items-center w-full h-full px-4">
        <div className="font-sen text-md sm:hidden">
          <div className="bg-logo h-[50px] w-[120px] bg-white bg-center"></div>
        </div>
        <div>
          <ul className="font-sen hidden sm:flex">
            <Link
              href="/"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem] text-xl duration-100  hover:bg-zinc-800">
                Home
              </li>
            </Link>
            <Link
              href="#skills"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem] text-xl duration-100 hover:bg-zinc-800">
                Skills
              </li>
            </Link>
            <Link
              href="#projects"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem] text-xl duration-100 hover:bg-zinc-800">
                Projects
              </li>
            </Link>
            <Link
              href="#contact"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem] text-xl duration-100 hover:bg-zinc-800">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <a
          className="rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 hidden sm:flex mr-5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
          href="https://github.com/SafeatMir"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
          </svg>
        </a>
        <div className="sm:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/60 sm:hidden z-[99]"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:hidden h-screen bg-[#18181B] ease-in duration-500 z-10"
              : "fixed left-[100%] top-0 ease-out duration-700 z-10"
          }
        >
          <div
            className="flex justify-end  py-6 px-4 cursor-pointer shadow-md"
            onClick={handleNav}
          >
            <AiOutlineClose size={30} />
          </div>
          <div className="px-5">
            <ul className=" uppercase font-sen" onClick={handleNav}>
              <Link
                href="/"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li
                  className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem] text-2xl duration-100 hover:bg-zinc-800 my-10"
                  onClick={handleNav}
                >
                  Home
                </li>
              </Link>
              <Link
                href="#skills"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li
                  className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem] text-2xl duration-100 hover:bg-zinc-800 my-10"
                  onClick={handleNav}
                >
                  Skills
                </li>
              </Link>
              <Link
                href="#projects"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li
                  className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem] text-2xl duration-100 hover:bg-zinc-800 my-10"
                  onClick={handleNav}
                >
                  Projects
                </li>
              </Link>

              <li className="hover:text-white cursor-pointer rounded-md px-4 py-[0.30rem]  duration-100 mt-[50px] mb-5">
                Contact :
              </li>
            </ul>
          </div>
          <div className="flex px-5">
            <a
              className="rounded-lg bg-zinc-800 p-2 text-4xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 mx-2 "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
              href="https://github.com/SafeatMir"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
              </svg>
            </a>
            <a
              className="rounded-lg bg-zinc-800 p-2 text-4xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 mx-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
              href="https://www.linkedin.com/in/safeat-mir-7956a7252/"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                ></path>
              </svg>
            </a>
            <a
              className="rounded-lg bg-zinc-800 p-2 text-4xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 mx-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
              href="mailto:safeatmir@gmail.com"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
